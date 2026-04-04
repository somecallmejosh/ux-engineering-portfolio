<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
  basePath: string
}>()

function pageUrl(page: number): string {
  return page === 1 ? props.basePath : `${props.basePath}page/${page}/`
}
</script>

<template>
  <nav v-if="totalPages > 1" aria-label="Pagination" class="flex justify-center pt-8">
    <ul class="flex items-center">
      <li>
        <NuxtLink v-if="currentPage > 1" :to="pageUrl(currentPage - 1)"
          class="inline-flex items-center gap-1 rounded-md px-3 py-2 font-medium text-brand-primary hover:bg-brand-primary-bg">
          <Icon name="ph:caret-left-bold" size="0.875rem" />
          Previous
        </NuxtLink>
      </li>
      <li v-for="page in totalPages" :key="page">
        <NuxtLink :to="pageUrl(page)" :aria-current="page === currentPage ? 'page' : undefined"
          class="inline-flex items-center justify-center rounded-md px-3 py-2 font-medium min-w-10" :class="page === currentPage
            ? 'bg-brand-primary-bg text-brand-primary pointer-events-none'
            : 'text-brand-primary hover:bg-brand-primary-bg'">
          {{ page }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink v-if="currentPage < totalPages" :to="pageUrl(currentPage + 1)"
          class="inline-flex items-center gap-1 rounded-md px-3 py-2 font-medium text-brand-primary hover:bg-brand-primary-bg">
          Next
          <Icon name="ph:caret-right-bold" size="0.875rem" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
