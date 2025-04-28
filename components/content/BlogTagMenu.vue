<script setup>
const props = defineProps({
  tag: {
    type: String,
    required: true
  }
});

const allPosts = await queryCollection('blog').all();

const filteredPosts = computed(() => {
  return allPosts.filter((post) => post.tags.includes(props.tag));
});

// const allCategories = await queryCollection('blog')
//   .all()
//   .then((posts) => {
//     return posts.reduce((acc, post) => {
//       post.tags.forEach((tag) => {
//         if (!acc.includes(tag)) {
//           acc.push(tag)
//         }
//       })
//       return acc
//     }, [])
//   })
</script>
<template>
  <div class="space-y-4 border-b border-neutral-200">
    <div class="not-prose flex items-center gap-2">
      <h2 class="flex items-center gap-1 text-lg">
        <Icon name="ph:book-open-user" size="1.55em" />
        <slot />
      </h2>
      <div class="h-px flex-1 bg-neutral-200"></div>
    </div>
    <ol class="">
      <li v-for="tag in filteredPosts" :key="tag.id" class="capitalize">
        <NuxtLink :to="`/blog/${tag.slug}`" class="flex items-center gap-1 no-underline hover:underline!">
          <Icon name="ph:read-cv-logo" />
          {{ tag.title }}
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>
<style scoped>
a .iconify {
  display: none;
}
[aria-current="page"] {
  font-weight: 800;
  pointer-events: none;
  .iconify {
    display: inline-flex;
  }
}
</style>
