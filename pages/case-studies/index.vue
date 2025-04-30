<script setup>
const allPosts = await queryCollection('case_studies')
  .order('publishedAt', 'DESC')
  .all()

  useSeoMeta({
  title: 'Case Studies',
  ogTitle: 'Case Studies',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
  })
</script>

<template>
  <PageWrapper>
    <div class="prose">
      <PageHeader pill="Case Studies">Behind the Build</PageHeader>
      <p>
        These aren't production projects, but rather <i>personal experiments and case studies that showcase my skills</i> in creating user-friendly, accessible, and scalable web applications.
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
            <AnimateImage
              :src="item.image"
              :alt="item.meta.image_alt"
              :scaleY="0.75"
              class="mb-4"
            />
            <div class="prose">
              <CardHeader class="mb-2.5">
                {{ item.headline }}
                {{ item.title }}
              </CardHeader>
              <p v-html="item.description"></p>
            </div>
            <NuxtLink :to="`/case-studies/${item.slug}`"
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
