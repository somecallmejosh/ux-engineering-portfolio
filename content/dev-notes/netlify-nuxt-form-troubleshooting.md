---
slug: netlify-nuxt-form-troubleshooting
publishedAt: 2025-04-29
title: 'Netlify Forms with Nuxt 3'
description: "Here's how I finally got form submissions to show up and how I learned to avoid the same five-hour rabbit hole next time."
tags: [hosting, javascript, nuxt, netlify]
image: 'https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1745983435/josh-portfolio/assets_task_01jt2bea62fmnam8yqha1nb72d_1745983373_img_0.webp'
image_alt: 'The Netlify Forms dashboard showing form submissions.'
---

This was originally posted as a blog post, but I thought it would be a good addition to my Dev Notes. It's more of a troubleshooting story than a how-to, but I hope it helps someone out there.

::CallOut
<strong>TLDR;</strong> If your Netlify form submissions aren't arriving, check your build command. And keep a plain `form.html` in your `/public` folder as a debugging baseline.
::

You craft a clean [contact form](/contact/), add some inline validation, and deploy it. It looks great.

And then: crickets. No messages, no leads, nothing.

You check your Netlify Forms dashboard expecting a tidy list of submissions. Instead, it's empty. You submit a test message. Still nothing. This is the story of how I tracked down why, and what actually fixed it.

## Everything looked right

I'd done this before on several past sites. Add `data-netlify="true"`, include a hidden `form-name` field, and you're good to go. I even added a `useFetch` call to handle submissions via JavaScript so users wouldn't get redirected on submit:

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
const { error } = await useFetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    'form-name': 'contact',
    ...formData.value,
  }).toString(),
})
```

I double-checked the Netlify documentation. Everything was in place. The network tab showed a clean `200 OK`. The request payload looked correct. But nothing appeared in Netlify.

## The debugging spiral

Here's what I tried, in roughly the order I tried it:

1. Triple-check the HTML in DevTools to confirm Netlify's attributes weren't being stripped during build. They were there.
1. Submit without JavaScript to rule out fetch-related issues. Still nothing.
1. Use `FormData` instead of URL-encoded strings. No difference.
1. Add a plain HTML form (no Vue) to my `public/` directory. That worked perfectly, which told me the issue wasn't with Netlify itself but with how my Nuxt app was being built.
1. Try `useFetch` versus native `fetch`. No difference.
1. Debug an unrelated Vue error that turned out to be a red herring.
1. Change field ordering, field names, and submission timing.

Every fix looked promising for about 90 seconds. Then nothing.

## The real culprit: the build command

As a last resort, I checked my Netlify build settings. My build command was:

```bash
npm run build
```

That seems reasonable. It's how you build a Nuxt app, and it works fine for Nuxt 2 projects.

But for static site generation with Nuxt 3, and for Netlify Forms to work, you need:

```bash
npm run generate
```

That one change was the entire fix. `npm run build` compiles your app but doesn't pre-render static HTML pages. Netlify Forms needs to parse actual HTML during the build so it can configure itself and know where to send submissions.

After switching to `npm run generate` and redeploying, submissions started arriving immediately.

## Final setup

Once the correct build command was in place, the original form and fetch code worked fine. Here's the version I kept:

```js
const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const onSubmit = async (event) => {
  event.preventDefault()
  const postData = { 'form-name': 'contact', ...formData.value }

  const { error } = await useFetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(postData),
  })

  if (!error.value) {
    // do some stuff
  } else {
    // do some other stuff
  }
}
```

## Lessons learned

- Use `npm run generate`, not `npm run build`, when using Nuxt 3 with Netlify Forms.
- A plain HTML form in `public/` is the fastest way to isolate whether the issue is with Netlify or with your framework's build output.
- A `200 OK` response doesn't mean Netlify processed the submission. If Netlify never saw the form during the build, it has no idea what to do with the POST.
- Not every form bug is a Vue bug. Sometimes it's the build pipeline.

This wasn't a glamorous fix, but a win is a win.
