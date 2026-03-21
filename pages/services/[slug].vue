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
    <Breadcrumbs class="mb-0" :items="[{ label: 'Services', to: '/services/' }, { label: service.label }]" />

    <!-- Coming soon layout -->
    <template v-if="service.isComingSoon">

      <PageHero :content="{
        pill: 'Coming Soon',
        pillIcon: 'ph:clock',
        title: service.label,
        description: service.description
      }">
        <FormRailsWishList />
      </PageHero>

      <Callout>
        <h2>Who it's for</h2>
        <p>{{ service.audience }}</p>
        <p>{{ service.audienceDetail }}</p>
      </Callout>

      <section class="space-y-6">
        <div class="prose">
          <h2>What's included</h2>
          <p>{{ service.outcomeFull }}</p>
        </div>
        <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose">
          <li v-for="item in service.includesFull" :key="item"
            class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4">
            <Icon name="ph:check-circle" class="shrink-0 text-blue-400 translate-y-0.5" size="1.25rem"
              aria-hidden="true" />
            <span class="">{{ item }}</span>
          </li>
        </ul>
      </section>

      <SplitContent>
        <template #primary>
          <section v-if="service.insight" class="prose">
            <h2>Why this matters</h2>
            <p class="text-lg  ">{{ service.insight }}</p>
          </section>
        </template>
        <template #secondary>
          <Callout>
            <h2>Interested when it launches?</h2>
            <p>Get in touch mentioning "{{ service.label }}" and I'll reach out when it's available.</p>
            <ButtonLink to="/contact/">Join the waitlist</ButtonLink>
          </Callout>
        </template>
      </SplitContent>

    </template>

    <!-- Free offering layout -->
    <template v-else-if="service.isFree">

      <PageHero :content="{
        pill: 'Free resource',
        pillIcon: 'ph:gift',
        title: service.label,
        description: service.description
      }">
        <FormScorecard />
      </PageHero>

      <Callout>
        <h2>Who it's for</h2>
        <p>{{ service.audience }}</p>
        <p>{{ service.audienceDetail }}</p>
      </Callout>

      <section class="space-y-6">
        <div class="prose">
          <h2>What it covers</h2>
          <p>{{ service.outcomeFull }}</p>
        </div>
        <ul class="grid sm:grid-cols-2 gap-3 list-none p-0 not-prose">
          <li v-for="item in service.includesFull" :key="item"
            class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4">
            <Icon name="ph:check-circle" class="shrink-0 text-blue-400 translate-y-0.5" size="1.25rem"
              aria-hidden="true" />
            <span>{{ item }}</span>
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
            <div class="prose">
              <h3 class="text-lg">{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <SplitContent>
        <template #primary>
          <section v-if="service.insight" class="prose">
            <h2>What this unlocks</h2>
            <p>{{ service.insight }}</p>
          </section>
        </template>
        <template #secondary>
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
      </SplitContent>

    </template>

    <!-- Paid service layout -->
    <template v-else>

      <PageHero :content="{
        title: service.label,
        description: service.tagline
      }">
        <div class="not-prose space-y-3 mb-6">
          <dl class="flex flex-wrap gap-2 items-center">
            <div v-if="service.price"
              class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5">
              <dt class="sr-only">Price</dt>
              <dd class="price  text-lg leading-none">{{ service.price }}</dd>
            </div>
            <div v-if="service.timeline"
              class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 ">
              <Icon name="ph:clock" size="1rem" aria-hidden="true" />
              <dt class="sr-only">Timeline</dt>
              <dd>{{ service.timeline }}</dd>
            </div>
          </dl>
          <p v-if="service.deliveredAs" class="  flex items-start gap-1.5">
            <Icon name="ph:file-text" size="1rem" aria-hidden="true" class="shrink-0  mt-0.5" />
            {{ service.deliveredAs }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
            Book an intro call
          </ButtonLink>
          <ButtonLink to="/services/" variant="inverse">
            View all services
          </ButtonLink>
        </div>
      </PageHero>

      <!-- Who it's for -->
      <Callout>
        <h2 class="mt-0">Who it's for</h2>
        <p>{{ service.audience }}</p>
        <p>{{ service.audienceDetail }}</p>
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
            <Icon name="ph:check-circle" class="shrink-0 text-blue-400 translate-y-0.5" size="1.25rem"
              aria-hidden="true" />
            <span class="">{{ item }}</span>
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
            <div class="prose">
              <h3 class="text-lg">{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <SplitContent>
        <template #primary>
          <!-- Why this matters -->
          <section v-if="service.insight" class="prose">
            <h2>Why teams pay for this</h2>
            <p>{{ service.insight }}</p>
          </section>
        </template>
        <template #secondary>
          <!-- Testimonial -->
          <section v-if="service.testimonial" aria-labelledby="testimonial-label">
            <div class="prose">
              <h2>What clients
                say</h2>
              <blockquote>
                <p>{{ service.testimonial.quote }}</p>
                <cite>
                  {{ service.testimonial.author }},
                  <span class="block">{{ service.testimonial.role }}</span>
                </cite>
              </blockquote>
            </div>
          </section>
        </template>
      </SplitContent>

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
