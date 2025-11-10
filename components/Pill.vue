<script setup>
defineProps({
  pill: {
    type: String,
    required: true
  },
  pillIcon: {
    type: String,
    required: false
  }
});
</script>
<template>
  <span class="inline-flex gap-0.5 items-center font-semibold bg-neutral-900 text-neutral-100 text-xs tracking-wider rounded-full py-0.5"
    :class="pillIcon ? 'pl-1 pr-2' : 'px-2'"
  >
    <Icon v-if="pillIcon" :name="pillIcon" size="1.2em" />
    {{ pill }}
  </span>
</template>
