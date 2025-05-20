<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`experiments-${slug}`, () => {
  return queryCollection('experiments').path(`/experiments/${slug}`).first()
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
    <Breadcrumbs baseUrl="experiments" :slug="`${slug}`" label="Experiments" :title="post.title" />
    <div v-if="post" class="prose">
      <PageHeader pill="Experiment" pillIcon="ph:microscope">{{ post.title }}</PageHeader>
      <figure>
        <AnimateImage
          :src="post.image"
          :alt="post.meta.image_alt"
          :scaleY="0.75"
        />
      </figure>
      <article>
        <TableOfContents :links="post.body.toc.links" />
        <ContentRenderer :value="post" />
      </article>
    </div>
  </PageWrapper>
</template>
