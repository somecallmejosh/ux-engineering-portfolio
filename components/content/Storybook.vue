<template>
  <div>
    <p class="text-sm">Storybook Example:</p>
    <iframe width="100%" :height="props.height ? props.height : undefined" :src="`${url}&nav=0&toolbar=0`"
      :title="title" :class="iframeClass"></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'blog'
  },
  height: {
    type: String,
    required: false,
  }
});

// compose class for iframe height
const iframeClass = computed(() => {
  return props.height ? `w-full border border-neutral-200 h-[${props.height}]` : 'w-full aspect-video border border-neutral-200';
});
</script>
