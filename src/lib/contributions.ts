export const GITHUB_HANDLE = 'netoramalho'
export const FIRST_YEAR = 2019
export const CACHE_SECONDS = 86400
export const currentYear = () => Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date()))
export const availableYears = () => Array.from({ length: currentYear() - FIRST_YEAR + 1 }, (_, index) => currentYear() - index)

export interface ContributionDay { date: string; level: number; count: number }
export interface Contributions { year: number; total: number; updatedAt: string; days: ContributionDay[] }
export interface CalendarResult { calendar: Contributions | null; stale: boolean; maxAge: number }

const cache = new Map<number, { calendar: Contributions; expiresAt: number }>()
const pending = new Map<number, Promise<CalendarResult>>()

export function selectedYear(value: string | null): number {
  const year = Number(value)
  return value !== null && /^\d{4}$/.test(value) && year >= FIRST_YEAR && year <= currentYear() ? year : currentYear()
}

export function parseCalendar(html: string, year: number): Contributions {
  const total = html.match(new RegExp(`([\\d,]+)\\s+contributions?\\s+in ${year}`))
  const labels = new Map<string, string>()
  for (const match of html.matchAll(/<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g)) {
    labels.set(match[1], match[2].replace(/<[^>]+>/g, '').trim())
  }
  const days: ContributionDay[] = []
  for (const match of html.matchAll(/<td\b[^>]*data-date="[^"]+"[^>]*>/g)) {
    const attrs = Object.fromEntries([...match[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]))
    const label = labels.get(attrs.id)
    if (!label) throw new Error('Missing daily contribution count')
    const count = label.match(/^([\d,]+) contributions?/)
    if (!count && !/^No contributions/.test(label)) throw new Error('Unexpected daily contribution count')
    days.push({ date: attrs['data-date'], level: Number(attrs['data-level']), count: count ? Number(count[1].replaceAll(',', '')) : 0 })
  }
  const expectedDays = new Date(Date.UTC(year, 1, 29)).getUTCMonth() === 1 ? 366 : 365
  if (!total || days.length !== expectedDays || days.some(day => !day.date.startsWith(`${year}-`) || !Number.isInteger(day.level) || day.level < 0 || day.level > 4)) {
    throw new Error('Unexpected GitHub calendar format')
  }
  return { year, total: Number(total[1].replaceAll(',', '')), updatedAt: new Date().toISOString(), days: days.sort((a, b) => a.date.localeCompare(b.date)) }
}

export async function getContributions(year: number): Promise<CalendarResult> {
  if (!Number.isInteger(year) || year < FIRST_YEAR || year > currentYear()) throw new Error('Invalid contribution year')
  const stored = cache.get(year)
  if (stored && stored.expiresAt > Date.now()) {
    return { calendar: stored.calendar, stale: false, maxAge: Math.max(1, Math.floor((stored.expiresAt - Date.now()) / 1000)) }
  }
  const active = pending.get(year)
  if (active) return active
  const request = (async (): Promise<CalendarResult> => {
    try {
      const response = await fetch(`https://github.com/users/${GITHUB_HANDLE}/contributions?from=${year}-01-01&to=${year}-12-31`, {
        signal: AbortSignal.timeout(5000), headers: { Accept: 'text/html' }
      })
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`)
      const calendar = parseCalendar(await response.text(), year)
      cache.set(year, { calendar, expiresAt: Date.now() + CACHE_SECONDS * 1000 })
      return { calendar, stale: false, maxAge: CACHE_SECONDS }
    } catch (error) {
      console.warn('Could not refresh GitHub contributions:', error instanceof Error ? error.message : error)
      // Retry shortly, and label old data honestly. Never show a different year's snapshot.
      return { calendar: stored?.calendar ?? null, stale: !!stored, maxAge: 60 }
    } finally {
      pending.delete(year)
    }
  })()
  pending.set(year, request)
  return request
}
