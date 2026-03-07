<script setup>
const allPosts = await queryCollection('dev_notes')
  .order('publishedAt', 'DESC')
  .all()

useSeoMeta({
  title: 'Dev Notes',
  ogTitle: 'Dev Notes',
  description: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogDescription: 'A running log of real-world solutions, cheat sheets, and things I didn\'t want to figure out twice.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
})

</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Dev Notes" pillIcon="ph:notepad">Notes to Future Me</PageHeader>
      <p class="text-pretty">
        A running log of real-world solutions, cheat sheets, and things I didn't want to figure out twice.
      </p>
    </section>
    <CardList v-if="allPosts" :list="allPosts" />
    <TagLinkList title="Dev Notes Tags" collection="dev_notes" />
  </PageWrapper>
</template>
