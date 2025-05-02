<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`dev-notes-${slug}`, () => {
  return queryCollection('dev_notes').path(`/dev-notes/${slug}`).first()
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
  <PageWrapper>
    <Breadcrumbs baseUrl="dev-notes" :slug="`${slug}`" label="Dev Notes" :title="post.title" />
    <div v-if="post" class="prose">
      <PageHeader pill="Dev Notes">{{ post.title }}</PageHeader>
      <figure>
        <AnimateImage
          :src="post.image"
          :alt="post.meta.image_alt"
          :scaleY="0.75"
        />
      </figure>
      <ContentRenderer :value="post" />
    </div>
  </PageWrapper>
</template>
