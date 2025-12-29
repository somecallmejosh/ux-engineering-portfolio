<script setup>
import { humanize } from '~/utilities/humanize'
const route = useRoute()
const slug = route.params.slug
const allPosts = (await queryCollection('dev_notes')
  .order('publishedAt', 'DESC')
  .all()).filter(post => Array.isArray(post.tags) && post.tags.includes(slug))

useSeoMeta({
  title: `Dev notes category | ${slug}`,
  ogTitle: `Dev notes category | ${slug}`,
  description: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogDescription: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})
onMounted(() => {
  if (!allPosts || allPosts.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'This category does not exist.',
    })
  }
})

const postCount = allPosts.length
const articleLabel = postCount > 1 ? 'Dev Notes' : 'Dev Note'

</script>

<template>
  <PageWrapper>
    <template v-if="allPosts">
      <Breadcrumbs baseUrl="dev-notes" :slug="`${slug}`" :category="true" label="Dev Notes" :title="slug" />
      <section aria-labelledby="page-header" class="prose">
        <PageHeader pill="Dev Notes Tags" pillIcon="ph:notepad">{{ postCount }} {{ humanize(slug) }} {{ articleLabel }}</PageHeader>
      </section>
      <TagLinkList
        collection="dev_notes"
      />
      <CardList :list="allPosts" />
    </template>
  </PageWrapper>
</template>
