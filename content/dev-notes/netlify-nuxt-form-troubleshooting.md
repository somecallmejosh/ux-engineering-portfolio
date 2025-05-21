---
slug: netlify-nuxt-form-troubleshooting
publishedAt: 2025-04-29
title: "Netlify Forms with Nuxt 3"
description: "Here's how I finally got the submissions to show up and how I learned tp avoid the same five-hour rabbit hole the next time."
tags: [nuxt, netlify]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1745983435/josh-portfolio/assets_task_01jt2bea62fmnam8yqha1nb72d_1745983373_img_0.webp"
image_alt: "A screenshot of the Netlify Forms dashboard showing form submissions."
---
This was originally posted as a blog post, but I thought it would be a good addition to my Dev Notes. It's a bit more of a troubleshooting story than a how-to, but I hope it helps someone else out there.

::CallOut
<strong>TLDR;</strong> If your Netlify form submissions have ghosted you, check your build command. And keep a plain ol' `form.html` in your `/public` folder, just in case.
::

We've all been there. You craft a clean little [contact form](/contact), sprinkle in some inline validation that you rolled from scratch, maybe even slap on a nice "Send Message" button that you're oddly proud of. You deploy it. It looks great. You give yourself a quiet nod of approval.

And then... <em>crickets</em>. No messages. No leads. Nothing.

You check your Netlify Forms dashboard expecting to see a tidy list of submissions. Instead, it's just a cold, empty void staring back at you. A digital shrug. It's like shouting into a canyon and hearing nothing, not even your own echo. This is the story of how my form ghosted me, and how I finally figured out why.

## Everything Looked Right
I've been rebuilding my portfolio site with Nuxt.js. I'd done this dance before on several sites in the past. Set up a form, add `data-netlify="true"`, toss in a hidden form-name field, and you're good to go. I even added a useFetch call to handle submissions via JavaScript so users wouldn't get redirected on form submission. Smooth, right?

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  @submit.prevent="onSubmit"
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- other fields... -->
</form>
```
```js
const { error } = await useFetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({ "form-name": "contact", ...formData.value }).toString(),
});
```

I followed my own [RTFM advice](/projects/forever-project#rtfm-seriously) and double-checked the Netlify documentation. Everything was in place. I even got a nice 200 OK in the network tab. The request payload looked perfect. But nothing showed up in Netlify. Not even a little test message. It was like sending postcards to a mailbox that didn't exist. Sad face emoji. :-(

## The Debugging Spiral
At first, I assumed I'd missed something obvious. But after several rounds of hair-pulling (honestly, I don't have 'hours' worth of hair to pull...minutes at best), here's what I tried (and maybe what you've tried, too):

1. Triple-checking the HTML in DevTools to make sure Netlify's attributes weren't being stripped during build. <em>Nope</em>. They were there.
1. Submitting without JavaScript to eliminate fetch-related issues. <em>Still no luck.</em>
1. Using FormData instead of URL-encoded strings. <em>Negatory.</em>
1. Adding a plain HTML form (no Vue) in my `public/` directory. That worked perfectly. This told me the issue wasn't with Netlify, but with how my Nuxt app was being built.
1. Trying `useFetch` vs native `fetch`. <em>No difference.</em>
1. Debugging an unrelated Vue error that made me briefly suspect reactivity gremlins. <em>Red herring.</em>
1. Changing form field ordering, field names, timing of submission... <em>you get the idea.</em>

Every fix felt promising for about 90 seconds. And then… <em>nothing</em>.

## The Real Culprit? The Build Command
In a last-ditch effort, I did something I should've done earlier: I checked my Netlify build settings. My build command was set to:

```bash
npm run build
```
Which seems reasonable, right? That's how you build a Nuxt app. That's pretty much what I've always done. And this works just fine and dandy... <em>in Nuxt2 apps</em>.

But for static site generation with Nuxt 3, and for Netlify Forms to work properly, you need to use:

```bash
npm run generate
```

That small switch was the entire difference. `npm run build` compiles your app, but it doesn't actually pre-render static pages. Netlify Forms needs to see the actual HTML during the build so it can parse it, configure itself, and know where to send form submissions.

Once I switched to `npm run generate`, redeployed the site, and tried again… boom. Submissions flowed into Netlify like they'd been there all along.


## Final Setup
Once the correct build command was in place, my original form and fetch code worked fine. Here's the version I ended up sticking with:

```js
const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const onSubmit = async (event) => {
  event.preventDefault();
  const postData = { "form-name": "contact", ...formData.value };

  const { error } = await useFetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode(postData),
  });

  if (!error.value) {
    // do some stuff
  } else {
    // do some other stuff
  }
};
```

## Lessons Learned (and Then Some)

Here's what I took away from the experience:

- Use `npm run generate`, not npm run build, if you're using Nuxt 3 and Netlify Forms. (Seriously. Save yourself the headache.)
- Plain HTML still rules for debugging weird Netlify issues. Strip it down and start simple. The <em>200 OK lie is real</em>. Just because your form submission looks fine doesn't mean Netlify is handling it.
- Sometimes the answer is outside your component. Not everything is a Vue problem. Sometimes it's the deployment pipeline quietly ruining your day.
- Be patient. Be methodical. Or at least stubborn. That works too.

This wasn't a glamorous bug fix. It didn't teach me a new algorithm. I didn't architect a groundbreaking system. But, a win is a win.
