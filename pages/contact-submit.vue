<script setup>
useSeoMeta({
  title: 'Thank You',
  ogTitle: 'Thank You',
  description: 'Thank you for reaching out! Your message is on its way to my inbox.',
  ogDescription: 'Thank you for reaching out! Your message is on its way to my inbox.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp'
})
</script>

<template>
  <div class="space-y-12">
    <div class="prose">
      <PageHeader pill="Thank You">
        Thanks for reaching out!
      </PageHeader>
      <p>Your message is officially on its way to my inbox. I'm genuinely glad you took the time to get in touch. If you're here about a project, collaboration, question, or even just to say hi—awesome. I'll do my best to get back to you soon.</p>

      <p>
        In the meantime, feel free to poke around the rest of the site.
        (And if you find any weird typos or broken links... consider it a bonus bug bounty.)
      </p>

      <p>
        Talk soon!<br>
        — Josh
      </p>
    </div>
  </div>
</template>
<style scoped>
label {
  font-weight: 600;
  display: block;
}
button {
  cursor: pointer;
}
</style>
