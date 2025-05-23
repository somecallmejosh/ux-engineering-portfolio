<script setup>
useSeoMeta({
  title: `Blog Categories`,
  ogTitle: `Blog Categories`,
  description: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogDescription: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})
</script>

<template>
  <PageWrapper>
    <Breadcrumbs baseUrl="blog" slug="categories" label="Blog" title="Categories" />
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Blog" pillIcon="ph:article-ny-times">Blog Categories</PageHeader>
    </section>
    <TagLinkList
      title="Category Links"
      collection="blog"
    />
  </PageWrapper>
</template>
