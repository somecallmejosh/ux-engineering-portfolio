<script setup lang="ts">
const title = "About Josh Briley | Design Systems Engineer & Frontend Consultant"
const description = "20 years of experience building component libraries and design systems for product teams at Travelers, Berkshire Hathaway Specialty Insurance, and America's Test Kitchen."
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
})

const resumeItems = [
  {
    title: 'Software Engineer',
    company: 'Travelers',
    date: '2025 - Present',
    description: "Building and maintaining an accessible component library that powers applications used across the US and UK. Focused on scalable, reusable UI components and documentation that helps designers and developers deliver consistent experiences at scale.",
  },
  {
    title: 'Senior UI Developer',
    company: 'Logatot, Inc.',
    date: '2023 - 2024',
    description: "Built the component library powering their core application using Ruby on Rails ViewComponents. Accessible, responsive, and consistent across devices.",
  },
  {
    title: 'Senior Software Engineer',
    company: "America's Test Kitchen",
    date: '2022 - 2023',
    description: "Built and documented UI components using React, Next.js, and Storybook, giving the team a toolkit that let them ship new features quickly and consistently across multiple products.",
  },
  {
    title: 'Principal Design Engineer',
    company: 'Berkshire Hathaway Specialty Insurance',
    date: '2018 - 2022',
    description: "Led the creation of a custom UI component library in Vue.js and Nuxt.js, setting the front-end development standard for the organization and significantly accelerating feature delivery.",
  },
  {
    title: 'Lead UI Developer',
    company: "America's Test Kitchen",
    date: '2016 - 2018',
    description: "Designed and built a utility styling system that reduced repetitive work and helped the team move faster without sacrificing consistency.",
  },
  {
    title: 'UI Designer & Front End Developer',
    company: 'Sports Technologies, Inc.',
    date: '2013 - 2016',
    description: "Led UI for Ruby on Rails and Angular applications used by the NFL, NASCAR, NHL, MLS, and PGA.",
  },
  {
    title: 'Freelance UI Developer',
    company: 'Self-Employed',
    date: '2010 - Present',
    description: "Ongoing consulting work across a range of clients and industries, focused on accessible, performant web application development.",
  },
  {
    title: 'Web Designer & Front End Developer',
    company: 'ImageWorks, LLC',
    date: '2009 - 2013',
    description: "Built web experiences across industries, including work for Aetna Insurance. An early foundation in user-centered design across diverse client needs.",
  },
  {
    title: 'Owner, Web Designer and Front End Developer',
    company: 'Para-Diddle Design, LLC',
    date: '2005 - 2009',
    description: "Ran my own design and development company. Responsible for the work, the clients, the vision, and the books. It gave me a real appreciation for all the moving parts of a business.",
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
      <PageHeader>
        About me
      </PageHeader>
      <p>
        I work with product teams on design system audits, component library builds, and design-to-code workflow
        optimization. Fixed scope, fixed price. I've spent 20 years building the component libraries and design systems
        that product teams depend on. Now I help
        other teams do the same. <strong>I am currently vailable for consulting engagements.</strong>
      </p>
    </section>
    <section aria-labelledby="bio" class="prose max-w-full lg:mb-24">
      <split-content>
        <template #primary>
          <h2 id="bio">Bio</h2>
          <p>
            I'm a UI/UX engineer who loves the place where design meets code: where a well-built component library makes
            a
            whole team faster, and where accessibility is a foundation, not an afterthought.
            For over twenty years I've been behind the buttons you tap, the forms you fill out, and the UI details that
            make
            a product feel considered rather than cobbled together. I've built design systems for insurance companies,
            component libraries for media brands, and UI frameworks for professional sports organizations. The scale
            changes. The craft doesn't.
          </p>
          <p>
            I'm happiest when I'm deep in the details but still part of the bigger conversation about what we're making
            and
            why it matters.
          </p>

        </template>
        <template #secondary>
          <h2>What I do best</h2>
          <p>
            I help teams build front ends that feel solid, accessible, and easy to maintain. In practice, that usually
            means:
          </p>
          <ul>
            <li><strong>Design systems and component libraries</strong> — architected to scale, documented so your whole
              team can use them
              confidently</li>
            <li><strong>Accessibility compliance</strong> — WCAG 2.1 AA built in from the start, not bolted on at the
              end
            </li>
            <li><strong>Design-to-code workflows</strong> — reducing the handoff friction that costs hours every sprint
            </li>
          </ul>
          <p>
            Good communication beats good guesswork every time. I keep designers and developers on the same page.
          </p>
        </template>
      </split-content>
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
      <split-content>
        <template #primary>
          <h2 id="mission">What I value</h2>
          <p>
            I like working on teams that care about the people using the product and the ones building it. I believe in
            writing code that future-me and my teammates will actually thank me for. Simple when possible. Clever when
            necessary. Kind always.
          </p>
          <p>
            When new ideas come along, I ask: will this make life better for the user? Easier for the team? Better for
            my
            craft? If yes, I'm in. If not, I'll probably tinker with it anyway, but only for "research."
          </p>
        </template>
        <template #secondary>
          <h2>Tools of the trade</h2>
          <p>
            I work across the modern front-end stack: React, Vue, and their ecosystems, plain CSS through to Sass and
            Tailwind, and I've spent meaningful time with Ruby on Rails. I'm fluent in Storybook, Figma, and the
            design-to-code tools that sit between them.
          </p>
          <p> Tools are just tools. What matters is how you use them: clear plan, solid foundation, tested thoroughly,
            and
            accessible to everyone. That's the part that lasts long after frameworks come and go.
          </p>
        </template>
      </split-content>
    </section>


    <Callout>
      <h2>Let's work together</h2>
      <p>
        Interested in consulting? I offer fixed-scope engagements for design system audits, component library builds,
        and workflow optimization.
      </p>
      <ButtonLink to="/services/">
        View services & pricing
      </ButtonLink>
    </Callout>
  </PageWrapper>
</template>
