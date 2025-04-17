  <script setup>
  const route = useRoute();
  const tag = route.params.tag;

  const allPosts = await queryCollection('blog').all();

  const filteredPosts = computed(() => {
    return allPosts.filter((post) => post.tags.includes(tag));
  });

  const allCategories = await queryCollection('blog')
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
      <ul class="not-prose text-sm flex gap-3">
        <li class="flex items-center gap-3">
          <NuxtLink to="/projects" class="hover:underline">Blog</NuxtLink>
          <Icon class="size-3 opacity-30" name="ph:caret-right-fill" />
        </li>
        <li class="text-neutral-700 capitalize">
          <NuxtLink :to="`/projects/tags/${tag}`">{{ tag }}</NuxtLink>
        </li>
      </ul>
      <div class="prose">
        <PageHeader>{{ tag }} Articles</PageHeader>
      </div>
      <div class="grid grid-cols-2 gap-12">
        <ul class="not-prose text-sm space-y-6">
          <li v-for="post in filteredPosts" :key="post.id"
            class="space-y-1 relative group hover:bg-neutral-50 -mx-2 p-2 transition-colors duration-150 rounded-lg ">
            <h2 class="font-semibold text-lg group-hover:underline capitalize">
              {{ post.title }}
            </h2>
            <small class="flex items-center gap-1 text-neutral-600 font-medium text-xs">
              <Icon name="ph:calendar-dots" /> <span class="sr-only">Publish on</span> {{ post.publishedAt }}
            </small>
            <p class="m-0 p-0 text-base">{{ post.description }}</p>
            <NuxtLink :to="`/blog/${post.slug}`"
              class="absolute inset-0 rounded-lg outline-0 focus:ring-2 focus:ring-offset-2"><span class=" sr-only">{{
                post.title
              }}</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="space-y-8 sticky top-12">
          <div class="prose">
            <h2>All Categories</h2>
          </div>
          <tag-links path="/blog/tags/" :tags="allCategories" />
        </div>
      </div>
    </div>
  </template>
