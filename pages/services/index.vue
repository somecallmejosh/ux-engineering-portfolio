<script setup lang="ts">
const title = "Design systems consulting services | Josh Briley"
const description = "Fixed-scope consulting for design system audits, component library builds, and design-to-code workflow optimization. Clear deliverables, clear pricing, defined from the start."
const allServices = await queryCollection('services').order('order', 'ASC').all()

const coreServices = allServices.filter(s => !s.isFree && !s.isComingSoon && !s.isAnchor)

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
})

const painPoints = [
  {
    title: 'Designers and engineers solve the same problems every sprint.',
    description: 'No shared source of truth means every new feature restarts from scratch.',
  },
  {
    title: 'Accessibility issues accumulate until they become a legal liability.',
    description: 'Web Content Accessibility Guidelines (WCAG) compliance is mandated in many jurisdictions and actively litigated.',
  },
  {
    title: 'The system exists, but nobody uses it consistently.',
    description: 'When documentation doesn\'t match reality, components get forked instead of extended.',
  },
]

</script>

<template>
  <PageWrapper>

    <PageHero :content="{
      pill: 'Services',
      pillIcon: 'ph:handshake',
      title: 'Design systems consulting',
      description: 'Your design system should make shipping faster. Right now, it\'s probably making it slower, creating rework, creating accessibility risk, and adding friction between design and engineering. That\'s fixable.'
    }">

      <div class="flex flex-col lg:flex-row gap-6 lg:items-center">
        <div>
          <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
            Book an intro call
          </ButtonLink>
        </div>
        <p>I take on a limited number of engagements at a time.</p>
      </div>
    </PageHero>

    <!-- Pain points -->
    <section class="space-y-8">
      <div class="prose">
        <h2>Signs your design system needs attention</h2>
        <p>These aren't edge cases. They're the norm for teams that have been shipping features without a stable system
          underneath.</p>
      </div>
      <ul class="not-prose grid lg:grid-cols-3 gap-6 list-none p-0 m-0 lg:divide-x lg:divide-neutral-200">
        <li v-for="point in painPoints" :key="point.title" class="bg-white flex flex-col gap-4 lg:pr-4 space-y-2">
          <p class="font-semibold">{{ point.title }}</p>
          <p class="text-sm">{{ point.description }}</p>
        </li>
      </ul>
    </section>

    <!-- Typical engagement path -->
    <section class="space-y-8">
      <div class="prose">
        <h2>A typical engagement</h2>
        <p>
          The audit identifies gaps and prioritizes fixes. From there, we either build a component library foundation,
          improve the design-to-code workflow, or both, depending on what the audit surfaces.
        </p>
      </div>

      <Services :services="coreServices" />

      <p>
        <strong>The goal</strong> is a system your team actually uses.
      </p>
    </section>
    <TestimonialList class="grid gap-6 lg:grid-cols-2" />
    <CtaScorecard />
  </PageWrapper>
</template>
