<script setup>
const allPosts = await queryCollection('blog').order('publishedAt', 'DESC').all()

useSeoMeta({
  title: 'Blog',
  ogTitle: 'Blog',
  description: 'Writing about UX engineering: design systems, accessible interfaces, and what it looks like when design and development work together. Each post covers practical problems that real teams face, with honest takes on methods that improve both the product and the process.',
  ogDescription: 'Writing about UX engineering: design systems, accessible interfaces, and what it looks like when design and development work together. Each post covers practical problems that real teams face, with honest takes on methods that improve both the product and the process.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})
</script>

<template>
  <CollectionIndexPage
    :items="allPosts"
    pageTitle="UX engineering, in practice"
    pageDescription="Practical takes, honest opinions, and the occasional fictional UX engineer."
    pill="Blog"
    pillIcon="ph:article-ny-times"
    tagListTitle="Blog Tags"
    tagListCollection="blog"
  />
</template>
