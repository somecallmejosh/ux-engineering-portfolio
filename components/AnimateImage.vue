<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    class="w-full rounded-lg grayscale"
    loading="lazy"
    height="600"
    width="400"
  />
</template>
