<script setup>
const allPosts = await queryCollection('case_studies')
  .order('publishedAt', 'DESC')
  .all()

  useSeoMeta({
  title: 'Case Studies',
  ogTitle: 'Case Studies',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
  })
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Case Studies">Behind the Build</PageHeader>
      <p>
        These personal experiments (and sometimes production projects) and case studies that showcase my skills in creating user-friendly, accessible, and scalable web applications.
      </p>
    </section>
    <CardList v-if="allPosts" :list="allPosts" />
  </PageWrapper>
</template>
