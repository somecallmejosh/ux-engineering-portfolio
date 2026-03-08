---
slug: design-system-tokens
publishedAt: 2026-03-02
title: 'Everything you need to know about design tokens'
description: 'Design tokens are the foundation of any scalable design system. This guide explains what they are, how they work, how to name and structure them, and how to use them across Figma and code.'
tags: [design-systems, component-libraries, best-practices, design-system-guide]
image: "/images/blog/design-system-tokens.png"
image_alt: 'A developer working on a design system.'
---

::TagMenu{tag="design-system-guide"}
Component libraries: a practical guide
::

Design tokens sound more complicated than they are. Once you understand what they do and why they exist, they become one of the most practical tools in a design system.

This guide covers what tokens are, the different types, how to name and structure them, how they move from design tools to code, and the mistakes that make them harder to use than they need to be.

## What a design token is

A design token is a named value that stores a visual decision. Instead of using a raw value like `#0057B8` or `16px` directly in a design or codebase, you give that value a name (`color.brand.primary` or `spacing.4`) and reference the name everywhere it applies.

The name is the token. The value is what the token resolves to.

This distinction matters because the name carries intent. `#0057B8` is a hex code. `color.brand.primary` is a decision: this is the primary brand color. When you need to update that color, you change the token's value in one place and the change propagates everywhere the token is used: across Figma components, CSS stylesheets, JavaScript constants, and any other platform the token has been published to.

Without tokens, the same value gets repeated dozens or hundreds of times across a codebase. Updating it means finding every instance and changing it manually, and missing one creates inconsistency.

## What tokens store

Tokens can represent any visual property that benefits from being named and centralized. The most common categories are:

**Color** — brand colors, semantic colors (success, warning, error, info), surface colors, text colors, border colors.

**Spacing** — the scale of values used for padding, margin, and gap. A spacing scale typically follows a consistent mathematical relationship between steps, for example `4px`, `8px`, `12px`, `16px`, `24px`, `32px`.

**Typography** — font families, font sizes, font weights, line heights, and letter spacing.

**Border radius** — the degree of rounding applied to corners. A system might define `radius.none`, `radius.sm`, `radius.md`, `radius.lg`, and `radius.full`.

**Shadow** — box shadow values for elevation levels.

**Motion** — duration and easing values for transitions and animations.

**Z-index** — layering values for stacking contexts.

You don't need tokens for all of these categories. Start with color, spacing, and typography, then expand as your system matures.

## The three tiers of tokens

Well-structured token systems separate tokens into tiers. Understanding the tiers is the key to building a token system that's flexible without becoming chaotic.

### Tier 1: Global tokens (primitive values)

Global tokens define the full palette of available values without any semantic meaning attached. They answer the question: what values exist?

```javascript
color.blue.100: #E6F0FA
color.blue.200: #BDDAF4
color.blue.300: #94C4EE
color.blue.400: #6BAEE8
color.blue.500: #0057B8
color.blue.600: #004A9E
```

Global tokens are the raw material. They're not referenced directly in components. Instead, semantic tokens reference them.

### Tier 2: Semantic tokens (alias tokens)

Semantic tokens assign meaning to global values. They answer the question: what is this value for?

```javascript
color.brand.primary: {color.blue.500}
color.brand.primary.hover: {color.blue.600}
color.text.default: {color.neutral.900}
color.text.subtle: {color.neutral.600}
color.background.surface: {color.neutral.0}
color.feedback.error: {color.red.500}
```

Semantic tokens are what components reference. A button uses `color.brand.primary` for its background, not `#0057B8` and not `color.blue.500`. This matters when you need to support multiple themes or when the brand color changes. You update the global token's value, and every semantic token that references it updates automatically.

### Tier 3: Component tokens (optional)

Component tokens are scoped to a specific component. They answer the question: what value does this component use for this property?

```javascript
button.background.default: {color.brand.primary}
button.background.hover: {color.brand.primary.hover}
button.text.color: {color.text.on-brand}
button.border.radius: {radius.md}
button.padding.x: {spacing.4}
```

Component tokens aren't always necessary. Smaller systems can reference semantic tokens directly in components without the additional layer. In larger systems with more complex theming requirements, the separation lets you change component behavior without touching the global or semantic tiers.

## How to name tokens well

Token naming is where most systems go wrong. Names that seem clear when you create them become confusing as the system grows, especially when values change or new people join the team.

### Use a consistent naming structure

A predictable structure makes tokens findable and self-documenting. A common pattern is:

```javascript
category.variant.property.state
```

For example:

```javascript
color.brand.primary.default
color.brand.primary.hover
color.brand.primary.disabled
color.text.subtle.default
spacing.component.button.padding - x
```

Not every token needs all four segments. Use as many as the value requires to be unambiguous.

### Name for intent, not appearance

`color.blue.primary` ties the token to a specific color. If the brand color changes from blue to teal, the name becomes misleading. `color.brand.primary` survives a rebrand because it describes the role, not the appearance.

The same principle applies to spacing. `spacing.small` is vague. `spacing.4` communicates the scale step. `spacing.component.input.gap` communicates the intent. The right choice depends on the tier: global tokens can use scale-based names, semantic tokens should use intent-based names.

### Avoid abbreviations

`clr-bg-pri-dflt` is harder to read and remember than `color.background.primary.default`. The extra characters are worth it.

### Be consistent with separators

Pick one separator convention and use it everywhere. Common choices are dot notation (`color.brand.primary`), kebab-case (`color-brand-primary`), or camelCase (`colorBrandPrimary`). Different platforms may require different formats, which is why transformation tools exist. Your source of truth should use one consistent format.

## How tokens move from design to code

A token defined in Figma needs to reach the codebase in a usable format. Several tools and workflows support this.

### Figma Variables

Figma Variables are the native way to define tokens inside Figma. You can create variable collections for color, spacing, typography, and other properties, organize them into groups that reflect your tier structure, and reference them across components.

Variables defined in Figma are visible in the inspect panel when you select a component, giving you token names alongside the raw values. When Figma Code Connect is configured, it surfaces the actual code snippet that uses the token.

### Token transformation with Style Dictionary

[Style Dictionary](https://amzn.github.io/style-dictionary/) is an open source tool that takes tokens defined in a platform-agnostic format (typically JSON) and transforms them into whatever output format each platform needs.

A single token definition:

```json
{
  "color": {
    "brand": {
      "primary": {
        "value": "#0057B8",
        "type": "color"
      }
    }
  }
}
```

Style Dictionary transforms it into:

```css
/* CSS custom properties */
--color-brand-primary: #0057b8;
```

```scss
/* Sass variables */
$color-brand-primary: #0057b8;
```

```js
// JavaScript / TypeScript
export const colorBrandPrimary = '#0057B8'
```

```xml
<!-- Android -->
<color name="color_brand_primary">#0057B8</color>
```

Style Dictionary handles the transformation automatically. You maintain one source of truth and publish to as many platforms as needed.

### Token management tools

Several tools sit between Figma and Style Dictionary to make the workflow more accessible:

- **[Tokens Studio for Figma](https://tokens.studio/)** — a Figma plugin that allows token management directly in the design tool, with export to JSON and integration with version control.
- **[Supernova](https://supernova.io/)** — a platform for managing design system documentation and token publishing across platforms.
- **[Theo](https://github.com/salesforce-ux/theo)** — a token transformation tool similar to Style Dictionary, developed by Salesforce.

The right tool depends on your team's workflow and technical setup. Tokens Studio is a practical starting point for most teams because it works directly inside Figma and requires no separate infrastructure.

## Tokens and theming

One of the most powerful applications of a well-structured token system is theming. Because semantic tokens are aliases that point to global tokens, you can create an entirely different visual theme by redefining which global values the semantic tokens resolve to.

A light theme and a dark theme don't require separate component implementations. They require two sets of semantic token definitions:

```javascript
/* Light theme */
color.background.surface: {color.neutral.0}    /* white */
color.text.default: {color.neutral.900}         /* near-black */

/* Dark theme */
color.background.surface: {color.neutral.900}  /* near-black */
color.text.default: {color.neutral.0}           /* white */
```

Components that use `color.background.surface` and `color.text.default` render correctly in both themes without any changes to component code. The theme switch changes the token resolution, not the component.

This same pattern supports high-contrast modes, brand white-labeling, and any other scenario where the same component structure needs different visual output.

## Common mistakes

### Using raw values in components

Bypassing tokens and using raw values directly in components is the most common mistake. It creates a codebase where visual decisions are scattered and impossible to update consistently. If tokens exist, use them, even when reaching for the token feels slower than typing a hex code.

### Skipping the semantic tier

A token system with global tokens but no semantic tier forces every consumer to understand the full palette and decide which value to use. `color.blue.500` tells you nothing about when to use it. `color.brand.primary` tells you exactly.

### Naming for current appearance

Token names that describe appearance break when the design changes. A button currently styled with `color.blue.500` might use a name like `button.background.blue`. When the button becomes green, the name is wrong: you either have to update it everywhere it's referenced or live with a misleading name. Name for intent from the start.

### Inconsistent token application

A token system only works if it's used consistently. If some components use tokens and others use raw values, the system provides partial coverage and updates remain partially manual. Consistency requires both tooling (linting rules that flag raw values) and culture (code review that catches token misuse).

### Over-engineering the structure

The three-tier model is a useful framework, not a mandatory architecture. A small team building a product for a single brand may not need component tokens at all. A system with two color themes may not need the full complexity of a token transformation pipeline. Start with the simplest structure that solves the actual problem, and add tiers as the system grows.

## Glossary

**Design token** — A named value that stores a visual decision such as a color, spacing value, or typography setting.

**Global token** — A token that defines a raw value without semantic meaning. Part of the first tier of a token system.

**Semantic token** — A token that references a global token and assigns it a specific role or intent. Part of the second tier of a token system.

**Component token** — A token scoped to a specific component that references a semantic token. Part of the optional third tier of a token system.

**Alias** — A token that references another token's value rather than defining a raw value directly.

**Style Dictionary** — An open source tool that transforms token definitions into platform-specific output formats.

**Tokens Studio** — A Figma plugin for managing design tokens inside the design tool.

**Figma Variables** — A native Figma feature for defining named values that you can reference across components and design files.

**CSS custom properties** — Variables you define in CSS with the `--property-name: value` syntax and reference with `var(--property-name)`.

**Theming** — The practice of defining multiple sets of token values that produce different visual appearances from the same component structure.
