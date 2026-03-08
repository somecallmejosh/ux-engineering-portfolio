<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

defineProps<{
  text: string
  id: string
}>()

const target = useTemplateRef('target')
const toolTipVisible = ref(false)
const visibilityToggle = () => {
  toolTipVisible.value = !toolTipVisible.value
}
onClickOutside(target, () => { toolTipVisible.value = false })
</script>
<template>
  <div ref="target" @mouseenter="toolTipVisible = true" @mouseleave="toolTipVisible = false" @click="visibilityToggle" class="tooltip group">
    <span :aria-label="text">
      <slot></slot>
    </span>
    <div
      aria-hidden="true"
      :id="`tooltip-${id}`"
      role="tooltip"
      class="tooltip-text bg-black/80 text-xs capitalize text-nowrap p-1 rounded-sm"
      :class="{ 'is-visible': toolTipVisible }"
    >
      {{ text }}
    </div>
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
  bottom: 125%;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%) scaleY(0.9) translateY(3px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}
.tooltip-text.is-visible {
  opacity: 1;
  transform: translateX(-50%) scaleY(1) translateY(0);
  pointer-events: auto;
}
</style>
