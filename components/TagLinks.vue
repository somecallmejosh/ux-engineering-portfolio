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
})
</script>
<template>
  <ul class="flex flex-wrap gap-2 not-prose">
    <li v-for="(tag, index) in tags" :key="index">
      <Icon
        :name="`skill-icons:${tag}`"
        size="1.75em"
      />
    </li>
  </ul>
</template>
