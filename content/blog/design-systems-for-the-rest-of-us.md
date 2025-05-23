---
slug: design-systems-for-the-rest-of-us
publishedAt: 2025-05-04
title: 'Design Systems & Component Libraries for the Rest of Us'
description: "A lighthearted look at building design systems without the ceremony, complexity, or committee-induced paralysis."
tags: [design, front-end-development, accessibility]
image: "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1746369173/josh-portfolio/assets_task_01jtdv9wbkem5r50p1yxnnqpvb_1746369114_img_0.webp"
image_alt: "A whimsical illustration of a design system with playful components, colors, and patterns."
---

::CallOut
**Spoiler**: You don't need a Storybook to have a system.
::

Most of the articles you'll find about design systems come from people working on big teams, in big organizations, solving big problems. That's great. Honestly, a lot of that thinking has trickled down and helped all of us do better work.

But most of us aren't in that world. We're building scrappy apps, balancing five priorities at once, or inheriting a pile of CSS someone named `new-styles-final-final.css`. Maybe you're the only developer on the project. Maybe you're the one person keeping the design system alive between sprints, bug fixes, and production fires.

This post is for that version of you...the one who wants a little consistency without all the overhead. A design system that doesn't take six meetings to update. Something light, flexible, and maybe even a little fun.

## So what exactly *is* a design system?

At its core, it's just a shared set of decisions:
- What color is the primary button?
- How much space goes between things?
- What happens when someone tabs through the form?

Whether those decisions live in a polished component library or a sticky note on your monitor, that's your system. In a perfect world, it's easy to understand, easy to apply, and helps your product feel coherent without anyone having to overthink it.

## Where things start to go off the rails

Let me tell you what I've seen.

### 1. The One Button to Rule Them All
You know the one. It checks if there's an `href` so it can become a link. Then it checks if it's an external link to decide whether to add `rel="noopener noreferrer"` and `target="_blank"`. Then there's logic for `variant`, `size`, `icon`, `fullWidth`, `loading`, `disabled`, `aria-busy`, `type="button"` in case it's rendered in a form, and now your team is afraid to touch it.

### 2. The 50-line Horizontal Row
Not a joke. I've seen `<hr>` components where half the logic is layout gymnastics and the other half is defensive code that no one understands anymore. At some point, someone added a prop called `forceLeft` and nobody asked why.

The wildest part? It could've been **five simple characters**: `<hr />`. Six, if you count the space. One line of CSS, and done. But somehow we ended up with a full-blown component, tests, and documentation just to draw a line on the page. Welcome to the overengineering olympics.

### 3. The Banner That Became a Maze
You start with a simple masthead. Then someone wants an image on the right. Then someone wants a CTA. Then no image. Then centered text. Then "can we make it editable in the CMS?" Now you've got a single component trying to solve 12 layout problems with 9 props, 4 conditionals, and zero joy.

### 4. The Component Graveyard
It starts with good intentions. But then you realize half the components in the repo are only used once. Some of them aren't used at all. You don't even remember why someone added `AnimatedBadgeWithTooltip` or why it has 30 lines of animation config. Every system has a few of these. That's okay. But too many, and you're just shoveling tech debt into your own backyard.

## What's worked better for me

### Keep it boring
Pick your colors. Choose your spacing. Stick to them. Name them clearly. You don't need to invent a token naming strategy unless you're supporting multiple themes or working across platforms.

### Build what repeats
If I've written the same thing two or three times, that's usually my signal to extract a component. Not before. The fastest way to over-engineer your UI is to start building components you *might* need someday. <abbr title="Just in Time">JIT</abbr> development is totally cool and usually the best way to go.

### Make it understandable at a glance
Whether you use Tailwind, Sass, or just straight-up CSS, the rule is the same: if you have to stop and think about how to use a component, it's not helping you.

### Accessibility isn't optional
Accessible components don't just help users, they help you sleep better at night. Add roles, labels, keyboard behavior, and focus styles. If you're gonna systematize something, systematize inclusion.

### UI frameworks? Totally valid
Bootstrap, Chakra, ShadCN, DaisyUI, Tailwind UI...they're all solid. Well-documented, battle-tested, and a huge time-saver when used wisely. No shame in that game.

But here's something worth considering:
If you have the skill to customize these frameworks to fit your brand and design style, you probably also have the skill to build your own from scratch.

That doesn't mean you *should*. But rolling your own means:
- No versioning headaches
- No extra dependencies
- No unused code (even though most frameworks are pretty great about tree shaking these days)

Sometimes the best system is the one you understand top to bottom.

## A rule of thumb

If a piece of UI does the same thing in three different places, it's probably worth making a component. If it does *kind of* the same thing in three places but looks and behaves totally differently in each… maybe not.

When in doubt, ask:
> *Does this make the next developer's life easier, or harder?*

If it's easier, componentize. If it's harder, hold off.

## Final thoughts

You don't need a heavyweight design system. You need one that works for your team&mdash;your actual team, not the imaginary one with five designers and a dedicated Figma plugin engineer.

Start small. Be consistent. Fix things that are confusing. Leave the rest alone. And don't be afraid to delete a component when it's no longer helping. That, too, is part of the system.

As for how you build your components? Honestly, it doesn't matter that much. If you're full React, cool. Build your system in React. If you're working across multiple codebases using different front end libraries/frameworks, maybe native Web Components are a better fit. If you hate writing native Web Components by hand, Stencil or Lit can take the edge off. If you're in the Ruby on Rails world, definitely check out [ViewComponents](https://viewcomponent.org/) by the GitHub team. They're solid.

The key is to be consistent, take your team's skillsets into account, and stick with an approach that makes sense for the way you work. Don't overthink it. Just pick a direction and rock with it. You got this!
