<script setup>
const allPosts = await queryCollection('dev_notes')
  .order('publishedAt', 'DESC')
  .all()

  useSeoMeta({
  title: 'Dev Notes',
  ogTitle: 'Dev Notes',
  description: 'A Place for me to jot down my thoughts, experiments, and learnings in web development.',
  ogDescription: 'A Place for me to jot down my thoughts, experiments, and learnings in web development.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
  })
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Dev Notes" pillIcon="ph:note-pencil">Notes to Future Me</PageHeader>
      <p>
        This is just <i>a running log of things I've figured out (or halfway figured out) while building stuff</i>. No promises of best practices. Just real-world notes I wanted to remember. If it helps you too, great!
      </p>
    </section>
    <CardList v-if="allPosts" :list="allPosts" />
  </PageWrapper>
</template>
