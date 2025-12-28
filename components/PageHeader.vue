<script setup>
import {formatDate} from '~/utilities/formatDate.js'
const props = defineProps({
  pill: {
    type: String,
    required: false
  },
  pillIcon: {
    type: String,
    required: false
  },
  publishedAt: {
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
      <h1 id="page-header" class="text-3xl lg:text-5xl text-balance capitalize" :class="publishedAt && 'mb-2.5'">
        <slot />
      </h1>
      <p v-if="publishedAt" class="flex items-center gap-1 text-balance not-prose leading-tight">
        <span class="hidden lg:inline-flex lg:shrink-0">
          <Icon name="ph:calendar-dots" size="1.2em" />
        </span>
        Published by Josh Briley on {{ formatDate(publishedAt) }}
      </p>
    </div>
  </div>
</template>
