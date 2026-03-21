<script setup>
defineProps({
  items: { type: Array, default: () => [] },
  pageTitle: { type: String, required: true },
  pageDescription: { type: String, required: true },
  pill: { type: String, required: true },
  pillIcon: { type: String, required: true },
  tagListTitle: { type: String, default: undefined },
  tagListCollection: { type: String, default: undefined },
})
</script>

<template>
  <PageWrapper>
    <PageHero :content="{
      pill,
      pillIcon,
      title: pageTitle,
      description: pageDescription
    }" />
    <CardList v-if="items.length" :list="items" />
    <TagLinkList v-if="tagListCollection" :title="tagListTitle" :collection="tagListCollection" />
  </PageWrapper>
</template>
