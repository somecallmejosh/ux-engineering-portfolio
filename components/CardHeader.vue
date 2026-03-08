<script setup lang="ts">
defineProps<{
  element?: string
}>()
</script>
<template>
  <component :is="element ?? 'h2'" class="text-lg lg:text-2xl text-pretty mt-0">
    <slot />
  </component>
</template>
