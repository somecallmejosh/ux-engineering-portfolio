<script setup>
const allPosts = await queryCollection('blog')
  .order('publishedAt', 'DESC')
  .all()


useSeoMeta({
  title: 'Blog',
  description: 'Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges—like maintaining design systems, streamlining workflows, and building accessible interfaces—and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.',
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
      <h1 id="page-title">Blog Posts</h1>
      <p>
        Welcome to my blog, where <em>I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products</em>. I focus on real-world challenges—like maintaining design systems, streamlining workflows, and building accessible interfaces—and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line.
      </p>
    </div>
    <div v-if="allPosts" class="md:-mx-6">
      <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-0.5 md:divide-x divide-gray-100">
        <li
          v-for="(item, index) in allPosts"
          :key="item.id"
          class="space-y-4 md:p-6 md:nth-[n+3]:border-t lg:nth-[3]:border-t-0 lg:nth-[n+4]:border-t border-gray-100 relative"
          >
          <div class="prose">
            <h2 class="text-balance mb-2">{{ item.title }}</h2>
            <small>Published {{ useDateFormat(item.publishedAt, 'MMM Do, YYYY', { locales: 'en-US' }) }}</small>
            <p v-html="item.description"></p>
            <NuxtLink :to="`/blog/${item.slug}`"
              class="absolute inset-0 rounded-lg outline-0 focus:ring-2 group"><span class=" sr-only">{{
                item.title
              }}</span>
              <Icon class="absolute top-8 left-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150" name="ph:link-bold" />
              <Icon class="absolute top-8 left-1 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-150" name="ph:link-break-bold" />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
