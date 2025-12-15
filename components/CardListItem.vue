<script setup>
import { motion } from 'motion-v'
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <motion.li
    class="space-y-4"
    :whilePress="{ y: 4 }"
    v-for="item in props.data"
    :key="item.slug"
    >
    <div class="prose rounded-lg relative group">
      <AnimateImage
        v-if="item.image"
        :src="item.image"
        :alt="item.meta.image_alt"
        :scaleY="0.75"
        class="mb-4"
      />
      <div class="prose">
        <pill class="mb-4" v-if="item.headline" :pill="item.headline"></pill>
        <CardHeader class="mb-2.5">
          {{ item.title }}
        </CardHeader>
        <p v-html="item.description"></p>
      </div>
      <NuxtLink :to="item.to || `/projects/${item.slug}/`"
      class="absolute hover:border-0 focus:outline-0 not-prose border-0 inset-0 group-hover:border-0 group-hover:outline-4 group-hover:outline-offset-6 group-hover:outline-blue-100 focus:ring-4 focus:ring-blue-100 focus:ring-offset-6 rounded-lg transition-all duration-150 ease-in-out">
      <span class=" sr-only">{{
          item.title
        }}</span>
      </NuxtLink>
    </div>
  </motion.li>
</template>
