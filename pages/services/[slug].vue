<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const service = await queryCollection('services').path(`/services/${slug}`).first()

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useSeoMeta({
  title: `${service.label} | Josh Briley`,
  ogTitle: `${service.label} | Josh Briley`,
  description: service.description,
  ogDescription: service.description,
})
</script>

<template>
  <PageWrapper>
    <Breadcrumbs :items="[{ label: 'Services', to: '/services/' }, { label: service.label }]" />

    <!-- Coming soon layout -->
    <template v-if="service.isComingSoon">

      <section class="space-y-6">
        <Pill pill="Coming Soon" />
        <div>
          <PageHeader>{{ service.label }}</PageHeader>
          <p class="text-xl leading-relaxed text-neutral-700 mt-4 max-w-2xl">{{ service.description }}</p>
        </div>
        <div class="not-prose">
          <ButtonLink to="/contact/">Join the waitlist</ButtonLink>
        </div>
      </section>

      <Callout>
        <p class="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">Who it's for</p>
        <p class="text-lg font-medium text-neutral-900 leading-relaxed mb-2">{{ service.audience }}</p>
        <p class="text-neutral-600 leading-relaxed">{{ service.audienceDetail }}</p>
      </Callout>

      <section class="space-y-6">
        <div class="prose">
          <h2>What's included</h2>
          <p>{{ service.outcomeFull }}</p>
        </div>
        <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose">
          <li v-for="item in service.includesFull" :key="item"
            class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4">
            <Icon name="ph:check-circle" class="shrink-0 text-green-500 translate-y-0.5" size="1.25rem"
              aria-hidden="true" />
            <span class="leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </section>

      <section v-if="service.insight" class="border-l-4 border-neutral-900 pl-8 space-y-3">
        <p class="text-xs font-semibold tracking-widest uppercase text-neutral-400">Why this matters</p>
        <p class="text-lg leading-relaxed text-neutral-800">{{ service.insight }}</p>
      </section>

      <Callout>
        <h2>Interested when it launches?</h2>
        <p>Get in touch mentioning "{{ service.label }}" and I'll reach out when it's available.</p>
        <ButtonLink to="/contact/">Join the waitlist</ButtonLink>
      </Callout>

    </template>

    <!-- Free offering layout -->
    <template v-else-if="service.isFree">

      <section class="space-y-6">
        <Pill pill="Free resource" />
        <div>
          <PageHeader>{{ service.label }}</PageHeader>
          <p class="text-xl leading-relaxed text-neutral-700 mt-4 max-w-2xl">{{ service.tagline }}</p>
        </div>
        <ChecklistSignup />
      </section>

      <Callout>
        <p class="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">Who it's for</p>
        <p class="text-lg font-medium text-neutral-900 leading-relaxed mb-2">{{ service.audience }}</p>
        <p class="text-neutral-600 leading-relaxed">{{ service.audienceDetail }}</p>
      </Callout>

      <section class="space-y-6">
        <div class="prose">
          <h2>What it covers</h2>
          <p>{{ service.outcomeFull }}</p>
        </div>
        <ul class="grid sm:grid-cols-2 gap-3 list-none p-0 not-prose">
          <li v-for="item in service.includesFull" :key="item"
            class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4">
            <Icon name="ph:check-circle" class="shrink-0 text-green-500 translate-y-0.5" size="1.25rem"
              aria-hidden="true" />
            <span class="text-sm leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </section>

      <section v-if="service.process" class="space-y-6">
        <div class="prose">
          <h2>How to use it</h2>
        </div>
        <ol class="list-none p-0 not-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li v-for="(step, i) in service.process" :key="step.title" class="flex gap-6 items-start">
            <span class="step-number price text-5xl text-neutral-200 shrink-0 leading-none select-none"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="pt-1">
              <p class="font-semibold text-neutral-900 mb-1">{{ step.title }}</p>
              <p class="text-neutral-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section v-if="service.insight" class="border-l-4 border-neutral-900 pl-8 space-y-3">
        <p class="text-xs font-semibold tracking-widest uppercase text-neutral-400">What this unlocks</p>
        <p class="text-lg leading-relaxed text-neutral-800">{{ service.insight }}</p>
      </section>

      <Callout>
        <h2>Ready to go deeper?</h2>
        <p>
          If the checklist surfaces gaps you're not sure how to prioritize, the paid
          <NuxtLink to="/services/audit/">Design System Audit</NuxtLink> covers the same criteria with expert
          analysis, a written report, and a remediation roadmap.
        </p>
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </Callout>

    </template>

    <!-- Paid service layout -->
    <template v-else>

      <!-- Hero -->
      <section class="space-y-6">
        <div>
          <PageHeader>{{ service.label }}</PageHeader>
          <p class="text-xl leading-relaxed text-neutral-700 mt-4 max-w-2xl">{{ service.tagline }}</p>
        </div>
        <div class="not-prose space-y-3">
          <dl class="flex flex-wrap gap-2 items-center">
            <div v-if="service.price"
              class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5">
              <dt class="sr-only">Price</dt>
              <dd class="price font-semibold text-lg leading-none">{{ service.price }}</dd>
            </div>
            <div v-if="service.timeline"
              class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-neutral-600">
              <Icon name="ph:clock" size="1rem" aria-hidden="true" />
              <dt class="sr-only">Timeline</dt>
              <dd>{{ service.timeline }}</dd>
            </div>
          </dl>
          <p v-if="service.deliveredAs" class="text-sm text-neutral-600 flex items-start gap-1.5">
            <Icon name="ph:file-text" size="1rem" aria-hidden="true" class="shrink-0 text-neutral-400 mt-0.5" />
            {{ service.deliveredAs }}
          </p>
        </div>
        <div class="not-prose flex flex-wrap gap-3 items-center">
          <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
            Book an intro call
          </ButtonLink>
          <ButtonLink to="/services/" variant="inverse">
            View all services
          </ButtonLink>
        </div>
      </section>

      <!-- Who it's for -->
      <Callout>
        <p class="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">Who it's for</p>
        <p class="text-lg font-medium text-neutral-900 leading-relaxed mb-2">{{ service.audience }}</p>
        <p class="text-neutral-600 leading-relaxed">{{ service.audienceDetail }}</p>
      </Callout>

      <!-- What's included -->
      <section class="space-y-6">
        <div class="prose">
          <h2>What's included</h2>
          <p>{{ service.outcomeFull }}</p>
        </div>
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose">
          <li v-for="item in service.includesFull" :key="item"
            class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4">
            <Icon name="ph:check-circle" class="shrink-0 text-green-500 translate-y-0.5" size="1.25rem"
              aria-hidden="true" />
            <span class="leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </section>

      <!-- How it works -->
      <section v-if="service.process" class="space-y-6">
        <div class="prose">
          <h2>How it works</h2>
        </div>
        <ol class="list-none p-0 not-prose grid sm:grid-cols-2 gap-6">
          <li v-for="(step, i) in service.process" :key="step.title" class="flex gap-6 items-start">
            <span class="step-number price text-5xl text-neutral-200 shrink-0 leading-none select-none"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="pt-1">
              <p class="font-semibold text-neutral-900 mb-1">{{ step.title }}</p>
              <p class="text-neutral-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Why this matters -->
      <section v-if="service.insight" class="border-l-4 border-neutral-900 pl-8 space-y-3">
        <p class="text-xs font-semibold tracking-widest uppercase text-neutral-400">Why teams pay for this</p>
        <p class="text-lg leading-relaxed text-neutral-800">{{ service.insight }}</p>
      </section>

      <!-- Testimonial -->
      <section v-if="service.testimonial" aria-labelledby="testimonial-label">
        <div class="prose">
          <p id="testimonial-label">What clients
            say</p>
          <blockquote class="space-y-4">
            <p>{{ service.testimonial.quote }}</p>
            <cite>
              {{ service.testimonial.author }},
              <span class="block">{{ service.testimonial.role }}</span>
            </cite>
          </blockquote>
        </div>
      </section>

      <!-- Final CTA -->
      <Callout>
        <h2>Ready to get started?</h2>
        <p>Get in touch to see if we're a good fit. No lengthy sales process — just a short conversation about what your
          team needs.</p>
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </Callout>

    </template>
  </PageWrapper>
</template>

<style scoped>
.price,
.step-number {
  font-family: "DM Serif Text", serif;
}
</style>
