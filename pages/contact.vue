<script setup>
import { motion } from 'motion-v'
useSeoMeta({
  title: 'Contact Me',
  ogTitle: 'Contact Me',
  description: 'Contact me for enterprise UX engineering and consulting services.',
  ogDescription: 'Contact me for enterprise UX engineering and consulting services.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp'

})

const formData = ref({
  name: '',
  email: '',
  message: '',
  phone: ''
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
      <PageHeader pill="Contact Me">
        Let's Build Something Great Together!
      </PageHeader>
      <p>So, you're looking for someone who can really wrangle the front-end, make your user interfaces sing, and
          build things that can grow without falling apart? That's pretty much my jam!</p>
    </section>
    <div class="space-y-4 grid lg:grid-cols-2 lg:gap-24 gap-12 lg:items-center">
      <section aria-labelledby="contact-form" class="space-y-4">
        <h2 id="contact-form" v-if="!formSubmitted" class="text-2xl text-balance">Got a Project? A Question? A Bad Dad Joke? Drop me a line.</h2>
        <form v-show="!formSubmitted" name="contact" method="POST" novalidate data-netlify="true" netlify-honeypot="bot-field" @submit.prevent="onSubmit"
          class="space-y-4 p-6 bg-neutral-50 rounded-lg">
          <input type="hidden" name="form-name" value="contact" />
          <div class="space-y-1">
            <label class="text-sm" for="name">Name *</label>
            <div>
              <input aria-describedby="name-invalid" @blur="validateName" v-model="formData.name" name="name"
                type="text"
                class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                :class="{ 'border-red-600 invalid': nameValid == false }">
              <motion.small
                :initial="{ y: 10, opacity: 0.25 }"
                :whileInView="{ y: 4, opacity: 1 }"
                :transition="{ duration: 0.5 }"
                role="alert"
                id="name-invalid" class="block text-red-600" v-if="nameValid == false">Enter your name</motion.small>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="space-y-1">
              <label class="text-sm" for="email">Email *</label>
              <div>
                <input aria-describedby="email-invalid" @blur="validateEmail" v-model="formData.email" name="email"
                  type="email"
                  class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  :class="{ 'border-red-600 invalid': emailValid == false }">
                <motion.small
                  :initial="{ y: 10, opacity: 0.25 }"
                  :whileInView="{ y: 4, opacity: 1 }"
                  role="alert"
                  :transition="{ duration: 0.5 }" id="email-invalid" class="block text-red-600" v-if="emailValid == false">Enter a valid email
                  address.</motion.small>
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-sm" for="phone">Phone</label>
              <input v-model="formData.phone" name="phone" type="text"
                class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>
          </div>
          <div class="space-y-1">
            <label class="text-sm" for="message">Message *</label>
            <div>
              <textarea aria-describedby="message-invalid" @blur="validateMessage" v-model="formData.message"
                name="message"
                class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                :class="{ 'border-red-600 invalid': messageValid == false }"></textarea>
              <motion.small
                :initial="{ y: 10, opacity: 0.25 }"
                :whileInView="{ y: 0, opacity: 1 }"
                :transition="{ duration: 0.5 }"
                role="alert"
                id="message-invalid" class="block text-red-600" v-if="messageValid == false">Please enter a brief
                message.</motion.small>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center">
            <div><small>* indicates a required field</small></div>
            <motion.button :whilePress="{ y: 2 }" type="submit"
              class="bg-white font-semibold px-6 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200">Send
              Message</motion.button>
          </div>
        </form>

        <motion.div
          :initial="{ y: 10, opacity: 0.25 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.5 }"
          v-if="formSubmitted" class="prose bg-neutral-50 p-6 rounded-lg" role="alert">
          <h2>Hey There!</h2>
          <p>Thanks for reaching out. Your message is on the way to my inbox as you read this. If you need to reach me urgently, please feel free to contact me via email at <a
              href="mailto:josh@thebrileys.com">josh@thebrileys.com</a> or by phone at <a
              href="tel:8602328250">860-232-8250</a>.</p>
          <p>Otherwise, feel free to poke around my <NuxtLink to="/blog">blog</NuxtLink> or have a look at some of my
            <NuxtLink to="/projects">recent projects</NuxtLink>
          </p>
        </motion.div>
        <motion.div
          :initial="{ y: 10, opacity: 0.25 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.5 }"
          role="alert" v-if="formSubmitError" class="prose p-6 rounded-lg border border-red-100 bg-red-50/30">
          <h2>Oops! Something went wrong.</h2>
          <p>There was an error submitting your message. If this is an urgent matter,
            please contact me directly at <a href="mailto:josh@thebrileys.com">josh@thebrileys.com</a>, or you can try
            the form again later.</p>
        </motion.div>
      </section>
      <section aria-labelledby="social-media" class="space-y-4 lg:space-y-8">
        <div class="prose">
          <h3 id="social-media" class="text-2xl">Or Find Me On The Socials</h3>
          <p>Admittendly, I don't post on social sites all that often, but I do receive notifcations from them when
            folks send me messages.</p>
        </div>
        <ul class="not-prose space-y-4">
          <li class="flex items-center gap-1">
            <Icon name="skill-icons:linkedin" size="1.5em" /><a href="https://www.linkedin.com/in/somecallmejosh/"
              class="hover:underline" target="_blank" rel="noreferrer nofollow">/somecallmejosh</a>
          </li>
          <li class="flex items-center gap-1">
            <Icon name="skill-icons:twitter" size="1.5em" /><a href="https://x.com/joshuabriley"
              class="hover:underline" target="_blank" rel="noreferrer nofollow">/joshuabriley</a>
          </li>
        </ul>
      </section>
    </div>
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
