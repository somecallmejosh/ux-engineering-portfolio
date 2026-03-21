<script setup>
const { post } = await useContentDetail('blog')
</script>

<template>
  <PageWrapper v-if="post">
    <Breadcrumbs class="mb-0" :items="[{ label: 'Blog', to: '/blog/' }, { label: post.title }]" />
    <PageHero class="mb-6" :content="{
      pill: 'Blog Article',
      pillIcon: 'ph:article-ny-times',
      title: post.title,
      description: post.description
    }">
      <div class="space-y-6">
        <AnimateImage :src="post.image" :alt="post.meta.image_alt" :scaleY="0.75" />
        <div class="not-prose space-y-3">
          <dl class="flex flex-wrap gap-2 items-center">
            <div v-if="post.publishedAt"
              class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5">
              <Icon name="ph:calendar-dots" size="1.2em" aria-hidden="true" />
              Published on {{ formatDate(post.publishedAt) }}
            </div>
          </dl>
        </div>
        <TagLinks tag="blog" :collection="post.tags" title="Tags" />
        <TableOfContents :links="post.body.toc.links" />
      </div>
    </PageHero>

    <div class="prose">
      <article>
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
