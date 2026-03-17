<script setup>
const allPosts = await queryCollection('projects').order('publishedAt', 'DESC').all()

useSeoMeta({
  title: 'Recent Projects',
  ogTitle: 'Recent Projects',
  description: 'UX engineering projects including component libraries, design systems, and accessible web applications built for real teams.',
  ogDescription: 'UX engineering projects including component libraries, design systems, and accessible web applications built for real teams.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
})
</script>

<template>
  <CollectionIndexPage
    :items="allPosts"
    pageTitle="Recent Projects"
    pageDescription="Component libraries, design systems, and accessible web applications built for real teams with real constraints."
    pill="Projects"
    pillIcon="ph:projector-screen-chart"
  />
</template>
