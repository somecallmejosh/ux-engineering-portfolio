<script setup>
useSeoMeta({
  title: 'Dev Notes Tags',
  ogTitle: 'Dev Notes Tags',
  description: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice. Browse by tag to find what you need.',
  ogDescription: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice. Browse by tag to find what you need.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
})
</script>

<template>
  <TagIndexPage
    breadcrumbLabel="Dev Notes"
    breadcrumbTo="/dev-notes/"
    pill="Dev Notes Tags"
    pillIcon="ph:notepad"
    pageTitle="Dev Notes Tags"
    tagListTitle="Dev Notes Links"
    collection="dev_notes"
  />
</template>
