---
slug: just-use-whatever-you-want
publishedAt: 2025-05-22
title: "Tech Stacks: Just Use Whatever the F@ck You Want"
description: "A brutally honest look at tech stack flame wars. Stop the dogma, skip the hype, and use whatever the f@ck solves your problem."
tags: [zeitgeist, front-end-development, best-practices]
image: "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1747921794/josh-portfolio/assets_task_01jvw3qp8ee6grfhphzzqsrvap_1747921470_img_1.webp"
image_alt: "Developers arguing over which framework to use."
---

Every few months, the web dev discourse loops back to the same tedious flame war: someone yells **"Just f@cking use HTML!"** and someone else responds with **"Just f@cking use React!"** These posts go viral. Again. People cheer, jeer, clap hands, write hot takes, and feel very seen. Then they go back to work… building something in a stack they picked years ago and probably haven't rethought since.

Let me save you some time: **Just use whatever the f@ck you want.** That's it. That's the whole post. Except it's not. Because we need to talk about why this conversation sucks, and what it says about the state of front-end development today.

## The false binary: React vs. HTML

These two articles, [justf@ckingusereact.com](https://justfuckingusereact.com/) and [justf@ckingusehtml.com](https://justfuckingusehtml.com/), perfectly represent the dogmatic ends of the spectrum:

- **Team React™**: "HTML is quaint. Components are the only way. Everything is dynamic. Everything is a SPA. If you're not using a VDOM, are you even shipping software?"
- **Team Rawdog™**: "Frameworks are bloated. JavaScript is a crutch. Just use HTML. If you reach for a build step, you're part of the problem."

It's tribalism. It's reductive. It's exhausting. And most importantly, **it doesn't help you make decisions.** Because here's the punchline neither camp wants to admit: **They're both right, and both wrong, depending on the problem you're solving.**

## Developer identity ≠ framework choice

Somewhere along the line, we stopped picking tools like builders and started picking them like *sports teams*. We don't just use Vue, we're *Vue devs*. We're *Svelte people*. We put React in our Twitter bios. We slap Astro logos on our laptops. We wrap our self-worth in the tools we use. That's not development. That's cosplay.

React isn't a lifestyle. Neither is HTML. They're tools. They have strengths, they have tradeoffs, and they serve different types of problems. Dogmatism helps people feel safe. But it kills good judgment.

## Raw dogging HTML isn't some magical fix either

Let's get one thing straight: I love semantic HTML. I've built entire design systems rooted in accessible markup. I've worked on sites where reducing bundle size was the difference between usable and unusable for end users. I believe in progressive enhancement. I think `fieldset`, `label`, and `aria-*` attributes are beautiful. But I've also seen people turn their "no-JS" purity into a nightmare.

You know what's *not* fun? Reimplementing complex UI interactions from scratch using only `<details>`, `<dialog>`, and duct tape. You know what's really easy to screw up? Keyboard interactions, focus management, aria-live regions, scroll locking, lazy loading, form validation, data syncing…

Sometimes, the complexity of your problem *demands* a framework. And if it doesn't now, it might next quarter. Starting with "just HTML" is great, until it isn't. And unless you like rewriting everything in a month, maybe plan ahead?

## React isn't evil. It's just not special.

React isn't your enemy. It's not bloated garbage. It's not the savior of the front-end world either. It's a tool for building componentized, reactive UIs. If you need those things, cool. If you don't? Maybe don't use it.

But stop pretending React is some kind of enlightened plane of existence. Using JSX doesn't mean you've ascended beyond HTML and CSS. It just means you're writing HTML-like structures in JavaScript. You're still shipping divs.

Also, newsflash: **React is not your product.** You don't get bonus points from users for picking the "clever" tool. They just want the app to load quickly, feel good to use, and not break every time they click something.

## What actually matters

Let's zoom out. Here's what actually matters when choosing how to build a project:

### Who's going to maintain this?
If it's just you, fine, pick whatever makes you productive. If it's a team? Use what everyone understands and can work with safely. Tech debt from tool elitism is still tech debt.

### How complex is the thing you're building?
Five static pages? Use HTML.

Dashboard with deeply nested state and client-side routing? Maybe don't reinvent React with Alpine and `data-*` attributes.

### What's the timeline and budget?
Shaving 30kb off a bundle is meaningless if the product doesn't ship for six months because someone wanted to hand-roll every animation with Web Animations API and pure SVG. You're not making art. You're solving problems.

### How does it perform?
Measure. Don't assume. I've seen 10kb HTML pages load slower than 100kb apps because of bad server config. Frameworks don't make your site slow. Poor decisions do.

### Does it degrade gracefully?
Are you actually building something that needs to work without JS? Cool, build for that. If not, stop acting like every site is an emergency broadcast system that must function on a Palm Pilot in a Faraday cage.

## Framework-free ≠ bullshit-free

Let's address the purists yelling "no frameworks!" as if purity equals clarity. You can still write bloated, inaccessible, unusable garbage in plain HTML and JS. You can still make an unmaintainable mess. You can still ignore user needs. 'No build tool' isn't the same as 'no bullshit.'

## "Minimalist" doesn't mean useful

You ever see someone proudly show off a site that's 3kb, loads instantly, works in Lynx… and has all the UX charm of a DMV kiosk? Cool story, bro. I'm not navigating your job board with `:focus-visible` and a dream.

Let's aim for useful, usable, **and** performant, not just small. If you're building a modern UI with expectations of interactivity, responsiveness, state syncing, and form handling, frameworks help you not lose your mind. That's not sin. That's strategy.

## The middle path (aka: sanity)

Want to be a good developer?

- Learn HTML deeply.
- Learn how to write CSS without hating yourself.
- Learn JS well enough to not need a framework. But also to understand what frameworks actually solve.
- Pick tools that match the job, your team, and your future roadmap.
- Don't add dependencies you don't understand.
- Don't remove dependencies just to brag.

**And stop turning your stack into a f@cking personality.**

You're not a better dev for using or avoiding React.
You're not clever for going "framework-free" if it creates a mess no one else can touch.
You're not a genius for using Bun, or Vite, or Astro, or HTMX, or Svelte, or Web Components, or ViewComponent, or Alpine, or jQuery (again), or just HTML.

**You're a good developer if you make things work, responsibly, accessibly, and maintainably.**

## Final thoughts

React isn't the enemy. Neither is HTML. The enemy is **dogma**. So, again, for the people in the back: **Just use whatever the f@ck you want.** Just make sure you understand *why* you're using it.
And maybe go build something real before you write another blog post about how clever your setup is.
