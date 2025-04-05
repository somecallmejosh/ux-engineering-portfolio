<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`projects-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})

useSeoMeta({
  title: post.value?.title,
  description: post.value?.excerpt,
  image: post.value?.coverImage,
})
</script>

<template>
  <div class="space-y-12">
    <!-- Render the blog post as Prose & Vue components -->
    <ul class="not-prose text-sm flex gap-3">
      <li class="flex items-center gap-3">
        <NuxtLink to="/projects" class="hover:underline">Projects</NuxtLink>
        <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
      </li>
      <li class="text-neutral-700">
        <NuxtLink :to="`/projects/${slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
    <div v-if="post" class="prose">
      <h1>{{  post.title }}</h1>
      <TagLinks
        v-if="post.tags"
        :tags="post.tags"
        path="/projects/tags/"
      />
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>
