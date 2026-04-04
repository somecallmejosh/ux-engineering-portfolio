---
slug: accessibility-debt
publishedAt: 2026-03-28
title: 'Accessibility debt: why it compounds and how to fix it'
description: "Accessibility debt doesn't start with bad code. It starts with bad architecture. Learn how to address the root causes and build a more accessible product."
tags: [design-systems, component-libraries, best-practices, accessibility]
image: '/images/blog/accessibility-debt.webp'
image_alt: 'A developer working on a design system.'
---

Most teams that receive a Web Content Accessibility Guidelines (WCAG) audit report react the same way. They read through the findings, see a list of violations organized by component, and immediately start planning component-level fixes. This modal needs focus trapping. That button needs a visible focus indicator. These form inputs need programmatic labels.

The fixes ship. The re-test passes. Six months later, the same violations appear in a different part of the product.

If that pattern sounds familiar, the problem isn't your code. It's where you're trying to solve the problem.

## Where accessibility debt actually comes from

Accessibility violations at scale almost always trace back to the same root cause: decisions that should have been made at the system level were left to individual feature teams.

When a modal gets built without focus trapping, that's not a developer oversight. It's a sign that your component library doesn't include a modal that handles focus trapping correctly. When a form input ships without a programmatic label association, it's a sign that your component API doesn't make the label relationship explicit. When color contrast fails on a new feature, it's a sign that your token system doesn't distinguish between foreground and background values in a way that makes correct contrast the default choice.

The accessibility problem didn't start in the feature. It started when the shared component, the documented pattern, or the token value was built without accessibility as a design constraint.

This is why patching individual violations doesn't reduce your overall accessibility debt. You're fixing instances of the problem, not the source of it.

## The compounding cost at scale

Small teams can sometimes get away with addressing accessibility manually, per feature. The surface area is limited, the handoff is close, and one engineer can hold enough context to catch problems before they ship.

Enterprise products don't work that way. When you have dozens of engineers working across multiple products or product areas, all consuming a shared component library, every structural gap in that library multiplies. A button component without a visible focus indicator isn't one violation. It's every instance of that button across every product that consumes the library. A modal without correct focus trap logic creates the same broken keyboard experience in every place that modal is used.

At that scale, you can't audit and patch your way to compliance. The math doesn't work. New features ship faster than individual fixes can propagate, and each new feature inherits the same structural deficiencies.

The only intervention that actually changes the trajectory is fixing the architecture.

## What architectural accessibility looks like

Fixing accessibility at the system level means asking a different question for each component you build or maintain. Not "does this component pass an accessibility test?" but "does this component make the accessible behavior the default, and the inaccessible behavior impossible or difficult to produce?"

Here's what that looks like across the eight accessibility dimensions that matter most in a shared component library.

**Keyboard operability.** Interactive components should handle keyboard behavior internally. A developer consuming your button component should get correct `focus`, `Enter`, and `Space` behavior without having to think about it. If keyboard support requires implementation decisions at the feature level, it will be inconsistently implemented.

**Label association.** Form input components should either require a label prop or render a visually hidden one by default. Making it possible to render a label-less input through normal usage means it will happen regularly.

**Focus indicators.** Your token system should include a visible focus style that components inherit. If focus indicators are defined per-component or left to browser defaults, they'll be inconsistent and frequently overridden when someone decides they're visually disruptive.

**Color as the only signal.** Components that communicate state — errors, required fields, success states — need to express that information through more than color. This is an API design problem as much as a visual design problem. If your error state only changes a border color, no prop, label, or icon is exposed. The component itself is the constraint.

**Focus management in overlay components.** Modals, drawers, dialogs, and tooltips need to trap focus when open and return it on close. This logic belongs in the component, not in the calling code. When it's left to the feature team, it's frequently skipped or implemented inconsistently.

**Alt text and decorative images.** Your image component or icon component should make this an explicit decision. A required `alt` prop (with an explicit `alt=""` option for decorative images) turns an accessibility requirement into an API contract, rather than a convention that gets ignored under deadline pressure.

**Contrast ratios.** This is a token problem. If your semantic color tokens define text colors and background colors in a way that guarantees a minimum contrast ratio at each combination, contrast compliance becomes a natural consequence of using the token system correctly. If your tokens are just named hex values without semantic relationships, every contrast decision gets made independently, and it will be made incorrectly often enough to matter.

**Dynamic content announcements.** Loading states, alerts, notification patterns — these need to communicate changes to screen readers. Building this into the component means it works correctly everywhere the component is used. Leaving it to individual teams means it'll work nowhere reliably.

## Why this is hard to see from inside the team

If you're embedded in a design system team, it's easy to feel like you're shipping accessible components. Your Storybook stories pass automated scans. Your documentation includes ARIA attribute tables. The individual components look right.

The problem is that component-level accessibility testing doesn't surface system-level gaps. Automated tools don't catch whether your token architecture makes contrast failures likely. They don't reveal that your modal's focus trap implementation only works when the calling code provides a specific configuration. They don't tell you that your icon component's `title` prop is documented but not enforced, so it gets omitted half the time.

These are things you find when you look at the system as a whole, not when you test components in isolation.

## How to find your structural gaps

The eight questions in the accessibility section of the [Design System Scorecard](https://joshuabriley.com/scorecard/) are a starting point for this kind of structural review. They're not component-level checks. They're system-level questions about whether the behaviors and constraints that produce accessible output are built into the library itself.

If you score "None" or "Partial" on keyboard operability, that's not a signal to add keyboard handling to a few specific components. It's a signal that your component API design doesn't treat keyboard behavior as a first-class concern. If you score partially on contrast, that's not a color correction task. It's a token architecture task.

The score doesn't tell you what to fix. It tells you which layer of the system to look at.

## The structural fix is the durable fix

Accessible components are easier to build correctly once than to audit and patch repeatedly. When keyboard operability is handled at the component level, every feature that uses that component is keyboard-operable without anyone on the feature team thinking about it. When your token system makes high-contrast choices the natural defaults, contrast compliance stops being a manual review step.

This is what it looks like when accessibility stops being a remediation problem and becomes a quality baseline. It doesn't happen feature by feature. It happens when the system is designed to make accessible output the path of least resistance.

If you're not sure whether your system is structured that way, that's exactly what the scorecard is built to surface. Take the accessibility section first. The score will tell you quickly whether you're patching a symptom or dealing with the source.
