<script setup>
const page = Number(useRoute().params.page)
const { items, currentPage, totalPages, basePath } = await useCollectionPagination('blog', page)

useSeoMeta({
  title: `Blog - Page ${page}`,
  ogTitle: `Blog - Page ${page}`,
  description: 'Writing about UX engineering: design systems, accessible interfaces, and where design and development meet. Each post covers practical problems real teams face, with direct takes on methods that improve both product and process.',
  ogDescription: 'Writing about UX engineering: design systems, accessible interfaces, and where design and development meet. Each post covers practical problems real teams face, with direct takes on methods that improve both product and process.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})
</script>

<template>
  <CollectionIndexPage
    :items="items"
    pageTitle="UX engineering, in practice"
    pageDescription="Practical takes, honest opinions, and the occasional fictional UX engineer."
    pill="Blog"
    pillIcon="ph:article-ny-times"
    tagListTitle="Blog tags"
    tagListCollection="blog"
  >
    <Pagination :current-page="currentPage" :total-pages="totalPages" :base-path="basePath" />
  </CollectionIndexPage>
</template>
