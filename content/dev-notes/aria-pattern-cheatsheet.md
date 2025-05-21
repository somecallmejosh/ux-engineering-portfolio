---
slug: aria-pattern-cheatsheet
publishedAt: 2025-01-07
title: "ARIA Cheatsheet"
description: 'Need a brain-friendly way to remember all those WAI-ARIA doohickeys? Same. This is a quick-hit reference guide for common UI patterns.'
tags: [nuxtjs, tailwindcss, cheatsheet]
image: https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745245227/josh-portfolio/assets_task_01jscbab7dekctaz7mx7356yxp_img_0.webp
image_alt: 'ARIA Patterns and Practices Cheatsheet'
---
::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

ARIA (short for Accessible Rich Internet Applications) is basically HTML's way of saying, "Hey assistive tech, I've got some extra context for you!" It's a bunch of attributes you sprinkle into your markup to help users with disabilities better understand and navigate your app.

This cheatsheet isn't trying to be the entire WAI-ARIA Bible. It's more like a sticky note stuck to your monitor that reminds you what `aria-expanded` actually does. It focuses on the common stuff you'll hit regularly: what roles go where, what attributes to slap on, how users are expected to move around with a keyboard, and what's supposed to happen when stuff gets toggled, selected, or otherwise activated.

When in doubt (or when this page isn't cutting it), the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) has all the official words and wisdom. But if you're mid-sprint and your brain just went poof, this page is here to save the day.

::OverflowX
## WAI-ARIA Patterns and Practices Cheatsheet

| Pattern     | Required Roles                         | ARIA Attributes                                                                 | Keyboard Behavior                                                                                      | Active State Behavior                                                                 |
|-------------|----------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Accordion   | `button`, `region`                     | `aria-expanded`, `aria-controls`, `aria-labelledby`                             | `Tab` to focus, `Enter/Space` to toggle, optional `Up/Down` to navigate headings                        | `aria-expanded="true"` when open                                                      |
| Alert       | `alert`                                | None (must be dynamically injected)                                             | None (announced immediately by screen readers)                                                          | Shown via injection triggers AT announcement                                          |
| Breadcrumbs | `navigation`                           | `aria-label` or `aria-labelledby`, `aria-current="page"` on current link        | `Tab` to move between breadcrumb links                                                                  | `aria-current="page"` marks the active crumb                                          |
| Button      | `button`                               | Optional `aria-pressed` (for toggle)                                            | `Tab` to focus, `Enter/Space` to activate                                                               | `aria-pressed="true"` for toggled buttons                                             |
| Carousel    | `region`, `group`, `button`            | `aria-roledescription`, `aria-label`, `aria-controls`, `aria-hidden`            | `Left/Right` to navigate slides, `Tab` through controls                                                 | Current slide uses `aria-hidden="false"`                                              |
| Disclosure  | `button`                               | `aria-expanded`, `aria-controls`                                                | `Enter/Space` to toggle                                                                                 | `aria-expanded="true"` when content shown                                             |
| Grid        | `grid`, `row`, `columnheader`, `cell`  | `aria-colindex`, `aria-rowindex`, `aria-selected`                               | `Arrow keys` to move, `Shift + Arrow` for multiselect                                                   | `aria-selected="true"` on selected cells                                              |
| Landmarks   | `banner`, `main`, `nav`, etc.          | `aria-label` / `aria-labelledby` (if multiple of same role)                     | Landmarks can be jumped to with assistive tech                                                          | Not applicable                                                                         |
| Link        | `link`                                 | Optional `aria-current="page"`                                                  | `Tab` to focus, `Enter` to follow link                                                                  | `aria-current` identifies current page                                                 |
| Listbox     | `listbox`, `option`                    | `aria-selected`, `aria-activedescendant`, `aria-multiselectable`                | `Up/Down` to navigate, `Enter/Space` to select, `Home/End` jump                                         | Selected option has `aria-selected="true"`                                            |
| Modal       | `dialog` or `alertdialog`              | `aria-modal`, `aria-labelledby`, `aria-describedby`                             | `Tab` trapped within, `Escape` closes                                                                   | Focus must remain inside, `aria-modal="true"`                                         |
| Switch      | `switch` or `checkbox`                 | `aria-checked="true false"`|                                                     | `Space` to toggle                                                                                       | `aria-checked` reflects state                                                         |
| Tabs        | `tablist`, `tab`, `tabpanel`           | `aria-selected`, `aria-controls`, `aria-labelledby`                             | `Left/Right` to switch tabs, `Tab` to enter tabpanel                                                    | Active tab uses `aria-selected="true"`; active panel shown                            |
| Toolbar     | `toolbar`                              | `aria-label`, `aria-orientation`                                                | `Tab` to enter, `Arrow` keys to move between items                                                      | Toolbar buttons may use `aria-pressed` if toggleable                                  |
| Tooltip     | `tooltip`                              | `aria-describedby` on target pointing to tooltip                                | Shown on `hover` or `focus`                                                                            | Tooltip content shown, referenced from target                                          |
::
