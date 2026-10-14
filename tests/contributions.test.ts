import assert from 'node:assert/strict'
import { test } from 'node:test'
import { currentYear, getContributions, parseCalendar, selectedYear } from '../src/lib/contributions.ts'

function githubCalendar(year: number) {
  let html = `<h2>1,234 contributions in ${year}</h2>`
  for (let date = new Date(Date.UTC(year, 0, 1)); date.getUTCFullYear() === year; date.setUTCDate(date.getUTCDate() + 1)) {
    const day = date.toISOString().slice(0, 10)
    html += `<td data-date="${day}" id="day-${day}" data-level="2"></td><tool-tip for="day-${day}">3 contributions on this day.</tool-tip>`
  }
  return html
}

test('parses complete calendars including leap years and rejects broken counts', () => {
  const leap = parseCalendar(githubCalendar(2024), 2024)
  assert.equal(leap.days.length, 366)
  assert.equal(leap.days[59].date, '2024-02-29')
  assert.equal(leap.days[59].count, 3)
  assert.equal(leap.total, 1234)
  assert.equal(parseCalendar(githubCalendar(2012).replace('1,234 contributions', '1 contribution'), 2012).total, 1)
  assert.equal(parseCalendar(githubCalendar(2025), 2025).days.length, 365)
  assert.throws(() => parseCalendar(githubCalendar(2024).replace('3 contributions on this day.', 'Unknown'), 2024))
  assert.throws(() => parseCalendar(githubCalendar(2024), 2025))
})

test('validates year input', () => {
  assert.equal(selectedYear('2024'), 2024)
  for (const value of [null, 'garbage', '2011', '2018', '9999', '2024x']) assert.equal(selectedYear(value), currentYear())
})

test('coalesces requests, caches each year for one day, refreshes, and retries failures', async () => {
  const originalFetch = globalThis.fetch
  const originalNow = Date.now
  let clock = originalNow()
  let calls = 0
  let failing = false
  globalThis.fetch = async (input) => {
    calls++
    if (failing) throw new Error('GitHub unavailable')
    const year = Number(new URL(String(input)).searchParams.get('from')!.slice(0, 4))
    await new Promise(resolve => setTimeout(resolve, 10))
    return new Response(githubCalendar(year))
  }
  Date.now = () => clock
  try {
    const [first, concurrent] = await Promise.all([getContributions(2024), getContributions(2024)])
    assert.equal(calls, 1)
    assert.equal(first.calendar, concurrent.calendar)
    clock += 3600 * 1000
    const cached = await getContributions(2024)
    assert.equal(calls, 1)
    assert.equal(cached.maxAge, 23 * 3600)
    await getContributions(2025)
    assert.equal(calls, 2)
    clock += 24 * 3600 * 1000
    await getContributions(2024)
    assert.equal(calls, 3)
    clock += 24 * 3600 * 1000
    failing = true
    const stale = await getContributions(2024)
    assert.equal(stale.stale, true)
    assert.equal(stale.calendar?.year, 2024)
    assert.equal(stale.maxAge, 60)
    const absent = await getContributions(2023)
    assert.equal(absent.calendar, null)
    const beforeRetry = calls
    failing = false
    const recovered = await getContributions(2023)
    assert.equal(calls, beforeRetry + 1)
    assert.equal(recovered.calendar?.year, 2023)
    assert.equal(recovered.stale, false)
    await assert.rejects(getContributions(9999))
  } finally {
    globalThis.fetch = originalFetch
    Date.now = originalNow
  }
})
