<script setup>
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  phone: '',
  service: '',
})

const firstNameValid = ref(true)
const validateFirstName = () => {
  firstNameValid.value = formValidation().firstName()
}

const lastNameValid = ref(true)
const validateLastName = () => {
  lastNameValid.value = formValidation().lastName()
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
  firstName: () => !!formData.value.firstName.trim(),
  lastName: () => !!formData.value.lastName.trim(),
  email: () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return !!formData.value.email.trim() && emailPattern.test(formData.value.email)
  },
  message: () => !!formData.value.message.trim(),
})

const formSubmitted = ref(false)
const formSubmitError = ref(false)

const onSubmit = async () => {
  validateFirstName();
  validateLastName();
  validateEmail();
  validateMessage();

  if (!firstNameValid.value || !lastNameValid.value || !emailValid.value || !messageValid.value) {
    await nextTick();
    document.querySelector('.invalid')?.focus()
    return;
  }

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value,
    })

    formSubmitted.value = true;
    formSubmitError.value = false;
    formData.value = { firstName: '', lastName: '', email: '', message: '', phone: '', service: '' };
    firstNameValid.value = true;
    lastNameValid.value = true;
    emailValid.value = true;
    messageValid.value = true;
  } catch (error) {
    console.error('Form submission failed:', error);
    formSubmitError.value = true;
  }
};
</script>

<template>

  <div>
    <h2 id="contact-form" v-if="!formSubmitted" class="text-2xl text-balance mt-0">Tell me about your project</h2>
    <form v-show="!formSubmitted" name="contact" novalidate @submit.prevent="onSubmit"
      class="space-y-4 p-6 bg-neutral-50 rounded-lg">
      <div class="grid lg:grid-cols-2 gap-6">
        <FormField v-model="formData.firstName" inputId="firstName" name="firstName" label="First name"
          :isValid="firstNameValid" errorMessage="Enter your first name" required @blur="validateFirstName" />
        <FormField v-model="formData.lastName" inputId="lastName" name="lastName" label="Last name"
          :isValid="lastNameValid" errorMessage="Enter your last name" required @blur="validateLastName" />
      </div>
      <div class="grid lg:grid-cols-2 gap-6">
        <FormField v-model="formData.email" inputId="email" name="email" label="Email" type="email"
          :isValid="emailValid" errorMessage="Enter a valid email address." required @blur="validateEmail" />
        <div class="space-y-1">
          <label class="" for="phone">Phone</label>
          <input v-model="formData.phone" name="phone" type="text"
            class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
        </div>
      </div>
      <div class="space-y-1">
        <label class="" for="service">I'm interested in</label>
        <select v-model="formData.service" name="service"
          class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="" disabled>Select a service</option>
          <option value="wk83ywJJkHUN9gwkAO4gq">Design System Audit</option>
          <option value="E5bW28ZUzNSHb0xE_DKUv">Component Library Starter</option>
          <option value="SYG_j4WqCyhj1LqzyWHcK">Design-to-Code Workflow</option>
          <option value="cKydvF-6yp3EFNmb_nkRl">Something else</option>
        </select>
      </div>
      <FormField v-model="formData.message" inputId="message" name="message" label="Message" type="textarea"
        :isValid="messageValid" errorMessage="Enter a brief message." required @blur="validateMessage" />
      <FormNoSpam />
      <div class="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center">
        <div><small>* indicates a required field</small></div>
        <button type="submit"
          class="submit-btn inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center">
          Send Message</button>
      </div>

    </form>
    <div class="animate-entry prose bg-neutral-50 p-6 rounded-lg" v-if="formSubmitted" role="alert">
      <h2>Message received</h2>
      <p>Thanks for reaching out. If you need to reach me urgently, you can email me at <a
          href="mailto:josh@thebrileys.com">josh@thebrileys.com</a> or call <a href="tel:8602328250">860-232-8250</a>.
      </p>
      <p>Otherwise, feel free to poke around my <NuxtLink to="/blog/">blog</NuxtLink> or have a look at some of my
        <NuxtLink to="/projects/">recent projects</NuxtLink>
      </p>
    </div>
    <div class="animate-entry prose p-6 rounded-lg border border-red-100 bg-red-50/30" v-if="formSubmitError"
      role="alert">
      <h2>Something went wrong</h2>
      <p>Your message couldn't be submitted. If this is urgent, email me at <a
          href="mailto:josh@thebrileys.com">josh@thebrileys.com</a> or try the form again later.</p>
    </div>
  </div>
</template>
