<script setup>
const allGuides = await queryCollection('guides')
  .order('publishedAt', 'DESC')
  .all()

useSeoMeta({
  title: 'Guides',
  ogTitle: 'Guides',
  description: 'In-depth, multi-chapter guides on UX engineering, design systems, and front-end development.',
  ogDescription: 'In-depth, multi-chapter guides on UX engineering, design systems, and front-end development.',
})
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Guides" pillIcon="ph:map-trifold">Long-form guides</PageHeader>
      <p class="text-pretty">
        Multi-chapter deep dives on topics worth exploring in full.
      </p>
    </section>
    <CardList v-if="allGuides" :list="allGuides" />
  </PageWrapper>
</template>
