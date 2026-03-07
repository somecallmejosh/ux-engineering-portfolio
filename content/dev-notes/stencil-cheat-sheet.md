---
slug: stencil-cheat-sheet
publishedAt: 2025-06-01
title: "StencilJS cheatsheet"
description: "JavaScript concepts you need to understand and write effective Stencil.js web components, with examples in context."
tags: [javascript, cheatsheet, web-components, stencil-js]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1748818817/josh-portfolio/assets_task_01jwpve66ef7899m8z3zjgmxhr_1748818728_img_1.webp"
image_alt: "An illustration of a developer referencing a StencilJS cheat sheet."
---
::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

This guide covers JavaScript concepts you need to understand and write effective Stencil.js web components, with examples in context.

## Classes, class fields, and decorators
### JavaScript concept:

- `class` syntax introduces blueprint-based object creation in ES6.
- Fields declared directly inside the class (not in the constructor) are called class fields.
- In TypeScript, you can use decorators to annotate class members with metadata or functionality.

### Stencil-specific:
Stencil uses decorators from `@stencil/core` to add web component behavior.

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

> Decorators are not native JavaScript. The TypeScript compiler and Stencil's tooling enable them.


## Modules: import and export
### JavaScript concept:
- ES modules (`import`/`export`) let you split and reuse logic across files.
- `default` and named exports provide flexible import patterns.

### Stencil-specific:
Stencil relies on module imports to bring in decorators, JSX helpers, and utility functions.

```ts
import { Component, Prop, h } from '@stencil/core';
```

## Arrow functions and `this` context
### JavaScript concept:
Arrow functions don't bind their own `this`. They inherit it from the enclosing scope, which avoids `this` binding bugs.

### Stencil-specific:
Use arrow functions for event handlers or callbacks to preserve component context.

```ts
handleClick = () => {
  console.log(this.title); // works without .bind(this)
}
```

## Destructuring
### JavaScript concept:
Pull values from arrays or objects directly into variables.

### Stencil-specific:
Useful in `render()` to simplify references to `@Prop()` or `@State()` values.

```ts
render() {
  const { title, subtitle } = this;
  return <div>{title} - {subtitle}</div>;
}
```

## Rest and spread syntax
### JavaScript concept:
The `...` syntax gathers (`rest`) or distributes (`spread`) values.

### Stencil-specific:
Useful for immutability, prop merging, or passing attributes down.

```ts
const newUser = { ...this.user, isActive: true };
```

## JSX and conditional logic
### JavaScript concept:
JSX is syntactic sugar for DOM construction, powered by functions.

### Stencil-specific:
Stencil uses JSX for rendering templates in `render()`. You can use `&&`, ternaries, or `.map()` inside templates.

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

## Async/await
### JavaScript concept:
`async`/`await` simplifies handling asynchronous operations, such as API calls.

### Stencil-specific:
Use in lifecycle methods like `componentWillLoad()` to fetch data before the initial render.

```ts
async componentWillLoad() {
  this.data = await fetchUserData();
}

```

## Custom events
### JavaScript concept:
`CustomEvent` lets you create custom DOM events that bubble up and carry data.

### Stencil-specific:
Stencil uses `@Event()` and `EventEmitter` to declare custom events.

```ts
@Event() userClicked: EventEmitter<string>;

handleClick() {
  this.userClicked.emit('Josh');
}
```

## Lifecycle hooks
::OverflowX
| Lifecycle method          | When it runs                            |
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
### JavaScript concept:
Reacts to changes in values or props.

### Stencil-specific:
Use `@Watch()` to run logic when a `@Prop` or `@State` value changes.

```ts
@Prop() count: number;

@Watch('count')
handleCountChange(newVal: number, oldVal: number) {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
}
```

## Array methods: `.map()` and `.filter()`
### JavaScript concept:
- `.map()` transforms arrays.
- `.filter()` filters based on a condition.

### Stencil-specific:
Use these to loop over and render lists dynamically in JSX.

```tsx
<ul>
  {this.items.map(item => (
    <li>{item.name}</li>
  ))}
</ul>
```

## Truthy/falsy and ternary operators
### JavaScript concept:
Evaluate conditions inline using logical short-circuiting or ternaries.

### Stencil-specific:
Common in `render()` logic.

```tsx
{this.isLoading ? <p>Loading...</p> : <p>Content ready!</p>}
{this.hasError && <p>Something went wrong.</p>}
```

## Closures, factory methods, and dynamic handlers
### JavaScript concept:
- **Closures** are functions that remember variables from the scope where they were created.
- **Factory methods** return new functions or objects, often customized for a specific use.
- **Dynamic handlers** are functions generated on the fly for context-specific behavior.

### Stencil-specific:
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
> Use this pattern when rendering lists where each item needs a unique handler.

## TypeScript essentials
Stencil uses TypeScript by default. These are the basics most relevant to Stencil:

- Primitive types: `string`, `number`, `boolean`, and so on.
- Union types: `'sm'` | `'md'` | `'lg'`
- Interfaces: define the shape of props or data models.
- Optional props: `@Prop() label?: string`

```ts
@Prop() variant: 'primary' | 'secondary' = 'primary';

interface User {
  id: number;
  name: string;
}
```

## DOM APIs and focus management
Stencil gives you access to native DOM APIs via `@Element()`.

Common uses:
- Setting focus
- Managing keyboard interaction
- Querying child elements

```ts
@Element() host: HTMLElement;

focusInput() {
  this.host.querySelector('input')?.focus();
}
```

## Common gotchas and fixes

::OverflowX
| Problem                           | Solution                                                       |
| --------------------------------- | -------------------------------------------------------------- |
| Prop doesn't trigger re-render    | Use `@State` or `@Watch` instead of mutating props directly    |
| `this` is `undefined` in a method | Use an arrow function or bind in the constructor               |
| Custom event doesn't bubble       | Add `{ bubbles: true, composed: true }` to `CustomEvent`       |
| Shadow DOM styles not applying    | Use `:host`, `::part`, or disable shadow DOM (`shadow: false`) |
::
