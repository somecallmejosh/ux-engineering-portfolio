# Contributing

## Component naming

- Use **PascalCase** for all component files (e.g. `ButtonLink.vue`, not `buttonLink.vue`).
- MDC components (usable inside Markdown) live in `components/content/`.
- General-purpose components live in `components/`.

## Accessibility requirements

Every component must meet WCAG 2.1 AA as a minimum.

- Interactive elements must be natively focusable (`<button>`, `<a>`, `<input>`). Do not use `<div>` or `<span>` as click targets.
- Decorative icons must have `aria-hidden="true"`.
- Meaningful icons must have a visible label or `aria-label`/`sr-only` text.
- Focus rings must be visible. Use `focus:ring-blue-400` or higher contrast — never `ring-blue-100`.
- Dynamic regions that update asynchronously must use `aria-live` (`role="status"` for non-urgent, `role="alert"` for errors).
- Tooltips must be linked via `aria-describedby` and appear on both hover and focus.

## Styling rules

- No arbitrary CSS values (e.g. `py-[11px]`). Use the nearest Tailwind scale value (`py-2.5`).
- No hardcoded hex colors in `<style>` blocks. Use Tailwind classes or design tokens.
- Use the semantic tokens defined in `assets/css/styles.css` (`--color-brand-primary`, `--color-surface`, etc.) when adding new color references.
- Tailwind is configured via `@tailwindcss/vite` — do not install `@nuxtjs/tailwindcss`.

## Design tokens

Semantic tokens are defined in the `@theme` block at the top of `assets/css/styles.css`.

| Token | Value | Use for |
|---|---|---|
| `--color-brand-primary` | `--color-blue-700` | Primary interactive color |
| `--color-brand-focus` | `--color-blue-400` | Focus rings |
| `--color-surface` | `#ffffff` | Card and panel backgrounds |
| `--color-surface-subtle` | `--color-neutral-50` | Subtle background fills |
| `--color-border` | `--color-neutral-200` | Standard borders |
| `--color-border-strong` | `--color-neutral-300` | Emphasized borders |
| `--color-text-primary` | `--color-neutral-950` | Body text |
| `--color-text-secondary` | `--color-neutral-700` | Secondary/muted text |
| `--radius-base` | `--radius-lg` | Standard border radius for cards and inputs |
| `--spacing-section` | `calc(var(--spacing) * 12)` | Vertical gap between page sections |

## Component gallery

Visit `/design/` in dev to see every component rendered in all its known states. When adding a new component or variant, add an example to `pages/design/index.vue`.

## Verifying changes

No automated test runner is configured. Verify all changes manually:

```bash
npm run dev
```

- Tab through every interactive element on affected pages and confirm focus is always visible.
- Check the browser console for Vue warnings.
- Test keyboard navigation in any new interactive components.
