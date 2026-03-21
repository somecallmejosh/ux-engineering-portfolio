<script setup>
const formData = ref({ firstName: '', lastName: '', email: '' })
const emailValid = ref(true)

const validateEmail = () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailValid.value = !!formData.value.email.trim() && pattern.test(formData.value.email)
}

const formSubmitted = ref(false)
const formSubmitError = ref(false)

const onSubmit = async () => {
  validateEmail()

  if (!emailValid.value) {
    await nextTick()
    document.querySelector('.invalid')?.focus()
    return
  }

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: formData.value,
    })

    formSubmitted.value = true
    formSubmitError.value = false
    formData.value = { firstName: '', lastName: '', email: '' }
    emailValid.value = true

    await navigateTo('/checklist/')
  } catch (error) {
    console.error('Form submission failed:', error)
    formSubmitError.value = true
  }
}
</script>

<template>
  <div>
    <form v-show="!formSubmitted" novalidate @submit.prevent="onSubmit" class="space-y-4 p-6 bg-neutral-50 rounded-lg">
      <h2 class="mt-0">Get the free interactive checklist</h2>
      <div class="grid lg:grid-cols-2 gap-6">
        <FormField v-model="formData.firstName" inputId="firstName" name="firstName" label="First name"
          @blur="() => { }" />
        <FormField v-model="formData.lastName" inputId="lastName" name="lastName" label="Last name" @blur="() => { }" />
      </div>
      <FormField v-model="formData.email" inputId="email" name="email" label="Email" type="email" :isValid="emailValid"
        errorMessage="Enter a valid email address." required @blur="validateEmail" />
      <FormNoSpam />
      <div class="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center">
        <button type="submit"
          class="submit-btn inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center">
          Get the checklist</button>
      </div>

    </form>
    <div class="animate-entry prose bg-neutral-50 p-6 rounded-lg" v-if="formSubmitted" role="alert">
      <h2>You're on the list</h2>
      <p>Thanks for signing up. Keep an eye on your inbox.</p>
    </div>
    <div class="animate-entry prose p-6 rounded-lg border border-red-100 bg-red-50/30" v-if="formSubmitError"
      role="alert">
      <h2>Something went wrong</h2>
      <p>Your submission couldn't be processed. Please try again later.</p>
    </div>
  </div>
</template>
