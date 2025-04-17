---
slug: eli-five-javascript-concepts
publishedAt: 2025-04-10
title: 'Eli5: JavaScript Concepts That I Always Forget'
description: "My brain has the memory of a goldfish, so I'm writing down Javascript concepts as if I were explaining them to my nephew in Kindergarten (or, you know, myself on a day when the goldfish outstmarts me)."
tags: [javascript, programming]
image: "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744812311/josh-portfolio/assets_task_01jrzehbb4f5xbj8z0g9h68e3x_img_0.webp"
image_alt: "Javascript developer writing notes on a paper tablet"
---
My brain has the memory of a goldfish, so I'm writing down Javascript concepts as if I were explaining them to my bestest friend (or, you know, myself on a day when the goldfish wins). Consider this our super-duper simple cheat sheet! We're going to imagine our JavaScript world is like our kindergarten classroom.

## The Event Loop: The Teacher's To-Do List

Imagine our teacher has a big pile of **"do this next!" notes** on their desk. All day, the teacher looks at the top note. They read it out loud, help the class do that thing, and then look at the pile again. That's just like the **event loop** in JavaScript! It's like a super-fast teacher constantly checking a list of things that need to happen. It does each thing one by one so everything stays organized.

**In JavaScript:** The event loop manages the execution of asynchronous tasks, ensuring non-blocking operations don't freeze the main program flow.

## Promises vs. "Call Me" Notes: Planning Playtime

Sometimes we need to ask our friend to do something that takes a while. We have two ways to plan this:

### "Call Me" Notes (Callbacks)

**You give a note to your friend**: "When you're done building the tower, *call me back* so we can start painting!" It can get super confusing, like trying to remember who promised to share their crayons! This messy bunch of notes is like **"callback hell"** in JavaScript. Uh oh!

**In JavaScript:** Callbacks are functions executed later when an asynchronous operation completes, but nesting them deeply can be hard to manage.

### Pinky Promises (Promises)

**Instead of lots of notes, you make a pinky promise**: "I promise that *after* we build the tower, *then* we will add the flags. *And after that*, we'll knock it down!" It's a neat chain of promises. If something goes wrong, there's one clear way to handle the problem. Much easier to understand!

**In JavaScript:** Promises represent the eventual outcome of an asynchronous operation, allowing cleaner chaining of actions and error handling.

## Cookies, sessionStorage, and localStorage: Our Classroom Storage

Our classroom has different places to keep our special things:

### `Cookies`: Tiny Secret Messages

Imagine little **secret messages** that the website (our visitor) can give to your browser (your cubby). Every time you visit that website again, your browser shows them these messages, so the website remembers you or your favorite things. These messages can have an "expiration date."

**In JavaScript:** Cookies are small text files websites store on a user's computer to remember information across browsing sessions.

### `sessionStorage`: Temporary Desk Drawer

This is like a **temporary drawer** in your desk for the project you're working on right now in this one class session (browser tab). As soon as the class ends, everything in that drawer disappears. It's great for keeping things you only need for a little while.

**In JavaScript:** `sessionStorage` provides temporary data storage for the duration of the current browser session.

### `localStorage`: Our Permanent Toy Box

This is like the **big toy box** in the classroom that stays there even after everyone goes home. You can put your favorite toys in here, and they'll still be there the next day. They stay until someone decides to take them out.

**In JavaScript:** `localStorage` provides persistent data storage that can be accessed across browser sessions.

## Bringing in New Helpers (Scripts): Lining Up Properly!

Sometimes our teacher brings in new helpers (JavaScript files) to show us something:

### `<script>`: The Bossy Helper

Imagine a new helper walks in and **makes everyone stop what they're doing** to listen to their instructions *right now* before anyone can play again. The webpage stops showing you things until this helper is finished talking. Not very fun!

**In JavaScript:** Standard `<script>` tags block HTML parsing while the script is downloaded and executed.

### `<script async>`: The Helpful but Impatient Helper

This new helper can get their instructions ready in the background while everyone else keeps playing. But, when they're ready to show us, **they suddenly interrupt everyone**. The webpage doesn't wait to download, but it waits to run, potentially causing a little jump.

**In JavaScript:** The `async` attribute downloads the script without blocking, but execution pauses HTML parsing.

### `<script defer>`: The Polite and Prepared Helper

This helper is super nice! They get their instructions ready quietly in the background while everyone keeps playing. But, they **wait patiently** until everyone is totally finished playing before they show us what they have. This way, the webpage shows you everything before the script starts doing its thing.

**In JavaScript:** The `defer` attribute downloads the script without blocking and executes it after HTML parsing is complete.

## Event Delegation: Watching All Our Friends

Imagine our teacher wants to know whenever any kid in the class starts singing. Instead of putting their ear right next to every single kid, they can just **stand in one spot and listen to the whole classroom**. That's **event delegation** – instead of the computer listening to every single thing you can click on, it listens to a bigger thing that holds all those clickable things and figures out which one you actually clicked. Much easier for the computer!

**In JavaScript:** Event delegation attaches a single listener to a parent element to handle events for all its children.

## Event Bubbling: When Excitement Spreads

Imagine you get super excited and clap your hands. The person next to you gets a little excited too and taps their foot, and then the person next to them starts bouncing up and down! That's **event bubbling**: when something happens to one thing, the excitement "bubbles up" to all the things around it, all the way up to the whole classroom.

**In JavaScript:** Event bubbling is the order in which event handlers are called, starting from the innermost element and going up to its ancestors.

## Event Capturing: Catching Whispers Early

Now, imagine the same nested bells. **Event capturing** is like the teacher having super good ears and hearing a tiny whisper in the small bell *first*, then maybe the middle bell muffles it a bit, and then the big bell barely registers it. It's the opposite of bubbling – the teacher hears the event at the biggest container first, and then the sound travels down to the actual thing that made the noise.

**In JavaScript:** Event capturing is an event propagation model where the event is first caught by the outermost element and then travels down to the target.

## Labeling Our Toys: `var`, `let`, and `const`

We need to label our toys (variables) carefully so we don't get them mixed up:

### `var`: The Classroom Toy Bin

Imagine a big toy bin that everyone in the class can reach into and even change what's inside. If someone asks for a toy by name, everyone knows that bin exists from the start (it's "hoisted"), even if the toy isn't in there yet.

**In JavaScript:** `var` declares a function-scoped or globally-scoped variable that is hoisted.

### `let`: Your Special Cubby

Now imagine you have a special cubby for your own toys. Only you can put toys in and take them out. You can't even try to play with a toy in this cubby until you've actually put it there.

**In JavaScript:** `let` declares a block-scoped variable that is not hoisted in the same way as `var`.

### `const`: Your Super-Glued Toy

Same as your special cubby for access, but once you choose a toy and put it there, **you can't swap it out for a completely different toy**.

**In JavaScript:** `const` declares a block-scoped variable that cannot be reassigned after initialization.

## Hoisting: Remembering Everyone's Names

Imagine our teacher needs to know all the students' names before class starts so they know who's here. Even if a new student walks in late and says their name, the teacher already has a spot for them on their list. That's **hoisting**: JavaScript makes a mental note of all the names of our tools and helpers (functions and variables) right at the beginning of our class (scope), so it "knows" they exist, even if we describe them later in the day.

**In JavaScript:** Hoisting moves variable and function declarations to the top of their scope during compilation.

## Arrow Functions in Constructors: The Teacher's Special Helper

Think of a teacher (our object) who wants their special helper (a method) to always know who the teacher is, even if the helper goes to help in another classroom. Using an **arrow function** for the helper is like giving the helper a special name tag that's permanently stuck to the teacher. This makes sure the helper always knows who "**this**" refers to.

**In JavaScript:** Arrow functions used as methods in constructors lexically bind `this` to the constructor's `this`.

## ES2015 Classes vs. ES5 Constructors: Building Blocks Old and New

Imagine two ways our teacher can show us how to build a toy robot:

### ES5 Constructor Function

An older way of giving instructions, like a long list of steps that might be a little confusing and not very clearly labeled.

### ES2015 Class

A brand new, super clear instruction book with different sections for the robot's head, body, and legs, making it much easier to see how everything fits together.

Even though the instructions look different, both ways can help us build the same kind of toy robot. The "class" way just makes it much easier to understand the plan.

**In JavaScript:** ES2015 classes offer a cleaner syntax for object blueprints and inheritance compared to ES5 constructor functions, though they are still based on prototypes.

## Higher Order Functions: Super Helper Functions

Imagine a special helper function that doesn't just do one thing. This helper can also **take other helper functions as instructions** or even **give you back a brand new helper function** to use! It's like a super-powered helper!

**In JavaScript:** Higher-order functions can take other functions as arguments or return functions as their results.

## `.call` vs. `.apply`: Asking Friends to Share

Think of `.call` and `.apply` as two ways our teacher can ask different friends (objects) to share their toys (functions):

### `.call`

It's like the teacher saying, "Hey [Friend 1], [Friend 2], and [Friend 3], can you show us your toys?" The teacher lists each friend one by one.

**In JavaScript:** `.call` invokes a function with a specified `this` value and arguments provided individually.

### `.apply`

It's like the teacher having a list of friends who have cool toys and saying, "Hey everyone on this list, can you show us your toys?" The teacher gives the computer a list (an array) of all the friends.

**In JavaScript:** `.apply` invokes a function with a specified `this` value and arguments provided as an array.

## Anonymous Functions: Secret Little Helpers

Think of an **anonymous function** like a quick little helper job that we only need to do once, so we don't even need to give it a special name. It's like a little note we write to ourselves and then throw away.

**In JavaScript:** Anonymous functions are functions without a name, often used as arguments to other functions.

## Function Declarations and Instantiation: Our Building Plans and Creations

Let's think about building with blocks again:

### `function Person() {}`: The Building Plan

This is like drawing a **plan** for how to build a "Person" out of blocks. We have the instructions, but we haven't actually built one yet.

**In JavaScript:** This is a function declaration, defining a named function.

### `const person = Person()`: Following the Plan (Regular Way)

This is like just following the building plan step-by-step. Whatever the plan says to give us at the end is what we get.

**In JavaScript:** This is a regular function call, executing the function and assigning its return value.

### `const person = new Person()`: Building a Brand New Block Person

This is like saying, "Use the 'Person' building plan to **build a brand new 'Person'**!" The `new` keyword tells JavaScript to create a fresh, empty block person and follow the plan.

**In JavaScript:** Using `new` with a constructor function creates a new object, sets its prototype, and binds `this`.

## Closures: Our Secret Sharing Circles

Imagine we have a **secret sharing circle**. Only the kids in the circle know a special secret (a variable). Even if one of the kids leaves the circle, they still remember the secret! A **closure** in JavaScript is like this secret sharing circle – a function that remembers and can access the secrets (variables) from the circle (environment) where it was created, even after we've left that circle.

**In JavaScript:** A closure is created when an inner function retains access to the outer function's variables after the outer function has finished executing.

## Prototypal Inheritance: Borrowing Toys

Imagine we have a **basic toy car**. Now, we want to make a race car. Instead of building a whole new car from scratch, we can say, "This race car is *like* the basic car, but it has a spoiler and faster wheels." The race car **borrows** the basic car features. That's **prototypal inheritance**: objects can borrow properties and abilities from other "prototype" (the basic car).

**In JavaScript:** Prototypal inheritance allows objects to inherit properties and methods from their prototype object.

## `Function.prototype.bind`: Tying Our Shoes to Our Feet

Imagine you have a pair of shoes that anyone can try to wear ("`this`"). **`.bind()` is like permanently tying those shoes to *your* feet**. No matter who else tries to put them on, they'll always be stuck to you! That's what `.bind()` does – it makes sure a function's "`this`" value always refers to a specific object, no matter how or where the function is called later.

**In JavaScript:** The `bind()` method creates a new function with a fixed `this` value.

## `this`: Who's Playing with the Toy?

Imagine different kids in the classroom wearing different **stickers** depending on which toy they're currently playing with. If a kid has a "Building Blocks" sticker, you know that "**this**" kid is the one playing with the building blocks right now. In JavaScript, "`this`" is like the current sticker of a function, telling you which object the function is currently working with.

**In JavaScript:** The `this` keyword refers to the object that is currently executing the code, and its value depends on how the function is called.

## CommonJS vs. ES Modules: Sharing Crayons

Let's think about sharing crayons in our classroom:

### CommonJS: The "Can I Borrow That?" System

This is like the old way where if you needed a specific crayon, you'd just ask the person next to you, "Hey, can I borrow your blue crayon *right now*?"

**In JavaScript:** CommonJS is a module system used primarily in Node.js, loading modules at runtime with `require()`.

### ES Modules: The Organized Crayon Box

This is the newer, more organized way. Before we even start drawing, everyone puts their crayons in a big community box and labels which ones they're willing to share. Then, if you need a crayon, you look at the box and say which ones you want to use at the beginning of your drawing time.

**In JavaScript:** ES Modules are the standard module system in modern JavaScript, using `import` and `export` for static dependency analysis.

Phew! We made it through JavaScript kindergarten! Hopefully, these simple stories will help those tricky concepts stick in our goldfish brains. Now let's go have some recess!
