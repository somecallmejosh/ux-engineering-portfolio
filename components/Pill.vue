<script setup lang="ts">
defineProps<{
  pill: string
  pillIcon?: string
}>()
</script>
<template>
  <span class="inline-flex gap-1 items-center text-sm bg-neutral-100 font-semibold rounded-full py-0.5"
    :class="pillIcon ? 'pl-1.5 pr-2.5' : 'px-2'">
    <Icon v-if="pillIcon" :name="pillIcon" size="1.15rem" />
    {{ pill }}
  </span>
</template>
