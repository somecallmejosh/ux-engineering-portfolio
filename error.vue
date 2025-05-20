<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <div v-if="error" class="prose">
      <PageHeader :pill="error.statusMessage" pillIcon="ph:cloud-x-bold">
        Oops! Something went wrong.
      </PageHeader>
      <p>I apologize for the inconvenience. <i>The page you're looking for doesn't exist or has been moved</i>. If you're looking for something specific, please <NuxtLink to="/contact">send me a note</NuxtLink> and I'll do my best to help. You can also use the main navigation to explore other sections of the site.</p>
      <img src="https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1747757849/josh-portfolio/assets_task_01jvq7n68ee2ctfhme5cdkatts_1747757801_img_0.webp" alt="Error Image" />
    </div>
  </NuxtLayout>
</template>
