# Services Section Redesign

## Goal

Move service content from `composables/useServices.ts` into Markdown files, create dedicated detail pages per service, add a free checklist offering, and stub out a Rails starter service with a waitlist.

---

## Decisions made

- **Content strategy**: Markdown files in `content/services/` replace `useServices.ts`
- **Free offering**: A "Score Your Design System" self-assessment checklist (PDF or interactive page) — email capture / download, top-of-funnel lead magnet
- **Rails starter**: Stub page with a waitlist form (routes to contact form with pre-filled subject)
- **Services index layout**: See structure below

---

## Services index layout (`/services/`)

1. Intro (1–2 sentences)
2. Paid services — 3 teaser cards, each linking to `/services/[slug]/`; card CTA is "See what's included →" (not "Get in touch" — save hard CTA for detail page)
3. Trust bar
4. "Not ready to commit?" section — free checklist, distinct visual treatment (tinted background), email capture or direct download
5. Rails stub — small card/banner, clearly secondary, "Coming soon" with waitlist link
6. FAQ
7. Final callout (contact CTA)

---

## Content files to create

```
content/services/
  audit.md              ← paid
  starter.md            ← paid
  workflow.md           ← paid
  rails-starter.md      ← coming soon stub
  checklist.md          ← free offering
```

### Front-matter schema (all services)

```yaml
slug: audit
label: Design System Audit
price: "$1,500"
timeline: "5 business days"
deliveredAs: "PDF report and 60-minute debrief call."
isFree: false
isComingSoon: false
description: "SEO meta description for this service page"
audience: "..."
audienceDetail: "..."
outcome: "..."           # short (used on teaser card)
outcomeFull: "..."       # long (used on detail page)
includes:                # short list (teaser card)
  - "..."
includesFull:            # long list (detail page)
  - "..."
insight: "..."           # "Why teams pay for this"
testimonial:
  quote: "..."
  author: "..."
  role: "..."
```

Free/coming-soon variants omit price and include `isFree: true` or `isComingSoon: true`.

---

## Routing changes

| Before | After |
|--------|-------|
| `pages/services.vue` | `pages/services/index.vue` |
| _(none)_ | `pages/services/[slug].vue` |

---

## Detail page structure (`/services/[slug]/`)

1. Breadcrumb: Services → [Label]
2. Hero: label, price, timeline, deliveredAs
3. Who it's for (audience + audienceDetail)
4. What you get (outcomeFull + includesFull checklist)
5. Why teams pay for this (insight)
6. Testimonial
7. Markdown body (rich prose — process, examples, context — authored freely)
8. CTA: Get in touch

---

## Component changes

| Component | Change |
|-----------|--------|
| `components/Services.vue` | Strip `full` variant; teaser-only; card links to `/services/[slug]/` |
| `composables/useServices.ts` | **Retire** — data moves to Markdown front-matter |
| _(new)_ | Checklist section component on index page |
| _(new)_ | Rails stub card |

---

## Build order

1. [x] Add `services` collection to `content.config.ts`
2. [x] Create `content/services/*.md` files (migrate data from `useServices.ts` + write prose bodies)
3. [x] Rename `pages/services.vue` → `pages/services/index.vue`, update layout to match new index structure
4. [x] Create `pages/services/[slug].vue` detail page
5. [x] Update `components/Services.vue` — teaser-only, add links
6. [x] Checklist section on index (links to `/services/checklist/`)
7. [x] Rails stub card on index (links to `/services/rails-starter/`)
8. [x] Retire `composables/useServices.ts`
9. [ ] Verify all routes, SEO meta, and breadcrumbs

---

## Future

- Ruby on Rails starter service (ViewComponent + Stimulus + Tailwind) — full service page when ready
- Consider a "Score Your Design System" interactive page (not just PDF) once checklist content is written
- Revisit pricing/packaging after first few engagements
