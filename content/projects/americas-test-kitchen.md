---
slug: americas-test-kitchen
businessName: "America's Test Kitchen"
publishedAt: 2025-11-03
title: "America's Test Kitchen: one component library, multiple brands"
description: 'Improving an inaccessible CMS and building a shared component library for one of the most recognized cooking brands in the US.'
tags:
  [
    alpinejs-light,
    css,
    github-light,
    heroku,
    html,
    javascript,
    nextjs-light,
    rails,
    react-light,
    ruby,
    sass,
    styledcomponents,
    typescript,
  ]
image: '/images/projects/americas-test-kitchen.webp'
image_alt: "America's Test Kitchen."
---

America's Test Kitchen (ATK) operates across multiple editorial brands, each with its own visual identity, its own product team, and its own publishing cadence. The challenge isn't unique to ATK: when a single component library needs to serve multiple products that look different but share behavior, the architecture has to be built for that from the start. Libraries designed for one brand and retrofitted for others quickly accumulate the wrong kind of complexity.

At ATK, I built a shared component library in React and Next.js that could serve multiple brand surfaces without requiring separate implementations for each one.

## The core architecture problem

A component library that serves multiple brands has two failure modes. The first is rigidity: the library is built for one brand, and every other brand works around it, producing inconsistency and parallel implementations. The second is fragmentation: the library tries to accommodate every brand's specifics directly, and the component API becomes so configurable that it stops enforcing anything.

The solution to both is a clean separation between behavior and appearance. Components own their behavior: keyboard navigation, focus management, ARIA attributes, interaction patterns. Visual styling is supplied through the token system, which each brand can configure independently. A modal behaves the same way across every brand. It looks different because the tokens it references resolve to different values depending on which brand context it's rendered in.

This isn't a novel approach. It's the approach that lets systems scale without fragmenting. The work is in executing it consistently across every component in the library.

## Library decisions in practice

Building the library for this architecture meant making specific decisions at every layer.

Component APIs were designed to be brand-agnostic. Props controlled behavior and content, not visual style. A component that needed to look different across brands did so through the token system, not through a `brand` prop that forked the rendering logic.

Token coverage had to be complete enough that every visual difference between brands could be expressed as a token value rather than a CSS override. Gaps in token coverage always surface as one-off style overrides that bypass the system, which is how brand divergence accumulates in the codebase over time.

Storybook served as both the development environment and the consumer documentation layer. Every component had documented usage examples, variant coverage, and accessibility notes. The documentation was part of the component's definition of done, not something added afterward. An undocumented component will be used incorrectly or rebuilt independently by a team that can't find it.

## Accessibility across every surface

A multi-brand component library has a compounding relationship with accessibility. A keyboard navigation gap in a shared component isn't one violation. It's the same violation across every product that consumes the library. This made the case for building accessibility into each component at the architectural level rather than addressing it per-brand or per-feature.

Keyboard operability, ARIA implementation, focus management in overlay components, and contrast against the token system's color values were requirements for every component, not optional enhancements. A developer using the library to build a feature got accessible behavior without having to implement it. That's the structural benefit of treating accessibility as a component-level concern.

## What a shared library enables at scale

The compounding return on a well-built shared component library becomes visible over time. New brand surfaces can be built faster because the behavioral foundation already exists. New features ship consistently because the component API enforces the right patterns. New engineers become productive faster because the documentation is accurate and the system is consistent enough to learn by reading it.

A shared library built on a weak architectural foundation multiplies its problems at the same rate it multiplies its value. Every brand surface that consumes it inherits the same structural gaps.

---

If your product serves multiple brands or product areas from a single component library (or needs to), the [Design System Audit](/services/audit/) will identify where the current architecture is holding you back before you invest further in a system that may need a different foundation.
