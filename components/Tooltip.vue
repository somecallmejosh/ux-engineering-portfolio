<!--
  Tooltip — Accessible tooltip component.

  Props:
    text (string, required) — The tooltip content shown on hover/focus.
    id   (string, required) — Unique identifier; used to link aria-describedby.

  Usage:
    <Tooltip id="html-icon" text="HTML">
      <Icon name="skill-icons:html" size="1.25em" aria-hidden="true" />
    </Tooltip>
-->
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
  <div ref="target" @mouseenter="toolTipVisible = true" @mouseleave="toolTipVisible = false" class="tooltip group">
    <button type="button" :aria-describedby="`tooltip-${id}`" @click="visibilityToggle" @focus="toolTipVisible = true"
      @blur="toolTipVisible = false" class="cursor-pointer">
      <slot></slot>
    </button>
    <div :id="`tooltip-${id}`" role="tooltip"
      class="tooltip-text text-neutral-50 bg-black/80  capitalize text-nowrap p-1 rounded-sm"
      :class="{ 'is-visible': toolTipVisible }">
      {{ text }}
    </div>
  </div>
</template>
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-text {
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
