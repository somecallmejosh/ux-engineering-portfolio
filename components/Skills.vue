<script setup>
const skillIcons = [
  {
    name: 'skill-icons:html',
  },
  {
    name: 'skill-icons:css',
  },
  {
    name: 'skill-icons:sass',
  },
  {
    name: 'skill-icons:styledcomponents'
  },
  {
    name: 'skill-icons:tailwindcss-light',
  },
  {
    name: 'skill-icons:bootstrap',
  },
  {
    name: 'skill-icons:typescript',
  },
  {
    name: 'skill-icons:typescript-light',
  },
  {
    name: 'skill-icons:javascript-light',
  },
  {
    name: 'skill-icons:javascript',
  },
  {
    name: 'skill-icons:alpinejs-light',
  },
  {
    name: 'skill-icons:htmx-light',
  },
  {
    name: 'skill-icons:jquery',
  },
  {
    name: 'skill-icons:vuejs-light',
  },
  {
    name: 'skill-icons:nuxtjs-light',
  },
  {
    name: 'skill-icons:pinia-light',
  },
  {
    name: 'skill-icons:illustrator-light',
  },

  {
    name: 'skill-icons:github-light',
  },
  {
    name: 'skill-icons:react-light',
  },
  {
    name: 'skill-icons:nextjs-light',
  },
  {
    name: 'skill-icons:d3-light',
  },
  {
    name: 'skill-icons:vite-light',
  },
  {
    name: 'skill-icons:vitest-light',
  },
  {
    name: 'skill-icons:cypress-light',
  },
  {
    name: 'skill-icons:ruby',
  },
  {
    name: 'skill-icons:rails',
  },

  {
    name: 'skill-icons:figma-light',
  },
  {
    name: 'skill-icons:illustrator',
  },

  {
    name: 'skill-icons:github-light',
  },
  {
    name: 'skill-icons:aws-light'
  },
  {
    name: 'skill-icons:heroku',
  },
  {
    name: 'skill-icons:netlify-light',
  },
]
</script>
<template>
  <ul class="flex flex-wrap gap-2 not-prose">
    <li v-for="(item, index) in skillIcons"
      :key="index">
      <Icon :name="item.name" size="1.75em" />
    </li>
  </ul>
</template>
