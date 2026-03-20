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
    description: "Ran my own design and development company. Responsible for the work, the clients, the vision, and the finances. It gave me a real appreciation for all the moving parts of a business.",
  },
];
</script>

<template>
  <PageWrapper>

    <section class="prose">
      <NuxtImg src="/images/josh-biz-cazsh.jpg" alt="Joshua Briley, UX Engineer" height="300" width="300"
        class="w-full h-auto lg:w-48 lg:h-48 rounded-2xl lg:rounded-full lg:mx-auto mb-6 lg:float-right lg:ml-12 lg:mb-0 object-cover object-top" />
      <PageHeader>
        About me
      </PageHeader>
      <p>
        I help teams fix design systems that are inconsistent, hard to maintain, or slowing development down. I do this
        through focused engagements: audits, component libraries, and workflow improvements, each designed to solve a
        specific problem quickly.
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
          <p>I help teams build front ends that are:</p>

          <ul>
            <li>Consistent</li>
            <li>Accessible</li>
            <li>Easy to maintain</li>
          </ul>

          <p>In practice, that means:</p>

          <ul>
            <li>Design systems and component libraries your team actually uses</li>
            <li>Accessibility built in from the start</li>
            <li>Design-to-code workflows that reduce friction every sprint</li>
          </ul>
        </template>
      </split-content>
    </section>
    <section aria-labelledby="experience" class="prose max-w-full">
      <h2 id="experience" class="text-3xl">Experience</h2>
      <ul class="not-prose grid md:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-6">
        <li class="bg-neutral-50 p-4 -mx-4 rounded-lg" v-for="(item, index) in resumeItems" :key="index">
          <small class="inline-block mb-4  px-1.5 bg-neutral-900 text-neutral-50   rounded-full">{{
            item.date }}</small>
          <div class="prose">
            <CardHeader element="h3">
              {{ item.title }}
            </CardHeader>
            <p class="mb-2 ">
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
      <h2>If your UI is slowing your team down, let's fix it.</h2>
      <p>
        I offer fixed-scope engagements for audits, component libraries, and workflow improvements.
      </p>
      <ButtonLink to="/services/">
        View services & pricing
      </ButtonLink>
    </Callout>
  </PageWrapper>
</template>
