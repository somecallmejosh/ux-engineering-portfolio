# Local image hosting plan

## Problem

The current image workflow for new blog/dev-notes content requires:
1. Write article
2. Craft Sora prompt, wait for generation
3. Download image
4. Upload to Cloudinary
5. Copy the transformed URL
6. Paste into front-matter `image` field

Steps 4–6 are the friction. The upload and URL-copy are manual, error-prone, and interrupt writing flow.

## Chosen approach

Store images locally in `public/images/{collection}/` using the article **slug as the filename**. Because the image path is derived from the slug — which is known when the article is written — Claude can pre-fill the `image` field in front-matter. The only manual step remaining after generation is: **download → rename → drop in folder**.

`@nuxt/image` with the `ipx` provider + `sharp` handles build-time optimization during `nuxt generate`, replacing Cloudinary's URL-parameter transformations.

## Prerequisites

### 1. Install `sharp`

`sharp` is required for `@nuxt/image`'s `ipx` provider to perform image transformations during `nuxt generate`. Without it, images are served as-is (no format conversion, no resizing).

```bash
npm install -D sharp
```

### 2. Configure `@nuxt/image` in `nuxt.config.ts`

Add an `image` block with a `blog` preset that mirrors the Cloudinary parameters currently used (`ar 3:2`, `q_auto`, `f_auto`):

```ts
image: {
  quality: 80,
  format: ['webp'],
  screens: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  presets: {
    hero: {
      modifiers: {
        format: 'webp',
        quality: 80,
        width: 900,
        height: 600,
      },
    },
  },
},
```

## Folder structure

```
public/
  images/
    blog/           ← new
    dev-notes/      ← new
    projects/       ← new
    experiments/    ← new
    (existing files remain untouched)
```

## Naming convention

| Content type | Front-matter `image` value              | File location                                        |
|---|---|---|
| blog         | `/images/blog/{slug}.webp`              | `public/images/blog/{slug}.webp`                     |
| dev-notes    | `/images/dev-notes/{slug}.webp`         | `public/images/dev-notes/{slug}.webp`                |
| projects     | `/images/projects/{slug}.webp`          | `public/images/projects/{slug}.webp`                 |
| experiments  | `/images/experiments/{slug}.webp`       | `public/images/experiments/{slug}.webp`              |

Sora outputs `.webp` by default. Rename the downloaded file to `{slug}.webp` and drop it in the correct folder. No upload required.

## Files to change

### `components/AnimateImage.vue`

Replace the plain `<img>` with `<NuxtImg>` using explicit props. Keep the existing `grayscale` class and `loading="lazy"`.

```vue
<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    width="900"
    height="600"
    format="webp"
    quality="80"
    class="w-full rounded-lg grayscale"
    loading="lazy"
  />
</template>
```

### `pages/blog/[slug].vue`, `pages/dev-notes/[slug].vue`, `pages/experiments/[slug].vue`, `pages/projects/[slug].vue`

**OG image fix**: `ogImage` requires an absolute URL for social sharing. Local paths like `/images/blog/foo.webp` won't work as-is. Prepend the site URL from runtime config:

```ts
const siteUrl = useRuntimeConfig().public.siteUrl

useSeoMeta({
  // ...existing fields...
  ogImage: post.value?.image?.startsWith('http')
    ? post.value.image
    : `${siteUrl}${post.value?.image}`,
})
```

The conditional keeps existing Cloudinary URLs working unchanged, so old posts don't break.

### `nuxt.config.ts`

- Add `image` config block (shown above)
- Add `siteUrl` to `runtimeConfig.public` if not already present (check `.env` for `NUXT_SITE_URL`)

```ts
runtimeConfig: {
  public: {
    sqlPath: process.env.SQL_ALLOW_PATH,
    siteUrl: process.env.NUXT_SITE_URL ?? 'http://localhost:3000',
  },
},
```

## Migration strategy for existing content

**Do not migrate existing posts.** Cloudinary URLs in old front-matter will continue to work:
- `AnimateImage` / `<NuxtImg>` accepts both absolute URLs and local paths — `@nuxt/image` passes absolute URLs through unmodified
- The conditional in `ogImage` above handles both formats

New posts use local images. Old posts keep Cloudinary. The schema (`z.string()`) accepts both.

## Claude workflow for new content

When writing a new blog or dev-notes article, Claude should:

1. Determine the `slug` first (derived from the title, kebab-case)
2. Pre-fill the front-matter `image` field: `/images/blog/{slug}.webp` (or `/images/dev-notes/{slug}.webp`)
3. Pre-fill `image_alt` with a descriptive alt text for the image
4. Include a **Sora prompt suggestion** at the end of the article draft — a short paragraph describing the visual scene for the hero image, ready to paste into Sora

**Example front-matter for a new blog post:**
```yaml
---
slug: my-new-article
publishedAt: 2026-03-08
title: "My new article title"
description: "Short description."
tags: [career]
image: /images/blog/my-new-article.webp
image_alt: "A descriptive alt text for the image."
---
```

**Example Sora prompt block (appended to draft):**
```
---
## Suggested Sora image prompt

A cinematic wide-angle photograph of [scene description]. Muted tones, soft natural light, 3:2 aspect ratio.
```

After Sora generates the image:
1. Download the file
2. Rename to `my-new-article.webp`
3. Drop in `public/images/blog/`
4. Delete the Sora prompt block from the article

## Implementation checklist

- [ ] `npm install -D sharp`
- [ ] Add `image` config block to `nuxt.config.ts`
- [ ] Add `siteUrl` to `runtimeConfig.public` in `nuxt.config.ts`
- [ ] Update `components/AnimateImage.vue` to use `<NuxtImg>`
- [ ] Fix `ogImage` in `pages/blog/[slug].vue`
- [ ] Fix `ogImage` in `pages/dev-notes/[slug].vue`
- [ ] Fix `ogImage` in `pages/experiments/[slug].vue`
- [ ] Fix `ogImage` in `pages/projects/[slug].vue`
- [ ] Create `public/images/blog/.gitkeep`
- [ ] Create `public/images/dev-notes/.gitkeep`
- [ ] Create `public/images/projects/.gitkeep`
- [ ] Create `public/images/experiments/.gitkeep`
- [ ] Run `npm run generate` and verify a new local-image post renders correctly
- [ ] Confirm OG image meta tag contains absolute URL
- [ ] Confirm old Cloudinary-hosted posts still render correctly
