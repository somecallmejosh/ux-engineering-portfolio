<script setup lang="ts">
defineProps<{
  pill: string
  pillIcon?: string
}>()
</script>
<template>
  <span
    class="inline-flex gap-1 items-center font-semibold bg-neutral-100 text-neutral-900 text-sm tracking-wide rounded-full py-0.5"
    :class="pillIcon ? 'pl-1.5 pr-2.5' : 'px-2'">
    <Icon v-if="pillIcon" :name="pillIcon" size="1.15rem" />
    {{ pill }}
  </span>
</template>
