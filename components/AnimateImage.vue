<script setup lang="tsx">
import { motion } from 'motion-v'
import { defineComponent } from 'vue'
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
const Image = defineComponent({
  props: {
    src: String,
    alt: String,
  },
  setup(props) {
    return () => (
      <motion.img
        initial="offscreen"
        whileInView="onscreen"
        src={props.src}
        alt={props.alt}
        class="w-full rounded-lg grayscale mb-4 lg:mb-0 transform transform-origin-bottom-center"
        loading="lazy"
        variants={imgVariants}
        animate={imgInView}
      />
    )
  }
})

const imgInView = {
  y: 0,
  opacity: 1,
  scaleY: 1,
}

const imgVariants = {
  offscreen: {
    y: props.yOffset,
    scaleY: props.scaleY,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1
    }
  }
}
</script>

<template>
  <Image
    :src="src"
    :alt="alt"
  />
</template>
