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
