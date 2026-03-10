---
title: Design System Health Check
---

## How to use this checklist

Rate each criterion using this scale, then total your score per section.

| Rating | Points |
|---|---|
| Working well | 2 |
| Partially in place | 1 |
| Not addressed | 0 |

**Section score guide:** 10–12 = Strong · 6–9 = Needs attention · 0–5 = Critical gap

---

## Section 1: Component consistency

- [ ] Similar UI patterns (buttons, inputs, modals) are built as shared components, not duplicated across the codebase.
- [ ] Component APIs (props, slots, events) follow a consistent naming convention across the library.
- [ ] Visual decisions (spacing, color, border radius) reference tokens — not hardcoded values inside components.
- [ ] Components render consistently across the browsers and viewports your product supports.
- [ ] There are no one-off components that solve the same problem differently from an existing one.
- [ ] Deprecated components have a documented migration path and are not mixed with current components in production.

**Section 1 score: &nbsp;&nbsp;&nbsp; / 12**

---

## Section 2: Accessibility

- [ ] Every interactive component (buttons, links, form controls) is fully operable with a keyboard alone.
- [ ] All form inputs have visible, programmatically associated labels.
- [ ] Focusable elements have a clearly visible focus indicator that meets WCAG 2.1 AA contrast requirements.
- [ ] Color is never used as the only means of conveying information (errors, statuses, required fields).
- [ ] Components that control visibility (modals, drawers, tooltips) trap focus correctly and return focus on close.
- [ ] Images, icons, and decorative elements have appropriate alt text or are hidden from assistive technology.
- [ ] Text and interactive elements meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components).
- [ ] Dynamic content updates (alerts, notifications, loading states) are announced to screen readers.

**Section 2 score: &nbsp;&nbsp;&nbsp; / 16**

---

## Section 3: Token architecture

- [ ] Tokens are defined in a single source of truth (design tool, JSON file, or equivalent) and synced to code.
- [ ] Token names follow a consistent, predictable pattern (for example: `category/property/variant`) with no abbreviations or ambiguity.
- [ ] Semantic tokens (for example: `color.text.primary`) reference primitive tokens (for example: `color.gray.900`) — not raw values.
- [ ] Token names describe intent, not value — `color.brand-primary` rather than `color.blue`.
- [ ] Tokens cover every design decision that varies across themes, modes, or brands.
- [ ] There is no place in the codebase where a token value is redefined inside a component rather than referenced.

**Section 3 score: &nbsp;&nbsp;&nbsp; / 12**

---

## Section 4: Documentation

- [ ] Every component has a working example showing its most common use case.
- [ ] Props, slots, and events are documented with types and plain-language descriptions.
- [ ] Do/don't guidance exists for components that are commonly misused or have non-obvious behavior.
- [ ] Documentation is updated as part of the development workflow — not added retroactively after the fact.
- [ ] A getting-started guide lets a new developer install and use the library without asking anyone for help.
- [ ] Keyboard interactions, ARIA attributes, and screen reader behavior are documented per component.

**Section 4 score: &nbsp;&nbsp;&nbsp; / 12**

---

## Section 5: Handoff process

- [ ] Design files use components from the shared library — not custom one-offs that don't exist in code.
- [ ] Designers and developers use the same token names to describe design decisions.
- [ ] There is a documented process for how new components move from design to code.
- [ ] Developers do not regularly rebuild components that already exist in the library.
- [ ] There is a clear owner (team or individual) responsible for maintaining and evolving the design system.
- [ ] The design system has a versioning and changelog process so consumers know what changed between releases.

**Section 5 score: &nbsp;&nbsp;&nbsp; / 12**

---

## Total score

| Section | Score | Out of |
|---|---|---|
| 1. Component consistency | | 12 |
| 2. Accessibility | | 16 |
| 3. Token architecture | | 12 |
| 4. Documentation | | 12 |
| 5. Handoff process | | 12 |
| **Total** | | **64** |

**Score guide:** 52–64 = Healthy · 32–51 = Functional but inconsistent · 0–31 = Significant investment needed

---

## What to do with your results

Look at your lowest-scoring section first — that is your biggest gap and the highest-leverage place to start. If two sections are close, prioritize accessibility: it carries legal risk and affects real users today.

If your total score is below 32, or if accessibility is your weakest dimension, a [Design System Audit](/services/audit/) will give you a specific, prioritized remediation roadmap rather than a general direction.
