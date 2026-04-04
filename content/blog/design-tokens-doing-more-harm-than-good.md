---
slug: design-tokens-doing-more-harm-than-good
publishedAt: 2026-04-01
title: 'Are your design tokens doing more harm than good?'
description: 'Design tokens are meant to unify design and development, but structural gaps can limit their effectiveness and create hidden costs.'
tags: [design-systems, component-libraries, best-practices, design-system-guide]
image: '/images/blog/design-token-confusion.webp'
image_alt: 'A developer working on a design system.'
---

Tokens have become a near-universal feature of design systems documentation. If you've built or maintained a design system in the last few years, you almost certainly have them. They appear in your Figma library, your codebase, your Storybook, your documentation site. You can point to them. Your team references them daily.

And yet. The rebrand still takes weeks. The dark mode implementation is still a project in its own right. New components still produce contrast violations. Developers still reach for hardcoded hex values when they're under deadline pressure.

If that gap sounds familiar, the problem probably isn't that you have the wrong token values. It's that the architecture underlying those tokens has one or more structural gaps that limit what the system can actually do, regardless of how many tokens you've defined.

Here are the four failure modes that account for most of the gap.

## Failure mode 1: tokens that exist but don't sync

The most widespread token problem isn't architectural. It's operational. Tokens are defined somewhere, but "somewhere" isn't the same as everywhere they need to be.

The most common version of this: tokens are maintained in Figma, and a developer implementation exists in code, but the two aren't connected by any automated process. Updates happen manually, when someone remembers, or when a discrepancy is noticed and escalated. The practical result is that the token values in design and the token values in code drift apart silently. Designers specify one shade of blue; developers implement a slightly different one. Nobody notices until a visual QA pass catches it, which is late in the cycle and generates rework.

A less common but equally damaging version: tokens exist in a JSON file or a tool like Tokens Studio, but the build pipeline that should consume them and publish them to the codebase isn't running reliably. The file is the source of truth in name only. In practice, developers work from whatever is in the stylesheet, which may or may not reflect the current token values.

Tokens that aren't synced to code aren't part of your design system. They're documentation of what the design system was supposed to be.

The fix is a reliable, automated sync process: Figma Variables exported to a platform-agnostic format, transformed by a tool like Style Dictionary, and published to the codebase as part of a repeatable pipeline. The mechanism matters less than the reliability. Teams that can't trust the sync stop using the tokens.

## Failure mode 2: tokens that describe values instead of intent

This is the structural problem that generates the most long-term pain, and it's the one most teams don't recognize until a rebrand or a theming requirement forces the issue.

A token named `color.blue.500` is a named value. It tells you what the value is. It doesn't tell you what the value is for. When a developer needs a color for an interactive element, they have to know that `color.blue.500` is the right choice, which means they have to understand the full palette and the implicit conventions that govern which value maps to which use case. Those conventions live in someone's head. They don't live in the system.

When the brand color changes from blue to teal, `color.blue.500` becomes wrong in two ways: the value is wrong, and the name is wrong. You can update the value, but now you have a token named `color.blue.500` that resolves to a teal, which is worse than no name at all.

Tokens that describe intent survive both of these problems. `color.brand.interactive` tells you what the value is for and remains accurate regardless of what the underlying color is. A rebrand means changing the value the semantic token points to. The token name stays correct. Everything that references it updates automatically.

The technical term for this is the semantic layer: an intermediate tier of tokens that sits between raw palette values (primitive tokens) and component implementations. Primitive tokens define the full range of available values. Semantic tokens assign those values to specific roles. Components reference semantic tokens, never primitives directly.

Teams that skipped the semantic layer when they first implemented tokens are living with the consequences now. Every visual change requires hunting down every reference to the affected value rather than updating a single token definition. Change becomes expensive, not because the system is complex, but because every visual update requires touching every reference individually.

## Failure mode 3: tokens that cover color and nothing else

A partial token system creates a false sense of coverage. Color gets tokenized because it's the most visible design decision and the most obviously painful to update manually. Spacing, typography, border radius, shadow, and motion values frequently don't.

The result is a system where color updates propagate correctly and everything else still requires manual search-and-replace. Spacing drift accumulates because there's no token to enforce the spacing scale. Developers use `16px` sometimes, `1rem` other times, and `var(--spacing-4)` when they remember to. Typography drift accumulates the same way. The system appears to be working because the color story is clean, but the visual inconsistency is growing in every other dimension.

Inconsistent spacing is particularly insidious because it degrades the sense of quality in ways that are difficult to articulate. Users and stakeholders often sense that something is off about a UI without being able to name the source. The source is frequently the spacing scale, paddings and gaps that are almost right but not quite, accumulated across hundreds of individual implementation decisions.

The scorecard question that surfaces this is direct: do your tokens cover every design decision that varies across themes, modes, or brands? If your honest answer is "color yes, everything else partially," your token coverage gap is generating drift that's currently invisible and will become expensive when a redesign or rebrand requires you to inventory what was actually implemented.

## Failure mode 4: tokens defined but not enforced

Tokens are only as effective as their adoption. A token system that exists alongside a codebase full of hardcoded values is a parallel system, and parallel systems aren't a single source of truth. Both are being maintained simultaneously, but only one of them is in the right architecture.

This failure mode is common in organizations where the token system was introduced after a substantial codebase already existed. The new components use tokens. The legacy components don't. The boundary between them is invisible to anyone who doesn't already know where it is, which means new work sometimes lands on the wrong side. Developers aren't being careless. They simply don't know the boundary exists. A developer working in an older part of the codebase follows existing patterns, which means following hardcoded values.

The enforcement gap has two dimensions. The first is tooling: linting rules that flag hardcoded values where a token should be used can catch this mechanically, before review. The second is cultural: code review processes that treat token usage as a hard requirement build the habit into the team's normal workflow.

Without either, token adoption stays high in the places where the system team has recently worked and low everywhere else. The token architecture becomes a set of best practices rather than a system constraint, and best practices don't enforce themselves.

## What the token architecture section of the scorecard is actually measuring

The six questions in the [Design System Scorecard's](https://joshuabriley.com/scorecard/) token architecture section map directly to these failure modes. They ask whether tokens have a defined single source of truth that's synced to code (failure mode 1), whether naming is consistent and unambiguous (failure mode 2), whether the semantic layer exists (failure mode 2), whether names describe intent rather than value (failure mode 2), whether coverage spans every varying design decision (failure mode 3), and whether components reference tokens rather than redefining values (failure mode 4).

A partial score on this section doesn't mean the token work was wasted. It means the work is incomplete in specific, identifiable ways. Incomplete token architecture has a compounding cost. Every month that passes without a sync process, or without a semantic layer, or without enforcement, is a month of drift that will need to be resolved before the system can deliver the returns that motivated the token investment in the first place.

The good news is that these are structural problems with structural fixes. None of them require rebuilding the component library. They require auditing what exists, identifying the specific gap, and making targeted architectural changes. The token system you have is almost certainly closer to working well than it appears. It just needs the gaps named before they can be closed.
