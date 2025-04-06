<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

useSeoMeta({
  title: post.value?.title,
  ogTitle: post.value?.title,
  description: post.value?.description,
  ogDescription: post.value?.description,
  ogImage: post.value?.image,
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <div class="space-y-12">
    <Breadcrumbs baseUrl="blog" :slug="`${slug}`" label="Blog" :title="post.title" />
    <div v-if="post" class="prose">
      <h1>{{ post.title }}</h1>
      <figure>
        <img  height="600" width="400" :src="post.image" :alt="post.image_alt" class="w-full h-auto mb-4 rounded-lg border border-neutral-100 grayscale" loading="lazy" />
        <figcaption class="text-sm text-neutral-500">Image created by Sora</figcaption>
      </figure>
      <small>Published on {{ useDateFormat(post.publishedAt, 'MMM Do, YYYY', { locales: 'en-US' }) }} by <span class="script">josh</span></small>
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>
