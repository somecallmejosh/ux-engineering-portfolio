<script setup>
const allPosts = await queryCollection('experiments')
  .order('publishedAt', 'DESC')
  .all()

  useSeoMeta({
  title: 'Experiments',
  ogTitle: 'Experiments',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
  })
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Experiments" pillIcon="ph:microscope">Tinkering and Testing</PageHeader>
      <p>
        These are my experiments. <i>I love to tinker and test new ideas</i>. Some are just for fun, some are for work, and some are just to see if I can do it. If you have any questions about any of them, feel free to reach out!
      </p>
    </section>
    <CardList v-if="allPosts" :list="allPosts" />
  </PageWrapper>
</template>
