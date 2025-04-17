<script setup>
const props = defineProps({
  pill: {
    type: String,
    required: false
  },
})
</script>
<template>
  <div class="space-y-6">
    <template v-if="pill">
      <span class="inline-flex font-semibold bg-neutral-900 text-neutral-100 text-xs tracking-wider rounded-full px-2 py-0.5">
        {{  pill }}
      </span>
    </template>
    <h1 class="text-3xl lg:text-5xl text-balance capitalize">
      <slot />
    </h1>
  </div>
</template>
