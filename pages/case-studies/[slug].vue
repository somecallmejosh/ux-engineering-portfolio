<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`case-studies-${slug}`, () => {
  return queryCollection('case_studies').path(`/case-studies/${slug}`).first()
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
    <Breadcrumbs baseUrl="case-studies" :slug="`${slug}`" label="Case Studies" :title="post.title" />
    <div v-if="post" class="prose">
      <PageHeader pill="Case Study">{{ post.title }}</PageHeader>
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
