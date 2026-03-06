<script setup lang="ts">
const title = "Design systems consulting services | Josh Briley"
const description = "Fixed-scope consulting for design system audits, component library builds, and design-to-code workflow optimization. Clear deliverables, clear pricing, no surprises."
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
})

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

    <services variant="full" />


    <section aria-labelledby="faq">
      <h2 id="faq" class="text-2xl mb-6">Frequently Asked Questions</h2>
      <div class="space-y-2">
        <details name="frequently asked question" v-for="faq in faqs" :key="faq.question"
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
        what would actually move the needle for your team.
      </p>
      <ButtonLink to="/contact/">
        Send a message
      </ButtonLink>
    </Callout>
  </PageWrapper>
</template>
