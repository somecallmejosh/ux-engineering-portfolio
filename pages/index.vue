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
    headline: 'Building Blocks for the Web (Design Systems)',
    description: "Think of those cool, reusable pieces on websites...<strong>buttons, menus, colors that all fit? That's all part of a design system!</strong> I build these <strong>Lego sets</strong> with modern front end developer tools, keeping everything consistent and making future work smoother. Plus, a clear instruction manual (Storybook) helps everyone build right.",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743964962/josh-portfolio/assets_task_01jr66de64evqaxfev44eyj7y0_img_0.webp',
    image_alt: 'Building Blocks for the Web (Design Systems)',
  },

  {
    id: 3,
    headline: 'Making the Web Accessible to Everyone (WCAG)',
    description: "Imagine a playground for all! I ensure websites follow WCAG 2.1 (or better!) so everyone can use them. This means <strong>clear language for computers (semantic HTML), and helpful labels, keyboard navigation, and good color contrast for users</strong>. My <em>testing goggles</em> (Axe, Lighthouse, screen readers) ensure we pass the check!",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743965801/josh-portfolio/assets_task_01jr677h9hebkr1b6ash0hq066_img_0.webp',
    image_alt: 'Making the Web Accessible to Everyone (WCAG)',
  },
  {
    id: 2,
    headline: 'Building Mission Control for Data (Dashboards)',
    description: "Got lots of data that needs to make sense? I build <strong>mission control dashboards</strong> with tools like D3.js and Chart.js to tell clear, visual stories. I make sure they handle tons of data without slowing down and can even show live updates. Plus, I can set up controls for who sees what based on their role!",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744227298/josh-portfolio/assets_task_01jre017kredrsghw9rwhdb4er_img_0.webp',
    image_alt: 'Building Mission Control for Data (Dashboards)',
  },
  {
    id: 5,
    headline: 'Testing Ideas Before We Build the Whole Thing (Prototyping)',
    description: "Got a cool design in Figma or Sketch? <strong>I turn them into quick prototypes to test if they'll actually work!</strong> This helps catch tech issues early and keeps us aligned with designers and product folks. These prototypes often use our design system <em>Lego blocks</em> too!",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966141/josh-portfolio/assets_task_01jr67hz6xfepsyspa83m9435c_img_0.webp',
    image_alt: 'Testing Ideas Before We Build the Whole Thing (Prototyping)',
  },
  {
    id: 6,
    headline: 'Making the Front Talk to the Back (API Integration)',
    description: "Think of the front-end needing to chat with the back-end for info? I make those conversations happen with APIs. <strong>I ensure data flows smoothly, handle any errors, and check that the info is correct</strong>. I've connected front-ends with back-ends built with Ruby on Rails, Java, GoLang, PHP, and lots more!",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966345/josh-portfolio/assets_task_01jr67rg5fftpa5naekz8czqd9_img_0.webp',
    image_alt: 'Making the Front Talk to the Back (API Integration)',
  },
  {
    id: 7,
    headline: 'Making Sure Everything Works Perfectly (Testing & QA)',
    description: "<strong>Before shipping to production, we test everything!</strong> I do all sorts of testing – individual pieces (unit), parts working together (integration), and the whole thing for the user (end-to-end) with tools like Jest and Cypress. Automated tests help us catch issues early and keep code quality high!",
    image: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743966547/josh-portfolio/assets_task_01jr67z9nxeg98nryp77fhgy72_img_0.webp',
    image_alt: 'Making Sure Everything Works Perfectly (Testing & QA)',
  },
];
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-16">
      <section aria-describedby="page-header" class="prose">
        <PageHeader>Clear, Friendly User Interfaces. Built to Last.</PageHeader>
        <p>Hey, I'm Josh. <i>I work at the intersection of design and engineering</i>, creating scalable, accessible UI systems, prototyping ideas to life, and collaborating closely with teams to turn complexity into clarity. If that sounds like the kind of energy you're looking for, I'd love to help.</p>
      </section>
      <div class="flex items-center gap-4">
        <span aria-hidden="true" class="hidden lg:block flex-1 h-px bg-neutral-200"></span>
        <h2 class="text-2xl lg:text-4xl capitalize">What Exactly is it That I Do, You Ask?</h2>
        <span aria-hidden="true" class="hidden lg:block flex-1 h-px bg-neutral-200"></span>
      </div>

      <section aria-label="Capabilities">
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
              <CardHeader>{{ item.headline }}</CardHeader>
              <p v-html="item.description"></p>
            </div>
          </li>
        </ul>
      </section>
      <nav class="lg:hidden" aria-label="Quick Links">
        <ul class="grid grid-cols-2 items-center justify-between gap-12 border-t border-neutral-200 not-prose py-6 font-medium">
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
