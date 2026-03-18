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
    <Breadcrumbs :items="[{ label: breadcrumbLabel, to: breadcrumbTo }, { label: 'Tags' }]" />
    <section aria-labelledby="page-header" class="prose">
      <PageHeader :pill="pill" :pillIcon="pillIcon">{{ pageTitle }}</PageHeader>
    </section>
    <TagLinkList :title="tagListTitle" :collection="collection" />
  </PageWrapper>
</template>
