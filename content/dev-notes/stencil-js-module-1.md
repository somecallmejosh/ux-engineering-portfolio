---
slug: stencil-js-module-1
publishedAt: 2025-05-03
title: "Web Components & Stencil.js"
description: "Getting comfortable with what Stencil does and how it Builds Web Components."
tags: [web-components]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1746155978/josh-portfolio/assets_task_01jt7fzwz0f0wvg0x0c4dzz89j_1746155911_img_0.webp"
image_alt: "A screenshot of a Stencil.js component in action, showcasing a web component in a browser."
---

## Topics to cover:
- What is Stencil? (compiler, JSX syntax, props, state, lifecycle)
- How Shadow DOM works and what encapsulation means
- Slots and @Prop, @State, @Event, @Method

Output: A simple `<fancy-button>` or `<my-modal>` component with props, styles, and events

## What Is Stencil.js?
Stencil is a compiler, not a runtime framework. You write components using a familiar syntax (it looks like JSX/React), and it compiles your code into standards-based Web Components.

### Key benefits for design systems:
- Output is native Web Components, usable in any framework
- Built-in support for encapsulation, slots, props, and state
- Super small footprint
- Built-in TypeScript and lazy loading

### Basic Stencil Component Example
Here’s what a simple Stencil component looks like:

```tsx
// src/components/my-button/my-button.tsx

import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true, // Enables Shadow DOM
})
export class MyButton {
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>;
  }
}
```

::OverflowX
| Part | Meaning |
|------|---------|
| `@Component` | Defines metadata like the tag name and style path |
| `@Prop()` | Defines a public property the consumer can pass in |
| `shadow: true` | Uses Shadow DOM for style encapsulation |
| `h()` | Hyperscript function (like React’s `createElement`) |
| `render()` | Returns JSX, compiled to `createElement()` under the hood |
::

### Usage in HTML
Stencil builds this into a standard Web Component:

```html
<my-button label="Click me"></my-button>
```
Stencil will auto-generate the proper JS to register this tag with the browser.

## What To Remember
- Stencil compiles to native Web Components
- Each component is self-contained and framework-agnostic
- Props are passed via attributes, and internal state uses @State()
- Shadow DOM encapsulates both DOM and styles
- Components are tree-shakable, lazy-loaded by default

## Lifecycle Hooks

Stencil offers several lifecycle methods — here are the ones you’ll use most:

::OverflowX
| Hook | When it runs |
|------|--------------|
| `componentWillLoad()` | Before the component first renders (sync or async) |
| `componentDidLoad()` | After the component is rendered and attached to the DOM |
| `componentShouldUpdate()` | Before a re-render when props/state change |
| `componentDidUpdate()` | After a re-render |
| `componentDidUnload()` | When the component is removed from the DOM |
::

```tsx
componentWillLoad() {
  console.log('Component is about to be rendered');
}

componentDidLoad() {
  console.log('Component has rendered and is now in the DOM');
}
```

## Slots (Content Projection)
Stencil supports the standard Web Component `<slot>` element, which allows consumers to inject content into your component.

### Example: Slotted Button

```tsx
@Component({
  tag: 'fancy-card',
  styleUrl: 'fancy-card.css',
  shadow: true,
})
export class FancyCard {
  render() {
    return (
      <div class="card">
        <slot name="header"></slot>
        <div class="content">
          <slot></slot> {/* default slot */}
        </div>
      </div>
    );
  }
}
```

### Consumer usage:

```html
<fancy-card>
  <h2 slot="header">Card Header</h2>
  <p>This is the card content.</p>
</fancy-card>
```

This works similarly to Vue slots or React props.children.

## Custom Events (Component Communication)
You can use `@Event()` to emit custom DOM events from your Web Component. Consumers (even in React or Angular) can listen to them.

### Example: Button with click event

```tsx
import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fancy-button',
  shadow: true,
})
export class FancyButton {
  @Event() buttonClicked: EventEmitter<void>;

  handleClick() {
    this.buttonClicked.emit();
  }

  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
```

### Listening in plain HTML:

```html
<fancy-button onbuttonClicked="alert('clicked!')"></fancy-button>
```

::CallOut
🔎 React/Angular note: Event names are lowercase in Stencil but often need to be camelCased in React (e.g. onButtonClicked), and explicitly bound using addEventListener.
::

## Example Alert Banner Component

```tsx
// file: src/components/alert-banner/alert-banner.tsx

import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'alert-banner',
  styleUrl: 'alert-banner.css',
  shadow: true,
})
export class AlertBanner {
  @Prop() isVisible: boolean = true;
  @Event() dismissed: EventEmitter<void>;

  componentDidLoad() {
    // Just demoing one of the lifecycle hooks
    console.log('AlertBanner mounted');
  }

  handleDismiss() {
    this.dismissed.emit();
  }

  render() {
    if (!this.isVisible) return null;

    return (
      <div class="alert">
        <slot></slot>
        <button class="close-btn" onClick={() => this.handleDismiss()}>
          &times;
        </button>
      </div>
    );
  }
}
```

### Alert CSS

```css
/* file: alert-banner.css */

.alert {
  background-color: #ffeeba;
  color: #856404;
  padding: 1rem;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}
```

### Usage in HTML

#### Visible
```html
<!-- Visible -->
<alert-banner is-visible="true" ondismissed="console.log('dismissed')">
  Hello again! I’m still here.
</alert-banner>

<!-- Hidden -->
 <alert-banner is-visible="false">
  You won’t see me unless someone sets isVisible = true.
</alert-banner>
```

### Simulate Alert Usage in POJS
```html
<alert-banner id="notice" is-visible="true">
  This banner can be closed by the user.
</alert-banner>

<script>
  const banner = document.getElementById('notice');

  banner.addEventListener('dismissed', () => {
    // Remove the attribute or set it to "false"
    banner.setAttribute('is-visible', 'false');
  });
</script>
```
::CallOut
Important: Stencil treats `@Prop()` values as strings when passed via HTML attributes, so we must use "false" as a string.
::

## Alert Host

We'll create a new component: `<alert-host>`, which renders the `<alert-banner>`, and responds to its dismissed event.

### Behavior
- When `<alert-host>` mounts, it shows an alert
- When `<alert-banner>` emits a dismissed event, the parent hides it

### Alert Host Component

```tsx
// file: alert-host.tsx

import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'alert-host',
  shadow: true,
})
export class AlertHost {
  @State() showBanner: boolean = true;

  handleDismiss = () => {
    this.showBanner = false;
  };

  render() {
    return (
      <div>
        {this.showBanner && (
          <alert-banner
            is-visible={true}
            onDismissed={this.handleDismiss}
          >
            This is a parent-controlled alert!
          </alert-banner>
        )}
      </div>
    );
  }
}
```
### Key Concepts:
- `@State()` is reactive — when showBanner changes, the component re-renders
- We use `onDismissed` to handle the child’s custom event
- This is similar to how a React parent listens for child events and updates local state
