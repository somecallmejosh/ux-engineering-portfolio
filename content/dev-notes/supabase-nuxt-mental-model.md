---
slug: supabase-nuxt-mental-model
publishedAt: 2025-12-15
title: "Supabase, RLS, and the Day My Brain Refused to Understand It"
description: 'Debugging Supabase auth & RLS in Nuxt: a funny story of silent failures, recursion traps, and fixing my mental model for smoother projects.'
tags: [nuxt, supabase, auth]
image: https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1765805949/josh-portfolio/supabase-confusion.webp
image_alt: 'Developer Confused by Supabase Postgres Row Level Security and Nuxt Integration'
---

::TagMenu{tag="supabase" collection="dev_notes"}
Supabase
::


I just wanted to add login to a Nuxt app. Email and password. A little profile table. Maybe an admin flag. I've done this a hundred times in other stacks. No big deal.
So I picked Supabase. It looked perfect: built-in auth, a real Postgres database, and Row Level Security (RLS) to keep things safe. On paper, it was exactly what I needed.
In reality, it made me realize how fuzzy my mental model really was.

## When Everything Works... But Nothing Works
The app started out polite. Users could sign up and log in. Sessions appeared. Profiles got created in the database. Everything looked fine. But when I tried to fetch the current user's profile? Nothing. Empty. Null. Every single time. I blamed everything except myself:

> "Must be a typo.<br /> Nuxt SSR is messing with it.<br /> Supabase is being too clever."<br/>
> -- yours truly

Nope. The system was working exactly as designed. I just didn't understand the design yet.

## Authentication ≠ Permission
Here's the first big light-bulb moment: Supabase Auth only answers one question. "Who are you?"

It does not answer:
- "Are you an admin?"
- "Can you see this row?"
- "Should you be allowed to do that?"

Those questions are up to me (or my database policies). They're separate on purpose. I had quietly smooshed authentication and authorization into one big blob in my head. Supabase refused to play along.

## The User That Wasn't Quite the User
In Nuxt, there's a handy composable called `useSupabaseUser()`. It gives you an object with email, id, everything looks legit. Turns out, it's not always the source of truth, especially with SSR or when the page sits in the background.
The real, reliable user lives in the session:

```js
const { data: { session } } = await useSupabaseClient().auth.getSession()
const userId = session?.user?.id
```
Once I started keying everything off the session instead of guessing with the reactive user, a whole category of weird bugs just... vanished.

## Silence Is Golden (and Confusing)
<strong>Row Level Security</strong> has a quirky habit: when a policy says "no," Supabase doesn't yell or throw an error on `SELECT` queries. It just returns zero rows. At first, this felt broken. Then it clicked: from the database's point of view, if you're not allowed to see a row, it literally doesn't exist for you. Silence is the correct answer.
After that shift, empty results stopped being scary. They became helpful signals.

## The Day I Broke Postgres
Feeling clever one afternoon, I wrote an RLS policy for the `profiles` table that checked if the user was an admin... by querying the `profiles` table again. Postgres looked at me, sighed, detected infinite recursion, and politely refused to cooperate.

<strong>Lesson learned</strong>: RLS policies apply to every query, including the ones inside the policy itself. Self-referencing = instant loop.

::CallOut
**Pro tip**: plenty of old tutorials do exactly this. They work until they suddenly don't.
::

## Triggers Don't Care Who You Are
I thought the service role key was a "do whatever you want" pass. It is... for RLS. But triggers? They still run. Always. No exceptions. When a trigger blocked an operation I was doing with the service key, I was annoyed for about five minutes. Then I realized, that's good! Triggers protect invariants. The database is just doing its job, even when I'm being lazy.

## The Mental Model That Finally Clicked
Everything settled down once I split the system into three clear layers in my head:

- <strong>Authentication</strong>: "Who are you?" (Supabase Auth)
- <strong>Authorization</strong>: "What does the app let you do?" (My code, middleware, etc.)
- <strong>Enforcement</strong>: "What will the database allow, no matter what?" (RLS policies)

Supabase touches all three, but it keeps them separate. Once I stopped trying to merge them, the whole thing felt calmer and more predictable.

## Why This Took Me So Long
The docs are actually pretty good. The problem was the lack of "failure stories." Most tutorials show the happy path where everything works on the first try. They don't explain what silence means, or why your clever policy just exploded.
You don't learn this stuff from success screenshots. You learn it by staring at an empty array and wondering why the universe hates you.

## My Little Reminder List
I'm writing this post mostly for future me, but you're welcome to borrow it:

- <strong>Auth</strong> gives identity. It does not give permission.
- <strong>Sessions</strong> are the real source of truth in Nuxt.
- <strong>RLS</strong> fails quietly on purpose. That's a feature.
- <strong>Keep policies simple and boring</strong> (no self-queries!).
- <strong>Triggers</strong> run every time, even for service keys.
- <strong>If nothing comes back</strong>, the system is probably protecting you.

## The Real Takeaway
Supabase wasn't broken. My mental model was. Once I fixed the model, the rest fell into place naturally. The app got quieter. Debugging got faster.

Next time I start a Nuxt + Supabase project (and there will be a next time), I'll pause and remember where each responsibility lives. The database has its own opinions. Respect them, and everyone gets along just fine.
Happy coding!

(And if you're using SQLite locally for quick prototypes, just remember it won't complain about missing RLS—so test your policies properly before going live with Supabase!)
