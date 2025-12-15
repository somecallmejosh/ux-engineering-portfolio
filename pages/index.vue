<script setup lang="tsx">
import { motion } from 'motion-v'

useSeoMeta({
  title: 'Josh Briley | Practical UX Engineering for Complex Products',
  ogTitle: 'Josh Briley | Practical UX Engineering for Complex Products',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976906/josh-portfolio/assets_task_01jr6hvshff2gtyry2qwb7tqp9_img_0.webp'
})
const capabilities = [
  {
    id: 1,
    icon: 'code-simple',
    headline: "What I Value",
    description: "I like working on teams that care about the people using the product and the ones building it. I believe in writing code that future-me (and my teammates) will thank me for, and in keeping things simple when possible, clever when necessary, and kind always. Good communication beats good guesswork every time.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743964962/josh-portfolio/assets_task_01jr66de64evqaxfev44eyj7y0_img_0.webp',
    image_alt: 'UX Engineer Building Accessible, Human-Centered Front Ends',
  },

  {
    id: 3,
    icon: 'users-four',
    headline: "What I Do Best",
    description: "I help teams build front ends that feel solid, accessible, and friendly. That usually means building design systems, creating reusable components, and keeping designers and developers on the same page, literally. I'm happiest when I'm deep in the details but still part of the bigger conversation about what we're making and why it matters.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743965801/josh-portfolio/assets_task_01jr677h9hebkr1b6ash0hq066_img_0.webp',
    image_alt: 'UX Engineer building with modern front-end with a focus on accessibility and human-centered design',
  },
  {
    id: 2,
    icon: 'compass-rose',
    headline: "Where I'm Heading",
    description: "I'm continuing to level up in accessibility, JavaScript, and scalable CSS. I'm also deep diving into web components, because I like things that last longer than my coffee. I love learning from smart people, sharing what I've figured out (and what I've messed up), and helping teams make great things together.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744227298/josh-portfolio/assets_task_01jre017kredrsghw9rwhdb4er_img_0.webp',
    image_alt: 'UX engineer looking to the future of web development with a focus on accessibility and human-centered design',
  },
  {
    id: 5,
    icon: 'hand-eye',
    headline: "Staying Grounded",
    description: "When shiny new ideas come along, I try to ask myself: Will this make life better for the user? Will this make life easier for my team? Will this make me better at my craft? If the answer's yes, I'm in. If not… well, I'll probably tinker with it anyway, but only for 'research.'",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966141/josh-portfolio/assets_task_01jr67hz6xfepsyspa83m9435c_img_0.webp',
    image_alt: 'UX Engineer staying grounded in core principles of accessibility and human-centered design',
  },
];

const mostRecentBlog = await queryCollection('blog')
  .order('publishedAt', 'DESC')
  .first()

const mostRecentDevNote = await queryCollection('dev_notes')
  .order('publishedAt', 'DESC')
  .first()

const mostRecentProject = await queryCollection('projects')
  .order('publishedAt', 'DESC')
  .first()

const combinedPosts = [
  mostRecentProject && {
    ...mostRecentProject,
    headline: 'Latest Project',
    to: `/projects/${mostRecentProject.slug}/`
  },
  mostRecentBlog && {
    ...mostRecentBlog,
    headline: 'Latest Blog Post',
    to: `/blog/${mostRecentBlog.slug}/`
  },
  mostRecentDevNote && {
    ...mostRecentDevNote,
    headline: 'Latest Dev Note',
    to: `/dev-notes/${mostRecentDevNote.slug}/`
  }
].filter(Boolean)

</script>

<template>
  <div class="space-y-12">
    <div class="space-y-16">
      <section aria-describedby="page-header" class="prose">
        <PageHeader>I build accessible, human centered front ends that make sense.</PageHeader>
        <p>I'm a UI/UX engineer who loves turning design ideas into interfaces that just work. I focus on design systems, component libraries, and building products that are easy to use, easy to maintain, and maybe even a little fun along the way.</p>
      </section>

      <section aria-labelledby="recent">
        <h2 class="text-2xl mb-4" id="recent">Recent Posts</h2>
        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-12">
          <CardListItem :data="combinedPosts" />
        </ul>
      </section>

      <div class="flex items-center gap-4">
        <span aria-hidden="true" class="hidden lg:block flex-1 h-px bg-neutral-200"></span>
        <h2 class="text-2xl lg:text-4xl capitalize">In Case You Were Wondering</h2>
        <span aria-hidden="true" class="hidden lg:block flex-1 h-px bg-neutral-200"></span>
      </div>

      <section aria-label="Capabilities">
        <ul class="space-y-24">
          <li v-for="(item, index) in capabilities" :key="item.id"
            class="grid lg:grid-cols-2 items-center gap-1 lg:gap-24">
            <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
              <AnimateImage :src="item.image" :alt="item.image_alt" :scaleY="0.75" class="mb-4 lg:mb-0" />
            </div>
            <div class="prose" :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
              <div class="space-y-4">
                <CardHeader>{{ item.headline }}</CardHeader>
              </div>
              <p v-html="item.description"></p>
            </div>
          </li>
        </ul>
      </section>
      <nav class="lg:hidden" aria-label="Quick Links">
        <ul
          class="grid grid-cols-2 items-center justify-between gap-12 border-t border-neutral-200 not-prose py-6 font-medium">
          <li class="text-center prose">
            <NuxtLink class="hover:underline" to="/projects/">
              <motion.div :whilePress="{ y: 4 }">
                <AnimateImage
                  src="https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp"
                  alt="Josh Briley" :scaleY="0.75" />
                Projects
              </motion.div>
            </NuxtLink>
          </li>
          <li class="text-center prose">
            <NuxtLink class="hover:underline" to="/blog/">
              <motion.div :whilePress="{ y: 4 }">
                <AnimateImage
                  src="https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp"
                  alt="Josh Briley" :scaleY="0.75" />
                Blog
              </motion.div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style scoped>
dd {
  height: 0;
  opacity: 0;
  transform: scaleY(-0.9);
  transform-origin: top;
  transition: height 0.3s, opacity 1s, transform 0.2s;
  overflow: clip;

  &.open {
    height: auto;
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
