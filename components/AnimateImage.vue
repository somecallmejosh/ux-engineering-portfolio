<script setup lang="ts">
const props = defineProps<{
  src?: string
  alt?: string
  yOffset?: number
  scaleY?: number
}>()

const yOffset = props.yOffset ?? 20
const scaleY = props.scaleY ?? 1
</script>

<template>
  <motion.div
    :initial="{ y: yOffset, scaleY: scaleY, opacity: 0 }"
    :whileInView="{ y: 0, scaleY: 1, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 1 } }"
    class="transform transform-origin-top-center"
  >
    <NuxtImage
      :src="src"
      :alt="alt"
      class="w-full rounded-lg grayscale"
      loading="lazy"
      height="600"
      width="400"
    />
  </motion.div>
</template>
