<script setup lang="ts">
import type { ScorecardMeta } from '~/composables/useScorecard'

const props = defineProps<{ scorecardMeta: ScorecardMeta }>()

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
      body: { ...formData.value, ...props.scorecardMeta, design_system_request_url: window.location.href },
    })

    formSubmitted.value = true
    formSubmitError.value = false
    formData.value = { firstName: '', lastName: '', email: '' }
    emailValid.value = true
  } catch (error) {
    console.error('Form submission failed:', error)
    formSubmitError.value = true
  }
}
</script>

<template>
  <div>
    <form v-show="!formSubmitted" novalidate @submit.prevent="onSubmit" class="space-y-4 p-6 bg-neutral-50 rounded-lg">
      <h2 class="mt-0">Want a deeper breakdown of your results?</h2>
      <p>Get a short follow-up with:</p>

      <ul>
        <li>What your score actually means</li>
        <li>Where teams like yours usually struggle</li>
        <li>What to fix first (and what to ignore)</li>
      </ul>
      <FormField v-model="formData.email" inputId="email" name="email" label="Email" type="email" :isValid="emailValid"
        errorMessage="Enter a valid email address." required @blur="validateEmail" />
      <div>
        <FormNoSpam />
      </div>
      <div class="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center">
        <button type="submit"
          class="submit-btn inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center">
          Send me my results
        </button>
      </div>

    </form>
    <div class="animate-entry prose bg-neutral-50 p-6 rounded-lg" v-if="formSubmitted" role="alert">
      <h3>You made it, and I'm grateful.</h3>
      <p>That was a lot of questions, and you stuck with it. Thank you for taking the time, and for trusting me with
        your information. I'll be in touch soon with something worth reading.</p>
    </div>
    <div class="animate-entry prose p-6 rounded-lg border border-red-100 bg-red-50/30" v-if="formSubmitError"
      role="alert">
      <h2>Something went wrong</h2>
      <p>Your submission couldn't be processed. Try again later.</p>
    </div>
  </div>
</template>
