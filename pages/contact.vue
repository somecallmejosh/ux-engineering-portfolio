<script setup>
import { motion } from 'motion-v'
const title = "Contact Josh Briley | Design systems consulting"
const description = "Get in touch to discuss a design system audit, component library build, or design-to-code workflow. I respond within one business day."
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp'

})

const formData = ref({
  name: '',
  email: '',
  message: '',
  phone: '',
  service: '',
})

const nameValid = ref(true)
const validateName = () => {
  nameValid.value = formValidation().name()
}

const emailValid = ref(true)
const validateEmail = () => {
  emailValid.value = formValidation().email()
}

const messageValid = ref(true)
const validateMessage = () => {
  messageValid.value = formValidation().message()
}

const formValidation = () => ({
  name: () => {
    if (!formData.value.name.trim()) {
      return false
    }
    return true
  },
  email: () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.value.email.trim() || !emailPattern.test(formData.value.email)) {
      return false
    }
    return true
  },

  message: () => {
    if (!formData.value.message.trim()) {
      return false
    }
    return true
  }
})

const formSubmitted = ref(false)
const formSubmitError = ref(false)

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const onSubmit = async (event) => {
  event.preventDefault();

  validateName();
  validateEmail();
  validateMessage();

  if (!nameValid.value || !emailValid.value || !messageValid.value) {
    // next tick
    await nextTick();
    // scroll to the top of the form
    const invalidField = document.querySelector('.invalid');
    invalidField?.focus()
    return;
  }

  const postData = {
    'form-name': 'contact',
    ...formData.value,
  };

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(postData), // Use the encode function
    });

    if (response.ok) {
      formSubmitted.value = true;
      formSubmitError.value = false;
      formData.value = { name: '', email: '', message: '', phone: '' };
      nameValid.value = true;
      emailValid.value = true;
      messageValid.value = true;
    } else {
      console.error('Form submission failed:', response);
      formSubmitError.value = true;
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    formSubmitError.value = true;
  }
};
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Contact Me" pillIcon="ph:address-book">
        Let's talk
      </PageHeader>
      <p>Whether you're dealing with component library debt, an accessibility audit deadline, or a Figma-to-code handoff
        that's slowing your team down, fill out the form and I'll get back to you within one business day.</p>
    </section>
    <split-content>
      <template #primary>
        <section aria-labelledby="contact-form" class="space-y-4">
          <h2 id="contact-form" v-if="!formSubmitted" class="text-2xl text-balance mt-0">Questions?</h2>
          <form v-show="!formSubmitted" name="contact" method="POST" novalidate data-netlify="true"
            netlify-honeypot="bot-field" @submit.prevent="onSubmit" class="space-y-4 p-6 bg-neutral-50 rounded-lg">
            <input type="hidden" name="form-name" value="contact" />
            <div class="space-y-1">
              <label class="text-sm" for="name">Name *</label>
              <div>
                <input aria-describedby="name-invalid" @blur="validateName" v-model="formData.name" name="name"
                  type="text"
                  class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  :class="{ 'border-red-600 invalid': nameValid == false }">
                <motion.small :initial="{ y: 10, opacity: 0.25 }" :whileInView="{ y: 4, opacity: 1 }"
                  :transition="{ duration: 0.5 }" role="alert" id="name-invalid" class="block text-red-600"
                  v-if="nameValid == false">Enter your name</motion.small>
              </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-6">
              <div class="space-y-1">
                <label class="text-sm" for="email">Email *</label>
                <div>
                  <input aria-describedby="email-invalid" @blur="validateEmail" v-model="formData.email" name="email"
                    type="email"
                    class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    :class="{ 'border-red-600 invalid': emailValid == false }">
                  <motion.small :initial="{ y: 10, opacity: 0.25 }" :whileInView="{ y: 4, opacity: 1 }" role="alert"
                    :transition="{ duration: 0.5 }" id="email-invalid" class="block text-red-600"
                    v-if="emailValid == false">Enter a valid email
                    address.</motion.small>
                </div>
              </div>
              <div class="space-y-1">
                <label class="text-sm" for="phone">Phone</label>
                <input v-model="formData.phone" name="phone" type="text"
                  class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-sm" for="service">I'm interested in</label>
              <select v-model="formData.service" name="service"
                class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="" disabled>Select a service</option>
                <option value="Design System Audit">Design System Audit</option>
                <option value="Component Library Starter">Component Library Starter</option>
                <option value="Design-to-Code Workflow">Design-to-Code Workflow</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div class="space-y-1">
              <label class="text-sm" for="message">Message *</label>
              <div>
                <textarea aria-describedby="message-invalid" @blur="validateMessage" v-model="formData.message"
                  name="message"
                  class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  :class="{ 'border-red-600 invalid': messageValid == false }"></textarea>
                <motion.small :initial="{ y: 10, opacity: 0.25 }" :whileInView="{ y: 0, opacity: 1 }"
                  :transition="{ duration: 0.5 }" role="alert" id="message-invalid" class="block text-red-600"
                  v-if="messageValid == false">Enter a brief message.</motion.small>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center">
              <div><small>* indicates a required field</small></div>
              <motion.button :whilePress="{ y: 2 }" type="submit"
                class="inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center">
                Send Message</motion.button>
            </div>
          </form>

          <motion.div :initial="{ y: 10, opacity: 0.25 }" :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5 }" v-if="formSubmitted" class="prose bg-neutral-50 p-6 rounded-lg"
            role="alert">
            <h2>Message received</h2>
            <p>Thanks for reaching out. If you need to reach me urgently, you can email me at <a
                href="mailto:josh@thebrileys.com">josh@thebrileys.com</a> or call <a
                href="tel:8602328250">860-232-8250</a>.</p>
            <p>Otherwise, feel free to poke around my <NuxtLink to="/blog/">blog</NuxtLink> or have a look at some of my
              <NuxtLink to="/projects/">recent projects</NuxtLink>
            </p>
          </motion.div>
          <motion.div :initial="{ y: 10, opacity: 0.25 }" :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5 }" role="alert" v-if="formSubmitError"
            class="prose p-6 rounded-lg border border-red-100 bg-red-50/30">
            <h2>Something went wrong</h2>
            <p>Your message couldn't be submitted. If this is urgent, email me at <a
                href="mailto:josh@thebrileys.com">josh@thebrileys.com</a> or try the form again later.</p>
          </motion.div>

          <callout>
            <div class="prose">
              <h2 id="social-media" class="text-lg mb-2">Social Media</h2>
            </div>
            <ul class="not-prose flex gap-6 items-center justify-between flex-grow">
              <li class="flex items-center gap-1">
                <div class="no-shrink translate-y-1">
                  <Icon name="logos:linkedin-icon" size="1em" />
                </div>
                <a href="https://www.linkedin.com/in/joshuabriley/" class="flex hover:underline" target="_blank">
                  <span class="sr-only">LinkedIn.com/</span>
                  joshuabriley
                </a>
              </li>
              <li class="flex items-center gap-1">
                <div class="no-shrink translate-y-1">
                  <Icon name="logos:x" size="1em" />
                </div>
                <a href="https://x.com/joshuabriley" class="hover:underline" target="_blank">
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
</style>
