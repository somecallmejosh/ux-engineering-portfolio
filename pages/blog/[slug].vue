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
  <PageWrapper>
    <Breadcrumbs baseUrl="blog" :slug="`${slug}`" label="Blog" :title="post.title" />
    <div v-if="post" class="prose">
      <PageHeader pill="Blog Article" pillIcon="ph:article-ny-times" :publishedAt="post.publishedAt">{{ post.title }}</PageHeader>
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
    <aside class="prose">
      <div class="border-t border-neutral-200 pt-4">
        <small>This blog post was last updated on {{ useDateFormat(post.publishedAt, 'MMM Do, YYYY', { locales: 'en-US' }) }}</small>
      </div>
    </aside>
  </PageWrapper>
</template>
