<script setup>
import { humanize } from '~/utilities/humanize'
const route = useRoute()
const slug = route.params.slug
const allPosts = (await queryCollection('blog')
  .order('publishedAt', 'DESC')
  .all()).filter(post => Array.isArray(post.tags) && post.tags.includes(slug))

useSeoMeta({
  title: `${slug} | Blog`,
  ogTitle: `${slug} | Blog`,
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
</script>

<template>
  <PageWrapper>
    <template v-if="allPosts" >
      <Breadcrumbs baseUrl="blog" :slug="`${slug}`" :category="true" label="Blog" :title="slug" />
      <section aria-labelledby="page-header" class="prose">
        <PageHeader pill="Blog Category" pillIcon="ph:article-ny-times">Articles About {{ humanize(slug) }}</PageHeader>
      </section>
      <TagLinkList
        collection="blog"
      />
      <CardList :list="allPosts" />
    </template>
  </PageWrapper>
</template>
