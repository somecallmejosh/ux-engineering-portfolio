<script setup lang="ts">
useSeoMeta({
  title: 'About Me',
  ogTitle: 'About Me',
  description: 'Learn about my experience in enterprise UX engineering and front-end development.',
  ogDescription: 'Learn about my experience in enterprise UX engineering and front-end development.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
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
  'css',
  'cypress-light',
  'd3-light',
  'figma-light',
  'github-light',
  'heroku',
  'html',
  'htmx-light',
  'javascript',
  'npm-light',
  'netlify-light',
  'nextjs-light',
  'nuxtjs-light',
  'rails',
  'react-light',
  'ruby',
  'sass',
  'svg-light',
  'tailwindcss-light',
  'typescript',
  'vite-light',
  'vitest-light',
  'vscode-light',
  'vuejs-light',
  'windows-light',
]

const missionStatementItems = [
  {
    icon: 'ph:hammer',
    header: 'Building for the Long Haul',
    description: 'I design and build with the future in mind, creating foundations that can grow and adapt without turning into a tangled mess. Think solid house framing, but for code and design systems.',
  },
  {
    icon: 'ph:wheelchair',
    header: 'Making It Accessible for Everyone',
    description: 'The web should welcome everyone. I make sure the interfaces I build are usable by people of all abilities, following WCAG 2.1 standards—and often going beyond them.',
  },
  {
    icon: 'ph:broom',
    header: 'Keeping Things Tidy',
    description: 'Nobody likes a messy codebase. I focus on writing clean, maintainable code that’s easy for teammates—and my future self—to read, understand, and build on.',
  },
]

const resumeItems = [
  {
    title: 'Software Engineer',
    company: 'Travelers',
    date: '2025 - Present',
    description: "I build and maintain an accessible component library that powers applications used across the US and UK. My work focuses on creating scalable, reusable UI components and documentation that help designers and developers deliver consistent, user-friendly experiences.",
  },
  {
    title: 'Senior UI Developer',
    company: 'Logatot, Inc.',
    date: '2023 - 2024',
    description: "At Logatot, my focus was on building the visual heart of their application, those reusable UI components that make everything feel consistent and work smoothly on any device. Using Ruby on Rails ViewComponents, I aimed to create a library that not only looked good but was also accessible to everyone, ensuring a great experience for all users.",
  },
  {
    title: 'Senior Software Engineer',
    company: "America's Test Kitchen",
    date: '2022 - 2023',
    description: "My time at America's Test Kitchen was all about making their delicious content shine online. I built and documented UI components using React, Next.js, and Storybook, creating a well-organized toolkit that helped the team deliver new features quickly and consistently across their various projects, ensuring every recipe and review looked its best!",
  },
  {
    title: 'Principal Design Engineer',
    company: 'Berkshire Hathaway Specialty Insurance',
    date: '2018 - 2022',
    description: "As Principal Design Engineer at BHSI, I spearheaded the creation of a custom UI component library using Vue.js and Nuxt.js. This wasn't just about making things look the same; it was about setting a standard for front-end development that sped up how quickly we could roll out new features while keeping the user experience top-notch.",
  },
  {
    title: 'Lead UI Developer',
    company: "America's Test Kitchen",
    date: '2016 - 2018',
    description: "Back at America's Test Kitchen, I took on the challenge of designing and implementing a smart system for styling the UI. This 'utility system' was all about streamlining our workflow, reducing the time developers spent on repetitive tasks, and ultimately making the whole team move faster and more efficiently.",
  },
  {
    title: 'UI Designer & Front End Developer',
    company: 'Sports Technologies, Inc.',
    date: '2013 - 2016',
    description: "This was a fantastic opportunity to blend my design and development skills, leading the charge on UI for Ruby on Rails and Angular web applications used by some of the biggest names in sports, the NFL, NASCAR, NHL, MLS, PGA, and more! It was all about creating intuitive and engaging experiences for these elite organizations.",
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
    description: "Running my own design and development company was an incredible learning experience. Beyond the coding and design, I was responsible for the whole picture, setting the vision, managing the budget, and even handling marketing and sales. It gave me a real appreciation for all the moving parts of a business.",
  },
];
</script>

<template>
  <PageWrapper>
    <section aria-describedby="page-header" class="prose">
      <img
        src="https://res.cloudinary.com/dwjulenau/image/upload/c_crop,dpr_auto,e_camera,f_auto,fl_progressive,g_face,q_auto,w_800,z_1.7/v1758508471/josh-portfolio/josh-biz-cazsh.png"
        alt="Josh Briley, UX Engineer"
        class="w-full h-auto lg:w-48 lg:h-48 rounded-2xl lg:rounded-full lg:mx-auto mb-6 lg:float-right lg:ml-12 lg:mb-0 object-cover object-top" />
      <PageHeader pill="About Me" pillIcon="ph:lego-smiley">
        Hello, World!
      </PageHeader>
      <p>
        I build digital experiences that are both good-looking and good-hearted. For over twenty years I've been the
        person behind the buttons you mash, the forms you fill out, and the little UI details that make websites feel
        less like machines and more like places you want to be. I love the sweet spot where design meets code, turning
        pixels and logic into something people actually enjoy using.
      </p>
    </section>
        <section aria-labelledby="experience" class="prose max-w-full">
      <h2 id="experience" class="text-3xl">Experience</h2>
      <ul class="not-prose grid md:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-6">
        <li class="bg-neutral-50 p-4 -mx-4 rounded-lg" v-for="(item, index) in resumeItems" :key="index">
          <small
            class="inline-block mb-4 text-xs px-1.5 bg-neutral-900 text-white font-semibold tracking-wide rounded-full">{{
              item.date }}</small>
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
    </section>
    <section aria-labelledby="mission" class="prose max-w-full lg:mb-24">
      <h2 id="mission" class="text-3xl">My Mission</h2>
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
    </section>

    <section aria-label="Capabilities" class="space-y-12">

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
    <section aria-labelledby="tools" class="grid lg:grid-cols-2 lg:gap-12">
      <div class="prose py-12">
        <h2 id="tools" class="text-3xl">Tools of the Trade</h2>
        <p>I work with many of the modern front-end staples such as Vue, React, and their ecosystems, which I think of
          as different sets of building blocks. CSS is where I really feel at home, whether that means writing it plain,
          structuring it with Sass, or moving quickly with utility classes in Tailwind. I have also spent time with Ruby
          on Rails, which feels a bit like knowing how the plumbing and wiring run behind the walls.</p>
        <p>At the end of the day, tools are just tools. What matters to me is how they are used: starting with a clear
          plan, building on a solid foundation, testing to make sure everything works the way it should, and making it
          accessible so that everyone can use it. That is the part that lasts long after frameworks and libraries come
          and go.</p>
      </div>
      <div class="flex flex-col items-center justify-center bg-neutral-700 rounded-lg">
        <div class="p-10 lg:p-24 space-y-10">
          <h2 class="text-3xl text-white mb-4 flex items-center gap-2">
            <Icon name="ph:toolbox" /> My Toolbox <span class="h-px bg-white/50 flex-1"></span>
          </h2>
          <TagLinks :tags="skillIcons" class="text-center" />
        </div>
      </div>
    </section>

    <aside class="prose">
      <p>So, if you're looking for someone with a good chunk of experience who's focused on building robust, accessible,
        and easy-to-live-with user interfaces, and who believes in good planning and teamwork, <NuxtLink to="/contact/">
          then let's connect</NuxtLink>! I'm all about bridging the gap between the design vision and the engineering
        reality to deliver solutions that really work.</p>
    </aside>
  </PageWrapper>
</template>
