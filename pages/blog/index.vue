<script setup>
const allPosts = await queryCollection('blog')
  .order('publishedAt', 'DESC')
  .all()

useSeoMeta({
  title: 'Blog',
  ogTitle: 'Blog',
  description: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogDescription: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})

const allBlogCategories = await queryCollection('blog')
  .all()
  .then((posts) => {
    return posts.reduce((acc, post) => {
      post.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag)
        }
      })
      return acc
    }, [])
  })
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Blog" pillIcon="ph:article-ny-times">Brain Dump, My Digital Notebook</PageHeader>
      <p>
        This is where I stash <i>thoughts on building better web experiences</i>. Consider this part memory bank, part storytelling outlet, part open-source therapy session.
      </p>
    </section>
    <CardList v-if="allPosts" :list="allPosts" />
    <TagLinkList
      title="Blog Categories"
      collection="blog"
    />
  </PageWrapper>
</template>
