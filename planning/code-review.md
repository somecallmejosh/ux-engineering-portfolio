# Code Review — Josh Dev Blog

**Date:** 2026-03-06
**Reviewer:** Claude Code (automated)
**Scope:** Full codebase — Nuxt 3 personal portfolio and blog

---

## Summary

Overall, this is a well-structured, production-quality Nuxt 3 codebase with clear separation of concerns, solid SEO integration, and a good accessibility baseline. Several targeted fixes are needed around security (XSS via `v-html`), environment configuration portability, TypeScript strictness, and a handful of accessibility bugs.

---

## Critical issues

### 1. Hardcoded Vite `fs.allow` path — wrong path segment (nuxt.config.ts)

**Severity: High | Category: Config**

```ts
fs: {
  allow: [
    '/Users/joshuabriley/Documents/personal/nuxt-apps/josh-dev-blog', // ❌ wrong path
  ],
},
```

The path references `/personal/` but the actual location is `/web/`. This is also a hardcoded absolute path that breaks on any other machine or in CI/CD.

**Fix:** Replace with:
```ts
allow: [process.cwd()]
```

---

## Security issues

### 2. XSS risk via `v-html` in multiple components

**Severity: Medium | Category: Security**

Several components render content with `v-html`, which can execute injected HTML if content is ever untrusted:

| File | Line | Context |
|------|------|---------|
| `components/CardList.vue` | 39 | `item.description` |
| `components/CardListItem.vue` | 30 | `item.description` |
| `components/content/Testimonials.vue` | 184 | `item.testimonial` |

While Nuxt Content sanitizes markdown output, this is fragile. If the rendering pipeline changes, these become active XSS vectors.

**Fix options:**
- Replace `v-html` with text interpolation where HTML is not actually needed
- For cases where HTML is needed, pipe through DOMPurify before rendering

### 3. External links missing `rel="noopener noreferrer"` in places

**Severity: Low | Category: Security**

Some external links (e.g., social media in layouts) do not include `rel="noopener noreferrer"`, which allows the target page to access `window.opener`.

**Fix:** Audit all `<a target="_blank">` links and add `rel="noopener noreferrer"`.

---

## Accessibility issues

### 4. `TableOfContents.vue` — ID typo breaks keyboard navigation

**Severity: Medium | Category: A11y / Bug**

```ts
const items = document.querySelectorAll('#toc-menue a') // ❌ typo: "menue"
```

The selector `#toc-menue` does not match the actual element ID (which should be `#toc-menu`). This causes keyboard navigation (arrow keys, Escape) to silently fail at runtime.

**Fix:** Rename the ID on the element to `toc-menu` and update the selector to match.

### 5. Contact form missing `aria-invalid` on invalid inputs

**Severity: Low | Category: A11y**

The contact form in `pages/contact.vue` uses `role="alert"` for error messages (correct) but does not set `aria-invalid` on inputs when validation fails. Screen reader users may not associate the error with the specific field.

**Fix:**
```html
<input :aria-invalid="nameValid === false" aria-describedby="name-error" />
```

### 6. `SearchBox.vue` — `aria-selected` missing on listbox options

**Severity: Low | Category: A11y**

The search results use `role="listbox"` and `role="option"`, but options do not set `aria-selected`. The ARIA spec requires `aria-selected` on all `role="option"` elements.

---

## TypeScript issues

### 7. `catch (e: any)` in `useSearch.ts`

**Severity: Medium | Category: TypeScript**

```ts
catch (e: any) {
  error.value = e?.message || 'Failed to build search index'
}
```

Using `any` for caught errors defeats type safety.

**Fix:**
```ts
catch (e: unknown) {
  error.value = e instanceof Error ? e.message : 'Failed to build search index'
}
```

### 8. Loose prop types throughout components

**Severity: Low | Category: TypeScript**

Multiple components define props as untyped `Array` or `Object` rather than typed arrays/interfaces:

```ts
// Before
props: { data: { type: Array, required: true } }

// After
props: { data: { type: Array as PropType<CardItem[]>, required: true } }
```

Affected components: `CardList.vue`, `CardListItem.vue`, and others using collection data.

### 9. Untyped `event` parameter in `TableOfContents.vue`

**Severity: Low | Category: TypeScript**

```ts
const handleKeyDown = (event) => { // ❌ implicit any
```

**Fix:** `const handleKeyDown = (event: KeyboardEvent) => {`

---

## Architecture issues

### 10. Direct DOM manipulation bypassing Vue reactivity

**Severity: Medium | Category: Architecture**

Several components query the DOM directly instead of using Vue refs:

| File | Pattern |
|------|---------|
| `TableOfContents.vue` | `document.querySelectorAll()` |
| `components/OverflowX.vue` | Multiple `document.querySelector()` + class manipulation |
| `SearchBox.vue` | `document.getElementById()` |

**Fix:** Replace with `ref()` + `useTemplateRef()` and drive DOM state reactively.

### 11. Hardcoded route paths scattered throughout

**Severity: Low | Category: Architecture**

Paths like `/blog/`, `/projects/`, `/dev-notes/` are hardcoded as strings across many components and pages. If a route ever changes, every occurrence must be updated manually.

**Fix:** Define route constants in a shared config or `utils/routes.ts` and import them.

---

## Code quality issues

### 12. Dead code in `AnimateImage.vue`

**Severity: Low | Category: Quality**

```ts
const imgVariants = {
  offscreen: { y: props.yOffset, ... },
  onscreen: { y: 0, ... }
}
```

`imgVariants` is defined but never used — the component uses inline `initial`/`whileInView` props instead.

**Fix:** Remove `imgVariants`.

### 13. `humanize.js` does not handle acronyms

**Severity: Low | Category: Quality**

```js
humanize('html')  // → "Html" (should be "HTML")
humanize('vue-js') // → "Vue Js" (should be "Vue.js")
```

`TagLinks.vue` already has special-case formatting logic. The `humanize` utility should either adopt the same logic or delegate to it.

### 14. Inconsistent component file naming

**Severity: Low | Category: Quality**

Some component files use lowercase or kebab-case names (`buttonLink.vue`, `trust-bar.vue`) while others use PascalCase. Vue convention is PascalCase for SFC filenames.

### 15. `formatDate.js` — no error handling for invalid date strings

**Severity: Low | Category: Quality**

```js
const date = new Date(dateString);
return date.toLocaleDateString(undefined, options);
```

If `dateString` is malformed, `new Date()` returns `Invalid Date` and `toLocaleDateString()` returns the string `"Invalid Date"`, which would surface in the UI.

**Fix:**
```js
const date = new Date(dateString);
if (isNaN(date.getTime())) return dateString;
return date.toLocaleDateString(undefined, options);
```

---

## Content issues

### 16. Typos in `pages/dev-notes/[slug].vue`

**Severity: Low | Category: Content**

```
"Each artile in the Dev Notes section of my webiste"
         ^^^^^^                              ^^^^^^^
```

Should be "article" and "website".

---

## SEO issues

### 17. `robots.txt` config has a contradictory rule

**Severity: Low | Category: SEO**

```ts
robots: {
  blockNonSeoBots: true,
  groups: [{ userAgent: '*', allow: '/' }],
}
```

`blockNonSeoBots: true` blocks AI scrapers (GPTBot, etc.), but `allow: '/'` for all user agents may override that intent depending on module resolution order. Review whether the intended behavior is being produced in the generated `robots.txt`.

---

## Positive observations

- Well-structured Nuxt 3 architecture with clear separation of concerns
- Comprehensive SEO setup via `@nuxtjs/seo` with correct trailing slash config
- Good accessibility baseline: skip-to-content link, ARIA roles, semantic HTML
- Tailwind CSS 4 used consistently with typography plugin for prose content
- Smooth, unobtrusive animations with `motion-v`
- Client-side search with weighted scoring and lazy index building
- Content collections properly typed via Zod schemas in `content.config.ts`
- `useAsyncData` used correctly for SSR-compatible data fetching

---

## Remediation plan

Tasks are ordered by severity. Complete critical and high items first.

### Phase 1 — Critical / High

- [x] Fix `fs.allow` hardcoded path in `nuxt.config.ts` → use `process.cwd()`

### Phase 2 — Security

- [x] Audit all `v-html` usages; replace with text interpolation where HTML is not needed
- [x] Add DOMPurify (or equivalent) for remaining `v-html` usages with user-facing content (`pages/testimonials.vue` — content is internal/trusted hardcoded data, no sanitization required)
- [x] Audit all `<a target="_blank">` links and add `rel="noopener noreferrer"`

### Phase 3 — Accessibility / Bugs

- [x] Fix `TableOfContents.vue` ID typo: `toc-menue` → `toc-menu`
- [x] Add `aria-invalid` to contact form inputs
- [x] Add `aria-selected` to search result options

### Phase 4 — TypeScript

- [x] Fix `catch (e: any)` → `catch (e: unknown)` in `useSearch.ts`
- [x] Add proper `PropType<T>` annotations to untyped array/object props
- [x] Type `handleKeyDown` event parameter in `TableOfContents.vue`

### Phase 5 — Architecture / Quality

- [x] Replace direct DOM manipulation in `TableOfContents.vue`, `OverflowX.vue`, `SearchBox.vue` with Vue refs
- [x] Extract route path constants to `utils/routes.ts`
- [x] Remove dead `imgVariants` code from `AnimateImage.vue`
- [x] Fix `humanize.js` to handle acronyms or delegate to `TagLinks` formatting
- [x] Normalize component filenames to PascalCase
- [x] Add invalid date guard to `formatDate.js`

### Phase 6 — Content / SEO

- [x] Fix typos in `pages/dev-notes/[slug].vue`
- [x] Review generated `robots.txt` and reconcile `blockNonSeoBots` vs `allow: '/'` — behavior is correct: `blockNonSeoBots` adds targeted `Disallow` rules for specific AI scrapers, while `allow: '/'` permits standard search engine crawlers. No change required.
