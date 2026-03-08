---
slug: accessibility-audit-cheatsheet
publishedAt: 2026-03-07
title: 'Accessibility Audit Cheatsheet'
description: 'A practical accessibility audit cheatsheet for developers and designers. Covers keyboard testing, screen readers, color contrast, HTML structure, focus management, and automated tooling'
tags: [accessibility, best-practices, front-end-development, cheatsheet]
image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772940161/josh-portfolio/20260307_2221_Image_Generation_simple_compose_01kk5qccaxfc5ayx484dj1p8nc.png'
image_alt: "Developer who's excited he found an accessibility audit cheatsheet."
---

::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

You don't need to hire someone to know whether your interface has accessibility problems. You can find a significant number of issues with free tools, a keyboard, and about an hour of focused attention.

This guide walks you through six areas of an accessibility audit. Each section explains what you're looking for, how to test it, and what a problem looks like when you find one. Start at the top and work through it in order, or jump to the section most relevant to what you're building.

The standard this guide references is Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. That's the level most organizations target and the one most accessibility regulations worldwide reference.

## Glossary

These terms appear throughout the guide. If you're already familiar with them, skip ahead.

**WCAG**: Web Content Accessibility Guidelines. The internationally recognized standard for accessible web content, published by the World Wide Web Consortium (W3C).

**ARIA**: Accessible Rich Internet Applications. A set of HTML attributes that communicate the role, state, and properties of interface elements to assistive technologies.

**Screen reader**: software that reads page content aloud and allows navigation without a mouse. Common screen readers include NVDA, JAWS, and VoiceOver.

**Focus**: the state indicating which element on the page is currently active and ready to receive keyboard input.

**Focus indicator**: the visible outline or highlight that shows which element has focus.

**Design token**: a named value (color, spacing, font size) used consistently across a design system.

## 1. Automated tooling: start here

Before any manual testing, run an automated scan. Automated tools catch a reliable subset of accessibility violations quickly and give you a baseline to work from.

### Recommended tools

- **[axe DevTools](https://www.deque.com/axe/devtools/)**: the most widely used accessibility testing extension (browser extension, free tier available). Integrates directly with browser developer tools.
- **[WAVE](https://wave.webaim.org/)**: surfaces errors visually on the page, useful for a quick overview (browser extension, free).
- **[Lighthouse](https://developer.chrome.com/docs/lighthouse/)**: includes an accessibility audit as part of its broader performance report (built into Chrome DevTools, free).

### How to run a scan

1. Open your page in Chrome or Firefox.
2. Open browser developer tools (press `F12` or `Cmd+Option+I` on Mac).
3. Select the **axe DevTools** or **Lighthouse** tab.
4. Run the audit and review the results.

### What automated tools find

Automated tools reliably catch color contrast failures, missing image alt text, form inputs without labels, and basic HTML structure problems. They catch roughly 30 to 40 percent of real accessibility issues. The rest require manual testing.

### What to do with the results

Work through critical and serious violations first. Each finding includes a description of the problem, the affected element, and a link to the relevant WCAG criterion. Fix violations in order of severity before moving to manual testing.

## 2. Keyboard testing: the most important manual test

Keyboard accessibility affects users who can't use a mouse, including people with motor disabilities and power users who prefer keyboard navigation. It's also one of the most common failure areas.

### What you're testing

Every interactive element on the page (links, buttons, form inputs, modals, dropdowns, tabs, and custom components) must be operable with a keyboard alone.

### How to test keyboard navigation

1. Put your mouse aside completely.
2. Press `Tab` to move forward through interactive elements.
3. Press `Shift+Tab` to move backward.
4. Press `Enter` or `Space` to activate buttons and links.
5. Press `Escape` to close modals, dropdowns, and other overlays.
6. Use arrow keys to navigate within components like radio button groups, select menus, and tab panels.

### What to look for

- **Missing focus**: you press `Tab` and nothing visibly changes. An element is receiving focus but the indicator is hidden.
- **Illogical tab order**: focus jumps unpredictably around the page rather than following a logical reading order.
- **Keyboard traps**: focus enters a component and can't escape without using a mouse.
- **Inaccessible custom components**: a custom dropdown or date picker that works with a mouse but doesn't respond to keyboard input.
- **Skipped elements**: interactive elements that never receive focus at all.

### Signs of good keyboard navigation

Every interactive element receives focus in a logical order. Each element is clearly highlighted when focused. All interactions that work with a mouse work with a keyboard.

## 3. Focus management: where keyboard testing gets detailed

Focus management goes beyond basic keyboard navigation. It covers what happens to focus when the interface changes dynamically: when a modal opens, a panel expands, or a route changes in a single-page application.

### Common focus management failures

**Modals and dialogs**
When a modal opens, focus should move into it automatically, typically to the first focusable element or to the dialog heading. When the modal closes, focus should return to the element that triggered it. If neither of these things happens, keyboard users lose their place in the page.

**Infinite scroll and dynamic content**
When new content loads into the page, keyboard users may have no way to reach it if focus stays at the top of the existing content.

**Single-page application (SPA) route changes**
When a user navigates to a new route, focus often stays wherever it was on the previous page. Screen reader users may not realize the page has changed.

### How to test focus management

1. Open a modal using only the keyboard. Confirm focus moves into the modal automatically.
2. Press `Tab` through all elements inside the modal. Confirm focus doesn't leave the modal. This is called a focus trap, and it's required behavior for modals.
3. Close the modal with `Escape`. Confirm focus returns to the trigger element.
4. In a single-page application, navigate between routes and check where focus lands after each transition.

### Signs of good focus management

Focus moves intentionally when the interface changes. Users always know where they are. Modals trap focus while open and release it correctly when closed.

## 4. Color contrast: a visual check with a clear standard

Color contrast measures the difference in perceived brightness between foreground text and its background. Low contrast makes text hard to read for users with low vision or color deficiency, and for anyone reading in bright light.

### The WCAG standard

- Normal text (below 18pt or 14pt bold): minimum contrast ratio of 4.5:1
- Large text (18pt or larger, or 14pt bold or larger): minimum contrast ratio of 3:1
- UI components and graphical elements (icons, chart lines, input borders): minimum contrast ratio of 3:1

### How to test color contrast

**Option 1 — Browser extension**
The axe DevTools or WAVE extensions flag contrast failures automatically as part of their scan. This is the fastest approach.

**Option 2 — Manual check**
Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or the [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) desktop tool. Enter your foreground and background color values to get a pass or fail result.

**Option 3 — Browser DevTools**
In Chrome DevTools, inspect an element and open the **Styles** panel. Click the color swatch next to a text color value to open the color picker, which displays the current contrast ratio and indicates whether it passes.

### What to watch for beyond text

- Placeholder text in form inputs often fails contrast requirements. It's typically styled lighter than body text.
- Disabled state styling frequently fails. If disabled elements are interactive only in some contexts, they still need sufficient contrast.
- Focus indicators need a 3:1 contrast ratio against adjacent colors.

## 5. HTML and ARIA structure: what screen readers actually read

Visual design communicates meaning through layout, size, color, and position. Screen readers communicate meaning through HTML structure and ARIA attributes. If the HTML doesn't convey the right meaning, screen reader users get a different experience from sighted users.

### Headings

Headings (`h1` through `h6`) give screen reader users a way to navigate and understand page structure. Screen reader users frequently navigate by heading alone to find the section they need.

**What to check:**

- Every page has exactly one `h1`.
- Heading levels don't skip (an `h3` doesn't follow an `h1` without an `h2` in between).
- Headings describe the content that follows them. Headings styled purely for visual effect without semantic meaning cause confusion.

### Landmark regions

Landmarks are HTML elements that define regions of a page. Screen reader users navigate between landmarks to skip to the section they need.

**Key landmarks to check:**

- `<header>` or `role="banner"` for the page header
- `<nav>` for navigation
- `<main>` for the primary content area
- `<footer>` or `role="contentinfo"` for the page footer

Run your page through WAVE and check whether these landmarks are present and correctly placed.

### Images

Every informative image needs an `alt` attribute that conveys the same information the image does. Decorative images (images that add no meaningful content) should have an empty `alt` attribute (`alt=""`) so screen readers skip them.

**What to check:**

- `alt` text is present on all `<img>` elements.
- `alt` text describes what the image communicates, not just what it depicts. A chart showing revenue growth should have alt text that conveys the trend, not just "bar chart."
- Decorative images use `alt=""`, not `alt="decorative"` or a missing `alt` attribute.

### Form inputs

Every form input needs a label that's programmatically associated with it. A visible label that isn't connected to the input in code doesn't help screen reader users.

**What to check:**

- Each `<input>`, `<select>`, and `<textarea>` has a corresponding `<label>` with a matching `for` attribute, or uses `aria-label` or `aria-labelledby`.
- Required fields are marked with `aria-required="true"` or the HTML `required` attribute.
- Error messages are associated with their input using `aria-describedby`.

### ARIA usage

ARIA attributes can improve accessibility when HTML alone isn't sufficient, but incorrect ARIA usage creates more problems than it solves.

**Basic rules:**

- Don't use ARIA to override the semantics of native HTML elements that already communicate the right meaning. A `<button>` communicates "button" to screen readers without any ARIA.
- Don't add `role="button"` to a `<div>` and stop there. You also need to add keyboard event handling, focus management, and appropriate state attributes.
- Every element with `role="dialog"` needs an accessible name via `aria-label` or `aria-labelledby`.

The [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) published by W3C is the reference for how common patterns should be implemented.

## 6. Screen reader testing: hearing what your users hear

Screen reader testing gives you the most complete picture of the experience for users who rely on assistive technology. It's also the most time-consuming of the six areas, so treat it as a final verification pass after addressing findings from the earlier steps.

### Which screen reader to use

You don't need to test every combination. Start with one.

- **macOS and iOS**: VoiceOver is built in. Press `Cmd+F5` to enable it on Mac.
- **Windows**: [NVDA](https://www.nvaccess.org/download/) is free and widely used. [JAWS](https://www.freedomscientific.com/products/software/jaws/) is the most common in enterprise environments but requires a license.
- **Android**: TalkBack is built into Android devices.

### Basic VoiceOver navigation (macOS)

- `Cmd+F5` — turn VoiceOver on and off
- `Control+Option+Right arrow` — move to next element
- `Control+Option+U` — open the rotor (navigate by headings, links, landmarks, and more)
- `Control+Option+Space` — activate a link or button

### Basic NVDA navigation (Windows)

- `Insert+F7` — open the elements list (headings, links, landmarks)
- `Tab` — move between interactive elements
- `H` — move to next heading
- `B` — move to next button
- `F` — move to next form field

### What to listen for

- Does the screen reader announce the correct role for each element (button, link, heading, dialog)?
- Are form labels read before the input?
- Are error messages announced when they appear?
- Does the screen reader announce when a modal opens?
- Does dynamic content (notifications, status updates, loading states) get announced? Elements that need to announce changes use `aria-live` regions.

### A practical test flow

1. Navigate through the page using only the keyboard and screen reader.
2. Complete a core user task: submit a form, open and close a modal, or select from a dropdown.
3. Note anything that isn't announced correctly, announces too much, or announces nothing at all.

## Putting the findings together

After working through all six areas, you'll have a list of issues organized by category. Before you start fixing things, prioritize by impact.

**Fix first:**

- Keyboard traps (users can't escape an element)
- Missing form labels (users can't identify what a field is asking)
- Critical contrast failures on body text
- Interactive elements that aren't keyboard accessible

**Fix next:**

- Focus management failures in modals and route changes
- Missing landmark regions
- Incorrect or missing ARIA on custom components

**Fix when capacity allows:**

- Minor contrast failures on large text or UI components
- Missing alt text on decorative images
- Documentation and guidance gaps

## Further reading

- [WCAG 2.1 guidelines](https://www.w3.org/TR/WCAG21/): the full specification
- [WebAIM's WCAG 2 checklist](https://webaim.org/standards/wcag/checklist): a plain-language interpretation
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/): patterns and examples for common components
- [Deque University](https://dequeuniversity.com/): free reference library for accessibility rules and techniques

If you work through this checklist and want an independent review of the findings, or if the scope of issues turns out to be larger than expected, the [design system audit service](/services/) covers all six areas in depth and delivers a prioritized remediation roadmap within five business days.
