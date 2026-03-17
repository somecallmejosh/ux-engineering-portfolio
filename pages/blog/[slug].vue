<script setup>
const { post } = await useContentDetail('blog')
</script>

<template>
  <PageWrapper>
    <Breadcrumbs :items="[{ label: 'Blog', to: '/blog/' }, { label: post.title }]" />
    <div v-if="post" class="prose">
      <PageHeader pill="Blog Article" pillIcon="ph:article-ny-times" :publishedAt="post.publishedAt">{{ post.title }}
      </PageHeader>
      <figure>
        <AnimateImage :src="post.image" :alt="post.meta.image_alt" :scaleY="0.75" />
      </figure>
      <article>
        <TagLinks tag="blog" :collection="post.tags" title="Tags" />
        <TableOfContents :links="post.body.toc.links" />
        <ContentRenderer :value="post" />
      </article>
      <aside class="space-y-6 lg:space-y-12">
        <TagLinkList title="Blog Tags" collection="blog" />
        <CallOut class="mb-6">
          <strong>Blog disclaimer:</strong> Each article on this blog is strictly my own opinion and
          doesn't reflect the views of my employer or any other organization. <NuxtLink to="/contact/">Reach out
          </NuxtLink> if you have questions or feedback.
        </CallOut>
      </aside>
    </div>
  </PageWrapper>
</template>
