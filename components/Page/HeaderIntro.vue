<script setup>
import { title } from 'process';

const props = defineProps({
  content: {
    pill: { type: String, default: undefined },
    pillIcon: { type: String, default: undefined },
    publishedAt: { type: String, default: undefined },
    title: { type: String, default: undefined },
    description: { type: String, default: undefined },
  }
})
</script>
<template>
  <div class="prose pt-6">
    <Pill v-if="content.pill" :pill="content.pill" :pillIcon="content.pillIcon" class="mb-6" />
    <h1 class="text-3xl lg:text-5xl text-balance mb-0">{{ content.title }}</h1>
    <p class="text-pretty" v-if="content.description">{{ content.description }}</p>
    <slot />
  </div>
</template>
