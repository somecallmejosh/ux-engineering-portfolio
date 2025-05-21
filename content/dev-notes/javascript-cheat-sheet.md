---
slug: javascript-cheat-sheet
publishedAt: 2025-05-21
title: "Javascript Cheatsheet"
description: "A reference for the core parts of JavaScript that show up in real-life UI development... At least the ones I use."
tags: [javascript, cheatsheet]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747840964/josh-portfolio/assets_task_01jvspxqfcfpdbfryrgk4ezqmk_1747840922_img_1.webp"
image_alt: "An illustration of JavaScript code snippets."
---
::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::
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

### Array Methods

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Using `.reduce()` to calculate a total. Great for state management.
```

```js
const uniqueItems = [...new Set(items)];
// Using `Set` to remove duplicates. Super handy for lists.
```

```js
const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
// Sorting arrays with a custom comparator. Useful for lists.
```

```js
const reversedItems = items.reverse();
// Reversing an array. Great for displaying items in reverse order.
```

```js
const slicedItems = items.slice(0, 3);
const splicedItems = items.splice(0, 2);
// Slicing and splicing arrays. Useful for pagination or removing items.
```

```js
const index = items.findIndex(item => item.id === targetId);
const foundItem = items.find(item => item.id === targetId);
// Finding items in an array. Great for searching.
```

```js
const includesItem = items.includes(targetItem);
// Checking if an array includes a specific item. Useful for validation.
```

```js
const [first, ...rest] = items;
// Destructuring arrays. Great for extracting values.
```

```js
const [first, second] = items;
const [first, , third] = items;
// Destructuring with skipping. Useful for ignoring values.
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

## Mapping Over Objects

I use this a lot for mapping over objects, especially when I need to convert keys or values.

```js
const collectionMap = {
  blog: 'blog',
  dev_notes: 'dev-notes',
  projects: 'projects',
  experiments: 'experiments',
};

const devNotes = collectionMap[`dev_notes`] // 'dev-notes';
```

### Object methods

#### Iterating over object properties
```js
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ['a', 'b', 'c']
const values = Object.values(obj); // [1, 2, 3]
const entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
```

#### Transforming object values
```js
// Great for data manipulation.
const obj = { a: 1, b: 2, c: 3 };
const newObj = Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value * 2]));
```

#### Merging objects
```js
// Use `Object.assign` for shallow copies.
const obj = { a: 1, b: 2, c: 3 };
const newObj = Object.assign({}, obj, { b: 4 });
const newObj = { ...obj, b: 4 };
```

#### Adding properties to an object
```js
//  Use spread for cleaner syntax.
const obj = { a: 1, b: 2, c: 3 };
const newObj = { ...obj, d: 4 };
```

#### Overwriting properties in an object
```js
// Use spread for cleaner syntax.
const obj = { a: 1, b: 2, c: 3 };
const newObj = { ...obj, a: 4 };
```

## Functions

### Function declarations
```js
// Useful for hoisting and readability.
function sayHello() {
  alert('Hello!');
}
```

### Function expressions
```js
// Useful for variables and passing around as arguments.
const add = function(a, b) {
  return a + b;
};

const greet = function(name) {
  return `Hello, ${name}`;
};
```

### Arrow functions
```js
// Great for callbacks and state updates.
const toggle = () => setOpen(prev => !prev);
```

### Closures

```js
// Closures are great for maintaining state in a function.
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

```js
// Using closures to create a counter object.
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    getCount: () => count,
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
```

### Debounce

```js
// A simple debounce function to limit how often a function can be called.
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage:
const handleResize = debounce(() => {
  console.log('Resized!');
}, 200);
window.addEventListener('resize', handleResize);
```

## Modules

### Exporting
```js
export function add(a, b) {
  return a + b;
}
```
### Importing

```js
import { add } from './math.js';
```

### Default Export
```js
export default function multiply(a, b) {
  return a * b;
}

// Import the default export from another file
import multiply from './math.js';
```


## Promises + `async/await`

### then
```js
fetch('/data.json')
  .then(res => res.json())
  .then(data => console.log(data));
```

### async/await
```js
// Much cleaner with `async/await`.
async function loadData() {
  const res = await fetch('/data.json');
  const data = await res.json();
  console.log(data);
}
```
### Try/Catch Error Handling

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
```

## Fetch Requests

```js
// Same as above
fetch('/api/info')
  .then(res => res.json())
  .then(console.log);
```

```js
// Similar to loadData above
async function getUser(id) {
  const res = await fetch(`/users/${id}`);
  return await res.json();
}
```

```js
// Form submissions, headers, and error handling.
async function submitForm(formData) {
  const res = await fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Failed to submit');
  return await res.json();
}
```

## Data/Storage

### Local Storage

```js
// Simple key-value storage. Great for user preferences.
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

### Session Storage
```js
// Session storage for temporary data. Cleared when the tab is closed.
sessionStorage.setItem('sessionId', '12345');
const sessionId = sessionStorage.getItem('sessionId');
```

### Clearing Storage

```js
// Remove items when you no longer need them.
localStorage.removeItem('theme');
sessionStorage.removeItem('sessionId');
```

## Observers

### Intersection Observer

```js
// watches for images with a `data-src` attribute
// and loads them when they come into view.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load the image or perform some action
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
const images = document.querySelectorAll('img[data-src]');
images.forEach(image => {
  observer.observe(image);
});
```

### Mutation Observer

```js
// watches for changes to the `targetNode`
// and logs them to the console.
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('Child nodes changed:', mutation);
    } else if (mutation.type === 'attributes') {
      console.log('Attributes changed:', mutation);
    }
  });
});
const targetNode = document.getElementById('target');
const config = { attributes: true, childList: true, subtree: true };
observer.observe(targetNode, config);
```

## Honarable Mentions

### Recursion
Admittedly, I don't use recursion a ton in UI development, but it's still a useful tool to have in the toolbox.

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

## Final Thoughts

JavaScript isn't just for clever solutions and code golf. In UI development, it's about making things work smoothly, responding to users quickly, and not confusing yourself or your teammates.

Keep it simple. Keep it readable. And always test it like someone is going to mash the keyboard and click five times in a row.
