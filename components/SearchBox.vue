<script setup lang="ts">
import { useDebounceFn, onClickOutside } from '@vueuse/core'
import { useSearch } from '@/composables/useSearch'
import {humanize} from '@/utilities/humanize'
const q = ref('')
const results = ref<any[]>([])
const { loading, search } = useSearch()
const root = ref<HTMLElement | null>(null)
const emit = defineEmits<{ (e: 'close'): void }>()
const resultsId = 'site-search-results'

const run = useDebounceFn(async () => {
  results.value = q.value ? await search(q.value, 12) : []
}, 200)

watch(q, run)

const resetSearch = () => {
  q.value = ''
  results.value = []
  emit('close')
}

onClickOutside(root, () => {
  if (q.value || results.value.length) {
    resetSearch()
  }
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    resetSearch()
    const el = document.getElementById('site-search') as HTMLInputElement | null
    el?.focus()
  }
}
</script>

<template>
  <div ref="root" class="search-box relative flex gap-4 items-center">
    <label for="site-search" class="block font-medium">
      <span class="flex flex-col items-center justify-center">
        <Icon aria-hidden="true" name="ph:magnifying-glass" size="1.5em" class="text-neutral-500 pointer-events-none" />
        <span class="text-xs">Search</span>
      </span>
    </label>
    <input
      id="site-search"
      v-model="q"
      type="search"
      :aria-expanded="!!(q && results.length)"
      :aria-controls="resultsId"
      aria-haspopup="listbox"
      class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      @keydown="onKeydown"
    />
    <div class="sr-only" role="status" aria-live="polite">
      {{ q ? (results.length ? results.length + ' results for ' + q : 'No results') : '' }}
    </div>
    <div v-if="q && results.length" :id="resultsId" role="listbox" class="not-prose absolute z-10 bg-white border border-neutral-200 rounded-md w-full max-h-80 overflow-y-auto shadow-lg p-4 top-full">
      <ul class="space-y-4 divide-y divide-neutral-200" @click="resetSearch">
        <li v-for="r in results" :key="r.id" role="option">
          <NuxtLink :to="r.route" class="flex pb-4">
            <div>
              <Pill :pill="humanize(r.collection)" :pillIcon="r.collection === 'blog' ? 'ph:article-ny-times' : r.collection === 'projects' ? 'ph:projector-screen-chart' : r.collection === 'dev_notes' ? 'ph:note-pencil' : 'ph:microscope'"></Pill>
              <div class="font-semibold">{{ r.title }}</div>
              <div class="text-sm text-neutral-600 line-clamp-2">{{ r.description }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
