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
      <form data-netlify="true" method="POST" name="contact">
        <input type="hidden" name="form-name" value="contact">
        <input type="text" name="name">
        <input type="email" name="email">
        <textarea name="message"></textarea>
        <input type="tel" name="phone">
        <button type="submit">Submit</button>
      </form>
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
