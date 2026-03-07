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
  base: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-700 focus:ring-blue-400',
  inverse: 'border-neutral-900 hover:bg-neutral-100 focus:ring-blue-400',
}
</script>
<template>
  <NuxtLink :to="props.to"
    class="inline-flex no-underline border items-center gap-1.5 font-medium rounded-full px-4 py-2 justify-center"
    :class="className[props.variant]">
    <slot />
    <Icon name="ph:arrow-right" size="0.9rem" />
  </NuxtLink>
</template>
