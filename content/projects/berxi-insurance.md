---
slug: berxi-insurance
businessName: 'Berxi.com'
publishedAt: 2025-11-03
title: 'Berxi.com: design system and component library build'
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
image: 'https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1743991012/josh-portfolio/assets_task_01jr6z0n1bfqgrjwndjfn3v2q3_img_0.webp'
image_alt: 'Berxi.com website showcasing a clean and modern design.'
---

## Overview

Berxi.com is a direct-to-consumer insurance platform built by Berkshire Hathaway Specialty Insurance. When I joined as the principal design engineer, the site had grown without a consistent UI foundation. Marketing campaigns clashed with existing styles, developers rebuilt similar components independently, and non-technical teams depended on engineering for routine content changes.

My work centered on building a design system that gave every team (developers, marketing, content, and product) a shared, reliable foundation to build from.

## Aligning stakeholders before writing code

Before any design or development work began, I spent several weeks in conversations with developers, user researchers, marketing, and product leadership. Each team had different priorities, and those priorities occasionally conflicted.

Developers wanted a lightweight, maintainable system with clear conventions. Marketing needed brand consistency across every surface. Product leadership wanted speed to market and measurable return on investment. Some stakeholders were concerned that restructuring core UI would introduce instability into an actively used platform.

Those conversations shaped the technical approach. Using Tailwind CSS and Vue.js, we could give developers the flexibility and speed they needed while maintaining enough structure to satisfy brand and consistency requirements. Getting alignment on the approach early meant that decisions made later in the project had broad support rather than encountering resistance after the fact.

## Technology choices

Tailwind CSS was the right choice for this project because its utility-first approach gives developers direct, predictable control over visual output. There's no abstraction layer to fight against, and the design language is expressive enough to handle Berxi's UI needs without customization becoming unmanageable.

Vue.js complemented Tailwind well. Components were straightforward to build, easy to learn for developers new to the framework, and flexible enough to support Berxi's expanding feature set.

The combination reduced onboarding time for new developers. A colleague who had never used Tailwind before was confidently adjusting layouts within an hour of getting started, without needing guidance. That kind of low friction matters when a team is shipping regularly and can't afford a slow ramp-up on tooling.

## Reducing cross-team friction

One of the recurring pain points before the design system was the disconnect between marketing campaigns and the frontend implementation. Marketing teams planned campaigns without referencing what the site could render, which led to last-minute style overrides, broken layouts, and urgent engineering requests.

To address this, I introduced biweekly sync sessions that brought designers, marketing, and backend engineers into the same conversation. Designers shared upcoming UI changes, marketing outlined planned campaigns, and backend engineers could flag performance or data concerns early.

The visible outcome was fewer surprises at launch. The less visible but more important outcome was that teams started speaking a common language around the interface, reducing the back-and-forth that had previously slowed every release cycle.

## Giving non-engineering teams independence

A recurring theme in my conversations with marketing and content teams was how much time they spent waiting on engineering for routine changes. New landing page variants, content updates, and campaign-specific layouts all required developer involvement, even when the change was simple.

Part of the design system build was creating structured, flexible page templates and content patterns that non-technical team members could work with directly. The first time a marketing manager launched a new landing page variant independently, without filing an engineering ticket, it validated the approach. Engineering capacity that had been spent on routine publishing tasks was redirected to more complex product work.

## Analytics without performance overhead

Understanding how users moved through the site was important for ongoing improvement, but adding tracking scripts carelessly would have slowed page load times. For an insurance platform where trust and speed directly affect conversion, that tradeoff wasn't acceptable.

Working with the UX and marketing teams, I embedded lightweight analytics hooks directly into the component library. I tracked key interactions (form completion rates, time on page, navigation patterns) at the component level automatically, so teams didn't need to write custom tracking code for each new feature. This kept the implementation consistent and the site performant.

## Accessibility as a foundation

Every component in the system was built against a defined set of accessibility requirements from the start. Color contrast ratios, keyboard navigation, focus management, and Accessible Rich Internet Applications (ARIA) labeling were documented alongside visual specifications, not added afterward.

Working with QA and using Storybook for component documentation, each element had clear guidance on how to implement it accessibly. Developers knew what was expected before they started building.

The practical results were measurable: fewer support tickets related to confusing layouts, and user feedback indicating the site was easier to navigate. For an insurance platform whose users include people managing stressful decisions about coverage and claims, a clear and accessible experience is not a nice-to-have.

## What I took from this project

The Berxi design system worked because it was treated as an organizational problem, not a technical one. The technology choices mattered, but the more consequential work happened in stakeholder conversations, cross-team alignment, and building tools that served people who weren't developers.

A design system that developers love but that marketing, content, and product teams can't use is only doing part of its job. The goal at Berxi was a system that every team could rely on, and that's what we built.
