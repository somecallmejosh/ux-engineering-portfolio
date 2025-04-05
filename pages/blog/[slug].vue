<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

useSeoMeta({
  title: post.value?.title,
  description: post.value?.excerpt,
  image: post.value?.coverImage,
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <div class="space-y-12">
    <Breadcrumbs base-url="blog" :slug="`${slug}`" label="Blog" :title="post.title" />
    <div v-if="post" class="prose">
      <h1>{{ post.title }}</h1>
      <small>Published on {{ useDateFormat(post.publishedAt, 'MMM Do, YYYY', { locales: 'en-US' }) }} by <span class="script">josh</span></small>
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>
