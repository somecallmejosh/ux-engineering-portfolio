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
    <ul class="not-prose text-sm flex gap-3">
      <li class="flex items-center gap-3">
        <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
        <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
      </li>
      <li class="text-neutral-700">
        <NuxtLink :to="`/blog/${slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>

    <div v-if="post" class="prose">
      <h1>{{ post.title }}</h1>
      <small>Published on {{ useDateFormat(post.publishedAt, 'MMM Do, YYYY', { locales: 'en-US' }) }} by <span class="script">josh</span></small>
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>
