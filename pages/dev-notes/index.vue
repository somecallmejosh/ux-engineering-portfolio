<script setup>
const allPosts = await queryCollection('dev_notes').order('publishedAt', 'DESC').all()

useSeoMeta({
  title: 'Dev Notes',
  ogTitle: 'Dev Notes',
  description: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogDescription: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
})
</script>

<template>
  <CollectionIndexPage
    :items="allPosts"
    pageTitle="Notes to Future Me"
    pageDescription="A running log of real-world solutions, cheat sheets, and things I didn't want to figure out twice."
    pill="Dev Notes"
    pillIcon="ph:notepad"
    tagListTitle="Dev Notes Tags"
    tagListCollection="dev_notes"
  />
</template>
