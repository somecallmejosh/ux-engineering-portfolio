# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run generate     # Static site generation
npm run preview      # Preview production build
npm run postinstall  # Regenerate Nuxt types (run after install)
```

No test runner is configured. Verify changes manually via `npm run dev`.

## Architecture

This is a **Nuxt 3** personal portfolio and blog site. Content is authored in Markdown, and the site is SEO-focused with schema.org markup, sitemap, and robots.txt.

### Content System

Content lives in `content/` and is typed via Zod schemas in `content.config.ts`. Four collections exist:

| Collection    | Path                    | Key front-matter fields                                   |
|---------------|-------------------------|-----------------------------------------------------------|
| `blog`        | `content/blog/`         | `slug`, `title`, `description`, `publishedAt`, `tags[]`, `image` |
| `projects`    | `content/projects/`     | `slug`, `businessName`, `businessUrl`, `title`, `publishedAt`    |
| `dev_notes`   | `content/dev-notes/`    | `slug`, `title`, `description`, `publishedAt`, `tags[]?`         |
| `experiments` | `content/experiments/`  | `slug`, `title`, `description`, `publishedAt`, `tags[]?`         |

Content is queried with `queryCollection()` inside `useAsyncData()` and rendered via `<ContentRenderer>`.

### Routing

Dynamic routes map directly to `slug` front-matter:

- `/blog/[slug]/` — blog posts
- `/blog/tags/[slug]/` — posts filtered by tag
- `/dev-notes/[slug]/` — dev notes
- `/projects/[slug]/` — projects
- `/experiments/[slug]/` — experiments

Redirects from `/*/categories/**` → `/*/tags/**/` are defined in `nuxt.config.ts` Nitro route rules.

### SEO

`@nuxtjs/seo` handles meta tags, sitemap, robots.txt, and schema.org. Key config in `nuxt.config.ts`:
- `site.trailingSlash: true` — all routes end with `/`
- `schemaOrg.identity` — Person entity (Josh Briley)
- Google Analytics injected via `@nuxt/scripts`

Each page sets its own metadata via `useSeoMeta()` using front-matter fields.

### Styling

- **Tailwind CSS 4** via `@tailwindcss/vite` (not the Nuxt module)
- Global styles in `assets/css/styles.css` — imported via `nuxt.config.ts` `css` array
- Typography plugin (`@tailwindcss/typography`) handles `prose` classes for markdown rendering
- Custom fonts: Quicksand (body), DM Serif Text (headings), IBM Plex Mono (code) — loaded via `@nuxt/fonts`

### Components

- `components/` — General-purpose components (`Breadcrumbs`, `PageHeader`, `AnimateImage`, `CardList`, `TagLinks`, `Logo`)
- `components/content/` — MDC components usable inside Markdown (`CallOut`, `TableOfContents`, `BaselineCheck`, `TagMenu`)
- Animations use `motion-v` (the Motion library for Vue)
- Icons from Iconify: `ph:` prefix (Phosphor Icons), `skill-icons:` prefix (Skill Icons)

### Composables & Utilities

- `composables/useSearch.ts` — client-side search across all 4 collections with scoring (title 3×, description/tags 2×, slug 1×); results cached after first load
- `utilities/formatDate.ts` — locale-aware date formatting
- `utilities/humanize.ts` — converts kebab/snake_case to Title Case

### Environment Variables

```
NUXT_SITE_URL=http://localhost:3000
NUXT_SITE_NAME=Josh Briley | UX Software Engineer
SQL_ALLOW_PATH=<path to sqlite-wasm node_modules>  # Required for Nuxt Content v3
```