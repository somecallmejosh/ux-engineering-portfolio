<script setup lang="ts">
useSeoMeta({
  title: 'About Me',
  ogTitle: 'About Me',
  description: 'Learn about my experience in enterprise UX engineering and front-end development.',
  ogDescription: 'Learn about my experience in enterprise UX engineering and front-end development.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
})
const goodFit = [
  'Proven experience in delivering <strong>high-quality, maintainable code within complex enterprise environments</strong>.',
  'Strong communication and collaboration skills, with the <strong>ability to bridge the gap between design and engineering teams</strong>.',
  'A <strong>deep understanding of accessibility standards and best practices</strong>, ensuring inclusive user experiences.',
  'A <strong>focus on performance optimization and scalability</strong>, ensuring applications meet the demands of enterprise users.',
  'Experience in <strong>implementing and maintaining design systems</strong> for large-scale applications.',
  'Experience <strong>integrating front-end interfaces with backend REST APIs</strong>.',
  'Proven ability to handle <strong>and data data error exchange, handling, validation</strong>.'
]
</script>

<template>
  <div class="space-y-12">
    <h1 class="text-5xl">
      About Me
    </h1>
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-24">
      <div class="prose">
        <AnimateImage
          src="https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp"
          alt="UX Engineer presenting to business people"
          :scaleY="0.75"
          />
        <h2 class="text-balance">Enterprise UX Engineering & Front-End Development</h2>

        <p>
          With 20 years of experience in front-end development, <em>
          I specialize in architecting and implementing scalable,
          accessible, and maintainable user interfaces for complex enterprise applications.</em>
          My focus is on bridging the gap between design and engineering,
          ensuring seamless collaboration and efficient delivery of high-performance solutions.
        </p>
        <p>
          My technical expertise includes proficiency in modern front end frameworks
          such as <strong>Vue and React</strong>, <strong>CSS/TailwindCSS/Sass</strong>, and
          and full stack frameworks such as <strong>Ruby on Rails</strong>. However, I view these tools as enablers, not
          as the end goal. My emphasis is on applying sound architectural principles,
          implementing rigorous testing strategies, and ensuring adherence to accessibility
          standards (WCAG 2.1 or higher).
        </p>

      </div>
      <div class="prose">
        <h2>Key areas of expertise</h2>
        <ul class="not-prose space-y-2 divide-y-1 divide-neutral-100">
          <li v-for="(item, index) in goodFit"
            class="py-1 text-pretty" v-html="item" />
        </ul>
      </div>
    </div>
  </div>
</template>
