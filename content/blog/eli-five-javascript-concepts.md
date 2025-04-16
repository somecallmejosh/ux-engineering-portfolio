---
slug: eli-five-javascript-concepts
publishedAt: 2025-04-16
title: 'Eli5: JavaScript Concepts That I Always Forget'
description: "My brain has the memory of a goldfish, so I'm writing down Javascript concepts as if I were explaining them to a five-year-old (or, you know, myself on a bad day). Consider this my personal cheat sheet in plain English."
tags: [javascript, programming]
image: "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744812311/josh-portfolio/assets_task_01jrzehbb4f5xbj8z0g9h68e3x_img_0.webp"
image_alt: "Javascript developer writing notes on a paper tablet"
---

My brain has the memory of a goldfish, so I'm writing down Javascript concepts as if I were explaining them to a five-year-old (or, you know, myself on a bad day). Consider this my personal cheat sheet in plain English. My chosen metaphor for the following content will be that of a workshop. Each feature will be represented as a different tool or process within this workshop.

## The Event Loop: The Never-Ending To-Do List
Imagine our workshop has a super-organized foreman with a giant stack of sticky notes. Each note is a job that needs doing. This foreman is the event loop. All day long, they peek at the stack. If there's a note on top, they grab it, shout out what needs to be done, and then immediately check the stack again. They keep doing this, one note at a time, making sure nothing gets missed. That's the event loop, constantly checking for tasks (like "when the button is clicked" or "when the data comes back") and getting them done.

## Promises vs. "Call Me" Notes: Ordering Future Work
Sometimes we need to ask a coworker to do something that takes time. We have two main ways to handle this:

### "Call Me" Notes (Callbacks)
**You scribble a note**: "Hey! When you finish mixing the paint, call me back so I can start painting!" They call, and then you write another note: "Okay, now that the paint is dry, call me back so I can add the glitter!" The more steps, the more "call me back" notes flying around. It can get super messy, like trying to follow a treasure map drawn by a squirrel. This messy pile of notes is what people call "callback hell." Yikes!

### Pinky Promises (Promises)
**Instead of a bunch of notes, you make a pinky promise**: "I promise that after the paint is mixed, then we will paint. And after that, we'll add glitter!" It's a neat chain of promises. If something goes wrong at any point (like spilling the paint!), there's one clear place to handle the oopsie. Much cleaner and easier to understand than a million little notes!

## Cookies, sessionStorage, and localStorage: Keeping Stuff Handy
Our workshop needs different places to keep things we need:

### `Cookies`: Tiny Secret Messages
Imagine little secret notes that the website (our customer) can slip into your browser (your personal workbench). Every time you visit that website again, your browser shows them these notes, so the website remembers you or your preferences (like your favorite color). These notes can have an "expiration date," like milk in the fridge.

### `sessionStorage`: Temporary Scratchpad
This is like a temporary doodle pad on your current workbench. As soon as you close that workbench (that browser tab), the doodle pad disappears completely. It's great for quick notes you only need for that one project.

### `localStorage`: Your Permanent Toolbox
This is like your personal toolbox that stays in the workshop even when you go home and come back. You can store tools and materials in here that you need for many different projects, and they'll stay put until you decide to take them out.

## Bringing in New Tools (Scripts): The Order Matters!
Sometimes we need to bring new tools (JavaScript files) into our workshop:

### `<script>`: The Bossy New Tool
Imagine a new tool arrives, and the person carrying it stops everyone in the workshop and makes them listen to the instructions right now before anyone can do anything else. The webpage stops loading everything else until this tool is ready. Talk about a productivity killer!

### `<script async>`: The Helpful but Impatient Tool
This new tool can be unpacked and its instructions read in the background while everyone else keeps working. But, when it's finally ready to be used, it suddenly demands everyone's attention, even if they're in the middle of something important. The webpage doesn't wait for it to download, but it does wait for it to run once it's here, potentially causing a little hiccup.

### `<script defer>`: The Polite and Prepared Tool
This tool is super considerate! It gets brought into the workshop and its instructions are read in the background while everyone continues their work. But, it waits patiently until everyone else is totally finished before it jumps in to be used. This way, the webpage loads completely before this tool starts doing its thing.

## Event Delegation: Watching the Whole Crew
Imagine you're supervising a bunch of playful puppies in a puppy park, and you want to know whenever any puppy starts barking. Instead of putting a tiny microphone on each puppy, you can just stand in one spot and listen to the whole park. If a bark happens, you know which puppy did it. That's event delegation – instead of attaching a "listener" to every single puppy (element), you attach it to the whole park (a common parent) and figure out which puppy (element) caused the bark (event). Much easier than chasing after every single pup!

## Event Bubbling: When Things Spread
Imagine you have a tiny bell inside a slightly bigger bell, inside a really big bell. If you tap the tiny bell, the sound doesn't just stay there! The bigger bells will also vibrate and make a sound. That's event bubbling: when something happens to a specific thing (you poke the small bell), the effect "bubbles up" to all the things it's inside (the medium and big bells), all the way up to the whole workshop (the document).

## Event Capturing: Catching Things Early
Now, imagine the same set of nested bells. Event capturing is like having a super sensitive ear outside the biggest bell. This ear hears the tap first, then the middle bell might muffle the sound a bit, and finally, the tiny bell actually rings. It's the opposite of bubbling – the event is caught by the outermost container first and then travels down to the actual target.

## Labeling Our Tools: var, let, and const
We need to label our tools carefully so we don't get confused:

### `var`: The Public Grab Bag

Imagine a community toy bin that anyone in the house can rummage through and even rename the toys. If someone mentions a toy's name, everyone knows that bin exists from the start (it's "hoisted"), even if the toy hasn't been put in yet (so it's "undefined" for a bit).

### `let`: Your Secret Stash
Now imagine a special box of toys that only you can access in your own room (it's block-scoped). You can't even try to play with a toy in this box until you've properly put it there ("temporal dead zone" – no playing before setup!).

### `const`: The Super-Glued Toy
Same as your secret stash in terms of access and timing, but once you pick a specific toy and put it in its spot, you can't swap it out for a totally different toy. You can still play with the toy itself, but you can't replace it with a robot if it started as a car.

## Hoisting: Remembering Names Early
Imagine the workshop manager needs to know all the workers' names before the day even begins so they can assign tasks. Even if a new worker walks in late and introduces themselves, the manager already has their name on the initial list. That's hoisting: JavaScript makes a mental note of all your tool and process names (functions and variables) right at the beginning, so it "knows" they exist throughout the workshop, even if you define them later in the instructions.

## Arrow Functions in Constructors: Pointing the Finger
Think of a teacher (your object) who wants their helper (a method) to always know who the teacher is, even if the helper visits other classrooms. Using an arrow function is like gluing the helper's pointing finger directly at the teacher. No matter where the helper goes, their finger will always point back to the correct teacher. This ensures the helper always knows who "this" refers to.

## ES2015 Classes vs. ES5 Constructors: Blueprints Old and New
Imagine two ways to draw instructions for building a super cool LEGO castle:

### ES5 Constructor Function
An older, slightly messy set of instructions with lots of separate steps that might be a bit confusing to follow.

### ES2015 Class
A brand new, super clear instruction booklet with labeled sections and easy-to-understand diagrams.

Even though they look different, both sets of instructions can ultimately build the same awesome LEGO castle. The "class" syntax just makes it much easier to see how all the different parts of the castle fit together.

## Higher Order Functions: Super-Powered Tool Makers
Imagine a special machine in our workshop that doesn't just build regular toys. This machine can also take other toy-making machines as ingredients and then create a brand new, even cooler machine or a special kind of toy! In JavaScript, a higher-order function is like this super machine – it can either take other functions as inputs or spit out a brand new function as its result (or both!).

##  .call vs. .apply: Inviting Friends to the Party
Think of .call and .apply as two ways to invite your function (the party) to hang out with some objects (your friends):

### `.call`
It's like inviting your friends by listing each of their names individually on the invitation: "Hey [Friend 1], [Friend 2], and [Friend 3], come to my party!" You list the arguments one by one.

### `.apply`
It's like having a list of all your friends in a phone book (an array) and saying, "Hey phone book, everyone in this list is invited to my party!" You give it a single array of arguments.

Both get your friends to the party, just with slightly different ways of sending the invites!

## Anonymous Functions: Quick One-Time Tools
Think of an anonymous function like a quick note you scribble on a scrap of paper because you only need it for one second and then you'll throw it away. It doesn't need a name because you're not going to call it again later. In JavaScript, we use these for short, one-off tasks where giving the function a name would be overkill.

## Function Declarations and Instantiation: Recipes and Baked Goods
Let's revisit our recipe analogy:

### `function Person() {}`: The Recipe Book
This is like writing down a recipe for making a "Person." You've got the instructions, but you haven't actually baked anything yet.

### `const person = Person()`: Following the Recipe (Regular Style)
This is like just following the recipe step-by-step like any other set of instructions. Whatever the "Person" recipe returns is what you get. If the recipe doesn't say to return a cake, you might end up with nothing (undefined).

### `const person = new Person()`: Baking a Brand New Cake
This is like saying, "Use the 'Person' recipe to bake me a new 'Person'!" The new keyword tells JavaScript to create a fresh, empty "cake," link it to the "Person" recipe's special ingredients (prototype), and if the recipe doesn't say to serve something else, this new "cake" is what you get.

## Closures: Carrying Secrets
Imagine you have a magic backpack. You can put special tools and materials inside it in one part of the workshop. Then, even if you move to a completely different area, you can still open that backpack and use the items inside. A closure in JavaScript is like this magic backpack – a function that remembers and can access the tools and materials (variables) from the area where it was created, even after you've moved on.

```javascript
function makeCounter() {
  let count = 0; // A secret tool in the backpack

  return function() {
    // This inner function is the magic backpack
    count++;
    console.log(count);
  };
}

const counterA = makeCounter();
counterA(); // 1 (opening the backpack and using the tool)
counterA(); // 2 (using it again!)
```

## Prototypal Inheritance: Borrowing Features
Imagine you have a master blueprint for building a basic toy car. Now, you want to build a race car. Instead of drawing a whole new blueprint from scratch, you can just say, "This race car is like the basic car, but it has a spoiler and faster wheels." The race car inherits the basic features from the car blueprint and then adds its own special stuff. That's prototypal inheritance: objects can borrow properties and abilities from other "prototype" objects.

## `Function.prototype.bind`: Tying the Puppet Strings
Imagine a puppet that anyone can pick up and control ("this"). .bind() is like permanently tying the puppet's strings to one specific puppeteer's hand. No matter who else tries to grab the puppet, it will always respond to the original puppeteer's commands. That's what .bind() does – it makes sure a function's "this" value always refers to a specific object, no matter how or where you call the function later.

## `this`: Who's Holding the Tool?
Imagine different workers in the workshop wearing different name tags depending on the tool they're currently using. If a worker has a "Welder" tag, you know that "this" worker is currently operating the welding equipment. In JavaScript, "this" is like the current name tag of a function, telling you which object the function is currently working with. This tag can change depending on how the function is called.

## CommonJS vs. ES Modules: Sharing Toys Nicely
Let's revisit sharing toys in the classroom:

### CommonJS: The "Gimme That!" System
This is like the old way where kids would just shout, "I need that block from your pile!" right when they needed it. Each kid's pile just listed what they had.

### ES Modules: The Organized Toy Library
This is the newer, more organized way. Each kid has a sign on their toy shelf saying, "I'm giving away these blocks." And if another kid needs a block, they write on their request list at the top, "I'm taking these blocks from your shelf." The teacher (JavaScript engine) can see who needs what in advance and keep things tidy.
