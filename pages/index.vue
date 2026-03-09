<script setup lang="ts">
const title = "Josh Briley | Design Systems Engineer & Frontend Consultant"
const description = "Fixed-scope consulting for design system audits, component library builds, and handoff workflow improvements. Clear deliverables, clear pricing."

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976906/josh-portfolio/assets_task_01jr6hvshff2gtyry2qwb7tqp9_img_0.webp'
})


const paidServices = await queryCollection('services')
  .where('isFree', '<>', true)
  .where('isComingSoon', '<>', true)
  .all()

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
        <PageHeader>I help product teams build component libraries that scale, with accessibility built in from the
          start.</PageHeader>
        <p class="mb-4">I'm a Design Systems Engineer with 20 years of experience helping teams ship consistent,
          accessible interfaces and keep them that way.</p>
        <div class="flex flex-col sm:flex-row lg:items-center gap-2">
          <ButtonLink to="/services/">
            View my services
          </ButtonLink>
          <ButtonLink to="/contact/" variant="inverse">
            Get in touch
          </ButtonLink>
        </div>
      </section>
      <Services :services="paidServices" />
      <section aria-labelledby="recent">
        <h2 class="text-2xl mb-4" id="recent">Recent work and writing</h2>
        <CardList :list="combinedPosts" label="Recent work and writing" />
      </section>
      <Callout>
        <h2 id="get-started">Want to work together?</h2>
        <p>Whether you need a full audit or a component library foundation, get in touch to see if we're a good fit.</p>
        <ButtonLink to="/contact/">
          Get in touch
        </ButtonLink>
      </Callout>
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
