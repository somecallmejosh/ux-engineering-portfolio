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
      <PageHeader pill="Dev Note" pillIcon="ph:notepad" :publishedAt="post.publishedAt">{{ post.title }}</PageHeader>
      <figure>
        <AnimateImage
          :src="post.image"
          :alt="post.meta.image_alt"
          :scaleY="0.75"
        />
      </figure>
      <article>
        <CategoryLinks tag="dev-notes" :collection="post.tags" title="Tags" />
        <TableOfContents :links="post.body.toc.links" />
        <ContentRenderer :value="post" />
      </article>
      <aside class="bg-blue-100/10 rounded-lg p-6 space-y-6 lg:space-y-12">
        <TagLinkList
          title="Dev Notes Tags"
          collection="dev_notes"
        />
        <CallOut class="mb-6"><strong>Dev Notes Disclaimer</strong>: Each artile in the <em>Dev Notes</em> section of my webiste may or may not be unfinished work. I don't always have time to write a full post. If you see something that looks like a half-baked idea, it probably is! As with anything you find on the internet, be sure to review and understand the script or code before running it, especially if you plan to modify it. Always back up any important data before making bulk changes to your repositories. If you have any questions or suggestions, feel free to <NuxtLink to="/contact/">reach out</NuxtLink>.</CallOut>
      </aside>
    </div>
  </PageWrapper>
</template>
