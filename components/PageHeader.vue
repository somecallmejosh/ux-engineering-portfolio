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
      <h1 id="page-header" class="text-3xl lg:text-5xl text-balance capitalize" :class="publishedAt && 'mb-0'">
        <slot />
      </h1>
     <p v-if="publishedAt">Published by Josh Briley on {{ formatDate(publishedAt) }}</p>
    </div>
  </div>
</template>
