<script setup>
const services = [
  {
    id: 'audit',
    label: 'Design System Audit',
    price: '$1,500',
    timeline: '5 business days',
    format: 'PDF report + 60-min debrief call',
    audience: 'Teams with a component library that has grown inconsistent, hard to maintain, or without a clear architecture.',
    outcome: 'A written report covering component consistency, accessibility gaps (WCAG 2.1 AA), token structure, documentation quality, and a prioritized remediation roadmap.',
    // insight: 'Accessibility violations carry legal risk and the cost is often invisible until something breaks. This audit typically pays for itself if it prevents one compliance issue or one sprint of rework.',
    includes: [
      'Component consistency review (visual and code)',
      'Accessibility audit with WCAG 2.1 AA criteria',
      'Design token structure analysis',
      'Documentation quality assessment',
      'Prioritized remediation roadmap with actionable recommendations',
    ],
  },
  {
    id: 'starter',
    label: 'Component Library Starter',
    price: '$3,500',
    timeline: '2–3 weeks',
    format: 'React + your styling solution',
    audience: 'Startups or small teams starting from scratch, or teams whose existing library needs a clean foundation rather than more patches.',
    outcome: '20 core components built to your design tokens — accessible out of the box (WCAG 2.1 AA), documented with usage guidelines, and ready to extend.',
    includes: [
      'Design token architecture (color, spacing, typography, radius)',
      'Buttons, inputs, modals, cards, navigation, alerts, and more',
      'Keyboard navigation and ARIA attributes throughout',
      'Storybook documentation with usage examples',
      'One round of revisions',
    ],
  },
  {
    id: 'workflow',
    label: 'Design-to-Code Workflow',
    price: '$2,000',
    timeline: '1 week',
    format: 'Audit + workflow guide + implementation session',
    audience: 'Teams where the Figma-to-code handoff is a constant source of friction — mismatched specs, missing tokens, designer/developer miscommunication.',
    outcome: 'An audit of your handoff process, Figma file structure review, Code Connect setup where applicable, and a workflow guide your team can follow right away.',
    // insight: 'Every team using Figma has this problem. The cost of friction is invisible until someone puts a number on it — and once you see it, it\'s hard to un-see.',
    includes: [
      'Audit of current design-to-code process and handoff quality',
      'Review of Figma file structure and design token setup',
      'Code Connect setup and configuration (if applicable)',
      'Custom workflow guide tailored to your team\'s needs',
    ],
  },
]
</script>

<template>
  <section class="space-y-8" aria-labelledby="services-heading">
    <div class="prose">
      <h2 id="services-heading" class="text-2xl">Let's Work Together</h2>
      <p>Three focused engagements at fixed scope and price. You know exactly what you're getting. No surprises, no
        scope creep.</p>
    </div>

    <ul class="not-prose grid md:grid-cols-3 gap-6 md:gap-y-5 list-none p-0 m-0">
      <li v-for="service in services" :key="service.id"
        class="service-card rounded-lg border-2 border-neutral-200 bg-white p-6 prose">
        <div class="space-y-0.5">
          <h3 class="text-xl leading-snug ">{{ service.label }}</h3>
          <p class="price text-3xl leading-none mt-1">{{ service.price }}</p>
        </div>

        <div class="space-y-1">
          <p class="font-semibold uppercase tracking-wider">Who it's for</p>
          <p class="leading-relaxed">{{ service.audience }}</p>
        </div>

        <div class="space-y-3">
          <p class="font-semibold uppercase tracking-wider">What you get</p>
          <p class="leading-relaxed">{{ service.outcome }}</p>
        </div>

        <ul v-if="service.includes" class="mt-2 space-y-1.5 list-none p-0">
          <li v-for="item in service.includes" :key="item" class="flex gap-2 items-start">
            <Icon name="ph:check" class="shrink-0 mt-0.5 text-neutral-400" size="1rem" />
            {{ item }}
          </li>
        </ul>



        <p class="font-semibold uppercase tracking-wider">
          {{ service.timeline }} &middot; {{ service.format }}
        </p>

        <div class="not-prose">
          <NuxtLink to="/contact/"
            class="inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Get in touch
            <Icon name="ph:arrow-right" size="0.9rem" />
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.price {
  font-family: "DM Serif Text", serif;
}

.service-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .service-card {
    display: grid;
    grid-row: span 6;
    grid-template-rows: subgrid;
  }
}
</style>
