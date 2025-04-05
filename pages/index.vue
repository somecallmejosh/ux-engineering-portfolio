<script setup>
useSeoMeta({
  title: 'JoshBriley | Enterprise-Grade UX Engineering',
  description: 'UX Engineering projects that showcase my skills in creating user-friendly, accessible, and scalable web applications.',
})

const capabilities = [
  {
    id: 1,
    headline: 'Design System Architecture & Implementation',
    description: '<strong>Development and maintenance of component libraries</strong> using Vue.js, ensuring adherence to design tokens and promoting cross-team consistency. Demonstrated experience with Storybook for component documentation and testing. Proven ability to implement version control strategies for design system components.',
  },
  {
    id: 2,
    headline: 'Complex Enterprise Dashboard Development',
    description: 'Expertise in building <strong>data-intensive dashboards with advanced visualization</strong> techniques using D3.js and Chart.js. Experience with handling large datasets, optimizing data fetching and rendering, and implementing real-time data updates. Proven ability to implement user permission and role-based access control within dashboards.',
  },
  {
    id: 3,
    headline: 'Accessibility (WCAG Compliance)',
    description: 'Comprehensive <strong>implementation of WCAG 2.1 (or higher) guidelines</strong>, including semantic HTML, ARIA attributes, keyboard navigation, and color contrast adherence. Demonstrated experience with accessibility testing tools Axe, Lighthouse, and various screen readers.',
  },
  {
    id: 4,
    headline: 'Performance Optimization & Scalability',
    description: 'Implementation of performance optimization techniques, including <strong>lazy loading, code splitting, and efficient data handling</strong>. Experience with performance monitoring tools such as Google PageSpeed Insights, WebPageTest, Lighthouse optimization strategies. Proven ability to write code that scales to large user bases and complex data structures.',
  },
  {
    id: 5,
    headline: 'Prototyping & Feasibility Analysis',
    description: 'Ability to translate design prototypes (Figma, Sketch, etc.) into <strong>functional code prototypes for feasibility testing and validation</strong>. Experience with identifying technical constraints early in the design process and communicating them effectively to design and product teams. Proven ability to create code prototypes that reflect design system components.',
  },
  {
    id: 6,
    headline: 'Backend Integration & API Interaction',
    description: 'Experience <strong>integrating front-end interfaces with backend REST APIs</strong>. Proven ability to handle data exchange, error handling, and data validation. Experience with Ruby on Rails.',
  },
  {
    id: 7,
    headline: 'Testing & Quality Assurance',
    description: 'Experience with <strong>unit testing, integration testing, and end-to-end testing</strong> using Jest, Cypress, etc. Proven ability to implement automated testing strategies and ensure code quality.',
  },
  {
    id: 8,
    headline: 'Version Control & Collaboration',
    description: 'Expertise in using Git for version control and <strong>collaborative development</strong>. Proven ability to work effectively in a team environment <strong>using Agile methodologies</strong>.',
  },
  {
    id: 9,
    headline: "Need More Details?",
    description: 'If you need more details about my experience, I can provide a <strong>comprehensive list of projects</strong> I have worked on, including links to live demos and GitHub repositories.',
  }
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
      <div class="md:-mx-6">
        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-0.5 md:divide-x divide-gray-100">
          <li
            v-for="(item, index) in capabilities"
              :key="item.id"
              class="space-y-4 md:p-6 md:nth-[n+3]:border-t lg:nth-[3]:border-t-0 lg:nth-[n+4]:border-t border-gray-100"
              >
            <div
              class="prose">
              <h2 class="text-balance">{{ item.headline }}</h2>
              <p v-html="item.description"></p>
            </div>
          </li>
        </ul>
      </div>
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
