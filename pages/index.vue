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

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://res.cloudinary.com/dwjulenau/image/upload/c_crop,f_auto,g_face,q_auto,w_300,z_1.7/v1758508471/josh-portfolio/josh-biz-cazsh.png',
      fetchpriority: 'high',
    }
  ]
})

const allServices = await queryCollection('services').order('order', 'ASC').all()

const coreServices = allServices.filter(s => !s.isFree && !s.isComingSoon && !s.isAnchor)

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

const header = {
  title: "Fix inconsistent UI and replace it with a system your team can rely on.",
  description: "I help product teams turn hard-to-maintain interfaces into scalable component systems, with accessibility built in from the start. Most engagements start with a free scorecard.",
}

</script>

<template>
  <div class="space-y-16">
    <div class="space-y-16">
      <section aria-describedby="page-header" class="prose">
        <PageHero :content="header">
          <div class="flex flex-col sm:flex-row lg:items-center gap-2">
            <ButtonLink to="/services/scorecard/">
              Score your design system
            </ButtonLink>
            <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow"
              variant="inverse">
              Book an intro call
            </ButtonLink>
          </div>
        </PageHero>
      </section>
    </div>
    <Services :services="coreServices" />
    <SplitContent class="lg:items-center">
      <template #primary>
        <div class="prose">
          <h2>Not sure where your design system stands?</h2>
          <p>
            The <strong>free Design System Scorecard</strong> is a 32-point interactive assessment covering the five
            dimensions of a
            healthy
            design system: component consistency, accessibility, token architecture, documentation, and handoff process.
            <strong>Answer each question and get a real-time score</strong> that shows you exactly where your system is
            healthy and where
            it's
            creating risk.
          </p>
          <p>
            Most paid engagements start here.
          </p>
          <ButtonLink to="/services/scorecard/">
            Score your design system
          </ButtonLink>
        </div>
      </template>
      <template #secondary>
        <NuxtImg src="/images/active-scorecard.png" alt="Preview of the design system scorecard" width="576"
          height="552" class="rounded-lg object-cover object-top" />
      </template>
    </SplitContent>
    <SplitContent>
      <template #primary>
        <div class="prose">
          <h2>Signs your design system isn't working:</h2>
          <ul>
            <li>UI that looks different across products or teams</li>
            <li>Components that are duplicated or hard to reuse</li>
            <li>Accessibility issues that keep getting pushed off</li>
            <li>A design system that exists but no one really follows</li>
          </ul>
          <p class="text-pretty">You don't need more components. You need a system that actually works.</p>

          <h3 class="text-lg">Accessibility problems start in your component library.</h3>
          <p>
            When a button component is built without keyboard support, that violation exists everywhere the button is
            used. When color contrast is hardcoded instead of managed through tokens, every team pulling from your
            library
            inherits the same failure. When there's no documented handoff process, developers rebuild components that
            already exist, each time introducing new risk.
          </p>

          <p>
            This is how accessibility debt scales. Not one bug at a time, but one component at a time, replicated across
            your entire product. The legal exposure is real: over 4,000 Americans with Disabilities Act (ADA) website
            lawsuits were filed in 2024, and more than two-thirds targeted companies with less than $25 million in
            annual revenue. But a lawsuit is a symptom. The underlying cause is a component system that was never
            structured to enforce consistency or compliance in the first place.
          </p>

          <p>
            An audit finds the structural problems so your team fixes the cause, not just the symptoms.
          </p>

          <ButtonLink to="/services/audit/">
            See what the audit covers
          </ButtonLink>
        </div>
      </template>
      <template #secondary>
        <div class="gap-6">
          <NuxtImg src="/images/josh-biz-cazsh.jpg" fit="cover" preload alt="Joshua Briley, UX Engineer" height="300"
            width="300" class="size-20 xl:size-28 rounded-full shrink-0" />
          <div class="prose">
            <h2>Who am I?</h2>
            <p>I'm a design systems engineer with 20 years of experience helping teams build consistent, accessible
              interfaces, and keep them that way as their products grow.</p>
            <p>
              I've built component libraries and design systems for insurance platforms, media brands, and professional
              sports
              organizations.
            </p>
            <NuxtLink to="/about/" class="underline hover:no-underline">
              Learn more about me
            </NuxtLink>
            <TestimonialList />

            <NuxtLink to="/testimonials" class="underline hover:no-underline">View all testimonials</NuxtLink>
          </div>
        </div>
      </template>
    </SplitContent>



    <div class="grid lg:grid-cols-3 gap-6">
      <Callout>
        <h2>How I build component systems</h2>
        <p>I've documented my approach to building scalable, accessible component libraries from scratch to production.
        </p>
        <div class="flex gap-2 items-center">
          <ButtonLink variant="inverse" to="/guides/building-your-own-component-library/">Read the guide</ButtonLink>
        </div>
      </Callout>
      <Callout>
        <h2 id="get-started">If your UI is slowing your team down, let's fix it.</h2>
        <p>Book a 30-minute intro call. No pressure. You'll leave with a clear understanding of what's not working, and
          what to do next.</p>
        <ButtonLink variant="inverse" to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </Callout>
      <Callout>
        <h2>Assess your design system for free</h2>
        <p>Use the free Design System Scorecard to evaluate your system and identify your biggest gaps.
        </p>
        <div class="flex gap-2 items-center">
          <ButtonLink variant="inverse" to="/services/scorecard/">Score your design system</ButtonLink>
        </div>
      </Callout>
    </div>
    <!-- Featured project -->
    <!-- Guide -->
    <!-- Free Resource -->

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
