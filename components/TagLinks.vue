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
</script>
<template>
  <ul class="flex gap-2 not-prose flex-wrap">
    <li v-for="(tag, index) in tags" :key="index">
      <Tooltip :id="tag" :text="tag.replace('-light', '').replace('js', ' JS')">
        <Icon
          :name="`skill-icons:${tag}`"
          size="1.5em"
          class="grayscale hover:grayscale-0 transition-all duration-150"
        />
      </Tooltip>
    </li>
  </ul>
</template>
