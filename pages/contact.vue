<script setup>
const { public: { hubspotPortalId, hubspotFormGuid } } = useRuntimeConfig()

const title = "Contact Josh Briley | Design systems consulting"
const description = "Get in touch to discuss a design system audit, component library build, or design-to-code workflow. I respond within one business day."
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp'
})


</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHero :content="{
        pill: 'Contact Me',
        pillIcon: 'ph:address-book',
        title: 'Let\'s talk',
        description: 'Fill out the form if you need help with component library debt, an accessibility audit, or a Figma-to-code handoff. I\'ll get back to you within one business day.'
      }">
        <div class="prose">
          <h2>Currently accepting new consulting engagements</h2>
          <p>I take on a limited number of consulting engagements at a time to ensure each client receives my full
            attention.
          </p>
        </div>
      </PageHero>
    </section>

    <split-content>
      <template #primary>
        <section aria-labelledby="contact-form" class="space-y-4">
          <FormContact />
        </section>
      </template>
      <template #secondary>
        <h2>What happens next</h2>
        <ul>
          <li>Send a message. It takes about two minutes.</li>
          <li>I'll review and respond within one business day.</li>
          <li>We'll have a free 30-minute call with no obligation.</li>
          <li>If there's a fit, I'll send a simple proposal.</li>
        </ul>

        <TestimonialList />
      </template>
    </split-content>

  </PageWrapper>
</template>
<style scoped>
label {
  font-weight: 500;
  display: block;
}

button {
  cursor: pointer;
}

.submit-btn:active {
  transform: translateY(2px);
}
</style>
