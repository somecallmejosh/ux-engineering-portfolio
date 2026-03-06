<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: false,
    default: 'base',
  },
})

const className = {
  base: 'inline-flex no-underline items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400',
  inverse: 'inline-flex no-underline items-center gap-1.5 border border-neutral-900 font-medium rounded-full px-4 py-2 hover:bg-neutral-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400',
}
</script>
<template>
  <NuxtLink :to="props.to" :class="className[props.variant]">
    <slot />
    <Icon name="ph:arrow-right" size="0.9rem" />
  </NuxtLink>
</template>
