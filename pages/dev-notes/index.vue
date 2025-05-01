<script setup>
const allPosts = await queryCollection('dev_notes')
  .order('publishedAt', 'DESC')
  .all()

  useSeoMeta({
  title: 'Dev Notes',
  ogTitle: 'Dev Notes',
  description: 'A Place for me to jot down my thoughts, experiments, and learnings in web development.',
  ogDescription: 'A Place for me to jot down my thoughts, experiments, and learnings in web development.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
  })
</script>

<template>
  <PageWrapper>
    <div class="prose">
      <PageHeader pill="Dev Notes">Notes to Future Me</PageHeader>
      <p>
        This section of the site is mostly for me&mdash;just a running log of things I've figured out (or halfway figured out) while building stuff. No promises of best practices, just real-world notes I wanted to remember. If it helps you too, great!
      </p>
    </div>

    <div v-if="allPosts">
      <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-24 md:gap-12">
        <motion.li
          v-for="(item, index) in allPosts"
          :key="item.id"
          class="space-y-4"
          :whilePress="{ y: 4 }"
          >
          <div class="rounded-lg relative group">
            <div class="prose">
              <CardHeader class="mb-2.5">
                {{ item.title }}
              </CardHeader>
              <p v-html="item.description"></p>
            </div>
            <NuxtLink :to="`/dev-notes/${item.slug}`"
            class="absolute hover:border-0 focus:outline-0 not-prose border-0 inset-0 group-hover:border-0 group-hover:outline-4 group-hover:outline-offset-6 group-hover:outline-blue-100 focus:ring-4 focus:ring-blue-100 focus:ring-offset-6 rounded-lg transition-all duration-150 ease-in-out">
            <span class=" sr-only">{{
                item.title
              }}</span>
            </NuxtLink>
          </div>
        </motion.li>
      </ul>
    </div>
  </PageWrapper>
</template>
