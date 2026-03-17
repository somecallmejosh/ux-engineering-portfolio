# Design system health check results

**Date:** 2026-03-17
**Total score: 12 / 64 — Significant investment needed**

| Section | Score | Out of |
|---|---|---|
| 1. Component consistency | 3 | 12 |
| 2. Accessibility | 5 | 16 |
| 3. Token architecture | 1 | 12 |
| 4. Documentation | 1 | 12 |
| 5. Handoff process | 2 | 12 |
| **Total** | **12** | **64** |

---

## Section 1: Component consistency — 3 / 12

| Criterion | Score | Notes |
|---|---|---|
| Similar patterns built as shared components, not duplicated | 1 | `Callout.vue` vs `content/CallOut.vue`, `TagLinks` vs `TagLinkList` duplications |
| Component APIs follow consistent naming conventions | 0 | `buttonLink.vue` (camelCase) mixed with `Pill.vue`, `CardListItem.vue` (PascalCase); inconsistent prop names |
| Visual decisions reference tokens, not hardcoded values | 0 | No token system; hardcoded spacing (`px-4 py-2`, `py-[11px]`), raw colors in `Tooltip.vue` (`#fff`) |
| Consistent rendering across browsers/viewports | 1 | Tailwind helps, but `Tooltip.vue` uses hardcoded absolute positioning that breaks on mobile |
| No one-off components solving the same problem differently | 1 | `Tooltip.vue` uses scoped styles while everything else uses Tailwind; `OverflowX` uses custom gradient logic |
| Deprecated components have documented migration paths | 0 | No deprecation strategy exists |

---

## Section 2: Accessibility — 5 / 16

| Criterion | Score | Notes |
|---|---|---|
| Every interactive component is keyboard operable | 0 | `Tooltip.vue` has no keyboard interaction; `SearchBox.vue` listbox has no arrow-key navigation |
| All form inputs have visible, programmatically associated labels | 1 | `ChecklistSignup.vue` associates labels correctly; not consistently enforced elsewhere |
| Focusable elements have clearly visible focus indicators | 1 | `CardListItem.vue` uses `focus:outline-0` which removes native indicator; custom ring is unclear |
| Color is never the only means of conveying information | 1 | No clear violations found, but not explicitly enforced |
| Visibility-controlling components trap focus correctly | 0 | `SearchBox.vue` results panel has no focus trap or focus management |
| Images, icons have appropriate alt text or `aria-hidden` | 1 | `Logo.vue` is correct; many other icons (breadcrumbs, `PageHeader` calendar icon) lack `aria-hidden` |
| Text/interactive elements meet WCAG 2.1 AA contrast ratios | 1 | `text-blue-500` on white in `TableOfContents.vue` is borderline/failing AA |
| Dynamic content updates announced to screen readers | 0 | No `aria-live` regions found for alerts, search results, or loading states |

---

## Section 3: Token architecture — 1 / 12

| Criterion | Score | Notes |
|---|---|---|
| Tokens defined in a single source of truth | 0 | No `tokens.json`, no custom properties file; CSS vars are implicit Tailwind 4 auto-generated values |
| Token names follow a consistent, predictable pattern | 0 | No token naming system exists |
| Semantic tokens reference primitive tokens | 0 | No semantic token layer at all |
| Token names describe intent, not value | 0 | Using Tailwind defaults like `blue-500`, `neutral-900` (value-descriptive) |
| Tokens cover every design decision that varies | 0 | Spacing, radius, and color decisions are scattered and inconsistent |
| No token values redefined inside components | 1 | Mostly using Tailwind utilities consistently; only a few magic numbers like `py-[11px]` |

---

## Section 4: Documentation — 1 / 12

| Criterion | Score | Notes |
|---|---|---|
| Every component has a working example | 0 | No Storybook, no `.example.vue` files, no internal usage demos |
| Props, slots, events documented with types and descriptions | 1 | TypeScript interfaces exist (e.g., `CardItem`) but no plain-language descriptions |
| Do/don't guidance for commonly misused components | 0 | None |
| Documentation updated as part of the development workflow | 0 | No evidence of this practice |
| Getting-started guide for new developers | 0 | `README.md` is the default Nuxt template |
| Keyboard interactions, ARIA, screen reader behavior documented | 0 | None |

---

## Section 5: Handoff process — 2 / 12

| Criterion | Score | Notes |
|---|---|---|
| Design files use components from the shared library | 0 | No design files or evidence of a design tool integration |
| Designers and developers use the same token names | 0 | No shared token vocabulary |
| Documented process for new components moving design → code | 0 | No CONTRIBUTING.md, no component template/scaffold |
| Developers do not regularly rebuild existing components | 1 | Some duplication, but generally components are reused |
| Clear owner responsible for maintaining the design system | 1 | Solo project implicitly has one owner, but no formal process |
| Versioning and changelog process | 0 | No CHANGELOG.md, no semantic versioning |

---

## Highest-leverage starting points

1. **Token architecture** — Creating even a minimal Tailwind theme extension with semantic color and spacing aliases (`color.brand`, `color.text.primary`, etc.) would cascade improvements into both consistency and documentation.
2. **Accessibility** — Fix `Tooltip.vue` (keyboard support + `aria-describedby`) and `SearchBox.vue` (focus management + arrow-key navigation). These are the most likely to affect real users today.
3. **Component consistency** — Rename `buttonLink` → `ButtonLink`, consolidate `Callout`/`CallOut`, and align prop naming conventions.
