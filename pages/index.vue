<script setup lang="tsx">
import { motion } from 'motion-v'

useSeoMeta({
  title: 'Josh Briley | Practical UX Engineering for Complex Products',
  ogTitle: 'Josh Briley | Practical UX Engineering for Complex Products',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976906/josh-portfolio/assets_task_01jr6hvshff2gtyry2qwb7tqp9_img_0.webp'
})


const mostRecentBlog = await queryCollection('blog')
  .order('publishedAt', 'DESC')
  .first()

const mostRecentDevNote = await queryCollection('dev_notes')
  .order('publishedAt', 'DESC')
  .first()

const mostRecentProject = await queryCollection('projects')
  .order('publishedAt', 'DESC')
  .first()

const combinedPosts = [
  mostRecentProject && {
    ...mostRecentProject,
    headline: 'Latest Project',
    to: `/projects/${mostRecentProject.slug}/`
  },
  mostRecentBlog && {
    ...mostRecentBlog,
    headline: 'Latest Blog Post',
    to: `/blog/${mostRecentBlog.slug}/`
  },
  mostRecentDevNote && {
    ...mostRecentDevNote,
    headline: 'Latest Dev Note',
    to: `/dev-notes/${mostRecentDevNote.slug}/`
  }
].filter(Boolean)

</script>

<template>
  <div class="space-y-12">
    <div class="space-y-16">
      <section aria-describedby="page-header" class="prose">
        <PageHeader>I build intuitive, inclusive websites & apps that are easy to use & simple to maintain.</PageHeader>
        <p>I'm a UI/UX engineer who loves turning design ideas into interfaces that just work. I focus on design systems, component libraries, and building products that are easy to use, easy to maintain, and maybe even a little fun along the way.</p>
      </section>

      <section aria-labelledby="recent">
        <h2 class="text-2xl mb-4" id="recent">Recent Posts</h2>
        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-12">
          <CardListItem :data="combinedPosts" />
        </ul>
      </section>


    </div>
  </div>
</template>
<style scoped>
dd {
  height: 0;
  opacity: 0;
  transform: scaleY(-0.9);
  transform-origin: top;
  transition: height 0.3s, opacity 1s, transform 0.2s;
  overflow: clip;

  &.open {
    height: auto;
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
