<script setup lang="ts">
const props = defineProps<{
  slug: string
  label: string
  baseUrl: string
  title: string
  category?: boolean
}>()

function finalPath(): string {
  return props.category
    ? `/${props.baseUrl}/tags/${props.slug}/`
    : `/${props.baseUrl}/${props.slug}/`
}
</script>
<template>
  <OverflowX>
    <nav aria-label="Breadcrumbs">
      <ol class="not-prose text-sm flex gap-3 relative z-0">
        <li class="flex items-center gap-3">
          <NuxtLink :to="`/${baseUrl}/`" class="hover:underline text-nowrap">{{ label }}</NuxtLink>
          <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
        </li>
        <li v-if="category" class="flex items-center gap-3">
          <NuxtLink :to="`/${baseUrl}/tags/`" class="hover:underline text-nowrap">Tags</NuxtLink>
          <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
        </li>
        <li class="text-neutral-700">
          <NuxtLink :to="finalPath()" class="text-nowrap">{{ humanize(title) }}</NuxtLink>
        </li>
      </ol>
    </nav>
  </OverflowX>
</template>
