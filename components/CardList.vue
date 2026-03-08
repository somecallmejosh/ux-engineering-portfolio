<script setup lang="ts">
interface CardItem {
  id: string
  title: string
  description: string
  slug: string
  image?: string
  meta?: { image_alt: string }
  headline?: string
  to?: string
}

const { fullPath } = useRoute()
const props = defineProps<{
  list: CardItem[]
  label?: string
}>()

const basePath = fullPath.split('/').slice(0, 2).join('/')

function itemUrl(item: CardItem): string {
  return item.to ?? `${basePath}/${item.slug}/`
}
</script>
<template>
  <section :aria-label="label ?? 'Reading List'">
    <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-12">
      <CardListItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        :to="itemUrl(item)"
      />
    </ul>
  </section>
</template>
