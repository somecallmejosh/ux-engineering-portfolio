---
slug: javascript-cheat-sheet
publishedAt: 2025-05-21
title: "Javascript Cheatsheet"
description: "A reference for the core parts of JavaScript that show up in real-life UI development... At least the ones I use."
tags: [javascript]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747840964/josh-portfolio/assets_task_01jvspxqfcfpdbfryrgk4ezqmk_1747840922_img_1.webp"
image_alt: "An illustration of JavaScript code snippets."
---

Welcome! This guide is here to help you understand the core parts of JavaScript that actually show up in real-life UI development. You won't find any bubble sort or obscure bitwise operators. Just the stuff you touch every day when building real interfaces for real users who click real buttons.


## Variables



```js
var count = 5;
// `var` is the old-school way.
// Don't use this unless you're fixing legacy code.
```

```js
let total = 0;
// Use `let` when the value will change.
```

```js
const MAX_RETRIES = 3;
// Use `const` for things that shouldn't be reassigned.
// Default to `const` unless you have a reason not to.
```


## Loops

```js
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
// Basic looping. Great for when you're just learning iteration.
```

```js
for (const item of items) {
  renderItem(item);
}
// Cleaner syntax. Ideal for iterating UI components.
```

```js
items.forEach((item, i) => {
  setTimeout(() => animateItem(item), i * 100);
});
// Adding time-based interaction or animation logic.
```


## Conditionals


```js
if (isLoggedIn) {
  showDashboard();
} else {
  showLogin();
}
// Simple decisions. Easy to read.
```


```js
const label = isLoading ? 'Loading...' : 'Submit';
// Ternaries are great for inline decisions. Just don't nest them.
```


```js
const title = article?.title || 'Untitled';
// Optional chaining + fallback = safe and concise.
```


## Arrays


```js
const fruits = ['apple', 'banana'];
fruits.push('cherry');
// Just getting familiar with basic operations.
```


```js
const buttons = actions.map(action => `<button>${action.label}</button>`);
// Using `.map()` to render UI elements from data.
```


```js
const validItems = items.filter(i => i.active).map(i => i.label);
// Chaining methods for clean and expressive UI state logic.
```


## Objects


```js
const user = { name: 'Josh', age: 40 };
console.log(user.name);
// Reading values. Step one.
```


```js
const { name, age } = user;
// Destructuring for cleaner code.
```


```js
function showGreeting({ name = 'Guest' }) {
  alert(`Welcome, ${name}`);
}
// Use destructuring in function parameters with fallbacks.
```


## Spread Operator & Destructuring


```js
const numbers = [1, 2, 3];
const copy = [...numbers];
// Simple array copying.
```


```js
const settings = { theme: 'light', font: 'serif' };
const newSettings = { ...settings, theme: 'dark' };
// Merging objects—super useful for state updates.
```


```js
const [{ name }, ...others] = users;
// Destructuring + rest operator = flexible UI logic.
```


## Recursion


```js
function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}
// The basics: function that calls itself until a stop condition.
```


```js
function sumTree(nodes) {
  return nodes.reduce((acc, node) => acc + node.value + sumTree(node.children || []), 0);
}
// Useful for working with nested data.
```


```js
function renderTree(nodes) {
  return nodes.map(node => `
    <li>
      ${node.label}
      ${node.children ? `<ul>${renderTree(node.children)}</ul>` : ''}
    </li>
  `).join('');
}
// Perfect for UI trees, menus, comments.
```


## Functions


```js
function sayHello() {
  alert('Hello!');
}
// Plain old named functions.
```


```js
const greet = function(name) {
  return `Hello, ${name}`;
};
// Function expressions, useful for variables and passing around.
```


```js
const toggle = () => setOpen(prev => !prev);
// Arrow functions with concise syntax. Great for callbacks and state updates.
```


## Modules


```js
// math.js
export function add(a, b) {
  return a + b;
}
// Exporting a function.
```


```js
import { add } from './math.js';
// Importing and using that function.
```


```js
export default function multiply(a, b) {
  return a * b;
}
// Default exports are great when you're exporting just one main thing.
```


## Promises + `async/await`


```js
fetch('/data.json')
  .then(res => res.json())
  .then(data => console.log(data));
// Working with `.then()` to handle async work.
```


```js
async function loadData() {
  const res = await fetch('/data.json');
  const data = await res.json();
  console.log(data);
}
// Much cleaner with `async/await`.
```


```js
async function fetchData(endpoint) {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('Fetch failed');
    return await res.json();
  } catch (err) {
    reportError(err);
  }
}
// Error handling like a pro.
```


## Fetch Requests

```js
fetch('/api/info')
  .then(res => res.json())
  .then(console.log);
// Basic fetch and log.
```


```js
async function getUser(id) {
  const res = await fetch(`/users/${id}`);
  return await res.json();
}

// Async/await for clean data fetch.
```


```js
async function submitForm(formData) {
  const res = await fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Failed to submit');
  return await res.json();
}
// Form submissions, headers, and error handling.
```

## Final Thoughts

JavaScript isn't just for clever solutions and code golf. In UI development, it's about making things work smoothly, responding to users quickly, and not confusing yourself or your teammates.

Keep it simple. Keep it readable. And always test it like someone is going to mash the keyboard and click five times in a row.
