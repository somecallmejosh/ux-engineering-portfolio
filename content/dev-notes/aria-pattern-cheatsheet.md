---
slug: aria-pattern-cheatsheet
publishedAt: 2026-01-07
title: 'ARIA Cheatsheet'
description: 'A quick reference for common WAI-ARIA patterns: required roles, ARIA attributes, keyboard behavior, and active state handling.'
tags: [accessibility, cheatsheet]
image: '/images/dev-notes/aria-pattern-cheatsheet.webp'
image_alt: 'ARIA Patterns and Practices Cheatsheet'
---

::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

ARIA (Accessible Rich Internet Applications) is a set of HTML attributes that give assistive technology (AT) extra context about your UI. You add them to your markup to help users with disabilities better understand and navigate your app.

This cheatsheet isn't a comprehensive specification. It's a quick reminder of the things you'll reach for regularly: which roles go where, which attributes to add, how users navigate with a keyboard, and what happens when elements are toggled, selected, or activated.

When this page doesn't cover what you need, the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) has the complete official specification.

## WAI-ARIA Patterns and Practices Cheatsheet

::OverflowX
| Pattern | Required Roles | ARIA Attributes | Keyboard Behavior | Active State Behavior |
| ----------- | ------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Accordion | `button`, `region` | `aria-expanded`, `aria-controls`, `aria-labelledby` | `Tab` to focus, `Enter/Space` to toggle, optional `Up/Down` to navigate headings | `aria-expanded="true"` when open |
| Alert | `alert` | None (must be dynamically injected) | None (announced immediately by screen readers) | Injection triggers assistive technology announcement |
| Breadcrumbs | `navigation` | `aria-label` or `aria-labelledby`, `aria-current="page"` on current link | `Tab` to move between breadcrumb links | `aria-current="page"` marks the active crumb |
| Button | `button` | Optional `aria-pressed` (for toggle) | `Tab` to focus, `Enter/Space` to activate | `aria-pressed="true"` for toggled buttons |
| Carousel | `region`, `group`, `button` | `aria-roledescription`, `aria-label`, `aria-controls`, `aria-hidden` | `Left/Right` to navigate slides, `Tab` through controls | Current slide uses `aria-hidden="false"` |
| Disclosure | `button` | `aria-expanded`, `aria-controls` | `Enter/Space` to toggle | `aria-expanded="true"` when content shown |
| Grid | `grid`, `row`, `columnheader`, `cell` | `aria-colindex`, `aria-rowindex`, `aria-selected` | `Arrow keys` to move, `Shift + Arrow` for multiselect | `aria-selected="true"` on selected cells |
| Landmarks | `banner`, `main`, `nav`, etc. | `aria-label` / `aria-labelledby` (if multiple of same role) | Landmarks can be jumped to with assistive tech | Not applicable |
| Link | `link` | Optional `aria-current="page"` | `Tab` to focus, `Enter` to follow link | `aria-current` identifies current page |
| Listbox | `listbox`, `option` | `aria-selected`, `aria-activedescendant`, `aria-multiselectable` | `Up/Down` to navigate, `Enter/Space` to select, `Home/End` jump | Selected option has `aria-selected="true"` |
| Modal | `dialog` or `alertdialog` | `aria-modal`, `aria-labelledby`, `aria-describedby` | `Tab` trapped within, `Escape` closes | Focus must remain inside, `aria-modal="true"` |
| Switch | `switch` or `checkbox` | `aria-checked="true/false"` | `Space` to toggle | `aria-checked` reflects state |
| Tabs | `tablist`, `tab`, `tabpanel` | `aria-selected`, `aria-controls`, `aria-labelledby` | `Left/Right` to switch tabs, `Tab` to enter tabpanel | Active tab uses `aria-selected="true"`; active panel shown |
| Toolbar | `toolbar` | `aria-label`, `aria-orientation` | `Tab` to enter, `Arrow` keys to move between items | Toolbar buttons may use `aria-pressed` if toggleable |
| Tooltip | `tooltip` | `aria-describedby` on target pointing to tooltip | Shown on `hover` or `focus` | Tooltip content shown, referenced from target |

::
