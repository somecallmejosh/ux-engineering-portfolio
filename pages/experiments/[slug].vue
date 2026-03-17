<script setup>
const { post } = await useContentDetail('experiments')
</script>

<template>
  <PageWrapper>
    <Breadcrumbs :items="[{ label: 'Experiments', to: '/experiments/' }, { label: post.title }]" />
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
