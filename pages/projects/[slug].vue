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
    <Breadcrumbs base-url="projects" :slug="`${slug}`" label="Projects" :title="post.title" />
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
