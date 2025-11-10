<script setup>
const props = defineProps({
  pill: {
    type: String,
    required: false
  },
  pillIcon: {
    type: String,
    required: false
  }
})
</script>
<template>
  <div class="space-y-6">
    <template v-if="pill">
      <Pill :pill="pill" :pillIcon="pillIcon" />
    </template>
    <div class="prose">
      <h1 id="page-header" class="text-3xl lg:text-5xl text-balance capitalize">
        <slot />
      </h1>
    </div>
  </div>
</template>
