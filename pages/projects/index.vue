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
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHeader pill="Projects">What I've Been Building: Making the Web Feel Right</PageHeader>
      <p>
        For me, building web applications isn't just about writing code, it's about creating things that feel good and natural for the folks who use them. Think clear, simple, and accessible. Those are my guiding stars in every decision I make.
      </p>
    </section>
    <CardList v-if="allPosts" :list="allPosts" />
  </PageWrapper>
</template>
