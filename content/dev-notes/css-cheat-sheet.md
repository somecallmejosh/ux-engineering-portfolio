---
slug: css-cheat-sheet
publishedAt: 2025-05-21
title: 'CSS cheatsheet'
description: 'The CSS version of my cheatsheet collection: real-world styles and features I actually use in UI development.'
tags: [css, cheatsheet]
image: 'https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747854516/josh-portfolio/assets_task_01jvt3tc9vfj7b24h9jabzn9e0_1747854456_img_2.webp'
image_alt: 'An illustration of CSS code snippets'
---

::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

A real-world set of styles and features I actually use in UI development. No exhaustive encyclopedias here, just the essentials that make interfaces better for people.

## Reset and Normalize

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:where(*) {
  font-family: inherit;
  color: inherit;
}
```

## Selectors and specificity

```css
/* Class selector */
.button {
  background: blue;
}

/* ID selector (higher specificity) */
#main-button {
  background: red;
}

/* Attribute selector */
input[type='email'] {
  border-color: green;
}

/* Pseudo-elements */
.card::before {
  content: '★';
  margin-right: 0.5rem;
}

/* Pseudo-classes */
li:nth-child(odd) {
  background: #f9f9f9;
}
```

## The box model

::CallOut
**Box-sizing: border-box** is your friend. Just use it and save yourself the headache of calculating widths and heights. It makes everything easier to manage.
::

```css
.box {
  box-sizing: border-box;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
}
```

## Layout systems

### Flexbox

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

### Grid

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
```

## Typography

```css
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-wrap: pretty;
}
```

Additions like `text-wrap: balance;` and `text-wrap: pretty;` help prevent awkward text breaks.

```css
h1 {
  text-wrap: balance;
  max-inline-size: 30ch;
}
```

## Custom properties (CSS variables) and theming

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111111;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #000000;
    --color-text: #eeeeee;
  }
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

## Layers

```css
@layer base {
  body {
    font-family: system-ui, sans-serif;
  }
}

@layer components {
  .card {
    padding: 1rem;
    border-radius: 8px;
  }
}
```

## Button and form states

```css
input,
textarea,
select,
button {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
}

input:focus,
textarea:focus,
select:focus,
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
}

button:hover {
  background-color: #eee;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:invalid {
  border-color: red;
}
```

## @media and responsive design

```css
@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
    color: #fff;
  }
}
```

## Transitions and animations

```css
.button {
  transition: background-color 0.3s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  animation: fade-in 0.5s ease;
}
```

## Scroll behavior

```css
html {
  scroll-behavior: smooth;
}

.anchor-link {
  scroll-margin-top: 4rem;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: white;
}
```

## Media and object fitting

```css
.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}
```

## Gradients and shadows

```css
.button {
  background: linear-gradient(135deg, #6b73ff, #000dff);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

## Feature Queries

```css
@supports (display: grid) {
  .layout {
    display: grid;
  }
}
```

## Accessibility Tips

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: black;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

*:focus-visible {
  outline: 2px solid dodgerblue;
}

*:focus:not(:focus-visible) {
  outline: none;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
```

## Advanced CSS features

### Owl Selector

```css
.stack > * + * {
  margin-top: 1rem;
}
```

### Modular Scale

A visual rhythm system for typography and spacing.

```css
:root {
  --step-0: 1rem;
  --step-1: 1.25rem;
  --step-2: 1.563rem;
  --step-3: 1.953rem;
  --step-4: 2.441rem;
}
```

### CSS Functions

```css
.box {
  width: calc(100% - 2rem);
  aspect-ratio: 16 / 9;
  filter: brightness(1.1) contrast(1.2);
  clip-path: circle(50%);
}
```

#### Color functions

```css
:root {
  --primary-hue: 220;
  --color-primary: hsl(var(--primary-hue), 90%, 60%);
}
```

### `:not()` selector

```css
.button:not(.disabled) {
  cursor: pointer;
}
.button:not(:disabled) {
  pointer-events: auto;
}
```

### `:has()` selector

```css
.container:has(.active) {
  background-color: lightblue;
}
.container:has(.active) .child {
  color: red;
}
```

## Features to watch

- Anchor Positioning
- Popover API
- CSS Scroll Driven Animations
- @property
- View Transitions
- Container Queries
- CSS Subgrid
- Stylable Select Fields
