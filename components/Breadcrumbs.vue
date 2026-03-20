<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <OverflowX>
    <nav aria-label="Breadcrumbs">
      <ol class="not-prose  flex gap-3 relative z-0">
        <li v-for="(item, i) in items" :key="i" class="flex items-center gap-3">
          <NuxtLink v-if="item.to" :to="item.to" class="hover:underline text-nowrap">{{ item.label }}</NuxtLink>
          <span v-else class="text-nowrap">{{ item.label }}</span>
          <Icon v-if="i < items.length - 1" class="size-3 opacity-30" name="ph:caret-right-fill" aria-hidden="true" />
        </li>
      </ol>
    </nav>
  </OverflowX>
</template>
