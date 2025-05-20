<script setup>
const props = defineProps({
  pill: {
    type: String,
    required: false
  },
  pillIcon: {
    type: String,
    required: false
  }
})
</script>
<template>
  <div class="space-y-6">
    <template v-if="pill">
      <span class="inline-flex gap-0.5 items-center font-semibold bg-neutral-900 text-neutral-100 text-xs tracking-wider rounded-full py-0.5"
        :class="pillIcon ? 'pl-1 pr-2' : 'px-2'"
      >
        <Icon v-if="pillIcon" :name="pillIcon" size="1.2em" />
        {{ pill }}
      </span>
    </template>
    <div class="prose">
      <h1 id="page-header" class="text-3xl lg:text-5xl text-balance capitalize">
        <slot />
      </h1>
    </div>
  </div>
</template>
