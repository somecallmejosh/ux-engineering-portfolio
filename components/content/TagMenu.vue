<script setup>
const props = defineProps({
  tag: {
    type: String,
    required: true
  },
  collection: {
    type: String,
    default: 'blog'
  }
});

const allPosts = await queryCollection(props.collection).all();

const filteredPosts = computed(() => {
  return allPosts.filter((post) => post.tags.includes(props.tag));
});

const collectionMap = {
  blog: 'blog',
  dev_notes: 'dev-notes',
  projects: 'projects',
  experiments: 'experiments',
};

</script>
<template>
  <nav aria-labelledby="tag-menu-header" class="space-y-4 mt-6 bg-white border border-neutral-200 pt-5 px-4 rounded-lg">
    <div class="not-prose flex flex-col xl:flex-row xl:gap-2">
      <h2 id="tag-menu-header" class="flex-1 flex items-center gap-2 text-sm text-body">
        <Icon name="ph:folders" size="1.5em" />
        <strong>
          <slot />
        </strong>
      </h2>
      <small>{{ filteredPosts.length }} articles in this series</small>
    </div>
    <ol class="text-sm">
      <li v-for="tag in filteredPosts" :key="tag.id" class="capitalize">
        <NuxtLink :to="`/${collectionMap[props.collection]}/${tag.slug}`" class="flex items-center gap-1 no-underline hover:underline! py-1">
          {{ tag.title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
<style scoped>
[aria-current="page"] {
  font-weight: bold;
  pointer-events: none;
}
</style>
