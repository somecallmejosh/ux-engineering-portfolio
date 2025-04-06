<script setup>
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
      <h1 class="text-5xl text-balance">Projects</h1>
      <p>
        I strive to create web applications that feel natural for the people who use them, with <em>clarity, simplicity, and accessibility guiding every decision.</em> Below, you’ll find examples of how I blend design insights and hands-on development to deliver inclusive digital experiences.
      </p>
    </div>

    <div v-if="allPosts" class="md:-mx-6">
      <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-0.5 md:divide-x divide-gray-100">
        <li
          v-for="(item, index) in allPosts"
          :key="item.id"
          class="space-y-4 md:p-6 md:nth-[n+3]:border-t lg:nth-[3]:border-t-0 lg:nth-[n+4]:border-t border-gray-100"
          >
          <div class="rounded-lg relative group">
            <div class="aspect-[16/9] border border-neutral-100 rounded-lg overflow-hidden mb-4">
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.image_alt"
                height="600" width="400"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div class="prose">
              <h2 class="text-balance">
                {{ item.title }}
              </h2>
              <p v-html="item.description"></p>
            </div>
            <NuxtLink :to="`/projects/${item.slug}`"
            class="absolute hover:border-0 focus:outline-0 not-prose border-0 inset-0 group-hover:border-0 group-hover:outline-4 group-hover:outline-offset-6 group-hover:outline-blue-100 focus:ring-4 focus:ring-blue-100 focus:ring-offset-6 rounded-lg transition-all duration-150 ease-in-out">
            <span class=" sr-only">{{
                item.title
              }}</span>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
