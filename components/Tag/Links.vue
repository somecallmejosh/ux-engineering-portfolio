<!--
  TagLinks — Renders a nav of tag links for a given collection of tag strings.

  Props:
    title      (string,   required) — Accessible nav label and visible heading.
    tag        (string,   required) — URL segment used to build tag routes (e.g. 'blog').
    collection (string[], required) — Array of raw tag strings to render as links.

  Note: distinct from TagLinkList.vue, which fetches its own tags from a content collection.
-->
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
    <h2 v-if="title" class="shrink-0 flex items-center gap-2 text-body ">
      <Icon name="ph:tag" size="1rem" /><strong>Tags:</strong>
    </h2>
    <ul class="flex flex-wrap gap-2">
      <li v-for="(link, index) in sorted" :key="index">
        <NuxtLink :to="`/${tag}/tags/${link}/`"
          class=" bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-medium rounded-md px-1.5 py-1 text-center">
          {{ humanize(link) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
