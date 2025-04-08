<script setup>
import { motion } from 'motion-v'
import { onClickOutside } from '@vueuse/core'
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
const target = useTemplateRef('target')
const toolTipVisible = ref(false)
const visibilityToggle = () => {
  toolTipVisible.value = !toolTipVisible.value
}
onClickOutside(target, event => toolTipVisible.value = false)
</script>
<template>
  <div ref="target" @mouseenter="toolTipVisible = true" @mouseleave="toolTipVisible = false" @click="visibilityToggle" class="tooltip group">
    <div :aria-describedby="`tooltip-${id}`">
      <slot></slot>
    </div>
    <AnimatePresence :initial="false">
      <motion.div
        v-if="toolTipVisible"
        aria-live="assertive"
        :initial="{ opacity: 0, scaleY: 0.9, y: 3, x: '-50%' }"
        :animate="{ opacity: 1, scaleY: 1, y: 0, x: '-50%' }"
        :exit="{ opacity: 0, scaleY: 0.9, y: 3, x: '-50%' }"
        :transition="{
          duration: 0.2,
          ease: 'easeInOut',
        }"
        :id="`tooltip-${id}`" role="tooltip" class="tooltip-text bg-black/80 text-xs capitalize text-nowrap p-1 rounded-sm">
        {{ text }}
      </motion.div>
    </AnimatePresence>
  </div>
</template>
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.tooltip-text {
  color: #fff;
  text-align: center;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the text */
  left: 50%;
  transform: translateX(-50%);
}
</style>
