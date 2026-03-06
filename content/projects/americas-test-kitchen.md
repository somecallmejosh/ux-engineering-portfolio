---
slug: americas-test-kitchen
businessName: "America's Test Kitchen"
businessUrl: 'https://www.americastestkitchen.com'
publishedAt: 2025-11-03
title: "America's Test Kitchen: design system and CMS development"
description: 'Building a custom CMS, a cross-brand component library, and an accessible UI foundation for one of the most recognized cooking brands in the US.'
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
image: 'https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1743990869/josh-portfolio/assets_task_01jr6z5kt8efcsevzqzwek0gse_img_0.webp'
image_alt: "America's Test Kitchen website screenshot showcasing a delicious recipe."
---

## Overview

America's Test Kitchen (ATK) produces recipes, cooking guides, and product reviews across multiple brands, publications, and websites. When I joined the team, the engineering and editorial workflows were tightly coupled in ways that slowed content delivery and made cross-brand consistency hard to maintain.

My work focused on three areas: building a custom content management system (CMS) for the editorial team, creating a shared React component library that worked across ATK's brand portfolio, and making accessibility a built-in standard rather than a late-stage consideration.

## Building Barista, a custom CMS for the editorial team

### The problem

The editorial team couldn't publish content updates without engineering involvement. Every new recipe, review, or article required a developer to intervene, which created a bottleneck that slowed ATK's content output and pulled engineers away from product work.

### What I built

I designed and built a custom CMS we named Barista. The goal was to give editors full control over content publishing without requiring technical knowledge.

The process started with direct conversations with editors, project managers, and engineers. I mapped their actual workflows before writing any code, which shaped the information architecture, navigation, and template structure from the start.

The interface was deliberately simple: clear content hierarchies, straightforward templates, and consistent interaction patterns throughout. Editors could find what they needed without training, and the learning curve was minimal.

### The result

After Barista launched, the editorial team could publish updates independently. Content that previously required an engineering ticket went live directly, which reduced turnaround time significantly and freed the engineering team to focus on product development.

## Refining the tool based on real usage

After launch, I monitored how the editorial team actually used Barista and set up regular feedback sessions to surface friction points.

What came back wasn't about missing features. Editors were occasionally confused by navigation labels or couldn't find the right template quickly. Small things, but they added up across a busy editorial calendar.

I worked through several design iterations based on that feedback: reorganizing navigation, renaming options to match editorial language, and making template selection more predictable. Each change was small. The cumulative effect was that Barista stopped feeling like a tool the team had to use and started feeling like a natural part of their workflow.

## Accessibility built in from the start

Accessibility wasn't treated as a final checklist item. I worked alongside QA testers and accessibility specialists throughout development to audit the platform as it was being built.

The audit process covered color contrast ratios, heading structure and hierarchy, keyboard navigation across all interactions, and screen reader compatibility. Issues were addressed in the same sprint they were found, not deferred to a later phase.

The result was a CMS that met Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and was usable by team members with a range of abilities and assistive technology preferences.

## A shared component library across ATK's brand portfolio

### The problem

ATK operates several brands, each with its own visual identity, but the underlying UI patterns and interactions needed to work consistently across all of them. Building and maintaining separate component implementations for each brand wasn't sustainable.

### What I built

Working with the design and marketing teams, I built a shared React component library using Next.js. The library covered a full range of UI elements: buttons, form inputs, carousels, modals with focus trapping, navigation patterns, and more.

The key architectural decision was separating visual styling from component behavior. Each component handled its own logic and accessibility requirements. Visual customization happened at the brand level through design tokens and style overrides. This meant a component built once could look and feel distinct across brands while sharing the same accessible, tested foundation.

### The result

New features no longer had to be rebuilt from scratch for each brand. The team built once and styled as needed. Visual inconsistencies like mismatched colors or missing button states were easy to identify and fix in one place, and the fix propagated across all brands automatically.

## Storybook documentation for the whole team

As the component library grew, discoverability became a challenge. Teams needed a reliable reference for understanding what each component did, when to use it, and what accessibility requirements applied.

I worked with QA and other engineers to document every component in Storybook. Each entry included a description of the component's purpose, usage guidance, variant examples, and accessibility notes.

The documentation wasn't written for developers alone. Designers used it to verify that implementations matched their intentions. Marketing and content teams used it to understand what was available before requesting new work. A shared, accessible reference reduced miscommunication across disciplines and made onboarding new team members faster.

## What I took from this project

The work at ATK reinforced something I've found to be true across every design system project: the most important decisions happen before the first line of code. Talking to the editorial team before building Barista shaped everything that came after. Documenting components for a cross-functional audience made the library more useful than one built for developers alone. Good systems are built with the people who use them, not just for them.
