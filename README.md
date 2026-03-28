# josh-dev-blog

Personal portfolio and blog site for Josh Briley — UX Software Engineer.

Built with Nuxt 3, Tailwind CSS 4, and Nuxt Content v3. Content is authored in Markdown; the site is statically generated and SEO-focused.

## Tech stack

- **Nuxt 3** — framework
- **Tailwind CSS 4** — styling (via `@tailwindcss/vite`)
- **Nuxt Content v3** — Markdown content collections
- **@nuxtjs/seo** — meta tags, sitemap, robots.txt, schema.org
- **motion-v** — animations
- **Iconify** — icons (`ph:` Phosphor, `skill-icons:`)

## Environment variables

```
NUXT_SITE_URL=http://localhost:3000
NUXT_SITE_NAME=Josh Briley | UX Software Engineer
SQL_ALLOW_PATH=<path to sqlite-wasm node_modules>
```

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:3000
npm run build     # Build for production
npm run generate  # Static site generation
npm run preview   # Preview production build
```

# Scorecard criteria

## Testing

1. Empty state (no param — all null, nothing answered)

`/scorecard/`

2. Investment needed — all zeros, score 0/64

`/scorecard/?r=00000000000000000000000000000000`

3. Functional but inconsistent — all partial, score 32/64

`/scorecard/?r=11111111111111111111111111111111`

4. Audit recommendation — s1 critical (0/12), s2–s3 needs-attention, s4–s5 strong, score 38/64

`/scorecard/?r=00000011111111111111222222222222`

s1 = 0/12 (critical gap), triggers audit recommendation copy

5. Workflow recommendation — all sections needs-attention, s5 is weakest (6/12), score 44/64

`/scorecard/?r=22211122211111222111222111111111`
No critical sections + s5 is weakest → triggers the workflow service recommendation

6. Healthy — all done, score 64/64
   `/scorecard/?r=22222222222222222222222222222222`

Shows "Excellent work" + retake CTA instead of recommendations

7. Primary and secondary recommendations
   `/scorecard/?r=22111022111110222211222211111111`
