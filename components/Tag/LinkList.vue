<!--
  TagLinkList — Fetches all unique tags from a content collection and renders them as links.

  Props:
    title      (string, optional) — Optional heading displayed above the tag list.
    collection (string, required) — Content collection name (e.g. 'blog', 'dev_notes').

  Note: distinct from TagLinks.vue, which receives tags as a prop rather than fetching them.
-->
<script setup lang="ts">
const props = defineProps<{
  title?: string
  collection: string
}>()

const list = await queryCollection(props.collection)
  .all()
  .then((posts) => {
    const tags = posts.reduce((acc: string[], post) => {
      post.tags?.forEach((tag: string) => {
        if (!acc.includes(tag)) acc.push(tag)
      })
      return acc
    }, [])
    return tags.sort((a, b) => a.localeCompare(b))
  })
</script>
<template>
  <nav :aria-label="`${humanize(collection)} Tags`" class="prose">
    <h2 v-if="title">
      {{ title }}
    </h2>
    <ul role="list" class="flex flex-wrap gap-2 not-prose">
      <li v-for="(category) in list" :key="category">
        <NuxtLink prefetch-on="interaction" :to="`/${collectionPath(collection)}/tags/${category}/`"
          class=" bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 rounded-md px-1.5 py-1 text-center">
          {{ humanize(category) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
a[aria-current] {
  background-color: var(--color-neutral-950);
  color: var(--color-neutral-50);
  pointer-events: none;
}
</style>
