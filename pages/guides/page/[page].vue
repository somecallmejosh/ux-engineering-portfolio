<script setup>
const page = Number(useRoute().params.page)
const { items, currentPage, totalPages, basePath } = await useCollectionPagination('guides', page)

useSeoMeta({
  title: `Guides - Page ${page}`,
  ogTitle: `Guides - Page ${page}`,
  description: 'In-depth, multi-chapter guides on UX engineering, design systems, and front-end development.',
  ogDescription: 'In-depth, multi-chapter guides on UX engineering, design systems, and front-end development.',
})
</script>

<template>
  <CollectionIndexPage
    :items="items"
    pageTitle="Long-form guides"
    pageDescription="Multi-chapter deep dives on topics worth exploring in full."
    pill="Guides"
    pillIcon="ph:map-trifold"
  >
    <Pagination :current-page="currentPage" :total-pages="totalPages" :base-path="basePath" />
  </CollectionIndexPage>
</template>
