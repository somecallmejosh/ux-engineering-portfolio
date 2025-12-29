<script setup>
  import { humanize } from '~/utilities/humanize'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
})

const list = await queryCollection(props.collection)
  .all()
  .then((posts) => {
    const tags = posts.reduce((acc, post) => {
      post.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag)
        }
      })
      return acc
    }, [])
    return tags.sort((a, b) => a.localeCompare(b))
  })

const collectionMap = {
  dev_notes: 'dev-notes',
  projects: 'projects',
  experiments: 'experiments',
  blog: 'blog',
}
</script>
<template>
  <nav :aria-label="`${humanize(collection)} Tags`" class="prose">
    <h2 v-if="title" class="capitalize">
      {{title}}
    </h2>
    <ul role="list" class="flex flex-wrap gap-2 not-prose">
      <li v-for="(category) in list" :key="category">
        <NuxtLink
          prefetch-on="interaction"
          :to="`/${collectionMap[collection]}/tags/${category}/`"
          class="text-sm bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-semibold rounded-md px-1.5 py-1 text-center "
        >{{ humanize(category) }}</NuxtLink>
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
