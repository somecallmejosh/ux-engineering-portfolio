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

const allServices = await queryCollection('services').order('order', 'ASC').all()

const coreServices = allServices.filter(s => !s.isFree && !s.isComingSoon && !s.isAnchor)
const anchorService = allServices.find(s => s.isAnchor)
const freeService = allServices.find(s => s.isFree)
const comingSoonServices = allServices.filter(s => s.isComingSoon)
const auditService = allServices.find(s => s.slug === 'audit')

const painPoints = [
  {
    icon: 'ph:arrows-counter-clockwise',
    title: 'Designers and engineers solve the same problems every sprint.',
    description: 'No shared source of truth means every new feature restarts from scratch.',
  },
  {
    icon: 'ph:warning-circle',
    title: 'Accessibility issues accumulate until they become a legal liability.',
    description: 'WCAG compliance is mandated in many jurisdictions and actively litigated.',
  },
  {
    icon: 'ph:git-branch',
    title: 'The system exists, but nobody uses it consistently.',
    description: 'When documentation doesn\'t match reality, components get forked instead of extended.',
  },
]

const engagementSteps = [
  {
    phase: 'Phase 1',
    title: 'Audit',
    description: 'Find the problems. Understand what\'s inconsistent, where accessibility risk lives, and what\'s slowing the team down.',
  },
  {
    phase: 'Phase 2',
    title: 'Build',
    description: 'Fix the foundation. A component library built to your tokens, accessible out of the box, documented and ready to extend.',
  },
  {
    phase: 'Phase 3',
    title: 'Align',
    description: 'Fix how the team works. A clear, repeatable handoff process that removes the friction between design and engineering.',
  },
]

const principles = [
  {
    icon: 'ph:funnel-simple',
    title: 'Simplicity beats flexibility.',
    description: 'Flexible systems sound good, but they create inconsistency fast.',
  },
  {
    icon: 'ph:lock-simple',
    title: 'Constraints create consistency.',
    description: 'If everything is allowed, nothing is consistent.',
  },
  {
    icon: 'ph:wheelchair',
    title: 'Accessibility must be built in, not layered on.',
    description: 'If it\'s optional, it won\'t happen.',
  },
  {
    icon: 'ph:users-three',
    title: 'A system isn\'t real until it\'s used.',
    description: 'Documentation and Storybook don\'t matter if developers avoid them.',
  },
]

const whoIWorkWith = [
  'Have an existing product that is actively being shipped',
  'Feel the pain of UI inconsistency, slow development, or repeated accessibility rework',
  'Want a system that works, not just a library that exists',
]
</script>

<template>
  <PageWrapper>

    <!-- Hero -->
    <section aria-describedby="page-header" class="space-y-6">
      <div class="prose">
        <PageHeader>Design systems consulting</PageHeader>
        <p>
          Your design system should make shipping faster. Right now, it's probably making it slower, creating
          rework, introducing accessibility risk, and adding friction between design and engineering. That's fixable.
        </p>
      </div>
      <dl class="flex flex-wrap gap-2 items-center not-prose">
        <div class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5">
          <Icon name="ph:clock" size="1rem" aria-hidden="true" class="" />
          <dt class="sr-only">Audit timeline</dt>
          <dd class="">Audit delivered in 5 days</dd>
        </div>
        <div class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5">
          <Icon name="ph:currency-dollar" size="1rem" aria-hidden="true" class="" />
          <dt class="sr-only">Starting price</dt>
          <dd class="">Starting at $2,000</dd>
        </div>
        <div class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5">
          <Icon name="ph:globe" size="1rem" aria-hidden="true" class="" />
          <dt class="sr-only">Remote status</dt>
          <dd class="">Fully remote &amp; async-friendly</dd>
        </div>
      </dl>
      <div class="not-prose space-y-3">
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
        <p>I take on a limited number of engagements at a time.</p>
      </div>
    </section>

    <!-- Pain points -->
    <section aria-labelledby="pain-heading" class="space-y-8">
      <div class="prose">
        <h2 id="pain-heading">Signs your design system needs attention</h2>
        <p>These aren't edge cases. They're the norm for teams that have been shipping features without a stable system
          underneath.</p>
      </div>
      <ul class="not-prose grid sm:grid-cols-3 gap-4 list-none p-0 m-0">
        <li v-for="point in painPoints" :key="point.title"
          class="rounded-lg border-2 border-neutral-200 bg-white p-5 flex gap-4 items-start">
          <div class="flex-none size-10 rounded-full bg-red-50 flex items-center justify-center" aria-hidden="true">
            <Icon :name="point.icon" size="1.25rem" class="text-red-500" />
          </div>
          <div class="space-y-1.5 ">
            <p class="">{{ point.title }}</p>
            <p class="">{{ point.description }}</p>
          </div>
        </li>
      </ul>
    </section>



    <!-- Typical engagement path -->
    <section aria-labelledby="engagement-path-heading" class="space-y-8">
      <div class="prose">
        <h2 id="engagement-path-heading">A typical engagement</h2>
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
            <p>{{ step.description }}</p>
          </div>
        </li>
      </ol>

      <p class="">
        <strong>The goal</strong>: a system your team actually uses.
      </p>
    </section>

    <!-- Services -->
    <Services :services="coreServices" />

    <!-- Philosophy -->
    <section aria-labelledby="philosophy-heading" class="space-y-8">
      <div class="prose">
        <h2 id="philosophy-heading">How I think about design systems</h2>
        <p>Most design systems are over-engineered and underused. Here's my approach to every engagement:</p>
      </div>

      <ul class="not-prose grid sm:grid-cols-2 gap-4 list-none mb-4">
        <li v-for="principle in principles" :key="principle.title"
          class="rounded-lg border-2 border-neutral-200 bg-white p-5 flex gap-4 items-start">
          <div class="flex-none size-10 rounded-full bg-blue-50 flex items-center justify-center" aria-hidden="true">
            <Icon :name="principle.icon" size="1.25rem" class="text-blue-700" />
          </div>
          <div class="space-y-1">
            <p class="  m-0">{{ principle.title }}</p>
            <p class="   m-0">{{ principle.description }}</p>
          </div>
        </li>
      </ul>

      <p class="prose">
        My approach is fully documented. You can see exactly how I think and build before we ever work together.
        <NuxtLink to="/guides/building-your-own-component-library/"
          class="font-medium underline underline-offset-2 hover:no-underline ml-1">
          Read the component library guide
        </NuxtLink>
      </p>
    </section>

    <!-- Testimonial -->
    <section v-if="auditService?.testimonial" aria-labelledby="testimonial-heading">
      <div class="prose">
        <h2>What clients say</h2>
        <blockquote>
          <p>{{ auditService.testimonial.quote }}</p>
          <cite>
            {{ auditService.testimonial.author }},
            <span class="block">{{ auditService.testimonial.role }}</span>
          </cite>
        </blockquote>
      </div>
    </section>



    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Ongoing support -->
      <section aria-labelledby="ongoing-support-heading"
        class="not-prose flex gap-5 items-start rounded-lg border-2 border-neutral-200 bg-white p-6 lg:p-8">
        <div class="flex-none size-12 rounded-full bg-blue-50 flex items-center justify-center" aria-hidden="true">
          <Icon name="ph:clock-countdown" size="1.5rem" class="text-blue-700" />
        </div>
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <h2 id="ongoing-support-heading" class="text-lg ">Ongoing support</h2>
            <pill pill="Optional" />
          </div>
          <p>
            After the initial engagement, I offer limited ongoing support to help your team extend the system, review
            new
            components, and maintain accessibility and consistency.
          </p>
          <p>
            This is available as a small monthly retainer for teams that want continued guidance.
          </p>
        </div>
      </section>

      <!-- Who I work with -->
      <section aria-labelledby="who-heading"
        class="not-prose rounded-lg border-2 border-neutral-200 bg-white p-6 lg:p-8 space-y-6">
        <div class="space-y-2">
          <h2 id="who-heading" class="text-xl ">Who I work best with</h2>
          <p class="">I focus on teams that:</p>
        </div>
        <ul class="space-y-4 list-none p-0 m-0">
          <li v-for="item in whoIWorkWith" :key="item" class="flex items-start gap-3">
            <Icon name="ph:check-circle" size="1.25rem" class="text-blue-400 flex-none mt-0.5" aria-hidden="true" />
            <span class="">{{ item }}</span>
          </li>
        </ul>
        <p class="pt-6">
          If that's your team,
          <NuxtLink to="/contact/" class="underline underline-offset-2 hover:no-underline font-medium">get in touch
          </NuxtLink>.
        </p>
      </section>

    </div>

    <!-- Anchor + Free offerings -->
    <div class="grid grid-cols-2 gap-6">
      <Callout v-if="anchorService">
        <div class="prose">
          <pill pill="Full Engagement" />
          <h2 class="mt-1">{{ anchorService.label }}</h2>
          <p>{{ anchorService.description }}</p>
          <h3 class="text-lg">{{ anchorService.price }}</h3>
        </div>
        <div class="pt-4">
          <ButtonLink :to="`/services/${anchorService.slug}/`">
            See what's included
          </ButtonLink>
        </div>
      </Callout>
      <Callout v-if="freeService">
        <div class="prose">
          <p class="   text-blue-700 ">Free resource</p>
          <h2 id="free-heading" class="text-2xl mt-1">Not ready to commit?</h2>
          <p>
            Use the free <strong>{{ freeService.label }}</strong> to see where your design system stands before
            investing in a paid engagement. It covers the same five dimensions as the paid audit. You score your own
            system and walk away with a clear picture of your biggest gaps.
          </p>
        </div>
        <div class="pt-4">
          <ButtonLink :to="`/services/${freeService.slug}/`">
            Get the free interactive checklist
          </ButtonLink>
        </div>
      </Callout>
    </div>

    <!-- Coming soon -->
    <section v-if="comingSoonServices.length" aria-labelledby="coming-soon-heading" class="space-y-4">
      <h2 id="coming-soon-heading" class="text-xl ">Coming soon</h2>
      <ul class="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
        <li v-for="service in comingSoonServices" :key="service.slug"
          class="rounded-lg border-2 border-neutral-200 bg-white p-6 space-y-2">
          <div class="prose">
            <h3 class="text-lg">{{ service.label }}</h3>
            <p>{{ service.description }}</p>
            <ButtonLink :href="`/services/${service.slug}/`">
              View details and join the waitlist
            </ButtonLink>
          </div>
        </li>
      </ul>
    </section>

    <Callout>
      <h2>Not sure which engagement is right for you?</h2>
      <p>
        That's what the intro call is for. It's 30 minutes, no obligation, and you'll leave with a clear picture of
        what would actually help your team.
      </p>
      <ButtonLink to="/contact/">
        Send a message
      </ButtonLink>
    </Callout>

  </PageWrapper>
</template>
