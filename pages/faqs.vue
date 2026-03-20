<script setup>
useSeoMeta({
  title: 'Frequently Asked Questions',
  ogTitle: 'Frequently Asked Questions',
  description: 'Frequently Asked Questions from clients and colleagues I\'ve worked with over the years.',
  ogDescription: 'Frequently Asked Questions from clients and colleagues I\'ve worked with over the years.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1747754360/josh-portfolio/assets_task_01jvq4ak6yfmma0mxqxrmvr922_1747754314_img_0.webp'
})

const faqs = [
  {
    question: 'Do you work with teams outside the US?',
    answer: 'Yes. All engagements are fully remote and async-friendly. Time zone differences haven\'t been a problem.',
  },
  {
    question: 'What if my needs don\'t fit one of these packages?',
    answer: 'Get in touch and describe what you\'re working with. If it\'s something I can help with, I\'ll put together a custom proposal. If it isn\'t, I\'ll tell you that too.',
  },
  {
    question: 'Can I start with the audit and move to a component library build afterward?',
    answer: 'Yes, and that\'s the most common path. The audit identifies exactly what needs to be built or rebuilt, which makes the component library engagement more focused and efficient.',
  },
  {
    question: 'How does payment work?',
    answer: '50% upfront, 50% on delivery. Payment is via invoice.',
  },
  {
    question: 'Are you available for ongoing work beyond these packages?',
    answer: 'On a limited basis, yes. If you complete one of these engagements and want continued support (extending the system, reviewing new components, maintaining accessibility), we can discuss a monthly retainer.',
  },
  {
    question: 'Do you offer priority or expedited delivery?',
    answer: 'Yes. If your team needs an engagement scheduled and completed faster, priority delivery is available for an additional $1,000. Get in touch to check current availability.',
  },
]
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="FAQs" pillIcon="ph:question">
        Frequently asked questions
      </PageHeader>
      <dl class="space-y-2">
        <template name="frequently-asked-question" v-for="(faq, index) in faqs" :key="index">
          <div class="bg-white border border-neutral-200 p-4 rounded-lg">
            <dt class="mt-0">{{ faq.question }}</dt>
            <dd class="pl-0">{{ faq.answer }}</dd>
          </div>
        </template>
      </dl>
    </section>
  </PageWrapper>
</template>
