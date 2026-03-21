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
      <PageHeaderIntro :content="{
        pill: 'Contact Me',
        pillIcon: 'ph:address-book',
        title: 'Let\'s talk',
        description: 'Whether you\'re dealing with component library debt, an accessibility audit deadline, or a Figma-to-code handoff that\'s slowing your team down, fill out the form and I\'ll get back to you within one business day.'
      }" />
    </section>
    <split-content>
      <template #primary>
        <section aria-labelledby="contact-form" class="space-y-4">
          <h2 id="contact-form" v-if="!formSubmitted" class="text-2xl text-balance mt-0">Questions?</h2>
          <FormContact />
          <callout>
            <div class="prose">
              <h2 id="social-media" class="text-lg mb-2">Social Media</h2>
            </div>
            <ul class="not-prose flex gap-6 items-center justify-between flex-grow">
              <li class="flex items-center gap-1">
                <div class="no-shrink translate-y-1">
                  <Icon name="logos:linkedin-icon" size="1em" />
                </div>
                <a href="https://www.linkedin.com/in/joshuabriley/" class="flex hover:underline" target="_blank"
                  rel="noopener noreferrer">
                  <span class="sr-only">LinkedIn.com/</span>
                  joshuabriley
                </a>
              </li>
              <li class="flex items-center gap-1">
                <div class="no-shrink translate-y-1">
                  <Icon name="logos:x" size="1em" />
                </div>
                <a href="https://x.com/joshuabriley" class="hover:underline" target="_blank" rel="noopener noreferrer">
                  <span class="sr-only">x.com/</span>
                  joshuabriley
                </a>
              </li>
            </ul>
          </callout>
        </section>
      </template>
      <template #secondary>
        <h2>What happens next</h2>
        <ul>
          <li>Send a message. It takes about two minutes.</li>
          <li>I review and respond within one business day.</li>
          <li>We have a 30-minute introductory call with no obligation.</li>
          <li>If there's a fit, I'll send a simple proposal.</li>
        </ul>

        <blockquote class="border-l-4 border-neutral-200 pl-6 prose">
          <p class="italic">Josh is an outstanding front-end engineer with incredible focus and discipline when it comes
            to developing effective, functional and accessible front ends. He is a strong partner willing to work across
            functions to design and implement the best user experience as well as provide the mentorship and leadership
            to help his more junior experienced colleagues grow and learn. </p>
          <cite>Welling Lagrone, Vice President, Triverus Consulting</cite>
        </blockquote>

        <div>
          <h2>Current availability</h2>
          <p>Currently accepting new consulting engagements.</p>
        </div>
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
