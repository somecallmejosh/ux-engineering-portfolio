<script setup>
const page = Number(useRoute().params.page)
const { items, currentPage, totalPages, basePath } = await useCollectionPagination('dev_notes', page)

useSeoMeta({
  title: `Dev Notes - Page ${page}`,
  ogTitle: `Dev Notes - Page ${page}`,
  description: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogDescription: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
})
</script>

<template>
  <CollectionIndexPage
    :items="items"
    pageTitle="Notes to Future Me"
    pageDescription="A running log of real-world solutions, cheat sheets, and things I didn't want to figure out twice."
    pill="Dev Notes"
    pillIcon="ph:notepad"
    tagListTitle="Dev Notes Tags"
    tagListCollection="dev_notes"
  >
    <Pagination :current-page="currentPage" :total-pages="totalPages" :base-path="basePath" />
  </CollectionIndexPage>
</template>
