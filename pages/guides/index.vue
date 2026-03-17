<script setup>
const allGuides = await queryCollection('guides').order('publishedAt', 'DESC').all()

useSeoMeta({
  title: 'Guides',
  ogTitle: 'Guides',
  description: 'In-depth, multi-chapter guides on UX engineering, design systems, and front-end development.',
  ogDescription: 'In-depth, multi-chapter guides on UX engineering, design systems, and front-end development.',
})
</script>

<template>
  <CollectionIndexPage
    :items="allGuides"
    pageTitle="Long-form guides"
    pageDescription="Multi-chapter deep dives on topics worth exploring in full."
    pill="Guides"
    pillIcon="ph:map-trifold"
  />
</template>
