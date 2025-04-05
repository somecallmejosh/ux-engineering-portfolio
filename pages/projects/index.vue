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
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  })

</script>

<template>

  <div class="space-y-12">
    <div class="prose">
      <h1 class="text-5xl text-balance">Projects</h1>
      <p>
        I strive to create web applications that feel natural for the people who use them, with <em>clarity, simplicity, and accessibility guiding every decision.</em> Below, you’ll find examples of how I blend design insights and hands-on development to deliver inclusive digital experiences.
      </p>
      <Skills />
    </div>

    <div v-if="allPosts" class="md:-mx-6">
      <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-0.5 md:divide-x divide-gray-100">
        <li
          v-for="(item, index) in allPosts"
          :key="item.id"
          class="space-y-4 md:p-6 md:nth-[n+3]:border-t lg:nth-[3]:border-t-0 lg:nth-[n+4]:border-t border-gray-100 relative"
          >
          <div class="prose">
            <h2 class="text-balance">
              {{ item.title }}
            </h2>
            <p v-html="item.description"></p>
            <NuxtLink :to="`/projects/${item.slug}`"
              class="absolute inset-0 rounded-lg outline-0 focus:ring-2 group"><span class=" sr-only">{{
                item.title
              }}</span>
              <Icon class="absolute top-2 -left-5 lg:top-8 lg:left-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150" name="ph:link-bold" />
              <Icon class="absolute top-2 -left-5 lg:top-8 lg:left-1 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-150" name="ph:link-break-bold" />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
