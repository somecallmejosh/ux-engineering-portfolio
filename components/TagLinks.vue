<script setup lang="ts">
const props = defineProps<{
  title: string
  tag: string
  collection: string[]
}>()

const sorted = [...props.collection].sort((a, b) => a.localeCompare(b))
</script>

<template>
  <nav :aria-label="title" class="py-2 mb-1 flex gap-4 not-prose flex-wrap">
    <h2 v-if="title" class="shrink-0 flex items-center gap-2 text-body text-sm">
      <Icon name="ph:tag" size="1rem" /><strong>Tags:</strong>
    </h2>
    <ul class="flex gap-2">
      <li v-for="(link, index) in sorted" :key="index">
        <NuxtLink :to="`/${tag}/tags/${link}/`"
          class="text-xs bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-medium rounded-md px-1.5 py-1 text-center">
          {{ humanize(link) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
