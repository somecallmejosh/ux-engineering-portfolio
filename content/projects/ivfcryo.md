---
slug: ivfcryo
businessName: 'IVFCryo, LLC'
publishedAt: 2025-11-03
title: 'IVFCRYO: what it looks like when accessibility is built in from the start'
description: 'A self-service shipping application for a fertility specimen logistics provider, with real-time environmental tracking, multi-carrier label printing, and accessibility built in from the start.'
tags:
  [
    aws-light,
    css,
    github-light,
    xd,
    html,
    javascript,
    java-light,
    tailwindcss-light,
    d3-light,
  ]
image: '/images/projects/ivfcryo.webp'
image_alt: 'IVFCRYO web application shipping process.'
---

Most accessibility work happens after the fact. A product ships, an audit runs, violations are catalogued, and a remediation backlog gets created. The fixes address specific components, specific pages, specific user flows. But the structural conditions that produced the violations remain, which means the next feature ships with the same gaps.

The IVFCRYO project ran differently. I built accessibility into the design process from the start, with the user who needed it most as a direct collaborator throughout rather than an afterthought.

## Project background

IVFCRYO provides fertility specimen shipping and logistics services. The application I built for them replaced a manual, paper-based shipping process with a self-service web application that managed shipment requests, multi-carrier label generation, and real-time specimen tracking through integrated sensor data.

The user base included people navigating a high-stakes, emotionally sensitive process. Clarity, reliability, and ease of use weren't nice-to-haves. They were the product.

## Designing with a blind user

One of IVFCRYO's customers was legally blind and agreed to participate as a collaborator throughout the development process. This wasn't a one-time usability test at the end of a build. It was ongoing involvement at every stage: reviewing interface decisions, testing with a screen reader as components were built, and providing direct feedback on what worked and what didn't.

The difference between involving a screen reader user at the end of a project and involving one throughout is significant. End-of-project involvement produces a list of fixes. Ongoing involvement produces different design decisions. Components that would have required remediation were never built incorrectly in the first place, because the feedback arrived before the implementation was complete.

Specific decisions that came directly from this collaboration:

- Form inputs announced validation errors in real time rather than on submit, so users didn't have to re-navigate the form to understand what had failed.
- Status updates for the shipment tracking flow were announced to the screen reader without requiring the user to find and read a visual indicator.
- Navigation patterns were consistent enough to be learnable, rather than clever enough to be novel.

None of these are technically complex. They're decisions that require having the right feedback at the right time.

## What accessibility-first architecture looks like in practice

Building accessibly from the start required specific structural decisions that would have been expensive to retrofit.

Every interactive component (form controls, status indicators, tracking updates) was built with keyboard operability and Accessible Rich Internet Applications (ARIA) implementation as first-class requirements. Components that controlled visibility handled focus management internally: focus moved to the correct element when something opened, and returned to the trigger when it closed.

Dynamic content (shipment status changes, real-time sensor readings, error states) was structured so that updates were announced to assistive technology automatically, without requiring the user to poll for changes or navigate to a different part of the page.

Color was never used as the only means of conveying information. Error states, status indicators, and required field markers all communicated their meaning through text or icons in addition to color. This matters for users with color vision deficiencies as well as screen reader users.

## Why this approach scales

The IVFCRYO project is a small application by enterprise standards. But the pattern it demonstrates scales directly: accessibility built into the component layer produces accessible output by default. Developers building features on top of accessible components don't have to think about ARIA attributes, keyboard behavior, or focus management. The components handle it.

The alternative is treating accessibility as a per-feature concern. That approach produces inconsistency in proportion to the number of features, and remediation costs that compound with every new surface that inherits the same structural gaps.

Accessible output at scale comes from accessible architecture, not from accessible intent.

---

If your component library relies on individual developers to make the right accessibility decisions, rather than making correct behavior the default, the [Design System Audit](/services/audit/) will tell you exactly where the structural gaps are and what fixing them requires.
