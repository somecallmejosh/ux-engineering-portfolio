<script setup>
const allPosts = await queryCollection('experiments').order('publishedAt', 'DESC').all()

useSeoMeta({
  title: 'Experiments',
  ogTitle: 'Experiments',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
})
</script>

<template>
  <CollectionIndexPage
    :items="allPosts"
    pageTitle="Tinkering and Testing"
    pageDescription="These are my experiments. I love to tinker and test new ideas. Some are just for fun, some are for work, and some are just to see if I can do it. If you have any questions about any of them, feel free to reach out!"
    pill="Experiments"
    pillIcon="ph:microscope"
  />
</template>
