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
  <OverflowX>
    <ul class="not-prose text-sm flex gap-3 relative z-0">
      <li class="flex items-center gap-3">
        <NuxtLink :to="`/${baseUrl}`" class="hover:underline text-nowrap">{{ label }}</NuxtLink>
        <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
      </li>
      <li class="text-neutral-700">
        <NuxtLink :to="`/${baseUrl}/${slug}`" class="text-nowrap">{{ title }}</NuxtLink>
      </li>
    </ul>
  </OverflowX>
</template>
