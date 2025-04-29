<script setup>
useSeoMeta({
  title: 'Thank You',
  ogTitle: 'Thank You',
  description: 'Your message has been sent successfully.',
  ogDescription: 'Your message has been sent successfully.',
})
</script>

<template>
  <div class="space-y-12">
    <div class="prose">
      <PageHeader pill="Thank you">
        Your message has been sent successfully.
      </PageHeader>
    </div>
    <div class="prose bg-neutral-50 p-6 rounded-lg">
      <p>If you need to reach me urgently, please feel free to contact me via email at <a href="mailto:josh@thebrileys.com">josh@thebrileys.com</a> or by phone at <a href="tel:8602328250">860-232-8250</a>.</p>
      <p>Otherwise, feel free to poke around my <NuxtLink to="/blog">blog</NuxtLink> or have a look at some of my <NuxtLink to="/projects">recent projects</NuxtLink></p>
    </div>
  </div>
</template>
