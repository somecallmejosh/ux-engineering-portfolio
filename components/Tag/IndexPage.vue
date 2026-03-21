<script setup>
defineProps({
  breadcrumbLabel: { type: String, required: true },
  breadcrumbTo: { type: String, required: true },
  pill: { type: String, required: true },
  pillIcon: { type: String, required: true },
  pageTitle: { type: String, required: true },
  tagListTitle: { type: String, required: true },
  collection: { type: String, required: true },
})
</script>

<template>
  <PageWrapper>
    <Breadcrumbs class="mb-0" :items="[{ label: breadcrumbLabel, to: breadcrumbTo }, { label: 'Tags' }]" />
    <PageHeaderIntro :content="{
      pill,
      pillIcon,
      title: pageTitle
    }" />
    <TagLinkList :title="tagListTitle" :collection="collection" />
  </PageWrapper>
</template>
