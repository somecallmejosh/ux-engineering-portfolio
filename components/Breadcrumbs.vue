<script setup>
  import { humanize } from '~/utilities/humanize'
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
    category: {
      type: Boolean,
      default: false,
    },
  })

  const finalPath = () => {
    if (props.category) {
      return `/${props.baseUrl}/categories/${props.slug}`
    } else {
      return `/${props.baseUrl}/${props.slug}`
    }
  }
</script>
<template>
  <OverflowX>
    <nav aria-label="Breadcrumbs">
      <ol class="not-prose text-sm flex gap-3 relative z-0">
        <li class="flex items-center gap-3">
          <NuxtLink :to="`/${baseUrl}`" class="hover:underline text-nowrap">{{ label }}</NuxtLink>
          <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
        </li>
        <li v-if="category" class="flex items-center gap-3">
          <NuxtLink :to="`/${baseUrl}/categories`" class="hover:underline text-nowrap">Categories</NuxtLink>
          <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
        </li>
        <li class="text-neutral-700">
          <NuxtLink :to="finalPath" class="text-nowrap cap">{{ humanize(title) }}</NuxtLink>
        </li>
      </ol>
    </nav>
  </OverflowX>
</template>
