# portfolio

Personal portfolio, built with Astro and server-rendered on Netlify. Requires Node.js 22.12+ (Node 24 recommended).

## Development

```bash
# install dependencies
npm install

# serve with hot reload at localhost:4321
npm run dev

# create a production build
npm run build

# preview the production build
npm run preview
```

Run `npm run check` to validate the Astro project.

## Hero exploration

`HeroExploration.astro` sits above the original cover. Its portrait and photography
come from Neto's [500px profile](https://500px.com/p/netoramalho) and are saved in
`public/exploration` so they don't depend on expiring image URLs.

The contribution graph is rendered on the server from Neto's public GitHub calendar.
The year picker shows complete calendar years from 2019
through the current year. The server keeps data per year for 24 hours and Netlify's
durable CDN caches each year separately, using the data's remaining cache lifetime.
The browser revalidates each navigation. No rebuild or GitHub token is required.

If GitHub is unavailable, the server shows its last cached data for that same year
with a “Last available update” label. Without cached data, it shows an unavailable
message and retries on the next request; error responses are cached for only one
minute. Netlify's CDN behavior requires a Netlify deployment; development uses
only the in-process cache. Run `npm test` to check calendar parsing and caching.

Year navigation keeps the controls in place and swaps only the calendar and its
footer. Calendars preload with two requests at a time and are cached in browser
session storage until their server-provided expiry; returning to a loaded year
requires no request. Hover or keyboard-focus a day to see its contribution count.
