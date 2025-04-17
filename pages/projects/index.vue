<script setup>
import { motion } from 'motion-v'
const allPosts = await queryCollection('projects')
  .order('publishedAt', 'DESC')
  .all()

const allProjectCategories = await queryCollection('projects')
  .all()
  .then((posts) => {
    return posts.reduce((acc, post) => {
      post.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag)
        }
      })
      return acc
    }, [])
  })

  useSeoMeta({
  title: 'Recent Projects',
  ogTitle: 'Recent Projects',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp'
  })
  const skillIcons = [
  'html',
  'css',
  'sass',
  'styledcomponents',
  'tailwindcss-light',
  'typescript',
  'javascript-light',
  'javascript',
  'alpinejs-light',
  'htmx-light',
  'jquery',
  'vuejs-light',
  'nuxtjs-light',
  'pinia-light',
  'illustrator-light',
  'github-light',
  'react-light',
  'nextjs-light',
  'd3-light',
  'vite-light',
  'vitest-light',
  'cypress-light',
  'ruby',
  'rails',
  'figma-light',
  'illustrator',
  'github-light',
  'aws-light',
  'heroku',
  'netlify-light',
]
</script>

<template>
  <div class="space-y-12">
    <div class="prose">
      <PageHeader>What I've Been Building: Making the Web Feel Right</PageHeader>
      <p>
        For me, building web applications isn't just about writing code – <strong>it's about creating things that feel good and natural for the folks who use them</strong>. Think clear, simple, and accessible – those are my guiding stars in every decision I make.
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
              :alt="item.image_alt"
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
            <NuxtLink :to="`/projects/${item.slug}`"
            class="absolute hover:border-0 focus:outline-0 not-prose border-0 inset-0 group-hover:border-0 group-hover:outline-4 group-hover:outline-offset-6 group-hover:outline-blue-100 focus:ring-4 focus:ring-blue-100 focus:ring-offset-6 rounded-lg transition-all duration-150 ease-in-out">
            <span class=" sr-only">{{
                item.title
              }}</span>
            </NuxtLink>
          </div>
        </motion.li>
      </ul>
    </div>
  </div>
</template>
