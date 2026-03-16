<script setup>
const route = useRoute()
const guide = route.params.guide

const { data: guideData } = await useAsyncData(`guide-${guide}`, () => {
  return queryCollection('guides').path(`/guides/${guide}`).first()
})

const { data: chapters } = await useAsyncData(`guide-chapters-${guide}`, () => {
  return queryCollection('guide_chapters')
    .where('path', 'LIKE', `/guides/${guide}/%`)
    .order('order', 'ASC')
    .all()
})

const chapterCards = computed(() => chapters.value?.map(c => {
  const stem = c.path.split('/').at(-1)
  return {
    ...c,
    slug: stem,
    to: `/guides/${guide}/${stem}/`,
  }
}))

useSeoMeta({
  title: guideData.value?.title,
  ogTitle: guideData.value?.title,
  description: guideData.value?.description,
  ogDescription: guideData.value?.description,
})
</script>

<template>
  <PageWrapper>
    <div v-if="guideData" class="prose">
      <Breadcrumbs :items="[{ label: 'Guides', to: '/guides/' }, { label: guideData.title }]" />
      <PageHeader pill="Guide" pillIcon="ph:map-trifold" :publishedAt="guideData.publishedAt">
        {{ guideData.title }}
      </PageHeader>
      <p class="text-pretty mb-12">{{ guideData.description }}</p>
    </div>
    <nav aria-label="Guide chapters">
      <ol class="not-prose space-y-4">
        <li v-for="chapter in chapterCards" :key="chapter.id" class="chapter-card relative group">
          <div
            class="flex items-center gap-5 p-5 border border-neutral-200 rounded-lg group-hover:outline-4 group-hover:outline-offset-2 group-hover:outline-blue-100 transition-all duration-150 ease-in-out">
            <span aria-hidden="true" class="shrink-0 font-serif text-5xl leading-none text-neutral-500 w-10 text-right">
              {{ chapter.order === 0 ? 'i' : chapter.order }}
            </span>
            <div class="flex-1 min-w-0">
              <CardHeader class="mb-1">{{ chapter.title }}</CardHeader>
              <p class="m-0 text-neutral-600 text-pretty text-base">{{ chapter.description }}</p>
            </div>
            <Icon name="ph:caret-right" size="1.25em" aria-hidden="true"
              class="shrink-0 text-neutral-400 group-hover:text-blue-500 transition-colors duration-150 ease-in-out" />
          </div>
          <NuxtLink :to="chapter.to"
            class="absolute inset-0 rounded-lg not-prose border-0 focus:outline-0 focus:ring-4 focus:ring-blue-100 focus:ring-offset-2">
            <span class="sr-only">{{ chapter.title }}</span>
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </PageWrapper>
</template>
<style scoped>
.chapter-card:active {
  transform: translateY(2px);
}
</style>
