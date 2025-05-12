<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
})
const formatTag = (tag) => {
  return tag.replace('-light', '').replace('js', 'JS')
  .replace('css', 'CSS')
  .replace('alpine', 'Alpine ')
  .replace('aws', 'AWS')
  .replace('github', 'GitHub')
  .replace('html', 'HTML')
  .replace('htmx', 'HTMX')
  .replace('javascript', 'JavaScript')
  .replace('jquery', 'jQuery')
  .replace('less', 'LESS')
  .replace('markdown', 'Markdown')
  .replace('materialui', 'Material UI')
  .replace('next', 'Next ')
  .replace('npm', 'NPM')
  .replace('nuxt', 'Nuxt ')
  .replace('svg', 'SVG')
  .replace('typescript', 'TypeScript')
  .replace('rails', 'Ruby on Rails')
  .replace('styledcomponents', 'Styled Components')
  .replace('tailwind', 'Tailwind ')
  .replace('vue', 'Vue ')
  .replace('vscode', 'VS Code ')
  .replace('xd', 'Adobe XD')
}
</script>
<template>
  <ul class="flex gap-3 not-prose flex-wrap justify-between">
    <li class="flex size-[2em]" v-for="(tag, index) in tags" :key="index">
      <Tooltip :id="tag" :text="formatTag(tag)">
        <Icon
          :name="`skill-icons:${tag}`"
          size="2em"
          class="grayscale hover:grayscale-0 transition-all duration-150 shrink-0"
        />
      </Tooltip>
    </li>
  </ul>
</template>
