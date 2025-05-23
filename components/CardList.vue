<script setup>
const { fullPath } = useRoute();
const props = defineProps({
  label: {
    type: String,
    default: 'Reading List'
  },
  list: {
    type: Array,
    required: true
  }
});

// remove everthing after parent container (the first segment of the path)
// e.g. /blog/categories/slug -> /blog/
const path = fullPath.split('/').slice(0, 2).join('/');
</script>
<template>
  <section :aria-label="label">
    <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-12">
      <li
        v-for="item in list"
        :key="item.id"
        class="space-y-4 hover:ring-2 ring-blue-200 ring-offset-4 rounded-lg"
        >
        <div class="rounded-lg relative group">
          <AnimateImage
            v-if="item.image"
            :src="item.image"
            :alt="item.meta.image_alt"
            :scaleY="0.75"
            class="mb-4"
          />
          <div class="prose">
            <CardHeader class="mb-2.5">
              {{ item.headline }}
              {{ item.title }}
            </CardHeader>
            <p class="text-pretty" v-html="item.description"></p>
          </div>
          <NuxtLink :to="`${path}/${item.slug}`" class="absolute not-prose inset-0 rounded-lg">
          <span class="sr-only">{{
              item.title
            }}</span>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>
