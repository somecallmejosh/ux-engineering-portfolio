---
slug: refactored-modal-with-stencil-js
publishedAt: 2025-05-20
title: "Building a Better Modal: Revisiting My StencilJS Component"
description: "This article walks through how to create an accessible, keyboard-navigable, WCAG-compliant modal dialog using StencilJS."
tags: [modal]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747163308/josh-portfolio/assets_task_01jv5gn4pbf468dsctfq5fmm6w_1747163256_img_0.webp"
image_alt: "A screenshot of a web developer building an accessible modal with StencilJS."
---

::TagMenu{tag="modal" collection="experiments"}
StencilJS Modal Series
::

Back when I first published my [original article](/experiments/building-a-modal-with-stencil-js), I walked through how to build an accessible modal dialog using StencilJS. It worked. But like most things in front-end development, there's always room to improve.

This post is a revisit of that same component, after some thoughtful refactoring. The goal is still the same: keep it simple, make it accessible, and make sure it plays well with keyboard users. But this version adds better cleanup, stronger focus handling, and cleaner styles.

## What Changed in the Component Code?

The structure is mostly the same. It still uses a `open` prop to control visibility. It still supports Escape to close. But here's what I added or cleaned up:

### Focus Restoration
```ts
this.previouslyFocusedElement = document.activeElement as HTMLElement;
...
this.previouslyFocusedElement?.focus();
```
Focus is restored to the element that was active before the modal opened.

### Focus on Render
```ts
requestAnimationFrame(() => {
  this.dialogElement.focus();
});
```
This ensures the modal is actually focusable when it gets opened.

### Focus Trap
```ts
private maintainFocus(event: KeyboardEvent) {
  const focusable = Array.from(
    this.dialogElement.querySelectorAll<HTMLElement>(...)
  );
  ...
}
```
This prevents users from tabbing outside the modal when it's open.

### Scroll Lock
```ts
private lockScroll() {
  document.body.style.overflow = 'hidden';
}

private unlockScroll() {
  document.body.style.overflow = '';
}
```
This keeps background content from scrolling while the modal is open.

### Cleanup on Disconnect
```ts
disconnectedCallback() {
  document.removeEventListener('keydown', this.handleKeydown);
  this.unlockScroll();
}
```
Event listeners are removed when the modal is removed from the DOM.

## What Changed in the CSS?

The CSS keeps things minimal, flexible, and accessible.

### Uses CSS Custom Properties
```css
:root {
  --r-modal-backdrop-bg: rgba(0, 0, 0, 0.4);
  --r-modal-bg: white;
  ...
}
```
These make theming and overrides simple.

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .modal,
  .modal-backdrop {
    transition: none !important;
  }
}
```
This respects user settings for reduced motion.

### Focus Outline
```css
.modal:focus-visible {
  outline: 2px solid var(--r-modal-focus-outline-color);
  outline-offset: 2px;
}
```
Keyboard users get a clear visual indication of focus.

## Accessibility and Keyboard Support

- **Escape key closes modal**:
```ts
if (event.key === 'Escape') {
  this.closeModal();
}
```

- **Focus trapping** ensures keyboard navigation stays within the modal.
- **ARIA roles and attributes**:
```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
```
These help screen readers understand the structure.

- **Slots for title, body, and footer**:
```html
<slot name="title" />
<slot />
<slot name="footer" />
```
These keep the content flexible.

## Final Code
```ts
// r-modal.tsx
import {
  Component,
  Prop,
  h,
  Method,
  Element,
  Watch,
  Host,
} from '@stencil/core';

@Component({
  tag: 'r-modal',
  styleUrl: 'r-modal.css',
  shadow: false, // Keeping original setting for global style application
})
export class RModal {
  @Prop({ reflect: true, mutable: true }) open: boolean = false;
  @Element() host: HTMLElement;
  private dialogElement: HTMLElement;
  private previouslyFocusedElement: HTMLElement | null = null;

  @Watch('open')
  handleOpenChanged(isOpen: boolean) {
    if (isOpen) {
      this.previouslyFocusedElement = document.activeElement as HTMLElement;
      // Use requestAnimationFrame to ensure the element is rendered and focusable
      requestAnimationFrame(() => {
        this.dialogElement.focus();
      });
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
      requestAnimationFrame(() => {
        this.dialogElement.focus();
      });
    }
  }

  // --- CORRECTED: Replaced componentDidUnload() with disconnectedCallback() ---
  disconnectedCallback() {
    // Clean up event listener if component is removed while modal is open
    document.removeEventListener('keydown', this.handleKeydown);
    this.unlockScroll(); // Ensure scroll is unlocked if component unmounts
  }
  // -------------------------------------------------------------------------

  @Method()
  async openModal() {
    this.open = true;
  }

  @Method()
  async closeModal() {
    this.open = false;
    // Dispatch a custom event from the host element
    this.host.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'Tab') {
      this.maintainFocus(event);
    }
  };

  private handleBackdropClick = (event: MouseEvent) => {
    // Ensure the click is directly on the backdrop, not its children
    if (event.target === this.host.querySelector('.modal-backdrop')) {
      this.closeModal();
    }
  };

  private maintainFocus(event: KeyboardEvent) {
    const focusable = Array.from(
      this.dialogElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusable.length === 0) {
      // If there are no focusable elements inside the modal,
      // prevent focus from escaping the modal itself.
      event.preventDefault();
      this.dialogElement.focus(); // Focus the modal container
      return;
    }

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
      // The 'open' prop reflecting to the host attribute will drive CSS visibility
      <Host open={this.open}>
        <div
          class="modal-backdrop"
          onClick={this.handleBackdropClick}
        ></div>

        <div
          class="modal"
          role="dialog"
          aria-modal={this.open ? 'true' : 'false'}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          ref={(el) => (this.dialogElement = el as HTMLElement)}
          tabindex="-1" // Make the modal container focusable for initial focus and focus trapping
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

```css
/* r-modal.css */

/*
 * CSS Custom Properties for theming
 */
:root {
  --r-modal-backdrop-bg: rgba(0, 0, 0, 0.4);
  --r-modal-bg: white;
  --r-modal-max-width: 600px;
  --r-modal-border-radius: 0.5rem;
  --r-modal-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  --r-modal-padding: 1.5rem; /* Slightly increased for better spacing */
  --r-modal-z-index-backdrop: 999;
  --r-modal-z-index-modal: 1000;
  --r-modal-transition-duration: 200ms;
  --r-modal-close-button-font-size: 1.8rem; /* Slightly larger */
  --r-modal-close-button-color: #333;
  --r-modal-focus-outline-color: blue; /* New property for accessibility outline */
}

/* Base styles for the host element */
:host {
  display: block; /* Ensures the component is a block-level element */
}

/* Modal Backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0; /* Shorthand for top, right, bottom, left: 0 */
  background: var(--r-modal-backdrop-bg);
  z-index: var(--r-modal-z-index-backdrop);
  opacity: 0;
  transition: opacity var(--r-modal-transition-duration) ease;
  pointer-events: none; /* Prevents interaction when closed */
}

/* Modal Dialog Container */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centers the modal */
  background: var(--r-modal-bg);
  max-width: var(--r-modal-max-width);
  width: 90%; /* Responsive width */
  border-radius: var(--r-modal-border-radius);
  box-shadow: var(--r-modal-box-shadow);
  padding: var(--r-modal-padding);
  z-index: var(--r-modal-z-index-modal);
  opacity: 0;
  transition: opacity var(--r-modal-transition-duration) ease;
  pointer-events: none; /* Prevents interaction when closed */
  display: flex; /* Flexbox for internal layout (header, body, footer) */
  flex-direction: column;
  max-height: 90vh; /* Prevent modal from exceeding viewport height */
  overflow: hidden; /* Hide scrollbars on the modal itself initially */
}

/* Accessibility: Ensure focus outline is visible */
.modal:focus-visible {
  outline: 2px solid var(--r-modal-focus-outline-color);
  outline-offset: 2px; /* Adds space between outline and element border */
}

/* State: Modal is open */
/* Targets the host element when its 'open' attribute is present */
r-modal[open] .modal-backdrop,
r-modal[open] .modal {
  opacity: 1;
  pointer-events: auto; /* Allows interaction when open */
}

/* Modal Header */
.modal-header {
  position: relative; /* For positioning the close button */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem; /* Space below title */
  border-bottom: 1px solid #eee; /* Subtle separator */
}

.modal-header h2 {
  margin: 0; /* Reset default margin */
  font-size: 1.5rem;
  color: #333;
  flex-grow: 1; /* Allows title to take available space */
}

/* Close Button */
.close-button {
  background: none;
  border: none;
  font-size: var(--r-modal-close-button-font-size);
  color: var(--r-modal-close-button-color);
  cursor: pointer;
  padding: 0.5rem; /* Add padding for easier clicking */
  line-height: 1; /* Prevent extra height from font size */
  margin-left: 1rem; /* Space from title */
}

.close-button:hover,
.close-button:focus-visible {
  color: var(--r-modal-close-button-hover-color, #000);
  outline: 2px solid var(--r-modal-focus-outline-color);
  outline-offset: 2px;
}

/* Modal Body */
.modal-body {
  flex-grow: 1; /* Allows body to take remaining vertical space */
  padding-top: 1rem; /* Space above body content */
  padding-bottom: 1rem;
  overflow-y: auto; /* Enable scrolling for long content */
}

/* Modal Footer */
.modal-footer {
  padding-top: 1rem;
  border-top: 1px solid #eee; /* Subtle separator */
  display: flex;
  justify-content: flex-end; /* Align footer content to the right */
  gap: 0.5rem; /* Space between footer elements */
}

/* Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .modal,
  .modal-backdrop {
    transition: none !important; /* Disables all transitions */
  }
}

```

## Final Thoughts

This modal doesn't try to be everything. It avoids unnecessary complexity and focuses on what matters:

- Keyboard support
- Focus management
- Accessibility
- Ease of use

Once compiled, you can use it in any app. It supports programmatic control and works with global CSS styles. And it gives users a reliable, usable experience.

[Read the original version here](/experiments/building-a-modal-with-stencil-js) to see where it started.
