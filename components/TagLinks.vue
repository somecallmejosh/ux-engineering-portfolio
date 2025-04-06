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
  <div class="relative space-y-1.5 border-l-4 border-neutral-100 pl-4">
    <p class="font-medium">Tools & resources used on this project:</p>
    <div class="w-full overflow-x-auto">
      <ul class="flex gap-2 not-prose">
        <li v-for="(tag, index) in tags" :key="index">
          <Icon
            :name="`skill-icons:${tag}`"
            size="1.5em"
          />
        </li>
      </ul>
    </div>
    <div class="absolute z-10 inset-0 bg-gradient-to-r from-transparent from-90% to-white pointer-events-none" />
  </div>
</template>
