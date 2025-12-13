# Copilot Instructions for this Repo

## Overview
- Nuxt 3 portfolio + writing site powered by `@nuxt/content`.
- Markdown in `content/**` is the source of truth; Vue pages render and decorate it.
- Collections and front‑matter schemas live in `content.config.ts` (Zod validated).
- Routing pages in `pages/**` consume collections via `queryCollection(...)` and render with `ContentRenderer`.

## Stack & Modules
- Core: `nuxt@^3`, `vue@^3`, `vue-router`.
- Content & rendering: `@nuxt/content`, `@unhead/vue` (via Nuxt SEO), `ContentRenderer`.
- SEO/Schema: `@nuxtjs/seo` and `nuxt-schema-org` (`schemaOrg.identity` in `nuxt.config.ts`).
- Media/UI: `@nuxt/image`, `@nuxt/icon`, `@nuxt/fonts`, `motion-v/nuxt`, `@vueuse/nuxt`.
- Styling: Tailwind via Vite plugin (`tailwindcss` + `@tailwindcss/vite`), global CSS in `assets/css/styles.css`.

## Content Model (front‑matter)
- Defined in `content.config.ts` collections:
  - `blog`: `title`, `description`, `image`, `publishedAt (date)`, `slug`, `tags[]`.
  - `projects`: `businessName`, `businessUrl`, `title`, `description`, `image`, `publishedAt`, `slug`, `tags[]`.
  - `experiments`: `title`, `description`, `image`, `publishedAt`, `slug`, optional `tags[]`, `image_alt`.
  - `dev_notes`: `title`, `description`, `publishedAt`, `slug`, optional `image`, `image_alt`, `tags[]`.
- Example (`content/blog/what-is-a-ux-engineer.md`): uses `slug`, `publishedAt`, `title`, `description`, `tags`, `image`, `image_alt`.

## Pages & Data Flow
- Dynamic article page `pages/blog/[slug].vue`:
  - Loads a post: `useAsyncData` + `queryCollection('blog').path(`/blog/${slug}`).first()`.
  - Sets meta with `useSeoMeta({ title, description, ogImage, ... })` from front‑matter.
  - Renders: `<ContentRenderer :value="post" />` and uses `post.body.toc.links` with `TableOfContents`.
  - Decorates with `Breadcrumbs`, `PageHeader`, `AnimateImage`.
- `app.vue` wraps with `<NuxtLayout>`; default layout is `layouts/default.vue` (main nav, accessibility skip link, icons).

## Conventions & Patterns
- Prefer fetching via `queryCollection('<name>')` to respect Zod schemas and paths.
- Use `useSeoMeta` in route pages; derive values from content front‑matter.
- Content pages use the `prose` class (Tailwind Typography) for readable Markdown.
- Static assets live in `public/**` (e.g., resume at `public/docs/joshua-briley-resume.pdf`).
- Navigation items are defined in `layouts/default.vue` (`navGroups`) with `@nuxt/icon` icons.

## Dev & Build Workflow (zsh)
- Install deps: `npm install` (postinstall runs `nuxt prepare`).
- Run dev server:
```zsh
npm run dev
```
- Build for production:
```zsh
npm run build
```
- Generate static site:
```zsh
npm run generate
```
- Preview built output:
```zsh
npm run preview
```

## Integration Notes
- Env vars: `NUXT_SITE_URL`, `NUXT_SITE_NAME`, `SQL_ALLOW_PATH` (see `nuxt.config.ts`).
- Vite FS allow‑list: update `vite.server.fs.allow` if you hit the “outside of Vite serving allow list” error; it currently points to a user path.
- Icons: use names like `ph:article-ny-times` (Iconify collection configured in `nuxt.config.ts`).

## Example: Add a Blog Post
- Create `content/blog/my-post.md` with required front‑matter (see `content.config.ts`).
- Ensure `slug` matches the file’s path (`/blog/<slug>`); images should include `image_alt`.
- The `[slug]` page will automatically render and set SEO from front‑matter.

---
Questions or gaps? Tell me where guidance felt thin (e.g., listing pages for other collections), and I’ll refine with file references.
