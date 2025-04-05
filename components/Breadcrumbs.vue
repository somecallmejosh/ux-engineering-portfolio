<script setup>
  const props = defineProps({
    slug: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    baseUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <div class="relative">
    <div class="overflow-x-auto max-w-full relative">
      <ul class="not-prose text-sm flex gap-3 relative z-0">
        <li class="flex items-center gap-3">
          <NuxtLink :to="`/${baseUrl}`" class="hover:underline">{{ label }}</NuxtLink>
          <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
        </li>
        <li class="text-neutral-700">
          <NuxtLink :to="`/${baseUrl}/${slug}`" class="text-nowrap">{{ title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="absolute z-10 inset-0 bg-gradient-to-r from-transparent from-90% to-white pointer-events-none" />
  </div>
</template>
