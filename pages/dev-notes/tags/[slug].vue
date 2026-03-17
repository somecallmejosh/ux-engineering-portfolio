<script setup>
const { allPosts, slug, postCount } = await useTagFilter('dev_notes')
const articleLabel = postCount > 1 ? 'Dev Notes' : 'Dev Note'

useSeoMeta({
  title: `Dev notes category | ${slug}`,
  ogTitle: `Dev notes category | ${slug}`,
  description: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogDescription: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})
</script>

<template>
  <TagFilterPage
    :allPosts="allPosts"
    :slug="slug"
    :postCount="postCount"
    :articleLabel="articleLabel"
    collection="dev_notes"
    breadcrumbLabel="Dev Notes"
    breadcrumbTo="/dev-notes/"
    breadcrumbTagsTo="/dev-notes/tags/"
    pill="Dev Notes Tags"
    pillIcon="ph:notepad"
  />
</template>
