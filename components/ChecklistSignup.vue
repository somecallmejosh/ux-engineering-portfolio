<script setup>
const email = ref('')
const emailValid = ref(true)
const loading = ref(false)
const submitError = ref(false)

const validateEmail = () => {
  emailValid.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
}

const onSubmit = async () => {
  validateEmail()
  if (!emailValid.value) return

  loading.value = true
  submitError.value = false

  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: email.value },
    })
    await navigateTo('/checklist/')
  } catch {
    submitError.value = true
    loading.value = false
  }
}
</script>

<template>
  <div class="border border-neutral-200 rounded-lg p-6 prose">
    <form novalidate class="space-y-3 prose" @submit.prevent="onSubmit">
      <h2>Get the free checklist</h2>
      <div class="flex flex-col gap-3">
        <div class="flex-1 space-y-2">
          <label for="checklist-email" class="inline-block">Email address</label>
          <input id="checklist-email" v-model="email" type="email" name="email" placeholder="you@company.com"
            autocomplete="email" :aria-invalid="emailValid === false || undefined"
            aria-describedby="checklist-email-error"
            class="w-full px-4 py-2.5 border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            :class="{ 'border-red-600': emailValid === false }" @blur="validateEmail" />
          <small v-if="emailValid === false" id="checklist-email-error" role="alert" class="block text-red-600">Enter a
            valid
            email address</small>
        </div>
        <div>
          <button type="submit" :disabled="loading"
            class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-neutral-50  rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <Icon v-if="loading" name="ph:spinner" class="animate-spin" size="1rem" aria-hidden="true" />
            <Icon v-else name="ph:file-pdf" size="1rem" aria-hidden="true" />
            {{ loading ? 'Sending…' : 'Get the free checklist' }}
          </button>
        </div>
      </div>
      <small v-if="submitError" role="alert" class="block text-red-600">Something went wrong. Please try again or
        <NuxtLink to="/contact/" class="underline">get in touch directly</NuxtLink>.
      </small>
    </form>
  </div>
</template>
