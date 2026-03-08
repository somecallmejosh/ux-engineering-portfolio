<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    width="900"
    height="600"
    class="w-full rounded-lg grayscale"
    loading="lazy"
  />
</template>
