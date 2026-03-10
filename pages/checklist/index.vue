<script setup lang="ts">
const checklist = await queryCollection('checklist').path('/checklist').first()

if (!checklist) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

useSeoMeta({
  title: `${checklist.title} | Josh Briley`,
  description: 'A self-assessment checklist covering the five dimensions of a healthy design system: component consistency, accessibility, token architecture, documentation, and handoff process.',
})
</script>

<template>
  <PageWrapper>
    <section class="prose">
      <PageHeader>{{ checklist.title }}</PageHeader>
    </section>
    <div class="prose max-w-none">
      <ContentRenderer :value="checklist" />
    </div>
    <Callout>
      <h2>Want a deeper analysis?</h2>
      <p>
        The paid <NuxtLink to="/services/audit/">Design System Audit</NuxtLink> covers the same five dimensions with expert analysis, a written report, and a prioritized remediation roadmap delivered in 5 business days.
      </p>
      <ButtonLink to="/contact/">Get in touch</ButtonLink>
    </Callout>
  </PageWrapper>
</template>
