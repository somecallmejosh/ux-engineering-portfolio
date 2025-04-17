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
]

const resumeItems = [
 {
    title: 'Senior UI Developer',
    company: 'Logatot, Inc.',
    date: '2023 – 2024',
    description: 'Developed and maintained modular, accessible UI components using Ruby on Rails ViewComponents, ensuring design consistency and responsive layouts.'
  },
  {
    title: 'Senior Software Engineer',
    company: "America's Test Kitchen",
    date: '2022 – 2023',
    description: 'Built and documented UI components with React, Next.js, and Storybook, streamlining feature delivery across multiple projects.'
  },
  {
    title: 'Principal Design Engineer',
    company: 'Berkshire Hathaway Specialty Insurance',
    date: '2018 – 2022',
    description: 'Created a custom UI component library within Vue.js/Nuxt.js, standardizing front-end development and accelerating feature rollouts.'
  },
  {
    title: 'Lead UI Developer',
    company: "America's Test Kitchen",
    date: '2016 – 2018',
    description: 'Designed and implemented a scalable UI utility system, reducing development overhead and improving team velocity.'
  },
  {
    title: 'UI Designer & Front End Developer',
    company: 'Sports Technologies, Inc.',
    date: '2013 - 2016',
    description: 'Lead Designer and front-end developer for Ruby on Rails and Angular (6.x) web applications commissioned by elite sporting organizations such as NFL, NASCAR, NHL, MLS, PGA, and more.'
  },
  {
    title: 'Freelance UI Developer',
    company: 'Self-Employed',
    date: '2010 - Present',
    description: 'Worked with various clients to develop and maintain web applications, focusing on performance optimization and accessibility.'
  },
  {
    title: 'Web Designer & Front End Developer',
    company: 'ImageWorks, LLC',
    date: '2009 - 2013',
    description: 'Front end developer and web designer for a variety of clients, including the Aetna Insurance.'
  },
  {
    title: 'Owner, Web Designer and Front End Developer',
    company: 'Para-Diddle Design, LLC',
    date: '2005 - 2009',
    description: 'Responsible for vision, budgeting, marketing/sales, and other administrative tasks.'
  },
]
</script>

<template>
  <div class="space-y-12">
    <h1 class="text-5xl">
        About Me
      </h1>
    <div class="grid 2xl:grid-cols-2 gap-12 2xl:gap-24 lg:items-center">
      <div class="prose">
        <AnimateImage
          src="https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp"
          alt="UX Engineer presenting to business people"
          :scaleY="0.75"
          />
      </div>
      <div class="prose">
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
    </div>
    <ul class="not-prose space-y-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-12">
      <li v-for="(item, index) in resumeItems" :key="index">
        <small class="inline-block mb-4 text-xs px-1.5 bg-neutral-900 text-white font-semibold tracking-wide rounded-full">{{ item.date }}</small>
        <div class="prose">
          <h3 class="text-balance text-xl">
            {{ item.title }}
          </h3>
          <p class="mb-2 font-semibold">
            {{ item.company }}
          </p>
          <p>
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
