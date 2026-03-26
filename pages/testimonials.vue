<script setup>
useSeoMeta({
  title: 'Testimonials',
  ogTitle: 'Testimonials',
  description: 'Testimonials from clients and colleagues I\'ve worked with over the years.',
  ogDescription: 'Testimonials from clients and colleagues I\'ve worked with over the years.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1747754360/josh-portfolio/assets_task_01jvq4ak6yfmma0mxqxrmvr922_1747754314_img_0.webp'
})

const { testimonials } = useTestimonials()
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header" class="prose">
      <PageHero :content="{
        pill: 'Testimonials',
        pillIcon: 'ph:chats',
        title: 'What clients and colleagues say',
        description: 'These testimonials come from clients and colleagues I\'ve had the pleasure of working with. Their words reflect what I care about most: collaboration, accessibility, and work that holds up over time.'
      }" />
    </section>
    <section aria-label="Testimonials" class="gap-8 space-y-12 xl:columns-2">
      <div v-for="(item, index) in testimonials" :key="index" class="">
        <div
          class="flex gap-4 group hover:bg-blue-50 relative -m-2 p-2 rounded-lg transition-colors duration-150 ease-in-out">
          <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-full shrink-0" width="64" height="64"
            loading="lazy" />
          <div>
            <h2>{{ item.name }}</h2>
            <div>
              <small class="flex items-center gap-1  text-pretty ">{{ item.title }}</small>
              <small class="block  text-pretty">
                <Icon name="skill-icons:linkedin" size="0.75em" class="grayscale opacity-50" /> {{ item.company }}
              </small>
            </div>
          </div>

          <a class="absolute inset-0 group ring-blue-100 outline-0 focus:ring-2 focus:ring-offset-2 rounded-lg"
            :href="item.linkedIn" target="_blank" rel="noopener noreferrer">
            <div class="sr-only">View {{ item.name }}'s LinkedIn Profile</div>
            <Icon name="ph:arrow-square-out-fill" size="1em"
              class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 ease-in-out text-blue-600" />
          </a>
        </div>
        <div class="pl-8">
          <div class="border-l-4 border-neutral-100 pl-4 mt-6 relative">
            <div>
              <Icon name="ph:quotes-fill" size="10em" class="text-neutral-100 absolute -top-12 right-0" />
            </div>
            <div class="prose relative" v-html="item.testimonial"></div>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
</template>
