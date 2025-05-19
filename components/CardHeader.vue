<script setup>
const props = defineProps({
  element: {
    type: String,
    default: 'h2',
  }
})
</script>
<template>
<component :is="element" class="text-lg lg:text-2xl text-pretty capitalize mt-0">
  <slot />
</component>
</template>
