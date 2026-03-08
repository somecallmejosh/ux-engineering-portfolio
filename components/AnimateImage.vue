<script setup lang="ts">
import { motion } from 'motion-v'

const props = defineProps({
  src: String,
  alt: String,
  yOffset: {
    type: Number,
    default: 20
  },
  scaleY: {
    type: Number,
    default: 1
  },
})
</script>

<template>
  <motion.img
    :initial="{ y: props.yOffset, scaleY: props.scaleY, opacity: 0 }"
    :whileInView="{ y: 0, scaleY: 1, opacity: 1, transition: { type: 'spring', bounce: 0.2, duration: 1 } }"
    :src="src"
    :alt="alt"
    class="w-full rounded-lg grayscale transform transform-origin-top-center"
    loading="lazy"
    height="600"
    width="400"
  />
</template>
