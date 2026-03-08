# Component Architecture Refactor Plan

## Findings Summary

Seven concrete issues found across components, pages, and utilities. Listed by phase below.

---

## Phase 1 — Bug Fixes & Dead Code (no API changes)

- [x] **1.1** Fix `@tap` → `@click` in `Tooltip.vue:22`. `tap` is not a standard DOM event; it will silently fail on all non-touch environments.
- [x] **1.2** Remove unused `const route = useRouter()` from the four parent route wrappers: `blog.vue`, `dev-notes.vue`, `experiments.vue`, `projects.vue`. The variable is imported and discarded.
- [x] **1.3** Change `script setup lang="tsx"` → `lang="ts"` on `pages/index.vue`. No JSX is used; `tsx` is misleading.
- [x] **1.4** Remove the duplicate `skillIcons` string array from `pages/projects/index.vue` (lines 13–44). It is defined but never rendered in that file — `<Skills>` is not used there either.

---

## Phase 2 — Component Renaming (clarity, no behavior change)

Two components have exactly swapped names relative to what they do:

| Current name | What it actually does | Correct name |
|---|---|---|
| `TagLinks.vue` | Renders skill/tech stack icons with tooltips | `TechStackIcons.vue` |
| `CategoryLinks.vue` | Renders tag navigation links | `TagLinks.vue` |

- [x] **2.1** Rename `components/TagLinks.vue` → `components/TechStackIcons.vue`. Update `Skills.vue` (the only consumer) to use `<TechStackIcons>`.
- [x] **2.2** Rename `components/CategoryLinks.vue` → `components/TagLinks.vue`. Update `pages/blog/[slug].vue` and any other consumers.

> Note: Nuxt's auto-import means only the file name and template usage need updating — no manual import statements.

---

## Phase 3 — Data Deduplication

The `skillIcons` data array is defined identically in three places:

- `components/Skills.vue` (lines 2–96) — as an array of `{ name: string }` objects
- `pages/projects/[slug].vue` (lines 17–111) — same array, same structure, rendered inline
- `pages/projects/index.vue` (lines 13–44) — same data as strings, never rendered

- [x] **3.1** Create `utils/skillIcons.ts` exporting a single `SKILL_ICONS` typed constant array. Nuxt auto-imports `utils/` so no import statement needed.
- [x] **3.2** Replace the inline data in `components/Skills.vue` with `SKILL_ICONS`.
- [x] **3.3** Replace the inline data in `pages/projects/[slug].vue` with `<Skills />` component (which already wraps the correct rendering) — remove the raw loop, use the component.
- [x] **3.4** Delete the unused `skillIcons` string array from `pages/projects/index.vue` (done in Phase 1.4).

---

## Phase 4 — Eliminate Double-Fetching

`pages/blog/index.vue` fetches the blog collection twice:

1. Lines 2–5: `queryCollection('blog')` to get all posts for `<CardList>`.
2. Lines 14–25: A second `queryCollection('blog')` to build the tag list.

Then `<TagLinkList collection="blog" />` fires a *third* fetch of the same collection.

- [x] **4.1** Remove the manual tag aggregation from `pages/blog/index.vue` (lines 13–26). `<TagLinkList>` already handles this.
- [x] **4.2** Audit `pages/dev-notes/index.vue` for the same pattern and remove if present.

---

## Phase 5 — Image Optimization

The nuxt-architect rule: **never use raw `<img>` — always use `<NuxtImage>`.**

- [x] **5.1** `components/AnimateImage.vue`: Replace `motion.img` with a `<NuxtImage>` wrapped by `motion.div` (or use motion-v's `motion` function with a custom component). The animation can be applied to a wrapping `motion.div` with `overflow-hidden` if needed.
- [x] **5.2** `pages/about.vue:74`: Replace raw `<img>` with `<NuxtImage>` from `@nuxt/image`. Set explicit `width`, `height`, and keep the existing Cloudinary transformation URL as the `src`.

---

## Phase 6 — Consolidate collectionMap

The collection-name-to-URL-slug map (`dev_notes → dev-notes`) is duplicated:

- `components/TagLinkList.vue` (lines 28–33): inline `collectionMap` object
- `composables/useSearch.ts`: `normalizeCollectionName()` function does the same mapping

- [x] **6.1** Create `utils/collectionMap.ts` exporting a `COLLECTION_MAP` constant and a `collectionPath(name: string): string` helper.
- [x] **6.2** Replace the inline object in `TagLinkList.vue` with `collectionPath()`.
- [x] **6.3** Replace `normalizeCollectionName()` in `useSearch.ts` with `collectionPath()`.

---

## Phase 7 — Move Utilities for Auto-import

`utilities/humanize.ts` and `utilities/formatDate.ts` live outside Nuxt's auto-import directories, requiring a manual `import` in every consumer. Moving them to `utils/` makes them auto-importable.

Consumers with manual imports:
- `CategoryLinks.vue` / `TagLinks.vue` (post-rename)
- `TagLinkList.vue`
- `Breadcrumbs.vue`
- `PageHeader.vue`
- `SearchBox.vue`

- [x] **7.1** Move `utilities/humanize.ts` → `utils/humanize.ts`.
- [x] **7.2** Move `utilities/formatDate.ts` → `utils/formatDate.ts`.
- [x] **7.3** Remove all `import { humanize }` and `import { formatDate }` statements from every component that uses them.
- [x] **7.4** Verify `nuxt.config.ts` does not reference the old `utilities/` path.

---

## Phase 8 — CardList / CardListItem Consolidation

Both components render an animated card with `AnimateImage`, `CardHeader`, and an absolute `<NuxtLink>`. The difference:

- `CardList.vue`: owns the `<ul>` grid, loops `<li>` items inline (no `CardListItem`).
- `CardListItem.vue`: renders `<motion.li>` items — used as a direct sibling inside a manually-created `<ul>` in `pages/index.vue`.

The split creates two rendering paths for the same concept. `CardListItem` is a child-level component that `CardList` should use internally.

- [x] **8.1** Refactor `CardList.vue` to render `<CardListItem>` for each item instead of its own inline card markup. This removes ~20 lines of duplicated template.
- [x] **8.2** Update `pages/index.vue` to use `<CardList :list="combinedPosts" />` instead of a manual `<ul>` + `<CardListItem :data="combinedPosts" />`.
- [x] **8.3** Verify that `combinedPosts` items (which include a `to` prop for explicit routing) still route correctly after the consolidation. `CardListItem` already supports `item.to`.

---

## Phase 9 — TypeScript Props Standardization

Most components use runtime `defineProps({...})`. Standardize to TypeScript generics for better IDE inference and consistency with the components that already use it (`Services.vue`, `CardList.vue`).

- [x] **9.1** `AnimateImage.vue` — migrate to `defineProps<{ src?: string; alt?: string; yOffset?: number; scaleY?: number }>()`
- [x] **9.2** `CategoryLinks.vue` / `TagLinks.vue` (post-rename) — migrate props
- [x] **9.3** `TagLinkList.vue` — migrate props
- [x] **9.4** `Breadcrumbs.vue` — migrate props
- [x] **9.5** `PageHeader.vue` — migrate props
- [x] `ButtonLink.vue`, `Pill.vue`, `Tooltip.vue`, `TechStackIcons.vue` (post-rename) — migrate as part of their other changes

---

## Execution Order

Phases must be done in this order to avoid broken states:

1. **Phase 1** — fixes bugs, safe to start immediately
2. **Phase 2** — renames before other phases reference new names
3. **Phase 3 + 4** — data/fetch deduplication (independent)
4. **Phase 6 + 7** — utility consolidation (independent)
5. **Phase 5** — image optimization (independent)
6. **Phase 8** — card consolidation (depends on Phase 2 being done)
7. **Phase 9** — props cleanup (last, touches every component)

---

## Files Changed Summary

| File | Change |
|---|---|
| `components/TagLinks.vue` | Rename → `TechStackIcons.vue` |
| `components/CategoryLinks.vue` | Rename → `TagLinks.vue` |
| `components/Skills.vue` | Use `SKILL_ICONS` from utils |
| `components/AnimateImage.vue` | Use `<NuxtImage>`, TypeScript props |
| `components/CardList.vue` | Use `<CardListItem>` internally |
| `components/TagLinkList.vue` | Use `collectionPath()`, TypeScript props |
| `components/Breadcrumbs.vue` | Remove manual import, TypeScript props |
| `components/PageHeader.vue` | Remove manual import, TypeScript props |
| `components/Tooltip.vue` | Fix `@tap` → `@click` |
| `components/ButtonLink.vue` | TypeScript props |
| `components/Pill.vue` | TypeScript props |
| `layouts/default.vue` | No structural change needed |
| `pages/index.vue` | Use `<CardList>`, fix `lang="tsx"` |
| `pages/about.vue` | Replace raw `<img>` with `<NuxtImage>` |
| `pages/blog.vue` | Remove unused `useRouter()` |
| `pages/dev-notes.vue` | Remove unused `useRouter()` |
| `pages/experiments.vue` | Remove unused `useRouter()` |
| `pages/projects.vue` | Remove unused `useRouter()` |
| `pages/blog/index.vue` | Remove duplicate tag fetch |
| `pages/projects/index.vue` | Remove unused skillIcons array |
| `pages/projects/[slug].vue` | Use `<Skills />`, remove inline data |
| `utils/skillIcons.ts` | New — single source for skill icons |
| `utils/collectionMap.ts` | New — single source for collection→URL map |
| `utils/humanize.ts` | Moved from `utilities/` |
| `utils/formatDate.ts` | Moved from `utilities/` |
| `utilities/humanize.ts` | Deleted (moved) |
| `utilities/formatDate.ts` | Deleted (moved) |
| `composables/useSearch.ts` | Use `collectionPath()` |
