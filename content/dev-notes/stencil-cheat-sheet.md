---
slug: stencil-cheat-sheet
publishedAt: 2025-06-01
title: "StencilJS Cheatsheet"
description: "This guide walks through JavaScript concepts that are essential to understanding and writing effective Stencil.js Web Components, with examples and usage in context."
tags: [javascript, cheatsheet]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1748818817/josh-portfolio/assets_task_01jwpve66ef7899m8z3zjgmxhr_1748818728_img_1.webp"
image_alt: "An illustration of a developer referencing a StencilJS cheat sheet."
---
::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

This guide walks through JavaScript concepts that are essential to understanding and writing effective Stencil.js Web Components, with examples and usage in context.

## Classes, Class Fields & Decorators
### JavaScript Concept:

- `class` syntax introduces blueprint-based object creation in ES6.
- Fields declared directly inside the class (not in the constructor) are called class fields.
- In TypeScript, you can use decorators to annotate class members with metadata or functionality.

### Stencil-Specific:
Stencil uses decorators provided by `@stencil/core` to add Web Component behavior.

#### Common decorators:
::OverflowX
| Decorator    | Purpose                                                                |
| ------------ | ---------------------------------------------------------------------- |
| `@Component` | Defines metadata for the custom element (tag name, styles, shadow DOM) |
| `@Prop`      | Declares an external, reactive property                                |
| `@State`     | Declares internal reactive state                                       |
| `@Event`     | Declares a custom DOM event emitter                                    |
| `@Method`    | Exposes a method to the DOM element API                                |
| `@Element`   | Gets a reference to the host DOM element                               |
| `@Watch`     | Watches for changes to a specific property                             |
::

```ts
import { Component, Prop, State, Event, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() title: string;
  @State() internalState = 'loading';
  @Event() clicked: EventEmitter<void>;

  private logTitle() {
    console.log(this.title);
  }
}
```

> Decorators are not native JavaScript yet. They're enabled via the TypeScript compiler and Stencil's tooling.


## Modules: import / export
### JavaScript Concept:
- ES Modules (`import`/`export`) allow you to split and reuse logic across files.
- `default` and `named` exports provide flexible import patterns.

### Stencil-Specific:
Stencil relies heavily on module imports to bring in decorators, JSX helpers, and utility functions.

```ts
import { Component, Prop, h } from '@stencil/core';
```

## Arrow Functions & this Context
### JavaScript Concept:
Arrow functions do not bind their own `this`. They inherit from the enclosing scope. This avoids `this` binding bugs.

### Stencil-Specific:
Use arrow functions for event handlers or callbacks to preserve component context.

```ts
handleClick = () => {
  console.log(this.title); // works without .bind(this)
}
```

## Destructuring
### JavaScript Concept:
Pull out values from arrays or objects directly into variables.

### Stencil-Specific:
Useful in render() to simplify code when referencing `@Prop()` or `@State()` values.

```ts
render() {
  const { title, subtitle } = this;
  return <div>{title} - {subtitle}</div>;
}
```

## Rest & Spread Syntax
### JavaScript Concept:
`...` syntax is used to gather (`rest`) or distribute (`spread`) values.

### Stencil-Specific:
Helps with immutability, prop merging, or passing down attributes.

```ts
const newUser = { ...this.user, isActive: true };
```

## JSX + Conditional Logic
### JavaScript Concept:
JSX is syntactic sugar for DOM construction, powered by functions.

### Stencil-Specific:
Stencil uses JSX for rendering templates in `render()`. You can use logic like `&&`, ternaries, or `.map()` inside templates.

```tsx
render() {
  return (
    <div>
      {this.items.length > 0 && this.items.map(item => <p>{item}</p>)}
      {this.error ? <span>Error!</span> : null}
    </div>
  );
}
```

## Async / Await
### JavaScript Concept:
`async`/`await` simplifies handling of asynchronous operations (e.g. API calls).

### Stencil-Specific:
Use in lifecycle methods like `componentWillLoad()` to fetch data before initial render.

```ts
async componentWillLoad() {
  this.data = await fetchUserData();
}

```

## Custom Events
### JavaScript Concept:
`CustomEvent` lets you create custom DOM events that bubble up and carry data.

### Stencil-Specific:
Stencil uses `@Event()` and `EventEmitter` to create custom events in a declarative way.

```ts
@Event() userClicked: EventEmitter<string>;

handleClick() {
  this.userClicked.emit('Josh');
}
```

## Lifecycle Hooks
::OverflowX
| Lifecycle Method          | When it runs                            |
| ------------------------- | --------------------------------------- |
| `componentWillLoad()`     | Before the first render (async allowed) |
| `componentDidLoad()`      | After initial render                    |
| `componentShouldUpdate()` | Right before a re-render (optional)     |
| `componentDidUpdate()`    | After every update                      |
| `disconnectedCallback()`  | When the component is removed from DOM  |
::

```ts
componentDidLoad() {
  this.trackAnalyticsView();
}
```

## Watchers
### JavaScript Concept:
Reacts to changes in values or props.

### Stencil-Specific:
Use `@Watch()` to run logic when a `@Prop` or `@State` changes.

```ts
@Prop() count: number;

@Watch('count')
handleCountChange(newVal: number, oldVal: number) {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
}
```

## Array Methods: .map(), .filter()
### JavaScript Concept:
- `.map()` transforms arrays.
- `.filter()` filters based on condition.

### Stencil-Specific:
Use to loop over and render lists dynamically inside JSX.

```tsx
<ul>
  {this.items.map(item => (
    <li>{item.name}</li>
  ))}
</ul>
```

## Truthy/Falsy & Ternary Operators
### JavaScript Concept:
Evaluate conditions inline using logical short-circuiting or ternaries.

### Stencil-Specific:
Common in `render()` logic.

```tsx
{this.isLoading ? <p>Loading...</p> : <p>Content ready!</p>}
{this.hasError && <p>Something went wrong.</p>}
```

## Closures, Factory Methods & Dynamic Handlers
### JavaScript Concept:
- **Closures** are functions that "remember" variables from the scope where they were created.
- **Factory methods** return new functions or objects, often customized for specific use.
- **Dynamic handlers** are functions generated on-the-fly for context-specific behavior.

### Stencil-Specific:
Closures and factory functions help create reusable logic for event handlers or conditional behavior.

Closure example:
```ts
function logOnClick(message: string) {
  return () => console.log(message);
}
```

In a Stencil component:
```ts
render() {
  return (
    <button onClick={this.getClickHandler('Save clicked')}>Save</button>
  );
}

getClickHandler(msg: string) {
  return () => console.log(msg);
}
```
> This is powerful for rendering lists where each button needs a unique handler.

## TypeScript Essentials
Stencil uses TypeScript by default. Know these basics:

- Primitive types: `string`, `number`, `boolean`, etc.
- Union types: `'sm'` | `'md'` | `'lg'`
- Interfaces: Define shape of props or data models.
- Optional props: `@Prop() label?: string`

```ts
@Prop() variant: 'primary' | 'secondary' = 'primary';

interface User {
  id: number;
  name: string;
}
```

## DOM APIs & Focus Management
Stencil gives you access to native DOM APIs via `@Element()`.

### Use cases:
- Setting focus
- Managing keyboard interaction
- Querying child elements

```ts
@Element() host: HTMLElement;

focusInput() {
  this.host.querySelector('input')?.focus();
}
```

## Common Gotchas & Fixes

::OverflowX
| Problem                           | Solution                                                       |
| --------------------------------- | -------------------------------------------------------------- |
| Prop doesn't trigger re-render    | Use `@State` or `@Watch` instead of mutating props directly    |
| `this` is `undefined` in a method | Use arrow function or bind in constructor                      |
| Custom event doesn’t bubble       | Add `{ bubbles: true, composed: true }` to `CustomEvent`       |
| Shadow DOM styles not applying    | Use `:host`, `::part`, or disable shadow DOM (`shadow: false`) |
::
