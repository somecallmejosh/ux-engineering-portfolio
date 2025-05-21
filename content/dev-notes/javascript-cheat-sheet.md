---
slug: javascript-cheat-sheet
publishedAt: 2025-05-21
title: "Javascript Cheatsheet"
description: "A reference for the core parts of JavaScript that show up in real-life UI development... At least the ones I use."
tags: [javascript, cheatsheet]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747854266/josh-portfolio/assets_task_01jvt3kmvmf92ajfb9ynn1je8c_1747854234_img_1.webp"
image_alt: "An illustration of JavaScript code snippets."
---

::TagMenu{tag="cheatsheet" collection="dev_notes"}
Cheatsheets
::

Welcome! This guide is here to help you understand the core parts of JavaScript that actually show up in real-life UI development. You won't find any bubble sort or obscure bitwise operators. Just the stuff you touch every day when building real interfaces for real users who click real buttons.


## Variables

```js
// `var` is the old-school way.
// Don't use this unless you're fixing legacy code.
var count = 5;

```

```js
// Use `let` when the value will change.
let total = 0;
```

```js
// Use `const` for things that shouldn't be reassigned.
// Default to `const` unless you have a reason not to.
const MAX_RETRIES = 3;
```

## Equality

```js
// Use `===` and `!==` for strict equality checks.
// This avoids type coercion and makes your code more predictable.
if (value === 0) {
  console.log('Value is zero');
} else if (value !== null) {
  console.log('Value is not null');
}
```

```js
// Use `==` and `!=` for loose equality checks.
// This is less common and can lead to unexpected results.
if (value == 0) {
  console.log('Value is zero');
} else if (value != null) {
  console.log('Value is not null');
}
```
### Object Equality

```js
// Use `Object.is()` for checking if two values are the same.
// This is useful for comparing NaN and -0 vs +0.
if (Object.is(value, NaN)) {
  console.log('Value is NaN');
} else if (Object.is(value, -0)) {
  console.log('Value is negative zero');
}
```

```js
// Use `instanceof` for checking if an object is an instance of a class.
if (value instanceof Date) {
  console.log('Value is a Date object');
} else if (value instanceof Array) {
  console.log('Value is an Array');
}
```

```js
// Use `in` for checking if a property exists in an object.
if ('name' in user) {
  console.log('User has a name property');
} else if ('age' in user === false) {
  console.log('User does not have an age property');
}
```

```js
// Use `hasOwnProperty()` for checking if a property exists on an object.
if (user.hasOwnProperty('name')) {
  console.log('User has a name property');
} else if (user.hasOwnProperty('age') === false) {
  console.log('User does not have an age property');
}
```

### Type Checking

```js
// Use `typeof` for checking the type of a variable.
if (typeof value === 'string') {
  console.log('Value is a string');
} else if (typeof value === 'number') {
  console.log('Value is a number');
}
```

## Comparisons

```js
// Use `>` and `<` for basic comparisons.
if (value > 10) {
  console.log('Value is greater than 10');
} else if (value < 5) {
  console.log('Value is less than 5');
}
```

```js
// Use `>=` and `<=` for inclusive comparisons.
if (value >= 10) {
  console.log('Value is greater than or equal to 10');
} else if (value <= 5) {
  console.log('Value is less than or equal to 5');
}
```

```js
// Use `??` for nullish coalescing.
// This is useful for providing default values.
const name = user.name ?? 'Guest';
```

```js
// Use `||` for logical OR.
if (isLoggedIn || isAdmin) {
  console.log('User is logged in or is an admin');
} else if (isLoggedIn === false && isAdmin === false) {
  console.log('User is not logged in and is not an admin');
}
```

```js
// Use `&&` for logical AND.
if (isLoggedIn && isAdmin) {
  console.log('User is logged in and is an admin');
} else if (isLoggedIn === false || isAdmin === false) {
  console.log('User is not logged in or is not an admin');
}
```

```js
// Use `!` for negation.
if (!isLoggedIn) {
  console.log('User is not logged in');
} else if (isLoggedIn === true) {
  console.log('User is logged in');
}
```

## Loops

### for loop with iterator and index
```js
// Basic looping.
// I almost never use this approach anymore, but it's perfectly valid
// and probably more performant than the others.
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

```
### for
```js
// Cleaner syntax. I seldom use this for anything other than simple iteration.
for (const item of items) {
  renderItem(item);
}
```

### forEach
```js
// I find myself using this a lot for iterating over objects, arrays, etc.
items.forEach((item, i) => {
  console.log(`Item ${i}: ${item}`);
});
```


## Conditionals

### Simple if/else
```js
// Simple decisions. Easy to read.
if (isLoggedIn) {
  showDashboard();
} else {
  showLogin();
}
```
### Ternary operator

```js
// Ternaries are great for inline decisions. Just don't nest them.
const label = isLoading ? 'Loading...' : 'Submit';
```

### Short-circuiting
```js
// Short-circuiting for cleaner code
// and avoiding unnecessary checks.
const isLoggedIn = true;
const showDashboard = () => console.log('Dashboard');
isLoggedIn && showDashboard(); // shows dashboard
```
### Optional chaining
```js
// chaining + fallback = safe and concise.
const title = article?.title || 'Untitled';
```

## Arrays

```js
// Just getting familiar with basic operations.
const fruits = ['apple', 'banana'];
fruits.push('cherry');
```

```js
// Using `.map()` to render UI elements from data.
const buttons = actions.map(action => `<button>${action.label}</button>`);
```

```js
// Chaining methods for clean and expressive UI state logic.
const validItems = items.filter(i => i.active).map(i => i.label);
```

### Array Methods

```js
// Using `.reduce()` to calculate a total. Great for state management.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

```js
// Using `Set` to remove duplicates. Super handy for lists.
const uniqueItems = [...new Set(items)];
```

```js
// Sorting arrays with a custom comparator. Useful for lists.
const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
```

```js
// Reversing an array. Great for displaying items in reverse order.
const reversedItems = items.reverse();
```

```js
// Slicing and splicing arrays. Useful for pagination or removing items.
const slicedItems = items.slice(0, 3);
const splicedItems = items.splice(0, 2);
```

```js
// Finding items in an array. Great for searching.
const index = items.findIndex(item => item.id === targetId);
const foundItem = items.find(item => item.id === targetId);
```

```js
// Checking if an array includes a specific item. Useful for validation.
const includesItem = items.includes(targetItem);
```

```js
// Destructuring arrays. Great for extracting values.
const [first, ...rest] = items;
```

```js
// Destructuring with skipping. Useful for ignoring values.
const [first, second] = items;
const [first, , third] = items;
```

## Objects

```js
// Reading values. Step one.
const user = { name: 'Josh', age: 40 };
console.log(user.name);
```

```js
// Destructuring for cleaner code.
const { name, age } = user;
```

```js
// Use destructuring in function parameters with fallbacks.
function showGreeting({ name = 'Guest' }) {
  alert(`Welcome, ${name}`);
}
```

### Spread Operator & Destructuring

```js
// Simple array copying.
const numbers = [1, 2, 3];
const copy = [...numbers];
```

```js
// Merging objects—super useful for state updates.
const settings = { theme: 'light', font: 'serif' };
const newSettings = { ...settings, theme: 'dark' };
```

```js
// Destructuring + rest operator = flexible UI logic.
const [{ name }, ...others] = users;
```

### Mapping Over Objects

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
// The basics: function that calls itself until a stop condition.
function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}
```

```js
// Useful for working with nested data.
function sumTree(nodes) {
  return nodes.reduce((acc, node) => acc + node.value + sumTree(node.children || []), 0);
}
```

```js
// Perfect for UI trees, menus, comments.
function renderTree(nodes) {
  return nodes.map(node => `
    <li>
      ${node.label}
      ${node.children ? `<ul>${renderTree(node.children)}</ul>` : ''}
    </li>
  `).join('');
}
```

## Final Thoughts

JavaScript isn't just for clever solutions. In UI development, it's about making things work smoothly, responding to users quickly, and <em>not confusing yourself or your teammates</em>. Keep it simple. Keep it readable. And always test it like someone is going to mash the keyboard and click five times in a row.
