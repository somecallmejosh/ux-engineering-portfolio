<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useSearch } from '@/composables/useSearch'
const route = useRoute()
const initial = (route.query.q || '') as string
const q = ref(initial)
interface SearchResult {
  id: string
  collection: 'blog' | 'projects' | 'dev_notes' | 'experiments'
  slug: string
  title: string
  description: string
  tags?: string[]
  image?: string
  image_alt?: string
  route: string
}
const results = ref<SearchResult[]>([])
const { loading, search } = useSearch()

const run = async () => {
  results.value = q.value ? await search(q.value, 30) : []
}

onMounted(run)
watch(q, run)

useSeoMeta({
  title: 'Search',
  description: 'Search blog posts, projects, experiments, and dev notes.',
})
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="search-header" class="prose">
      <PageHeader pill="Search" pillIcon="ph:magnifying-glass">Find something specific</PageHeader>
      <SearchBox />
    </section>
    <section v-if="q && results.length" class="mt-6">
      <CardListItem :data="results.map(r => ({
        ...r,
        headline: r.collection === 'blog' ? 'Blog' : r.collection === 'projects' ? 'Project' : r.collection === 'dev_notes' ? 'Dev Note' : 'Experiment',
        to: r.route,
      }))" />
    </section>
  </PageWrapper>

</template>
