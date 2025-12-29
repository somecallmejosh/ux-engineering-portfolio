---
slug: string-immutability
publishedAt: 2025-12-29
title: "What's Up with String Immutability?"
description: 'A quick refresher on why strings in JavaScript can feel a little... stubborn. Spoiler: You can’t change them in place.'
tags: [nuxt, supabase, auth]
image: https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1767023387/josh-portfolio/javascript-primitive-immutability-confusion.png
image_alt: 'A web developer confused about string immutability in JavaScript.'
---

Sometimes when I'm working with strings in JavaScript, my brain briefly forgets how JavaScript works and thinks, "Surely I can just change this one character."

::CallOut
<strong>Spoiler:</strong> JavaScript politely ignores me.
::

That little moment of confusion usually comes down to string immutability. Here's an example:

```js
let str = "Hello, World!";
str[0] = "h"; // Trying to be clever
console.log(str); // "Hello, World!"
```

JavaScript sort of hangs me out to dry here. It doesn't throw an error or anything dramatic. It just quietly keeps going, and the original string remains unchanged.

## So... why doesn't this work?

I expected the output to be "hello, World!". Seems reasonable, right? In JavaScript, though, strings (and all primitive values) are immutable. Once a string is created, it's locked in.

When you try to do this:

`str[0] = "h";`


JavaScript doesn't throw a tantrum. It just ignores the request and keeps going with its day. The original string stays exactly the same.

## The right way to "change" a string

If you want a different string, you need to make a new one. That's the deal. For example:

```js
let str = "Hello, World!";
str = "h" + str.slice(1);
console.log(str); // "hello, World!"
```

### What's happening here:

- We take the first letter we want ("h")
- We grab the rest of the original string starting at index 1
- We combine them into a brand-new String
- We assign that new String back to the variable

Nothing was modified in place. No rules were broken. Everyone's happy.

## Reassignment vs. mutation (this part matters)

There's a big difference between reassigning a variable and mutating a value.

```js
let hello = "hello";
hello = "Hello World!";
console.log(hello); // "Hello World!"
```

This works because we're not changing the original string.
We're just pointing the variable hello at a new string. Think of it like replacing the whole sticky note instead of trying to erase one letter on it. JavaScript prefers fresh sticky notes.

## The takeaway

Strings in JavaScript don't change. Variables do. Whenever I need to "change" a string, I remind myself that I'm really just creating a new one and moving on.

I've also written about some of the string methods I reach for most often:
[Common String Methods I Use](/dev_notes/common-string-methods-i-use). They're small tools, but they do a lot of heavy lifting.
