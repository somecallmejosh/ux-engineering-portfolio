<script setup lang="ts">
const title = "Design systems consulting services | Josh Briley"
const description = "Fixed-scope consulting for design system audits, component library builds, and design-to-code workflow optimization. Clear deliverables, clear pricing, defined from the start."

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
})

import type { TestimonialCategory } from '~/composables/useTestimonials'

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

const engagementSteps = [
  {
    phase: 'Phase 1',
    title: 'Audit',
    link: '/services/audit/',
    cta: 'How the audit can help',
    description: 'Before you build anything new, you need to understand what\'s actually broken.',
  },
  {
    phase: 'Phase 2',
    title: 'Build',
    link: '/services/starter/',
    cta: 'How the starter kit can help',
    description: 'Stabilize and scale your UI system with a foundation built to last, not patched to survive.',
  },
  {
    phase: 'Phase 3',
    title: 'Align',
    link: '/services/workflow/',
    cta: 'How the workflow can help',
    description: 'Reduce handoff friction and rework. Fix the process once so your team stops losing time to it every sprint.',
  },
]

</script>

<template>
  <PageWrapper>

    <PageHero :content="{
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

      <ol class="not-prose grid lg:grid-cols-3 gap-6 list-none p-0 mb-4">
        <li v-for="(step, i) in engagementSteps" :key="i"
          class="rounded-lg border-2 border-neutral-200 bg-white p-6 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <pill :pill="step.phase" />
          </div>
          <div class="prose">
            <h3 class="text-lg">{{ step.title }}</h3>
            <p class="mb-4">{{ step.description }}</p>
            <ButtonLink :to="step.link">
              {{ step.cta }}
            </ButtonLink>

          </div>
        </li>
      </ol>

      <p>
        <strong>The goal</strong> is a system your team actually uses.
      </p>
    </section>
    <TestimonialList class="grid gap-6 lg:grid-cols-2" />
    <CtaScorecard />
  </PageWrapper>
</template>
