---
slug: why-your-design-system-score-is-lower-than-you-think
publishedAt: 2026-03-30
title: 'Why your design system score is lower than you think'
description: "Most teams with a design system believe they're in reasonable shape. They have a component library. They have a Storybook. They have a Figma file that's mostly up to date."
tags: [accessibility, design-systems, best-practices, design-system-guide]
image: '/images/design-system-confusion.webp'
image_alt: 'A frustrated developer working on a design system.'
---

::TagMenu{tag="design-system-guide"}
Component libraries: a practical guide
::

Most teams with a design system believe they're in reasonable shape. They have a component library. They have a Storybook. They have a Figma file that's mostly up to date. Designers and engineers reference it, at least some of the time. The system exists, and that feels like progress. For a while, it was.

The problem is that "the system exists" and "the system is healthy" are very different conditions, and the gap between them tends to be larger than anyone realizes until something forces a close look.

This article walks through the five dimensions of a healthy design system and the specific ways teams routinely overestimate where they stand in each one.

## Why self-assessment is unreliable

Before getting into the dimensions, consider why teams consistently misjudge the health of their own systems.

The people closest to the system built it. They know where the sharp edges are and have learned to work around them. What feels like a functioning system from the inside often looks like a collection of workarounds from the outside — workarounds that have become invisible through familiarity.

There's also a framing problem. Teams tend to evaluate their system against where they started, not against where they need to be. A team that went from no shared components to 50 shared components has made real progress. But "better than before" is not the same as "fit for the scale we're operating at now." The standard shifts as the product and organization grow, and internal assessments rarely shift with it.

The result is a persistent optimism gap. Teams score themselves higher than an objective review would, not because they're being dishonest, but because the reference point is wrong.

## Component consistency: do you have shared components, or shared starting points?

The most common version of this gap is what you might call the shared starting point problem. A component gets built once and distributed. Then it gets modified slightly in one product area, then adapted again in another, then rebuilt from scratch in a third because the existing version "didn't quite work" for the use case. The original component still exists. Teams still reference it in conversation. But in practice, four or five implementations of the same pattern are now being maintained independently.

Teams score this dimension highly because shared components exist. The more revealing question is whether those components are actually shared in practice — or whether "shared" just means "we all started from the same place before going in different directions."

Deprecated components tell a similar story. A system can have a formal deprecation process in documentation while still having deprecated components actively used in production, because nobody had time to migrate and "we'll get to it" became permanent. The documentation says one thing; the codebase says another.

The component consistency score reflects how the system actually functions, not how it was designed to function.

## Accessibility: compliance theater versus structural coverage

Accessibility is the dimension where the optimism gap is largest, and where the consequences of overestimating are most serious.

Many teams believe they're in reasonable accessibility shape because they ran an automated scan and addressed the flagged violations. Automated tools are useful, but they catch somewhere between 30 and 40 percent of real accessibility problems. The rest (focus management in overlay components, keyboard operability in interactive patterns, screen reader announcements for dynamic content updates) require manual testing and, more importantly, architectural decisions that make accessible behavior the default.

Teams that score themselves highly on accessibility are often scoring their most recent audit results, not the current state of their system. Accessibility drift is constant. A focus style gets overridden to match a mock. A keyboard interaction changes to "feel better" on a touchscreen. A modal's close behavior gets modified and escape key handling breaks. None of these changes are caught by the next automated scan.

The more useful question isn't whether your components passed their last accessibility review. It's whether your component library is architecturally structured to make accessible output the path of least resistance — so that a developer consuming the library gets correct keyboard behavior, focus management, and contrast without having to think about it. Most systems aren't built that way, and teams don't realize it because the failure mode is gradual rather than sudden.

## Token architecture: named values are not a token system

Design tokens have become a standard part of design system language, which means most teams can say they have them. Having tokens and having a functioning token architecture are different things.

The most common gap is the semantic layer. A well-structured token system has two layers: primitive tokens that name raw values (`color.gray.900`) and semantic tokens that describe intent (`color.text.primary`). The semantic layer is what makes the system maintainable. When you change a brand color, you update one primitive value and it propagates correctly because every component references the semantic token, not the primitive directly.

Teams that skipped the semantic layer have named values instead of a token system. Changing a brand color requires finding every component that references the old value and updating it individually. The tokens provide naming consistency but not the structural benefit that makes tokens worth implementing in the first place.

The other common gap is coverage. A token system that covers color but not spacing, or color and spacing but not typography, leaves large portions of the visual system outside the architecture. Those portions continue to be defined by hardcoded values, and they drift accordingly.

Teams score this dimension by asking "do we have tokens?" The answer is usually yes. The more revealing questions are whether the semantic layer exists, whether coverage is comprehensive, and whether components actually reference tokens rather than defining their own values.

## Documentation: is it current, or is it archaeology?

Documentation is the dimension that dates the fastest and gets updated the slowest. The optimism gap here is almost universal.

A component gets built. Documentation gets written. The component gets modified six months later because a new use case required it. The documentation doesn't get updated because updating documentation wasn't on the ticket. A year later, the documentation describes a version of the component that no longer exists, and a new developer following it produces output that doesn't match how the component actually behaves.

Teams score this dimension based on whether documentation exists. The more useful question is whether the documentation is accurate today, and whether the team has a workflow that keeps it accurate as components evolve.

The accessibility documentation gap is particularly common. A component might have thorough visual and API documentation with no mention of keyboard interactions, ARIA attributes, or screen reader behavior. That omission isn't just a documentation gap. It signals to consuming teams that these behaviors aren't part of the component contract, which leads them to treat accessibility as an afterthought in their own implementation.

The getting-started experience is another place where teams routinely overestimate. Ask yourself honestly: could a senior engineer who has never used your component library install it, understand the conventions, and be productive within a day — without asking anyone for help? If the honest answer is "probably not," that's a documentation gap with real adoption costs.

## Handoff process: shared tools are not a shared workflow

The handoff dimension is where design system investment most often fails to reach its intended users.

Teams score this highly because designers and developers both have access to Figma, both know the component library exists, and both nominally participate in the same handoff process. The gap shows up in the specifics.

Do designers use Figma components from the shared library, or do they design with custom elements that don't exist in code? If the designs reference a component that developers then have to interpret or approximate rather than implement directly, the handoff process isn't functioning as a bridge between design and engineering. It's creating translation work that consumes time and introduces inconsistency.

Do designers and developers use the same token names? If a designer specifies "primary blue" and the corresponding token in code is `color.brand.interactive`, that mismatch produces friction on every handoff. Small naming gaps don't stay small when they're embedded in a workflow that runs hundreds of times.

Is there a clear owner for the design system? This question reveals more than almost any other. When nobody has explicit responsibility for the system's health, decisions get made locally, maintenance happens reactively, and the system drifts in the direction of whoever last touched it. Many teams have a system that "everyone owns," which in practice means nobody does.

## What a lower score actually means

If your honest assessment of these five dimensions produces lower scores than you expected, that's not a failure. It's the beginning of a useful conversation.

The gap between where you are and where you need to be is not infinite, and it doesn't require rebuilding the system from scratch. Most systems need targeted structural improvements in two or three dimensions, not a full overhaul. Knowing which dimensions and which specific gaps makes the remediation tractable. Continuing to operate with an inflated sense of system health means the debt compounds silently until something forces a reckoning: usually an accessibility audit with regulatory implications, a redesign that exposes how deeply inconsistency has spread, or an engineering leadership change that asks for justification of existing investment.

The [Design System Scorecard](https://joshuabriley.com/scorecard/) is a structured way to move from intuition to a documented baseline. It covers all five dimensions across 32 questions and takes about 10 minutes. The score you get won't match what you expected going in. That's the point.
