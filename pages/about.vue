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

const skillIcons = [
  'alpinejs-light',
  'apple-light',
  'aws-light',
  'bootstrap',
  'css',
  'cypress-light',
  'd3-light',
  'figma-light',
  'github-light',
  'github-light',
  'gulp',
  'heroku',
  'html',
  'htmx-light',
  'illustrator',
  'javascript',
  'jquery',
  'less-light',
  'markdown-light',
  'materialui-light',
  'npm-light',
  'netlify-light',
  'nextjs-light',
  'nuxtjs-light',
  'pinia-light',
  'photoshop',
  'rails',
  'react-light',
  'ruby',
  'sass',
  'styledcomponents',
  'svg-light',
  'tailwindcss-light',
  'typescript',
  'vite-light',
  'vitest-light',
  'vscode-light',
  'vuejs-light',
  'vuetify-light',
  'windows-light',
  'xd',
]

const missionStatementItems = [
  {
    icon: 'ph:hammer',
    header: 'Building for the Long Haul',
    description: 'I like to architect things so they can grow and change without turning into a tangled mess. Think of it as building a really solid foundation for a house.',
  },
  {
    header: 'Making it Accessible for Everyone',
    icon: 'ph:wheelchair',
    description: 'The web should be for everyone, right? I make sure the interfaces I build are usable by people of all abilities, following accessibility guidelines like WCAG 2.1 (and often going above!).',
  },
  {
    header: 'Keeping Things Tidy',
    icon: 'ph:broom',
    description: 'Nobody likes a messy codebase. I focus on writing clean, maintainable code that\'s easy for other developers (and my future self!) to understand and work with.',
  },
]

const resumeItems = [
  {
    title: 'Senior UI Developer',
    company: 'Logatot, Inc.',
    date: '2023 – 2024',
    description: "At Logatot, my focus was on building the visual heart of their application – those reusable UI components that make everything feel consistent and work smoothly on any device. Using Ruby on Rails ViewComponents, I aimed to create a library that not only looked good but was also accessible to everyone, ensuring a great experience for all users.",
  },
  {
    title: 'Senior Software Engineer',
    company: "America's Test Kitchen",
    date: '2022 – 2023',
    description: "My time at America's Test Kitchen was all about making their delicious content shine online. I built and documented UI components using React, Next.js, and Storybook, creating a well-organized toolkit that helped the team deliver new features quickly and consistently across their various projects – ensuring every recipe and review looked its best!",
  },
  {
    title: 'Principal Design Engineer',
    company: 'Berkshire Hathaway Specialty Insurance',
    date: '2018 – 2022',
    description: "As Principal Design Engineer at BHSI, I spearheaded the creation of a custom UI component library using Vue.js and Nuxt.js. This wasn't just about making things look the same; it was about setting a standard for front-end development that sped up how quickly we could roll out new features while keeping the user experience top-notch.",
  },
  {
    title: 'Lead UI Developer',
    company: "America's Test Kitchen",
    date: '2016 – 2018',
    description: "Back at America's Test Kitchen, I took on the challenge of designing and implementing a smart system for styling the UI. This 'utility system' was all about streamlining our workflow, reducing the time developers spent on repetitive tasks, and ultimately making the whole team move faster and more efficiently.",
  },
  {
    title: 'UI Designer & Front End Developer',
    company: 'Sports Technologies, Inc.',
    date: '2013 - 2016',
    description: "This was a fantastic opportunity to blend my design and development skills, leading the charge on UI for Ruby on Rails and Angular web applications used by some of the biggest names in sports – the NFL, NASCAR, NHL, MLS, PGA, and more! It was all about creating intuitive and engaging experiences for these elite organizations.",
  },
  {
    title: 'Freelance UI Developer',
    company: 'Self-Employed',
    date: '2010 - Present',
    description: "Being self-employed has allowed me to collaborate with a diverse range of clients, helping them bring their web application ideas to life. My focus has always been on building solutions that not only look great but also perform smoothly and are accessible to everyone.",
  },
  {
    title: 'Web Designer & Front End Developer',
    company: 'ImageWorks, LLC',
    date: '2009 - 2013',
    description: "At ImageWorks, I had the chance to wear both design and development hats, creating web experiences for a variety of clients, including Aetna Insurance. This role gave me a broad understanding of different industries and the importance of user-centered design.",
  },
  {
    title: 'Owner, Web Designer and Front End Developer',
    company: 'Para-Diddle Design, LLC',
    date: '2005 - 2009',
    description: "Running my own design and development company was an incredible learning experience. Beyond the coding and design, I was responsible for the whole picture – setting the vision, managing the budget, and even handling marketing and sales. It gave me a real appreciation for all the moving parts of a business.",
  },
];
</script>

<template>
  <div class="space-y-12">
    <PageHeader>
      About Me
    </PageHeader>
    <div class="grid lg:grid-cols-2 gap-6 lg:gap-24 lg:items-center">
      <div class="prose order-2 lg:order-1">
        <p>
          So, you want to know a bit about the person behind the code? Well, for the last two decades (that's a good chunk of internet time!), I've been diving deep into the world of front-end development. Think of me as someone who loves to build the cool, interactive stuff you see and use on websites and applications – the part that makes things actually *happen* when you click a button or scroll through a page.
        </p>
        <p>
          Over the years, I've really honed my skills in taking complex ideas and turning them into smooth, user-friendly interfaces that can handle the hustle and bustle of big, enterprise-level applications. I'm not just about making things look pretty (though that's important too!). I'm really passionate about building things the *right* way:
        </p>
      </div>
      <div class="order-1 lg:order-2">
        <AnimateImage
          src="https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp"
          alt="UX Engineer presenting to business people"
          :scaleY="0.75"
          />
      </div>
    </div>
    <div class="prose max-w-full lg:mb-24">
      <h2 class="text-3xl">My Mission</h2>
      <ul class="grid lg:grid-cols-3 gap-12 not-prose gap-x-12 gap-y-6">
        <li class="bg-neutral-50 p-4 -mx-4 rounded-lg" v-for="(item, index) in missionStatementItems" :key="index">
          <div class="prose">
            <Icon size="2rem" :name="item.icon" />
            <CardHeader element="h3" class="my-2">
              {{ item.header }}
            </CardHeader>
            <p>
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="grid lg:grid-cols-2 lg:gap-12">
      <div class="prose py-12">
        <h2 class="text-3xl">Tools of the Trade</h2>
        <p>Now, you might be wondering about my "tools." Sure, I've got my favorites! I'm pretty handy with modern front-end frameworks like Vue and React – think of them as different types of really versatile building blocks. I also speak fluent CSS (whether it's plain vanilla, the utility-first approach of Tailwind, or the more structured Sass), which is like knowing all the different ways to paint and decorate. And I've even dabbled in full-stack stuff like Ruby on Rails – kind of like knowing how the plumbing and electrical work behind the walls.</p>
        <p>But here's the thing: I see these tools as just that – tools. Like a carpenter with their saws and chisels, they help me do the job. What I *really* care about is the core stuff: having a solid plan (good architecture), making sure everything is tested thoroughly (like checking if the door opens and closes properly), and building in a way that everyone can use what I create (accessibility!).</p>
      </div>
      <div class="flex flex-col items-center justify-center bg-neutral-700 rounded-lg">
        <div class="p-10 lg:p-24 space-y-10">
          <h2 class="text-3xl text-white mb-4 flex items-center gap-2">
            <Icon name="ph:toolbox" /> My Toolbox <span class="h-px bg-white/50 flex-1"></span>
          </h2>
          <TagLinks :tags="skillIcons" class="text-center" />
        </div>
      </div>
    </div>
    <div class="prose max-w-full">
      <h2 class="text-3xl">Experience</h2>
      <ul class="not-prose grid md:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-6">
        <li class="bg-neutral-50 p-4 -mx-4 rounded-lg" v-for="(item, index) in resumeItems" :key="index">
          <small class="inline-block mb-4 text-xs px-1.5 bg-neutral-900 text-white font-semibold tracking-wide rounded-full">{{ item.date }}</small>
          <div class="prose">
            <CardHeader element="h3">
              {{ item.title }}
            </CardHeader>
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
    <div class="prose">
      <p>So, if you're looking for someone with a good chunk of experience who's focused on building robust, accessible, and easy-to-live-with user interfaces, and who believes in good planning and teamwork, <NuxtLink to="/contact">then let's connect</NuxtLink>! I'm all about bridging the gap between the design vision and the engineering reality to deliver solutions that really work.</p>
    </div>
  </div>
</template>
