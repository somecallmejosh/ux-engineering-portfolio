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

</script>

<template>
  <div class="space-y-16">
    <div class="space-y-16">
      <section aria-describedby="page-header" class="prose">
        <PageHeader>Fix inconsistent UI and turn it into a system your team can rely on</PageHeader>
        <p class="mb-4">I help product teams turn messy, hard-to-maintain interfaces into scalable component
          systems, with accessibility built in from the start.</p>

        <div class="flex flex-col sm:flex-row lg:items-center gap-2">
          <ButtonLink to="/services/">
            View services
          </ButtonLink>
          <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow" variant="inverse">
            Book an intro call
          </ButtonLink>
        </div>
      </section>
    </div>
    <Services :services="coreServices" />
    <div class="grid xl:grid-cols-2 gap-12">
      <div>
        <div class="prose">
          <h2>If your team is dealing with:</h2>
          <ul>
            <li>UI that looks different across products or teams</li>
            <li>Components that are duplicated or hard to reuse</li>
            <li>Accessibility issues that keep getting pushed off</li>
            <li>A design system that exists but no one really follows</li>
          </ul>
          <p class="text-pretty">You don't need more components. You need a system that actually works.</p>
        </div>
      </div>
      <div class="lg:flex gap-6">
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
        </div>
      </div>
    </div>
    <!-- Testimonials -->
    <div class="space-y-6">
      <div class="grid xl:grid-cols-2 gap-6">
        <div class="prose">
          <blockquote class="flex gap-6">
            <NuxtImg src="/images/drew-dipasquale.jpeg" alt="Drew Dipasquale" width="128" height="128" loading="lazy"
              class="w-16 h-16 rounded-full object-cover object-top" />
            <div>
              <p>Josh is a brilliant ideation partner bringing things out of others and working towards a great
                solution
              </p>
              <cite>Drew DiPasquale, Principal Researcher, HubSpot</cite>
            </div>
          </blockquote>
        </div>
        <div class="prose">
          <blockquote class="flex gap-6">
            <NuxtImg src="/images/welling-lagrone.jpeg" alt="Welling Lagrone" width="128" height="128" loading="lazy"
              class="w-16 h-16 rounded-full object-cover object-top" />
            <div>
              <p>Josh is a strong partner willing to work across functions to design and implement the best user
                experience.
              </p>
              <cite>Welling Lagrone, Vice Principal, Triverus Consulting</cite>
            </div>
          </blockquote>
        </div>
      </div>
      <NuxtLink to="/testimonials" class="underline hover:no-underline">View all testimonials</NuxtLink>
    </div>
    <div class="grid lg:grid-cols-3 gap-6">
      <Callout>
        <h2>How I build component systems</h2>
        <p>I've documented my approach to building scalable, accessible component libraries from scratch to production.
        </p>
        <div class="flex gap-2 items-center">
          <ButtonLink to="/guides/building-your-own-component-library/">Read the guide</ButtonLink>
        </div>
      </Callout>
      <Callout>
        <h2 id="get-started">If your UI is slowing your team down, let's fix it.</h2>
        <p>Book a 30-minute intro call. No pressure. You'll leave with a clear understanding of what's not working—and
          what to do next.</p>
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </Callout>
      <Callout>
        <h2>Not ready to commit? Start here.</h2>
        <p>Use the free Design System Health Check to evaluate your system and identify your biggest gaps.
        </p>
        <div class="flex gap-2 items-center">
          <ButtonLink to="/checklist">Get the checklist</ButtonLink>
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
