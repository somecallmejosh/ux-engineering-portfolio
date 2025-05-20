---
slug: building-a-modal-with-stencil-js
publishedAt: 2025-05-13
title: "Building an Accessible Modal with StencilJS"
description: "This article walks through how to create an accessible, keyboard-navigable, WCAG-compliant modal dialog using StencilJS."
tags: [stenciljs, webcomponents]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747163308/josh-portfolio/assets_task_01jv5gn4pbf468dsctfq5fmm6w_1747163256_img_0.webp"
image_alt: "A screenshot of a web developer building an accessible modal with StencilJS."
---

This article walks through how I created an accessible, keyboard-navigable, WCAG-compliant modal dialog using StencilJS. It was a great exercise to learn how to structure my HTML, manage ARIA roles, trap focus, manage z-index layering, handle escape keys, and restore focus when the modal is closed, keeping the component flexible and composable.

## Why Accessibility Matters for Modals
Modals are one of the most misused and misunderstood UI components in web development, especially when it comes to accessibility. On the surface, they seem simple: display a box, cover the background, and throw in a close button. But for screen reader users or those navigating via keyboard, a poorly implemented modal can make a website completely unusable.

Some of the most common accessibility issues with modals include:

- Focus not moving to the modal when it opens
- Background content still accessible to screen readers
- Lack of keyboard support (e.g. no Escape key, broken tab flow)
- No indication that a modal has opened or closed

When building UI components in StencilJS, especially for use in a design system or shared library, these issues must be solved once and solved well. Fortunately, Web Components and Stencil give us the tools to encapsulate this complexity and deliver a reusable, standards-compliant modal dialog.

In this guide, we'll walk through how to build a robust, accessible modal component from scratch using StencilJS. We'll:

- Structure the modal using proper semantic markup and ARIA attributes
- Style it with attention to visibility and layering
- Implement complete keyboard support and tab trapping
- Ensure screen readers and assistive tech handle it correctly
- Make it reusable, composable, and easy to consume in apps

## Basic Modal Markup
The structure of an accessible modal is deceptively complex. It must not only look like a modal but behave as one in the eyes of assistive technology.

Here's what our modal needs to do at the markup level:

- Have a top-level dialog container that can be targeted for ARIA.
- Contain a focus trap and keyboard escape route.
- Support named slots for flexible content injection.
- Identify a modal label and optionally a description.
- Optionally block interaction with the background.

### ARIA Roles and Attributes
The minimal required ARIA structure:

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Your Modal Title</h2>
  <p id="modal-description">Some description here</p>
  <!-- Modal content -->
</div>
```

### Key details:

- `role="dialog"` informs assistive tech this is a dialog.
- `aria-modal="true"` signals that the rest of the app is inert (important!).
- `aria-labelledby` and `aria-describedby` tie the modal to visible elements to describe it.

StencilJS will generate the shadow DOM, but these ARIA attributes must still work with assistive tech, so I'll need to ensure that either:

- Use light DOM placement (via shadow: false), or
- Expose internals using part, aria-owns, or provide fallback messaging externally.

### Slot-Based Composition
Here's a working markup prototype for the modal internals:

```js
<Host>
  <div
    class="modal-backdrop"
    onClick={this.handleBackdropClick}
  />

  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    ref={el => this.dialogElement = el}
    tabindex="-1"
  >
    <header class="modal-header">
      <h2 id="modal-title">
        <slot name="title" />
      </h2>
      <button
        type="button"
        class="close-button"
        onClick={this.closeModal}
        aria-label="Close"
      >
        &times;
      </button>
    </header>

    <section id="modal-description" class="modal-body">
      <slot />
    </section>

    <footer class="modal-footer">
      <slot name="footer" />
    </footer>
  </div>
</Host>
```

## Slot Strategy
- `<slot name="title" />`: Enables consumers to customize the modal heading.
- `<slot />`: Default slot for main body content.
- `<slot name="footer" />`: Optional actions area (buttons, etc).

This provides a semantic and flexible layout that can be styled easily, localized, and reused across many contexts.

## Styling the Modal
An accessible modal isn't just about markup. It must be visibly obvious, keyboard-friendly, and non-disruptive for screen readers and users with motion sensitivity. Here's how to do it in CSS, particularly in the context of a StencilJS Web Component.

### Visibility Control: display, opacity, and inert

We'll use two layered elements:
- A backdrop overlay (`.modal-backdrop`)
- The modal dialog container itself (`.modal`)

Visibility should be toggled by a prop like `@Prop()` open: boolean.

Use opacity and visibility for transitions as opposed to `display: none` (until animation completes), to avoid breaking transitions or screen reader detection.

```css
:host {
  display: block;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  max-width: 600px;
  width: 90%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;
  outline: none;
}

/* When the modal is open */
:host([open]) .modal,
:host([open]) .modal-backdrop {
  opacity: 1;
  pointer-events: auto;
}
```

### Preventing Scroll on Body
When the modal is open, the document body should not scroll. Handle this in the component logic:

```js
componentDidLoad() {
  if (this.open) {
    document.body.style.overflow = 'hidden';
  }
}

@Watch('open')
onOpenChanged(isOpen: boolean) {
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
```

### Reduced Motion Support
Respect users with prefers-reduced-motion:

```css
@media (prefers-reduced-motion: reduce) {
  .modal,
  .modal-backdrop {
    transition: none !important;
  }
}
```

### Keyboard Focus Visibility
Stencil (like other frameworks) may not handle focus rings well by default. Add a reset + accessibility-friendly focus style:

```css
button:focus,
.modal:focus {
  outline: 2px solid var(--focus-color, #007acc);
  outline-offset: 2px;
}
```

### Z-Index Management

To avoid z-index collisions across apps, either:

- Scope the modal to a very high z-index like z-index: 1000, or
- Use a CSS variable: `z-index: var(--modal-z-index, 1000);`

For large systems, a central z-index scale may be useful (`--z-modal`, `--z-dropdown`, `--z-toast`).

### Styling Recap

With this CSS setup:
- The modal is visually centered and responsive.
- It fades in smoothly, respects motion preferences, and avoids layout shifts.
- Focus outlines are clear, and screen readers won't be blocked by display: none.

## JavaScript Behavior
A modal's interactivity hinges on how well it manages state, focus, and keyboard events. We're aiming for:

- Smooth open/close behavior
- Escape key to close
- Focus trap while open
- Restoring focus to the trigger element
- Programmatic control

### Props and Refs
Start by defining props and internal refs for modal control:

```ts
@Prop({ reflect: true, mutable: true }) open: boolean = false;
@Element() host: HTMLElement;
private dialogElement: HTMLElement;
private previouslyFocusedElement: HTMLElement | null = null;
```

- `open` controls visibility and is reflected for styling
- `dialogElement` is the modal container
- `previouslyFocusedElement` is used to restore focus when modal closes

### Lifecycle and Watchers
Set up lifecycle methods to handle open/close behavior:

```ts
@Watch('open')
handleOpenChanged(isOpen: boolean) {
  if (isOpen) {
    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    this.dialogElement.focus();
    this.lockScroll();
    document.addEventListener('keydown', this.handleKeydown);
  } else {
    this.unlockScroll();
    document.removeEventListener('keydown', this.handleKeydown);
    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }
}

componentDidLoad() {
  if (this.open) {
    this.dialogElement.focus();
  }
}
```

### Handling Escape Key and Backdrop Click

```ts
private handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    this.closeModal();
  }

  if (event.key === 'Tab') {
    this.maintainFocus(event);
  }
};

private handleBackdropClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
    this.closeModal();
  }
};

private closeModal() {
  this.open = false;
  this.host.dispatchEvent(new CustomEvent('close', { bubbles: true }));
}
```

- `Escape` closes the modal
- Clicking the backdrop closes it
- Tab trapping ensures focus stays inside

### Tab Trapping Logic

```ts
private maintainFocus(event: KeyboardEvent) {
  const focusableElements = this.dialogElement.querySelectorAll<HTMLElement>(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
  );

  const focusable = Array.from(focusableElements).filter(el => !el.hasAttribute('inert'));
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
```

This ensures that when the user presses Tab (or Shift+Tab), focus loops within the modal. Without this, users could tab out to the background interface, which is exactly what `aria-modal="true"` tries to prevent.

### Scroll Lock Helpers
```ts
private lockScroll() {
  document.body.style.overflow = 'hidden';
}

private unlockScroll() {
  document.body.style.overflow = '';
}
```

Simple approach, enough for most use cases, but consider supporting stacked modals later (e.g. with a global modal counter).

## Accessibility Considerations

Accessibility isn't a layer that's bolted on after the fact. It's baked into every decision about structure, focus, and interactivity. We should confirm that the modal meets WAI-ARIA standards and behaves as expected across assistive technologies.

### Roles and Properties Recap
Let's review the ARIA essentials:

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <!-- Modal content -->
</div>
```

#### Details:

- `role="dialog"`: Declares this element as a dialog box to screen readers.
- `aria-modal="true"`: Tells assistive tech the rest of the interface is inert (non-interactive).
- `aria-labelledby`: Connects to the heading element.
- `aria-describedby`: (optional) Connects to explanatory content.

Stencil renders this via Shadow DOM, so consider:

- Turning off Shadow DOM (shadow: false) for ARIA to work more reliably across screen readers, or
- Providing aria-owns, or mirroring content IDs in the light DOM.
- Exposing inner parts with the part attribute if assistive tech or styling needs access.

### Keyboard Behavior Expectations
According to WAI-ARIA Authoring Practices 1.2: Modal Dialog Pattern, a modal must support the following keyboard behavior:

::OverflowX
| Key           | Behavior                                                      |
| ------------- | ------------------------------------------------------------- |
| `Tab`         | Moves focus to the next tabbable element *within* the modal   |
| `Shift + Tab` | Moves focus to the previous tabbable element                  |
| `Escape`      | Closes the modal                                              |
| `Enter`       | (Optional) Confirms the modal's primary action, if applicable |
::

All of this is already supported with the maintainFocus() method and keydown listener.

### Focus Management
On open:

- The modal container (`.modal`) receives `focus()` and has `tabindex="-1"` so it's focusable.
- Focus should be programmatically moved inside the modal (to the first focusable child or heading).

On close:

- Focus returns to the previously focused element (captured on open).
- These behaviors meet the minimum accessibility requirement for modals.

Optional enhancement: move focus to a specific action button (like "Cancel" or "Confirm") by exposing a `firstFocusEl` selector prop or a `data-autofocus` attribute.

### Screen Reader Behavior
Here's how this modal will be announced in most modern screen readers (NVDA, JAWS, VoiceOver):

- When opened, the modal container receives focus.
- The screen reader announces:
  > Dialog. Modal Title. Some description here.
- Background elements are no longer in the tab order or reading order.
- Screen reader users stay confined to the modal until it's dismissed.

To validate this:

- Test with VoiceOver on macOS (Safari and Chrome)
- Test with NVDA or JAWS on Windows
- Use axe DevTools or [VoiceOver Rotor]

### Reduced Motion and Visibility

- Transitions respect `prefers-reduced-motion` media query.
- Modal is never rendered with `display: none` when open. It fades in/out using opacity.
- Focus styles are visible (not removed with `outline: none`).

### Common A11y Pitfalls to Avoid

- Background still scrollable or focusable: Ensure body scroll is locked and `aria-modal="true"` is set.
- Missing `aria-labelledby`: Causes screen readers to announce "dialog" with no context.
- Not restoring focus: After closing, users are left stranded.
- Keyboard trap is incomplete: Focus escapes to the background when tabb


## Declarative Usage Example
The goal is to make modal usage look something like this:

```html
<my-modal open>
  <span slot="title">Delete Confirmation</span>

  <p>Are you sure you want to delete this item? This action cannot be undone.</p>

  <div slot="footer">
    <button class="secondary" onclick="modal.close()">Cancel</button>
    <button class="danger">Delete</button>
  </div>
</my-modal>
```

Key features here:
- open can be toggled as a prop or via methods.
- Slots provide layout flexibility (title, default, footer).
- Consumers don't need to know how the modal works. They just fill the slots.

### Exposing Methods for Programmatic Control
Stencil allows you to expose methods on custom elements:

```ts
@Method()
async openModal() {
  this.open = true;
}

@Method()
async closeModal() {
  this.open = false;
}
```

Now developers can call `modalEl.openModal()` or `modalEl.closeModal()` from anywhere.

This is especially helpful when paired with a service-like wrapper or a global state trigger.

### Avoiding DOM Nesting Issues: Portals
Sometimes modals must render outside their logical parent (e.g., inside a layout that applies overflow: hidden or a z-index context).

Stencil doesn't support React-style portals out of the box, but you can simulate them:

- Use `document.body.appendChild()` to move the modal when mounted.
- Manage cleanup on disconnectedCallback().
- Still allow for shadow DOM encapsulation.

Example:

```ts
componentDidLoad() {
  if (!this.disablePortaling) {
    document.body.appendChild(this.host);
  }
}
```

This works, but beware of styles and theme variables. I may need to reapply CSS variables or expose them via props when moving the element to another part of the DOM.

### Supporting Nested Modals
Nested modals are controversial, but common in enterprise apps (think: "Edit > Delete > Are you sure?").

To support this:

- Keep track of a modalStack in global JS or shared service.
- Only lock the scroll on the first modal opened.
- Only restore focus when the topmost modal is closed.

If needed, add:

```ts
@Prop() layerIndex: number;
```

And update z-index or body scroll lock accordingly.

### Avoiding Bloat: One Component, Many Variants

Resist the urge to make multiple modal components like:

- confirmation-modal
- delete-modal
- form-modal

Instead, provide sensible default slots, and use design tokens or utility classes to change layout or tone.

If necessary, expose minor variants like:

```ts
@Prop() size: 'sm' | 'md' | 'lg' = 'md';
@Prop() tone: 'neutral' | 'danger' = 'neutral';
```

Use CSS classes based on those props, not logic-heavy JS branches.

### Consider a Modal Manager (Optional)
If the app will have global modals that aren't tied to a parent component, consider building a modal manager:

```ts
modalManager.open({
  title: 'Confirm Delete',
  content: 'Are you sure you want to delete this?',
  actions: [...]
});
```

Behind the scenes, this manager appends a `<my-modal>` instance to the DOM, populates its slots, and wires up callbacks.

This pattern:

- Centralizes logic
- Reduces boilerplate
- Prevents inconsistent usage

But: it requires strict control of styling and behavior to stay maintainable.

## Full Code Listing & Usage Example

### my-modal.tsx (Stencil Component)
```tsx
import {
  Component,
  Prop,
  h,
  Method,
  Element,
  Watch,
  Host
} from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: false, // For better screen reader compatibility
})
export class MyModal {
  @Prop({ reflect: true, mutable: true }) open: boolean = false;
  @Element() host: HTMLElement;
  private dialogElement: HTMLElement;
  private previouslyFocusedElement: HTMLElement | null = null;

  @Watch('open')
  handleOpenChanged(isOpen: boolean) {
    if (isOpen) {
      this.previouslyFocusedElement = document.activeElement as HTMLElement;
      this.dialogElement.focus();
      this.lockScroll();
      document.addEventListener('keydown', this.handleKeydown);
    } else {
      this.unlockScroll();
      document.removeEventListener('keydown', this.handleKeydown);
      this.previouslyFocusedElement?.focus();
    }
  }

  componentDidLoad() {
    if (this.open) {
      this.dialogElement.focus();
    }
  }

  @Method()
  async openModal() {
    this.open = true;
  }

  @Method()
  async closeModal() {
    this.open = false;
    this.host.dispatchEvent(new CustomEvent('close', { bubbles: true }));
  }

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'Tab') {
      this.maintainFocus(event);
    }
  };

  private handleBackdropClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  };

  private maintainFocus(event: KeyboardEvent) {
    const focusable = Array.from(
      this.dialogElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private lockScroll() {
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll() {
    document.body.style.overflow = '';
  }

  render() {
    return (
      <Host>
        <div
          class="modal-backdrop"
          onClick={this.handleBackdropClick}
        ></div>

        <div
          class="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          ref={(el) => (this.dialogElement = el)}
          tabindex="-1"
        >
          <header class="modal-header">
            <h2 id="modal-title">
              <slot name="title" />
            </h2>
            <button
              type="button"
              class="close-button"
              onClick={() => this.closeModal()}
              aria-label="Close modal"
            >
              &times;
            </button>
          </header>

          <section id="modal-description" class="modal-body">
            <slot />
          </section>

          <footer class="modal-footer">
            <slot name="footer" />
          </footer>
        </div>
      </Host>
    );
  }
}
```

### my-modal.css
```css
:host {
  display: block;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  max-width: 600px;
  width: 90%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;
  outline: none;
}

:host([open]) .modal,
:host([open]) .modal-backdrop {
  opacity: 1;
  pointer-events: auto;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  .modal,
  .modal-backdrop {
    transition: none !important;
  }
}
```

### Usage Example
```html
<button onclick="document.querySelector('my-modal').openModal()">
  Open Modal
</button>

<my-modal>
  <span slot="title">Sign Out?</span>
  <p>This will end your session and log you out of the system.</p>
  <div slot="footer">
    <button onclick="document.querySelector('my-modal').closeModal()">Cancel</button>
    <button class="danger">Sign Out</button>
  </div>
</my-modal>
```
