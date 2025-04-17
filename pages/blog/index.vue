<script setup>
import { motion } from 'motion-v'
const allPosts = await queryCollection('blog')
  .order('publishedAt', 'DESC')
  .all()


useSeoMeta({
  title: 'Blog',
  ogTitle: 'Blog',
  description: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges—like maintaining design systems, streamlining workflows, and building accessible interfaces—and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogDescription: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges—like maintaining design systems, streamlining workflows, and building accessible interfaces—and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp'
})

const allBlogCategories = await queryCollection('blog')
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
</script>

<template>
  <div class="space-y-12">
    <div class="prose">
      <PageHeader pill="Blog">Brain Dump - My Digital Notebook</PageHeader>
      <p>
        Welcome to my brain dump! This is where I stash ideas on making web stuff user-friendly and technically awesome (UX Engineering!). Mostly for my goldfish brain, but feel free to grab any nuggets of wisdom that help you build cooler things. Consider it open-source brain food!
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

          <div class="prose rounded-lg relative group">
            <AnimateImage
              :src="item.image"
              :alt="item.image_alt"
              :scaleY="0.75"
              class="mb-4"
            />
            <CardHeader class="mb-0 mt-0">{{ item.title }}</CardHeader>

            <small>Published {{ useDateFormat(item.publishedAt, 'MMM Do, YYYY', { locales: 'en-US' }) }}</small>
            <p class="mt-1.5" v-html="item.description"></p>
            <NuxtLink :to="`/blog/${item.slug}`"
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
