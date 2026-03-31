---
slug: berxi-insurance
businessName: 'Berxi.com'
publishedAt: 2025-11-03
title: 'Berxi.com: Building a design system for a growing platform'
description: 'Building a custom design system for a growing insurance platform, from stakeholder alignment through component library, documentation, and cross-team adoption.'
tags:
  [
    aws-light,
    css,
    figma-light,
    github-light,
    html,
    javascript,
    nuxtjs-light,
    pinia-light,
    tailwindcss-light,
    vite-light,
    vitest-light,
    vuejs-light,
  ]
image: '/images/projects/berxi-insurance.webp'
image_alt: 'Berxi.com website showcasing a clean and modern design.'
---

Berxi is a direct-to-consumer insurance platform built by Berkshire Hathaway Specialty Insurance. When I joined the team, the product was growing fast and the front end was growing inconsistently. Engineers were making design decisions independently across the codebase. Marketing needed campaign flexibility that the existing setup couldn't support. The engineering team was spending time on visual work that should have been settled at the system level.

My job was to build a design system that resolved those conditions, not by adding a layer of documentation on top of what existed, but by establishing a foundation that made consistent output the natural result of using it.

## The problem with the existing approach

The site had been built component by component, with each piece solving its immediate problem without reference to a shared standard. Color values, spacing, and typography were defined locally. There was no token architecture. The same visual decisions were being made repeatedly, in slightly different ways, by different engineers on different timelines.

This is a common pattern in products that grow faster than their front-end infrastructure. It's not the result of carelessness. It's what happens when there's no shared system to enforce consistency, and every developer's reasonable local decision accumulates into a product that feels slightly off in ways nobody can fully articulate.

The fix wasn't cosmetic. The fix was architectural.

## Architectural decisions before code

Before writing a single component, I needed to make a set of upfront decisions that would govern everything that followed: how tokens would be structured, which styling approach would give marketing the flexibility they needed without fragmenting the system, and how the component API would be designed so that accessible behavior was the default output.

I chose Tailwind CSS and Vue.js for specific reasons. Tailwind's utility-first model gave the engineering team a design vocabulary that was both expressive and constrained. Developers could move quickly without making visual decisions that deviated from the token system. Vue's component model made it straightforward to separate the accessibility behavior and visual styling concerns cleanly, which mattered for a system that needed to scale across multiple surface areas.

These weren't the only valid choices. They were the right choices for this team, this product, and this set of constraints.

## Token architecture as the foundation

I structured the token system in two tiers. Primitive tokens defined the raw palette: every color, spacing step, and type size available in the system. Semantic tokens assigned those values to roles: the color for interactive elements, the spacing between a label and its input, the type size for body copy.

Components referenced semantic tokens, never primitives directly. That single structural decision meant that a brand color update, a spacing scale adjustment, or a typography change propagated correctly across every component without manual intervention. It also meant that new components built against the system were consistent with existing ones by default, because the decisions were centralized rather than distributed across individual implementations.

Token coverage extended beyond color to spacing, typography, border radius, and shadow. Partial token coverage (a common failure mode) leaves the uncovered dimensions to individual judgment, which is where visual drift accumulates.

## Accessibility as a design constraint, not a compliance step

Accessibility requirements were built into each component from the start: keyboard navigation, Accessible Rich Internet Applications (ARIA) attributes, focus management in overlay components, color contrast against the token system's background values. These weren't added retroactively after the component was functional. They were part of the component's definition of done.

The practical effect of this approach is that accessibility compliance becomes a property of the library rather than a per-feature responsibility. A developer consuming the button component gets correct keyboard behavior without implementing it. A developer consuming the modal gets correct focus trapping without thinking about it. The system does the work so the feature team doesn't have to.

## What the system enabled

The design system gave the marketing team the ability to run campaigns and build landing page variations without engineering involvement for visual changes. The shared token architecture meant brand updates propagated automatically rather than requiring a manual search-and-replace across the codebase. New engineers could become productive with the component library quickly because the API was consistent and the documentation reflected how the components actually behaved.

The clearest signal that a design system is working is that it stops generating the friction that prompted building it. Fewer ad hoc visual decisions. Fewer inconsistencies caught late in the review cycle. Less time spent by senior engineers answering questions that should be answered by the documentation.

---

If your team is working around a component library that grew faster than the system beneath it, the [Component Library Starter](/services/starter/) delivers a production-ready foundation built to your tokens and your team's constraints, in two to three weeks.
