---
slug: component-library-requirements
publishedAt: 2026-03-01
title: 'What your component library actually needs'
description: 'What a component library needs varies significantly depending on your rendering model. This guide covers the bare essentials for server-rendered monoliths, client-rendered frameworks, and hybrid frameworks.'
tags: [accessibility, design-systems, best-practices, component-library-guide]
image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772938565/josh-portfolio/20260307_2155_Image_Generation_simple_compose_01kk5nwjhzf5wspkh35zj994yq.png'
image_alt: 'A designer and two developers working on a design system.'
---

::TagMenu{tag="component-library-guide"}
Component libraries: a practical guide
::

"Component library" means different things depending on what you're building with. The bare essentials for a Ruby on Rails application are meaningfully different from what a React single-page application needs, which is different again from what a Next.js or Nuxt project requires.

This article covers what every component library needs regardless of stack, then breaks down the specific requirements and constraints for each rendering model.

## What every component library needs

Before getting into rendering-model specifics, some things are universal. A component library without these isn't a library; it's a collection of files.

### Consistent design tokens

Every component should reference shared tokens for color, spacing, typography, border radius, and shadow rather than hard-coded values. Tokens make global changes predictable and keep the visual system coherent as the library grows. For a full treatment of tokens, see [everything you need to know about design tokens](/blog/design-system-tokens/).

### Documented component API

Every component needs documentation that covers what it does, what inputs it accepts, what states it supports, and how to use it accessibly. Documentation that lives alongside the component in a tool like Storybook is more likely to stay current than documentation maintained separately.

### Accessibility built in

Every interactive component needs correct keyboard behavior, appropriate ARIA attributes, and sufficient color contrast. Accessibility added after the fact costs significantly more than accessibility built in from the start.

### A clear naming convention

Components, tokens, and files should follow a naming convention that's consistent and predictable. New team members should be able to find what they need without asking. The convention itself matters less than applying it consistently.

### Version control

Changes to components affect every consumer of the library. Version control (whether through a package version, a changelog, or a clearly communicated release process) lets consuming teams understand what changed and why.

## Server-rendered monoliths: Rails, Django, Laravel

In a server-rendered monolith, HTML is generated on the server and sent to the browser. JavaScript is an enhancement, not the foundation. This changes what a component library needs to be.

### What server-rendered components look like

In Rails, components are typically implemented as ViewComponents, partials, or helpers. In Django, they're template tags or template fragments. In Laravel, they're Blade components. The pattern varies by framework, but the concept is consistent: a component is a reusable piece of server-rendered HTML with a defined interface.

A Rails ViewComponent, for example, is a Ruby class paired with a template file:

```ruby
# app/components/button_component.rb
class ButtonComponent < ViewComponent::Base
  def initialize(label:, variant: :primary, disabled: false)
    @label = label
    @variant = variant
    @disabled = disabled
  end
end
```

```erb
<%# app/components/button_component.html.erb %>
<button class="btn btn--<%= @variant %>" <%= "disabled" if @disabled %>>
  <%= @label %>
</button>
```

### Bare essentials for server-rendered libraries

**CSS architecture:** Without a JavaScript component model, CSS carries the full weight of visual consistency. A well-structured CSS architecture using design tokens and a clear naming convention (BEM, utility classes, or a combination) is the foundation of the library.

**Progressive enhancement:** JavaScript interactions should be layered on top of HTML that works without them. A dropdown that's accessible with only HTML and CSS first, then enhanced with JavaScript for smoother behavior, is more resilient than one that requires JavaScript to function at all.

**Stimulus or Alpine.js for interactivity:** Rails applications commonly use [Stimulus](https://stimulus.hotwire.dev/) or [Alpine.js](https://alpinejs.dev/) for lightweight JavaScript behavior. If your library includes interactive components like modals or tabs, these tools let you add behavior without introducing a full JavaScript framework.

**Hotwire/Turbo awareness** (Rails-specific): If your Rails application uses Turbo for navigation, components need to work correctly with Turbo Drive and Turbo Frames. This affects how JavaScript is initialized and torn down when content updates.

**Server-side rendering of states:** Hover and focus states are handled by CSS. Active, disabled, error, and loading states are typically rendered server-side as conditional HTML. The library needs to define and document all states so they're implemented consistently across the application.

### What you can skip

A server-rendered library doesn't need a JavaScript component model, a virtual DOM, or a state management system. It doesn't need to handle client-side routing. Keeping the library close to the platform (HTML, CSS, and minimal JavaScript) keeps it maintainable and fast.

## Client-rendered frameworks: React, Vue, Angular

In a client-rendered single-page application (SPA), JavaScript runs in the browser and manages the entire interface. The component model is central to how the application works, which changes what the library needs to provide.

### What client-rendered components look like

Components in React are functions or classes that return JSX. In Vue, they're single-file components (`.vue` files) that combine template, script, and styles. In Angular, they're classes decorated with `@Component`.

Each framework has its own conventions, but the component concept is consistent: a component encapsulates a piece of UI, manages its own state, and accepts inputs through props or attributes.

### Bare essentials for client-rendered libraries

**A consistent component API design:** Decide early how components accept inputs (props), communicate outputs (events or callbacks), and expose internal behavior (slots or render props). Consistency across the library reduces the cognitive overhead of working with it.

**Prop validation and TypeScript types:** Client-rendered frameworks benefit significantly from typed component interfaces. TypeScript catches prop misuse at development time, makes components self-documenting, and enables editor tooling like autocomplete and inline documentation.

```typescript
// React example with TypeScript
interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'destructive'
  disabled?: boolean
  onClick?: () => void
}
```

**State handling conventions:** Decide which state belongs inside components and which belongs outside. Components in a library should generally be as stateless as possible, accepting data through props and communicating changes through events. This makes them more reusable and easier to test.

**Slots and composition patterns:** Components that accept children or named slots are more flexible than components that only accept primitive props. A card component that accepts a header slot, a body slot, and a footer slot is more useful than one with separate `headerText`, `bodyText`, and `footerText` props.

**Storybook:** [Storybook](https://storybook.js.org/) is the standard tool for developing, documenting, and testing components in isolation. It provides a development environment, a documentation hub, and an integration point for visual regression testing and accessibility checks.

**Testing:** Component tests should verify behavior rather than implementation details. Test that a button fires its click handler when activated, not that it has a specific CSS class. [Testing Library](https://testing-library.com/) is the standard approach for React and Vue. Angular uses its own testing utilities with Jasmine or Jest.

## Hybrid frameworks: Next.js, Nuxt, SvelteKit, Remix

Hybrid frameworks blur the line between server and client rendering. A single application may render some routes on the server, some on the client, and some at build time. This flexibility is powerful, but it introduces constraints that affect component library design.

### The server/client boundary

In Next.js (App Router) and Nuxt 3, components are server components by default. Server components run only on the server and can access databases and APIs directly. They cannot use browser APIs, event listeners, or React hooks that depend on client state.

Client components opt in to browser capabilities using a directive:

```tsx
// Next.js
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

A component library for Next.js or Nuxt needs to be explicit about which components are server-safe and which require client rendering.

### Bare essentials for hybrid framework libraries

**Clear server/client labeling:** Document which components are server components and which are client components. Importing a client component into a server context causes an error. Teams shouldn't have to discover this at runtime.

**Minimal client boundaries:** The performance benefits of server rendering are maximized when client components are as small and focused as possible. Library components that mix server and client concerns force consumers to render more on the client than necessary. Push interactivity to the leaves of the component tree.

**Hydration awareness:** Components that render differently on the server and client cause hydration mismatches, which produce console errors and can break interactivity. Library components should render identically on server and client, or explicitly handle the difference.

**CSS strategy that works with server rendering:** Some CSS-in-JS libraries that work well in client-only React have limitations with server rendering. CSS Modules, Tailwind CSS, and plain CSS custom properties all work correctly in hybrid contexts without additional configuration.

**Streaming and Suspense compatibility** (Next.js/React): Components that work correctly inside React Suspense boundaries give consumers more flexibility. Components that perform synchronous blocking work limit streaming options.

### What Nuxt-specific libraries need

Nuxt 3 uses Vue's composition API and auto-imports components from the `components/` directory. A component library for Nuxt benefits from:

- Supporting Vue's `<Teleport>` for portals (modals, tooltips)
- Using `useNuxtApp()` rather than browser globals for SSR safety
- Providing Nuxt module packaging for straightforward integration

## Choosing a CSS strategy

CSS strategy varies by rendering model and deserves explicit consideration.

| Rendering model          | Recommended approach                                     |
| ------------------------ | -------------------------------------------------------- |
| Server-rendered monolith | Plain CSS with design tokens, BEM or utility classes     |
| React SPA                | CSS Modules, Tailwind CSS, or styled-components          |
| Vue SPA                  | Scoped styles in single-file components, or Tailwind CSS |
| Next.js / Nuxt           | CSS Modules or Tailwind CSS (avoid runtime CSS-in-JS)    |

The common thread: design tokens should drive the values regardless of which CSS approach you choose. The mechanism for applying those values varies, but the source of truth should always be the token system.

## A starting checklist

Regardless of rendering model, a component library is ready to use when it has:

- Design tokens for color, spacing, typography, and radius
- A documented component API for each component
- Keyboard navigation and ARIA attributes on all interactive components
- Sufficient color contrast on all text and UI elements
- Variants and states documented (default, hover, focus, disabled, error)
- A Storybook instance (or equivalent) for development and documentation
- A naming convention applied consistently across components, tokens, and files
- A process for communicating changes to consuming teams

If the rendering model constraints in this article apply to your product and you're not sure where to start, the [component library starter service](/services/) builds a well-architected foundation tailored to your stack.
