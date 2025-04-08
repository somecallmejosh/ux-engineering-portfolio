<script setup lang="tsx">
import { motion } from 'motion-v'
useSeoMeta({
  title: 'JoshBriley | Enterprise-Grade UX Engineering',
  ogTitle: 'JoshBriley | Enterprise-Grade UX Engineering',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogDescription: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1743976906/josh-portfolio/assets_task_01jr6hvshff2gtyry2qwb7tqp9_img_0.webp'
})

const capabilities = [
  {
    id: 1,
    headline: 'Design System Architecture & Implementation',
    description: '<strong>Development and maintenance of component libraries</strong> using Vue.js, ensuring adherence to design tokens and promoting cross-team consistency. Demonstrated experience with Storybook for component documentation and testing. Proven ability to implement version control strategies for design system components.',
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743964962/josh-portfolio/assets_task_01jr66de64evqaxfev44eyj7y0_img_0.webp',
    image_alt: 'Design System Architecture & Implementation',
  },
  {
    id: 2,
    headline: 'Complex Enterprise Dashboard Development',
    description: 'Expertise in building <strong>data-intensive dashboards with advanced visualization</strong> techniques using D3.js and Chart.js. Experience with handling large datasets, optimizing data fetching and rendering, and implementing real-time data updates. Proven ability to implement user permission and role-based access control within dashboards.',
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743965560/josh-portfolio/assets_task_01jr670vkre80ayya5vbc46ja0_img_0.webp',
    image_alt: 'Complex Enterprise Dashboard Development',
  },
  {
    id: 3,
    headline: 'Web Accessibility (WCAG Compliance)',
    description: 'Comprehensive <strong>implementation of WCAG 2.1 (or higher) guidelines</strong>, including semantic HTML, ARIA attributes, keyboard navigation, and color contrast adherence. Demonstrated experience with accessibility testing tools Axe, Lighthouse, and various screen readers.',
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743965801/josh-portfolio/assets_task_01jr677h9hebkr1b6ash0hq066_img_0.webp',
    image_alt: 'Web Accessibility (WCAG Compliance)',
  },
  {
    id: 5,
    headline: 'Prototyping & Feasibility Testing & Validation',
    description: 'Ability to translate design prototypes (Figma, Sketch, etc.) into <strong>functional code prototypes for feasibility testing and validation</strong>. Experience with identifying technical constraints early in the design process and communicating them effectively to design and product teams. Proven ability to create code prototypes that reflect design system components.',
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966141/josh-portfolio/assets_task_01jr67hz6xfepsyspa83m9435c_img_0.webp',
    image_alt: 'Prototyping & Feasibility Testing & Validation',
  },
  {
    id: 6,
    headline: 'Backend Integration & API Interaction',
    description: 'Experience <strong>integrating front-end interfaces with backend REST APIs</strong>. Proven ability to handle data exchange, error handling, and data validation. Experience with Ruby on Rails.',
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966345/josh-portfolio/assets_task_01jr67rg5fftpa5naekz8czqd9_img_0.webp',
    image_alt: 'Backend Integration & API Interaction',
  },
  {
    id: 7,
    headline: 'Unit/Integration Testing & Quality Assurance',
    description: 'Experience with <strong>unit testing, integration testing, and end-to-end testing</strong> using Jest, Cypress, etc. Proven ability to implement automated testing strategies and ensure code quality.',
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966547/josh-portfolio/assets_task_01jr67z9nxeg98nryp77fhgy72_img_0.webp',
    image_alt: 'Unit/Integration Testing & Quality Assurance',
  },
]

</script>

<template>
  <div class="space-y-12">
    <div class="space-y-16">
      <div class="prose">
        <h2 class="text-5xl text-balance">Enterprise-Grade UX Engineering</h2>
        <p>I specialize in <em>bridging the gap between web application design & engineering</em> within complex enterprise
          environments. My focus is on translating intricate business requirements into robust, scalable, and accessible user interfaces.
          With a deep understanding of design systems, data-driven applications, and accessibility standards, I deliver
          solutions that prioritize both user experience and technical excellence. My expertise lies in building systems
          that not only meet current needs but are designed to evolve and scale alongside the organization.</p>
      </div>
      <ul class="space-y-24">
        <li v-for="(item, index) in capabilities"
        :key="item.id" class="grid lg:grid-cols-2 items-center gap-1 lg:gap-24">
          <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
            <AnimateImage
              :src="item.image"
              :alt="item.image_alt"
              :scaleY="0.75"
              class="mb-4 lg:mb-0"
            />
          </div>
          <div class="prose" :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
            <h2 class="text-balance">{{ item.headline }}</h2>
            <p v-html="item.description"></p>
          </div>

        </li>
      </ul>
      <ul class="grid grid-cols-2 items-center justify-between lg:hidden gap-12 border-t border-neutral-200 not-prose py-6 font-medium">
        <li class="text-center prose">
          <NuxtLink class="hover:underline" to="/projects">
            <motion.div :whilePress="{ y: 4 }" >
              <AnimateImage
                src="https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp"
                alt="Josh Briley"
                :scaleY="0.75"
              />
              Projects
            </motion.div>
          </NuxtLink>
        </li>
        <li class="text-center prose">
          <NuxtLink class="hover:underline" to="/blog">
            <motion.div :whilePress="{ y: 4 }" >
              <AnimateImage
                src="https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp"
                alt="Josh Briley"
                :scaleY="0.75"
              />
              Blog
            </motion.div>
          </NuxtLink>
        </li>
      </ul>
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
