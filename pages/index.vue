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
    description: "I value simplicity over complexity, choosing solutions that age well. I put humanness over hype, solving real problems instead of chasing trends. I prefer depth over distraction, going deep in my lane rather than scattering across shiny tools. And I believe progress comes through doing, learning by building instead of endless preparation.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743964962/josh-portfolio/assets_task_01jr66de64evqaxfev44eyj7y0_img_0.webp',
    image_alt: 'UX Engineer Building Accessible, Human-Centered Front Ends',
  },

  {
    id: 3,
    icon: 'users-four',
    headline: "What I Do Best",
    description: "I focus on building accessible, human-centered front ends. My strengths include making the web usable for everyone, creating scalable and intuitive design systems and components, practicing the craft of semantic HTML, CSS, and JavaScript, and serving as a bridge between designers and developers so product visions remain intact.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743965801/josh-portfolio/assets_task_01jr677h9hebkr1b6ash0hq066_img_0.webp',
    image_alt: 'UX Engineer building with modern front-end with a focus on accessibility and human-centered design',
  },
  {
    id: 2,
    icon: 'compass-rose',
    headline: "Where I'm Heading",
    description: "I am continuing to deepen my front-end expertise in JavaScript, accessibility, scalable CSS, and web components. I want to build systems that outlast trends, like design systems and component libraries, while also sharing stories and reflections that help others bridge design and development. Through it all, I plan to stay grounded in UI/UX engineering, even as the industry evolves with AI and new frameworks.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744227298/josh-portfolio/assets_task_01jre017kredrsghw9rwhdb4er_img_0.webp',
    image_alt: 'UX engineer looking to the future of web development with a focus on accessibility and human-centered design',
  },
  {
    id: 5,
    icon: 'hand-eye',
    headline: "Staying Grounded",
    description: "When I feel pulled by a new idea or doomsday fears du jour , I ask myself whether it strengthens my lane as a UI/UX engineer, whether it helps humans use technology better instead of chasing hype, and whether future-me in five years will thank me for the time invested.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966141/josh-portfolio/assets_task_01jr67hz6xfepsyspa83m9435c_img_0.webp',
    image_alt: 'UX Engineer staying grounded in core principles of accessibility and human-centered design',
  },
];
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-16">
      <section aria-describedby="page-header" class="prose">
        <PageHeader>I build accessible, human-centered front ends that outlast trends.</PageHeader>
        <p>I'm a UI/UX engineer who builds accessible, human-centered front ends. My work focuses on design systems,
          component libraries, and the craft of making interfaces that are simple, scalable, and inclusive. I care less
          about chasing trends and more about creating solutions that last.</p>
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
            <NuxtLink class="hover:underline" to="/projects">
              <motion.div :whilePress="{ y: 4 }">
                <AnimateImage
                  src="https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp"
                  alt="Josh Briley" :scaleY="0.75" />
                Projects
              </motion.div>
            </NuxtLink>
          </li>
          <li class="text-center prose">
            <NuxtLink class="hover:underline" to="/blog">
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
