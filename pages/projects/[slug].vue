<script setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`projects-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})

useSeoMeta({
  title: post.value?.title,
  ogTitle: post.value?.title,
  description: post.value?.description,
  ogDescription: post.value?.description,
  ogImage: post.value?.image,
})

const skillIcons = [
  {
    name: 'skill-icons:html',
  },
  {
    name: 'skill-icons:css',
  },
  {
    name: 'skill-icons:sass',
  },
  {
    name: 'skill-icons:styledcomponents'
  },
  {
    name: 'skill-icons:tailwindcss-light',
  },
  {
    name: 'skill-icons:typescript',
  },
  {
    name: 'skill-icons:javascript-light',
  },
  {
    name: 'skill-icons:javascript',
  },
  {
    name: 'skill-icons:alpinejs-light',
  },
  {
    name: 'skill-icons:htmx-light',
  },
  {
    name: 'skill-icons:jquery',
  },
  {
    name: 'skill-icons:vuejs-light',
  },
  {
    name: 'skill-icons:nuxtjs-light',
  },
  {
    name: 'skill-icons:pinia-light',
  },
  {
    name: 'skill-icons:illustrator-light',
  },

  {
    name: 'skill-icons:github-light',
  },
  {
    name: 'skill-icons:react-light',
  },
  {
    name: 'skill-icons:nextjs-light',
  },
  {
    name: 'skill-icons:d3-light',
  },
  {
    name: 'skill-icons:vite-light',
  },
  {
    name: 'skill-icons:vitest-light',
  },
  {
    name: 'skill-icons:cypress-light',
  },
  {
    name: 'skill-icons:ruby',
  },
  {
    name: 'skill-icons:rails',
  },

  {
    name: 'skill-icons:figma-light',
  },
  {
    name: 'skill-icons:illustrator',
  },

  {
    name: 'skill-icons:github-light',
  },
  {
    name: 'skill-icons:aws-light'
  },
  {
    name: 'skill-icons:heroku',
  },
  {
    name: 'skill-icons:netlify-light',
  },
]
</script>

<template>
  <div class="space-y-12 lg:-mt-12">
    <Breadcrumbs baseUrl="projects" :slug="`${slug}`" label="Projects" :title="post.title" />
    <div class="flex flex-col lg:flex-row gap-12 lg:justify-between">
      <div v-if="post" class="prose">
        <PageHeader pill="Recent Project">{{  post.title }}</PageHeader>
        <div class="not-prose space-y-6 max-w-full">
          <AnimateImage
            :src="post.image"
            :alt="post.image_alt"
            :scaleY="0.75"
           />
          <div class="">
            <TagLinks
              v-if="post.tags"
              :tags="post.tags"
              class="mb-6"
            />
            <a v-if="post.businessUrl" :href="post.businessUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium hover:underline block shrink-0">
              <Icon name="ph:link-simple-bold" class="size-4" />
              <span>Visit {{ post.businessName }}</span>
            </a>
          </div>
        </div>
        <ContentRenderer :value="post" />
      </div>
      <div v-if="post.businessUrl" class="lg:flex-1">
        <div class="lg:sticky lg:top-16">
          <div class="relative mx-auto border-neutral-200 dark:border-neutral-200 bg-neutral-200 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px] w-full">
            <div class="h-[32px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="h-[64px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-neutral-200">
              <iframe :title="`${post.businessName} website`" class="w-full h-full" :src="post.businessUrl" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
