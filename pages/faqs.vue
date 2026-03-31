<script setup>
useSeoMeta({
  title: 'Frequently asked questions',
  ogTitle: 'Frequently asked questions',
  description: 'Frequently Asked Questions from clients and colleagues I\'ve worked with over the years.',
  ogDescription: 'Frequently Asked Questions from clients and colleagues I\'ve worked with over the years.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1747754360/josh-portfolio/assets_task_01jvq4ak6yfmma0mxqxrmvr922_1747754314_img_0.webp'
})

const faqGroups = [
  {
    heading: 'Services & fit',
    faqs: [
      {
        question: 'What frameworks do you work with?',
        answer: 'Primarily React/Next.js and Vue.js/Nuxt.js. The audit engagement is framework-agnostic, covering consistency, accessibility, token structure, and documentation regardless of what your team is using.',
      },
      {
        question: 'How do I know whether to start with the audit or go straight to a component library build?',
        answer: 'If you have an existing system, start with the audit. It identifies what needs to be fixed or rebuilt before any building begins. If you\'re starting from scratch, the Component Library Starter is the right fit. If you\'re not sure which applies to you, the intro call will make it clear.',
      },
      {
        question: 'What if we don\'t have a design system yet?',
        answer: 'The Component Library Starter is built for that. You don\'t need anything in place before we begin, just a clear picture of the product you\'re building for. We align on tokens, components, and approach during the kickoff call.',
      },
      {
        question: 'Can I start with the audit and move to a component library build afterward?',
        answer: 'Yes, and that\'s the most common path. The audit identifies exactly what needs to be built or rebuilt, which makes the component library engagement more focused and efficient.',
      },
      {
        question: 'What if my needs don\'t fit your services?',
        answer: 'Get in touch and describe what you\'re working with. If it\'s something I can help with, I\'ll put together a custom proposal. If it isn\'t, I\'ll tell you that too.',
      },
      {
        question: 'Are you available for ongoing work beyond these engagements?',
        answer: 'On a limited basis, yes. If you complete one of these engagements and want continued support (extending the system, reviewing new components, maintaining accessibility), we can discuss a monthly retainer.',
      },
    ],
  },
  {
    heading: 'Process & timeline',
    faqs: [
      {
        question: 'What does the intro call cover?',
        answer: 'The intro call is 30 minutes. We cover who owns the system and who uses it day to day, when it was last actively maintained, whether there is an existing component inventory or changelog, what prompted you to reach out, and which parts of the product are highest priority if scope needs to be narrowed. By the end, we\'ll both have a clear sense of whether the engagement is a good fit.',
      },
      {
        question: 'What do I need to prepare before we start?',
        answer: 'For an audit, nothing special. Share your Storybook, Figma file, or codebase and that\'s enough to get started. For a component library build, we align on tokens, styling approach, and product requirements during a kickoff call.',
      },
      {
        question: 'How long does a typical engagement take?',
        answer: 'The audit timeline depends on the size and complexity of your system. The starter component library build typically takes 2–3 weeks. More advanced component libraries take longer, depending on the requirements. Exact timelines are confirmed during the intro call.',
      },
      {
        question: 'How involved does our team need to be during the engagement?',
        answer: 'A single point of contact is all I need. I\'ll occasionally have questions about existing implementation decisions or other project details and will reach out by email. A response within one business day keeps things moving.',
      },
      {
        question: 'What happens if the scope changes mid-engagement?',
        answer: 'Scope changes happen. When they do, we\'ll discuss the impact on timeline and cost before any additional work begins. Nothing changes without your agreement first.',
      },
    ],
  },
  {
    heading: 'Deliverables',
    faqs: [
      {
        question: 'How many revision rounds are included?',
        answer: 'The component library starter includes one round of revisions. The audit includes a debrief call where we walk through findings together before you act on anything.',
      },
      {
        question: 'Do you provide a walkthrough after the engagement ends?',
        answer: 'Yes. Both engagements include a structured walkthrough. For the audit, we walk through the findings together in a debrief call so your team knows exactly what to prioritize and why. For the component library build, I deliver the library to your repo and walk your team through it so you can start using it immediately.',
      },
    ],
  },
  {
    heading: 'Logistics',
    faqs: [
      {
        question: 'Do you work with teams outside the US?',
        answer: 'Yes. All engagements are fully remote and async-friendly. Time zone differences haven\'t been a problem.',
      },
      {
        question: 'How does payment work?',
        answer: '50% upfront to reserve your spot, 50% on delivery. Payment is via invoice.',
      },
      {
        question: 'Do you offer priority or expedited delivery?',
        answer: 'Yes. If your team needs an engagement scheduled and completed faster, priority delivery is available for an additional fee. Get in touch to check current availability.',
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes. If your team requires a non-disclosure agreement before sharing access to your codebase or design files, that\'s not a problem.',
      },
      {
        question: 'Who owns the code at the end of the engagement?',
        answer: 'You do. All delivered code is yours. There are no licensing restrictions on what I build for you.',
      },
    ],
  },
]
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHero :content="{
        pill: 'FAQs',
        pillIcon: 'ph:question',
        title: 'Frequently asked questions',
        description: 'These frequently asked questions come from clients and colleagues I\'ve worked with over the years.'
      }" />
      <template v-for="group in faqGroups" :key="group.heading">
        <h2 class="text-pretty">{{ group.heading }}</h2>
        <dl class="space-y-2">
          <div v-for="(faq, index) in group.faqs" :key="index"
            class="bg-white border border-neutral-200 p-4 rounded-lg">
            <dt class="mt-0 text-pretty">{{ faq.question }}</dt>
            <dd class="pl-0 text-pretty">{{ faq.answer }}</dd>
          </div>
        </dl>
      </template>
    </section>
  </PageWrapper>
</template>
