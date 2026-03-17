<script setup>
const { allPosts, slug, postCount } = await useTagFilter('blog')
const articleLabel = postCount > 1 ? 'Articles' : 'Article'

useSeoMeta({
  title: `${slug} | Blog`,
  ogTitle: `${slug} | Blog`,
  description: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogDescription: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})
</script>

<template>
  <TagFilterPage
    :allPosts="allPosts"
    :slug="slug"
    :postCount="postCount"
    :articleLabel="articleLabel"
    collection="blog"
    breadcrumbLabel="Blog"
    breadcrumbTo="/blog/"
    breadcrumbTagsTo="/blog/tags/"
    pill="Blog Tags"
    pillIcon="ph:article-ny-times"
  />
</template>
