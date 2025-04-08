<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'Languages & Resources Used in this Project',
  },
})
const formatTag = (tag) => {
  return tag.replace('-light', '').replace('js', 'JS')
  .replace('css', 'CSS')
  .replace('aws', 'AWS')
  .replace('github', 'GitHub')
  .replace('html', 'HTML')
  .replace('htmx', 'HTMX')
  .replace('javascript', 'JavaScript')
  .replace('typescript', 'TypeScript')
  .replace('rails', 'Ruby on Rails')
  .replace('styledcomponents', 'Styled Components')
}
</script>
<template>
  <ul class="flex gap-2 not-prose flex-wrap">
    <li v-for="(tag, index) in tags" :key="index">
      <Tooltip :id="tag" :text="formatTag(tag)">
        <Icon
          :name="`skill-icons:${tag}`"
          size="1.5em"
          class="grayscale hover:grayscale-0 transition-all duration-150 shrink-0"
        />
      </Tooltip>
    </li>
  </ul>
</template>
