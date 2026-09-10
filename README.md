# aureliocecchi.com

Source of my personal site: a bilingual (Italian / Spanish) static site presenting my
work in Salesforce, automation and content architecture.

Live at [aureliocecchi.com](https://aureliocecchi.com).

## Stack

- [Astro](https://astro.build) — static site generator, no client-side framework
- Built-in Astro i18n routing: Italian at `/`, Spanish at `/es/`
- `@astrojs/sitemap` for sitemap generation
- Deployed to Cloudflare Workers (static assets), built automatically on push to `main`

## Structure

```
src/
  layouts/    shared page shell (head, metadata, hreflang)
  components/ reusable page fragments
  pages/      one file per route — index.astro is /, es/index.astro is /es/
  styles/     global stylesheet
public/       files served as-is (favicon, images)
```

## Running locally

Requires Node 20 or later.

```bash
npm install
npm run dev     # dev server at http://localhost:4321
npm run build   # production build into dist/
npm run preview # serve the built output locally
```

## Deployment

Pushing to `main` triggers a build on Cloudflare Workers. Build command `npm run build`,
output directory `dist`, configured in `wrangler.jsonc`. There is no server-side
rendering: every page is prerendered at build time.

## Notes

This repository contains no client data, credentials or environment files.

## Author

Aurelio Cecchi — [aurelio@aureliocecchi.com](mailto:aurelio@aureliocecchi.com)
