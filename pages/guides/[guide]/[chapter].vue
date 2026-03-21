<script setup>
const route = useRoute()
const guide = route.params.guide
const chapter = route.params.chapter

const { data: chapterData } = await useAsyncData(`chapter-${guide}-${chapter}`, () => {
  return queryCollection('guide_chapters').path(`/guides/${guide}/${chapter}`).first()
})

const { data: guideData } = await useAsyncData(`guide-${guide}`, () => {
  return queryCollection('guides').path(`/guides/${guide}`).first()
})

const { data: chapters } = await useAsyncData(`guide-chapters-${guide}`, () => {
  return queryCollection('guide_chapters')
    .where('path', 'LIKE', `/guides/${guide}/%`)
    .order('order', 'ASC')
    .all()
})

const { data: allChapters } = await useAsyncData(`guide-chapters-${guide}`, () => {
  return queryCollection('guide_chapters')
    .where('path', 'LIKE', `/guides/${guide}/%`)
    .order('order', 'ASC')
    .all()
})

const currentIndex = computed(() =>
  allChapters.value?.findIndex(c => c.path === `/guides/${guide}/${chapter}`) ?? -1
)

const prevChapter = computed(() => {
  const i = currentIndex.value
  if (i <= 0 || !allChapters.value) return null
  const c = allChapters.value[i - 1]
  return { title: c.title, slug: c.path.split('/').at(-1) }
})

const nextChapter = computed(() => {
  const i = currentIndex.value
  if (i < 0 || !allChapters.value || i >= allChapters.value.length - 1) return null
  const c = allChapters.value[i + 1]
  return { title: c.title, slug: c.path.split('/').at(-1) }
})

useSeoMeta({
  title: chapterData.value?.title,
  ogTitle: chapterData.value?.title,
  description: chapterData.value?.description,
  ogDescription: chapterData.value?.description,
})
</script>

<template>
  <PageWrapper>
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
      <div class="lg:col-span-2 prose">
        <template v-if="chapterData">
          <Breadcrumbs :items="[
            { label: 'Guides', to: '/guides/' },
            { label: guideData?.title ?? humanize(guide), to: `/guides/${guide}/` },
            { label: chapterData.title },
          ]" />
          <PageHeaderIntro class="mb-6" :content="{
            pill: 'Guide Chapter',
            pillIcon: 'ph:book-open',
            title: chapterData.title,
            description: chapterData.description
          }" />

          <TableOfContents :links="chapterData.body.toc.links" />
          <ContentRenderer :value="chapterData" />
          <nav aria-label="Chapter navigation"
            class="not-prose flex justify-between gap-4 mt-12 pt-8 border-t border-neutral-200">
            <NuxtLink v-if="prevChapter" :to="`/guides/${guide}/${prevChapter.slug}/`"
              class="flex items-center gap-2  hover:underline">
              <Icon name="ph:arrow-left" class="size-4 shrink-0" />
              <span>{{ prevChapter.title }}</span>
            </NuxtLink>
            <span v-else />
            <NuxtLink v-if="nextChapter" :to="`/guides/${guide}/${nextChapter.slug}/`"
              class="flex items-center gap-2  hover:underline text-right ml-auto">
              <span>{{ nextChapter.title }}</span>
              <Icon name="ph:arrow-right" class="size-4 shrink-0" />
            </NuxtLink>
          </nav>
        </template>
      </div>
      <div>
        <div class="prose">
          <CardHeader class="mb-4">Chapters</CardHeader>
          <ol class="list-decimal space-y-2">
            <li v-for="c in chapters" :key="c.id">
              <NuxtLink :to="`/guides/${guide}/${c.path.split('/').at(-1)}/`">
                {{ c.title }}
              </NuxtLink>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<style scoped>
[aria-current="page"] {
  font-weight: 600;
  color: var(--color-blue-500);
}
</style>
