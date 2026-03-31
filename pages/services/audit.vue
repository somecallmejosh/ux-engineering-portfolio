<script setup lang="ts">
useSeoMeta({
  title: 'Design System Audit | Josh Briley',
  description: "Find what's actually broken in your design system before you decide what to build next. A structured audit with clear findings and specific recommendations.",
})
</script>

<template>
  <PageWrapper>
    <Breadcrumbs class="mb-0" :items="[{ label: 'Services', to: '/services/' }, { label: 'Design System Audit' }]" />


    <PageHero :content="{
      pill: 'Design System Audit',
      pillIcon: 'ph:magnifying-glass',
      title: 'Find what\'s actually broken in your design system',
      description: 'If your components feel inconsistent, your system is hard to maintain, or your team is solving the same problems differently every sprint, this is where to start.'
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
              'Your component library has become inconsistent or hard to trust',
              'Designers and developers are solving the same UI problems differently',
              'Accessibility issues keep surfacing late',
              'Your system exists, but isn\'t working the way it should',
            ]" :key="item" class="flex items-start gap-3">
              <Icon name="ph:check-circle-fill" class="text-blue-200 size-5 shrink-0 mt-1.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <p class="font-semibold">Most teams start here.</p>
        </section>
      </template>
      <template #secondary>
        <Callout>
          <h2>Most teams try to fix their system by adding more.</h2>
          <p>More components. More documentation. More rules. That usually makes things worse.</p>
          <p>Because the real problem isn't what's missing, it's what's already there, and how it's structured. Until
            that's clear, every fix creates more inconsistency.</p>
        </Callout>
      </template>
    </SplitContent>

    <section class="space-y-6">
      <div class="prose">
        <h2>At the end of the audit, you'll have:</h2>
      </div>
      <ul class="not-prose grid lg:grid-cols-2 gap-3 list-none font-medium">
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A clear view of what's inconsistent
          and
          why</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A breakdown of accessibility risk at
          the
          component
          level
        </li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A prioritized list of system issues
        </li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">Specific recommendations for fixing each
          issue</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A roadmap your team can actually
          follow
        </li>
      </ul>
      <p class="font-medium">No guesswork. No overbuilding. Just clarity.</p>

    </section>

    <SplitContent>
      <template #primary>
        <h2>What's included</h2>
        <ul class="not-prose space-y-3">
          <li v-for="item in [
            'Component consistency analysis (visual and code-level)',
            'Accessibility risk assessment (Web Content Accessibility Guidelines 2.1 AA)',
            'Design token structure and naming review',
            'Documentation quality and coverage',
            'Prioritized remediation roadmap',
          ]" :key="item" class="flex items-start gap-3">
            <Icon name="ph:check-circle-fill" class="text-blue-200 size-5 shrink-0 mt-1.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </template>
      <template #secondary>
        <h2>How it works</h2>
        <ol>
          <li><strong>Share access</strong>: Send your Storybook, Figma, or repo. No special prep needed.</li>
          <li><strong>Audit</strong>: I review your system across consistency, accessibility, tokens, documentation,
            and handoff quality.</li>
          <li><strong>Report</strong>: You receive a structured report with findings ranked by severity and clear
            recommendations.</li>
          <li><strong>Debrief</strong>: We walk through the report together so you leave knowing exactly what to fix
            first, and why.</li>
        </ol>
      </template>
    </SplitContent>

    <section class="space-y-4">
      <div class="prose">
        <h2>What the report looks like</h2>
        <p class="text-pretty">These are example reports showing what you'd receive.
        </p>
      </div>
      <div class="grid sm:grid-cols-3 gap-3 not-prose">
        <NuxtLink to="/example-docs/fieldstone/"
          class="group flex flex-col gap-1 p-4 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
          <div>
            <span data-v-a0653b64=""
              class="inline-flex items-center px-1 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200 mb-2">Minimal
              findings</span>
          </div>
          <span class="font-medium text-neutral-900 group-hover:underline">Fieldstone Analytics</span>
          <span class="text-sm text-neutral-600">A mature system. Four low-stakes items.</span>
        </NuxtLink>
        <NuxtLink to="/example-docs/lumen-health/"
          class="group flex flex-col gap-1 p-4 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
          <div>
            <span
              class="inline-flex items-center px-1 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-2">Moderate
              findings</span>
          </div>

          <span class="font-medium text-neutral-900 group-hover:underline">Lumen Health</span>
          <span class="text-sm text-neutral-600">Solid foundation with meaningful gaps.</span>
        </NuxtLink>
        <NuxtLink to="/example-docs/harwin-financial/"
          class="group flex flex-col gap-1 p-4 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
          <div>
            <span data-v-a0653b64=""
              class="inline-flex items-center px-1 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200 mb-2">Severe
              findings</span>
          </div>
          <span class="font-medium text-neutral-900 group-hover:underline">Harwin Financial</span>
          <span class="text-sm text-neutral-600">Structural issues requiring prioritized remediation.</span>
        </NuxtLink>
      </div>
      <div class="prose">
        <p class="text-balance text-sm">All company names, product names, and repository paths are fictional. Any
          resemblance to real businesses is coincidental and unintended.</p>
      </div>
    </section>

    <div class="grid xl:grid-cols-3 gap-6 not-prose py-12 border-y border-neutral-200">
      <h2 class="text-3xl text-balance">Accessibility issues start in your components, not in QA.</h2>
      <p class="text-pretty">A button without keyboard support. A color token that hardcodes a value. A modal that
        breaks
        focus. When
        those
        components are reused, so are the problems.</p>
      <p class="text-pretty"><strong>This audit identifies the system-level decisions creating those issues</strong>, so
        you
        can fix them at
        the
        source.
      </p>
    </div>
    <SplitContent>

      <template #primary>
        <section class="not-prose bg-neutral-50 border-l-4 border-neutral-200 rounded-lg p-6 lg:p-8 space-y-3">
          <p class="font-semibold text-sm">Starting at $2,000</p>
          <h2 class="text-2xl lg:text-3xl text-balance mt-2">Design System Audit pricing</h2>
          <p class="text-pretty">Most teams lose more than this every month to inconsistency, rework,
            and
            unclear
            decisions. Fixing the system once is almost always cheaper than continuing to work around it.</p>
        </section>
      </template>

      <template #secondary>
        <section class="space-y-6">
          <div class="prose">
            <h2>Where this fits</h2>
            <p>Most teams use the audit as a starting point. From there, we:</p>
          </div>
          <ul class="not-prose space-y-2 divide-y divide-neutral-200">
            <li class="pb-2">
              <div class="prose xl:flex gap-2 items-baseline">
                <p class="font-semibold mb-0">Fix the component foundation</p>
                <span class="hidden lg:inline-flex">
                  <Icon name="ph:arrow-right" size="0.9rem" />
                </span>
                <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/starter/">Component Library
                  Starter</NuxtLink>.
              </div>
            </li>
            <li class="pb-2">
              <div class="prose lg:flex gap-2 items-baseline">
                <p class="font-semibold mb-0">Improve team alignment</p>
                <span class="hidden lg:inline-flex">
                  <Icon name="ph:arrow-right" size="0.9rem" />
                </span>
                <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/workflow/">Design-to-Code
                  Workflow</NuxtLink>.
              </div>
            </li>
          </ul>
        </section>
      </template>
    </SplitContent>

    <TestimonialList class="grid gap-6 lg:grid-cols-2" />

    <Callout>
      <h2>If your system feels inconsistent, this is where to start.</h2>
      <p>Book a short intro call. We'll look at your current setup and determine if the audit is the right next step.
      </p>
      <div class="flex flex-col lg:block">
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </div>
    </Callout>

  </PageWrapper>
</template>
