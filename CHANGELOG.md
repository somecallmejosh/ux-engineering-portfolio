# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- `pages/design/index.vue` — internal component gallery; shows every component in all known states; excluded from sitemap and robots
- Semantic design tokens via `@theme` block in `styles.css` (`--color-brand-*`, `--color-surface-*`, `--color-border-*`, `--color-text-*`, `--radius-base`, `--spacing-section`)
- Accessible labels (`sr-only` spans) for all skill icons in `Skills.vue`
- `label` field to every entry in `utils/skillIcons.ts`
- `CONTRIBUTING.md` with component, accessibility, and styling conventions
- `CODEOWNERS` file
- JSDoc comment blocks to eight key components

### Changed

- `Tooltip.vue`: trigger rewritten from `<span>` to `<button>` with `aria-describedby`, focus/blur handlers, and keyboard support; removed `aria-hidden` from tooltip div; replaced hardcoded `#fff` with `text-neutral-50`
- `CardListItem.vue`: focus ring color changed from `ring-blue-100` (failing contrast) to `ring-blue-400`
- `PageHeader.vue`: calendar icon marked `aria-hidden="true"`
- `Breadcrumbs.vue`: separator icon marked `aria-hidden="true"`
- `Skills.vue`: skill icons marked `aria-hidden="true"`; visible labels added via `sr-only`
- `content/TableOfContents.vue`: removed dead `text-blue-500 hover:text-blue-700` classes (scoped CSS already provides correct, high-contrast styles)
- `content/BaselineCheck.vue`: loading div uses `role="status" aria-live="polite" aria-busy="true"`; error div uses `role="alert"`
- `components/buttonLink.vue` renamed to `ButtonLink.vue` (PascalCase convention)
- `ChecklistSignup.vue`: replaced `py-[11px]` magic value with `py-2.5`
- `package.json`: name updated from `nuxt-app` to `josh-dev-blog`; version set to `1.0.0`
- `README.md`: replaced Nuxt starter boilerplate with project-specific documentation

## [1.0.0] — 2026-03-17

### Added

- Initial site launch: portfolio, blog, dev notes, projects, and experiments sections
- Nuxt Content v3 with Zod-validated content collections
- Nuxt SEO integration (meta, sitemap, robots.txt, schema.org)
- Static site generation with trailing-slash routes
- Google Analytics via `@nuxt/scripts`
