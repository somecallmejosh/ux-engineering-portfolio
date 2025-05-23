<script setup>
  import { humanize } from '~/utilities/humanize'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  collection: {
    type: Array,
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
  <nav aria-labelledby="categories" class="prose">
    <h2 id="categories" class="capitalize">{{title}}</h2>
    <ul role="list" class="flex flex-wrap gap-4 not-prose">
      <li v-for="(category) in list" :key="category">
        <NuxtLink
          :to="`/${collectionMap[collection]}/categories/${category}`"
          class="text-sm bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-medium rounded-md px-3 py-1.5 text-center "
        >{{ humanize(category) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
a[aria-current] {
  background-color: var(--color-neutral-50);
  color: var(--color-neutral-500);
  pointer-events: none;
}
</style>
