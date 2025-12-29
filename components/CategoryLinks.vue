<script setup>
import { humanize } from '~/utilities/humanize';
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  collection: {
    type: Array,
    required: true,
  },
})

// order collection alphabetically
props.collection.sort((a, b) => a.localeCompare(b));

</script>

<template>
  <nav :aria-label="title" class="py-2 px-4 mb-1 rounded-lg bg-blue-50/30 flex gap-4 not-prose flex-wrap">
    <h2 v-if="title" class="shrink-0 flex items-center gap-2 text-body text-sm"><Icon name="ph:tag" size="1rem" /><strong>Tags:</strong></h2>
    <ul class="flex gap-2">
      <li v-for="(link, index) in collection" :key="index">
        <NuxtLink :to="`/${tag}/tags/${link}/`"
          class="text-xs bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-medium rounded-md px-1.5 py-1 text-center ">
          {{ humanize(link) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
