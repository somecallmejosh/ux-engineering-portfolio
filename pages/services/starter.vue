<script setup lang="ts">
useSeoMeta({
  title: 'Component Library Starter | Josh Briley',
  description: "Stop rebuilding the same UI components over and over. Build a component system your team can trust: consistent, accessible, and ready to scale.",
})
</script>

<template>
  <PageWrapper>
    <Breadcrumbs class="mb-0"
      :items="[{ label: 'Services', to: '/services/' }, { label: 'Component Library Starter' }]" />

    <PageHero :content="{
      pill: 'Component Library Starter',
      pillIcon: 'ph:stack',
      title: 'Build a component system your team can trust',
      description: 'A component system that\'s consistent, accessible, and ready to scale. If your current library feels inconsistent, fragile, or hard to extend, this gives you a clean foundation to build on.'
    }">
      <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
        Book an intro call
      </ButtonLink>
    </PageHero>

    <SplitContent>
      <template #primary>
        <section class="prose">
          <h2>This is for you if:</h2>
          <ul class="not-prose space-y-3">
            <li v-for="item in [
              'You\'re starting from scratch and want to do it right',
              'Your current library feels inconsistent or hard to maintain',
              'Your team is rebuilding components instead of reusing them',
              'Accessibility isn\'t consistently built into your UI',
            ]" :key="item" class="flex items-start gap-3">
              <Icon name="ph:check-circle-fill" class="text-blue-200 size-5 shrink-0 mt-1.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <p class="font-semibold">If you're spending more time working around your library than building with it, it's
            time for a reset.</p>
        </section>
      </template>
      <template #secondary>
        <Callout>
          <p><strong>Most teams don't struggle because they lack components. They struggle because their components
              weren't designed as a system.</strong></p>
          <p>So over time: variants multiply, styles drift, accessibility breaks down, and reuse becomes harder than
            rebuilding.</p>
          <p>At that point, adding more components just makes things worse. You don't need more. You need a clean
            foundation.</p>
        </Callout>
      </template>
    </SplitContent>

    <section class="space-y-6">
      <div class="prose">
        <h2>At the end of this engagement, you'll have:</h2>
      </div>
      <ul class="not-prose grid lg:grid-cols-2 gap-3 list-none font-medium">
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A consistent, reusable component
          system</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">20 core components built to your
          design tokens</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A clear token architecture (color,
          spacing, typography, and more)</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">Accessibility built in to meet Web
          Content
          Accessibility Guidelines (WCAG) 2.1 AA
        </li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">Storybook documentation your team
          can use</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A system your team can rely on, not work
          around</li>
      </ul>
    </section>

    <SplitContent>
      <template #primary>
        <h2>What's included</h2>
        <ul class="not-prose space-y-3">
          <li v-for="item in [
            'Design token architecture (color, spacing, typography, border radius)',
            '20 core components (buttons, inputs, modals, cards, navigation, alerts, badges, and more)',
            'Keyboard navigation and ARIA support throughout',
            'Storybook documentation with usage examples and variants',
            'One round of revisions',
          ]" :key="item" class="flex items-start gap-3">
            <Icon name="ph:check-circle-fill" class="text-blue-200 size-5 shrink-0 mt-1.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </template>
      <template #secondary>
        <h2>How it works</h2>
        <ol>
          <li><strong>Kickoff</strong>: We align on tokens, styling approach, and product needs.</li>
          <li><strong>Build</strong>: I build your component library over 2–3 weeks, with visibility throughout.</li>
          <li><strong>Review</strong>: You review the system and provide feedback. I include one revision round.</li>
          <li><strong>Handoff</strong>: I deliver the library to your repo with a walkthrough so your team can start
            using it
            immediately.</li>
        </ol>
      </template>
    </SplitContent>

    <div class="grid xl:grid-cols-3 gap-6 not-prose py-12 border-y border-neutral-200">
      <h2 class="text-3xl text-balance">A well-structured component system compounds</h2>
      <p class="text-pretty">Every feature ships faster. Every developer onboards faster. Every UI decision becomes
        easier.</p>
      <p class="text-pretty"><strong>A broken system compounds too</strong>: more inconsistency, more rework, more
        accessibility risk. Fixing the foundation early is significantly cheaper than rebuilding it later.</p>
    </div>

    <SplitContent>
      <template #primary>
        <section class="not-prose bg-neutral-50 border-l-4 border-neutral-200 rounded-lg p-6 lg:p-8 space-y-3">
          <small class="font-semibold">Starting at $3,500</small>
          <h2 class="text-2xl lg:text-3xl text-balance mt-2">Component library starter pricing</h2>
          <p class="text-pretty">Most teams spend more than this rebuilding components and fixing
            inconsistencies within a few months. Fixing the foundation once costs less than continuing to work around
            it.</p>
        </section>
      </template>

      <template #secondary>
        <section class="space-y-6">
          <div class="prose">
            <h2>Where this fits</h2>
            <p>Most teams use the Component Library Starter alongside or after an audit. From there, we:</p>
          </div>
          <ul class="not-prose space-y-2 divide-y divide-neutral-200">
            <li class="pb-2">
              <div class="prose xl:flex gap-2 items-baseline">
                <p class="font-semibold mb-0">Find what's broken first</p>
                <span class="hidden lg:inline-flex">
                  <Icon name="ph:arrow-right" size="0.9rem" />
                </span>
                <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/audit/">Design System
                  Audit.</NuxtLink>
              </div>
            </li>
            <li class="pb-2">
              <div class="prose lg:flex gap-2 items-baseline">
                <p class="font-semibold mb-0">Align your team on handoff</p>
                <span class="hidden lg:inline-flex">
                  <Icon name="ph:arrow-right" size="0.9rem" />
                </span>
                <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/workflow/">
                  Design-to-Code Workflow.</NuxtLink>
              </div>
            </li>
          </ul>
        </section>
      </template>
    </SplitContent>

    <TestimonialList class="grid gap-6 lg:grid-cols-2" />

    <Callout>
      <h2>If your component library feels like it's slowing your team down, it's time for a reset</h2>
      <p>Book a short intro call. We'll look at your current setup and determine if this is the right next step.</p>
      <div class="flex flex-col lg:block">
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </div>
    </Callout>

  </PageWrapper>
</template>
