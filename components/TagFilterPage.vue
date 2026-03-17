<script setup>
defineProps({
  allPosts: { type: Array, required: true },
  slug: { type: String, required: true },
  postCount: { type: Number, required: true },
  articleLabel: { type: String, required: true },
  collection: { type: String, required: true },
  breadcrumbLabel: { type: String, required: true },
  breadcrumbTo: { type: String, required: true },
  breadcrumbTagsTo: { type: String, required: true },
  pill: { type: String, required: true },
  pillIcon: { type: String, required: true },
})
</script>

<template>
  <PageWrapper>
    <template v-if="allPosts">
      <Breadcrumbs :items="[
        { label: breadcrumbLabel, to: breadcrumbTo },
        { label: 'Tags', to: breadcrumbTagsTo },
        { label: humanize(slug) }
      ]" />
      <section aria-labelledby="page-header" class="prose">
        <PageHeader :pill="pill" :pillIcon="pillIcon">{{ postCount }} {{ humanize(slug) }} {{ articleLabel }}</PageHeader>
      </section>
      <TagLinkList :collection="collection" />
      <CardList :list="allPosts" />
    </template>
  </PageWrapper>
</template>
