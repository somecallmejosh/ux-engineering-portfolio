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
  title: "I fix inconsistent UI systems so teams can ship faster and with fewer mistakes.",
  description: "If your components don't match designs, your system feels inconsistent, and accessibility keeps getting pushed aside, you're not alone. Most teams don't have a tooling problem. They have a structure problem.",
}


</script>

<template>
  <PageWrapper>
    <section aria-describedby="page-header" class="prose">
      <PageHero :content="header">
        <div class="flex flex-col sm:flex-row lg:items-center gap-2">
          <ButtonLink to="/services/scorecard/">
            Score your design system
          </ButtonLink>
          <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow" variant="inverse">
            Book an intro call
          </ButtonLink>
        </div>
      </PageHero>
    </section>
    <SplitContent class="lg:divide-x lg:divide-neutral-200">
      <template #primary>
        <div class="prose">
          <h2>Signs your system isn't working:</h2>
          <ul>
            <li>UI looks different across products or teams</li>
            <li>Components are duplicated or hard to reuse</li>
            <li>Accessibility keeps getting pushed off</li>
            <li>Designers and developers are out of sync</li>
            <li>The same UI issues come up every sprint</li>
          </ul>
          <p class="text-pretty"><strong class="block">You don't need more components.</strong> You need a system that
            actually works.
          </p>
        </div>
      </template>
      <template #secondary>
        <div class="prose">
          <h2>Most teams try to fix a broken system by adding more.</h2>

          <p>More components. More documentation. More rules. That usually makes things worse. Because the real problem
            isn't what's missing. It's how everything is structured. Without a clear system:</p>

          <ul>
            <li>decisions get remade</li>
            <li>components drift</li>
            <li>accessibility breaks down</li>
            <li>teams slow down</li>
          </ul>

          <p class="text-pretty"><strong class="block">The result isn't just inconsistency.</strong> It's wasted time,
            rework, and growing risk.</p>
        </div>
      </template>
    </SplitContent>
    <SplitContent class="lg:items-center">
      <template #primary>
        <CtaScorecard />
      </template>
      <template #secondary>
        <div class="space-y-6">
          <div class="prose">
            <h2>Already know where things are breaking down?</h2>
            <p>Here's how to address it:</p>
          </div>
          <ul class="list-none p-0 m-0 space-y-6">
            <li>
              <div class="prose lg:flex gap-2 items-baseline">
                <h3 class="mb-0">System feels inconsistent?</h3>
                <p>Design System Audit.</p>
              </div>
            </li>
            <li>
              <div class="prose lg:flex gap-2 items-baseline">
                <h3 class="mb-0">Foundation is weak or patchy?</h3>
                <p>Component Library Starter.</p>
              </div>
            </li>
            <li>
              <div class="prose lg:flex gap-2 items-baseline">
                <h3 class="mb-0">Design and dev are out of sync?</h3>
                <p>Design-to-Code Workflow.</p>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </SplitContent>

    <div class="space-y-6">
      <div class="prose">
        <h2>Most problems fall into three areas:</h2>
      </div>
      <Services :services="coreServices" />
      <p>
        <strong>You don't need to guess which one.</strong>
        We figure that out together.
      </p>
    </div>


    <SplitContent class="divide-x divide-neutral-200">
      <template #primary>
        <div class="prose lg:pr-4">
          <h2>Accessibility issues don't start in QA.</h2>
          <p><strong>They start in your components.</strong> When accessibility isn't built into your system, every
            team inherits the same problems.</p>
          <p>This is how accessibility debt grows: not one bug at a time, but one component at a time. <strong>Fix the
              system, and you fix the source.</strong></p>
          <div>
            <ButtonLink to="/services/audit/" variant="inverse">
              See what the audit covers
            </ButtonLink>
          </div>
        </div>
      </template>
      <template #secondary>
        <div class="gap-6 flex">
          <div class="prose">
            <h2>About Joshua Briley</h2>
            <p>I design and build UI systems that stay consistent, accessible, and usable as
              products grow. I bring 20 years of experience helping teams across insurance, media, and professional
              sports build systems that actually work in practice, not just in documentation.</p>
            <NuxtLink to="/about/">
              My background and experience
            </NuxtLink>
          </div>
          <NuxtImg src="/images/josh-biz-cazsh.jpg" fit="cover" preload alt="Joshua Briley, UX Engineer" height="300"
            width="300" class="size-28 rounded-full shrink-0 -translate-y-4" />
        </div>
      </template>
    </SplitContent>
    <div class="space-y-6">
      <TestimonialList class="grid lg:grid-cols-2 gap-6" />
      <div class="prose">
        <NuxtLink to="/testimonials">View all testimonials</NuxtLink>
      </div>
    </div>

    <CtaCallAndScoreboard />

  </PageWrapper>
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
