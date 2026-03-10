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

const allServices = await queryCollection('services').all()

const paidServices = allServices.filter(s => !s.isFree && !s.isComingSoon)
const freeService = allServices.find(s => s.isFree)
const comingSoonServices = allServices.filter(s => s.isComingSoon)

const faqs = [
  {
    question: 'Do you work with teams outside the US?',
    answer: 'Yes. All three engagements are fully remote and async-friendly. Time zone differences haven\'t been a problem.',
  },
  {
    question: 'What if my needs don\'t fit one of these packages?',
    answer: 'Get in touch and describe what you\'re working with. If it\'s something I can help with, I\'ll put together a custom proposal. If it isn\'t, I\'ll tell you that too.',
  },
  {
    question: 'Can I start with the audit and move to a component library build afterward?',
    answer: 'Yes, and that\'s actually the most common path. The audit identifies exactly what needs to be built or rebuilt, which makes the component library engagement more focused and efficient.',
  },
  {
    question: 'How does payment work?',
    answer: '50% upfront, 50% on delivery. Payment is via invoice.',
  },
  {
    question: 'Are you available for ongoing work beyond these packages?',
    answer: 'On a limited basis, yes. If you complete one of these engagements and want continued support, we can discuss a monthly retainer.',
  },
]
</script>

<template>
  <PageWrapper>
    <section aria-describedby="page-header" class="prose">
      <PageHeader>
        Design systems consulting
      </PageHeader>
      <p>
        Three focused engagements at fixed scope and fixed price. You know exactly what you're getting before we start.
      </p>
    </section>

    <Services :services="paidServices" />

    <!-- Free offering -->
    <Callout v-if="freeService">
      <div class="prose">
        <p class="text-sm font-semibold tracking-wider text-blue-700 uppercase">Free resource</p>
        <h2 id="free-heading" class="text-2xl mt-1">Not ready to commit?</h2>
        <p>
          Use the free <strong>{{ freeService.label }}</strong> to see where your design system stands before investing
          in a paid engagement. It covers the same five dimensions as the paid audit — you score your own system and
          walk away with a clear picture of your biggest gaps.
        </p>
        <p>{{ freeService.description }}</p>
      </div>
      <div class="pt-4">
        <ButtonLink :to="`/services/${freeService.slug}/`">
          Get the free checklist
        </ButtonLink>
      </div>
    </Callout>

    <!-- Coming soon -->
    <section v-if="comingSoonServices.length" aria-labelledby="coming-soon-heading" class="space-y-4">
      <h2 id="coming-soon-heading" class="text-xl">Coming soon</h2>
      <ul class="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
        <li v-for="service in comingSoonServices" :key="service.slug"
          class="rounded-lg border border-neutral-200 bg-white p-6 space-y-2">
          <Pill pill="Coming Soon"></Pill>
          <h3 class="text-lg font-semibold">{{ service.label }}</h3>
          <p class="text-neutral-600 text-sm leading-relaxed">{{ service.description }}</p>
          <NuxtLink :to="`/services/${service.slug}/`"
            class="text-sm font-medium underline underline-offset-2 hover:no-underline">
            Learn more and join the waitlist
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="faq">
      <h2 id="faq" class="text-2xl mb-6">Frequently asked questions</h2>
      <div class="space-y-2">
        <details name="frequently-asked-question" v-for="faq in faqs" :key="faq.question"
          class="border rounded-lg border-neutral-200 bg-white p-6">
          <summary class="text-lg cursor-pointer">{{ faq.question }}</summary>
          <p class="pt-2">{{ faq.answer }}</p>
        </details>
      </div>
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
