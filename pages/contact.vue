<script setup lang="ts">
useSeoMeta({
  title: 'Contact Me',
  ogTitle: 'Contact Me',
  description: 'Contact me for enterprise UX engineering and consulting services.',
  ogDescription: 'Contact me for enterprise UX engineering and consulting services.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317571/josh-portfolio/assets_task_01jrgpq4pdefgrxbb6xbx72yyw_img_0.webp'
})
</script>

<template>
  <div class="prose">
    <h1 class="font-[400] flex items-center gap-1">
      Contact Me
    </h1>

    <h2>Enterprise UX Engineering & Consulting</h2>
    <AnimateImage
      src="https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317571/josh-portfolio/assets_task_01jrgpq4pdefgrxbb6xbx72yyw_img_0.webp"
      class="w-full h-auto mb-4 rounded-lg border border-neutral-100 grayscale"
      alt="UX Engineer presenting to business people"
      :scaleY="0.75"
    />
    <p>
      <strong>For organizations seeking an experienced UX engineer to lead front-end development</strong>, provide
      expert consultation on
      UI architecture, or implement scalable and accessible component libraries, I offer specialized services tailored
      to enterprise requirements. I collaborate with teams that prioritize clear communication, efficient execution, and
      measurable outcomes.
    </p>

    <h2>How to Reach Me</h2>
    <ul class="not-prose">
      <li class="flex items-center gap-1"><Icon name="skill-icons:gcp-dark" /> josh@thebrileys.com</li>
      <li class="flex items-center gap-1"><Icon name="skill-icons:linkedin" />/somecallmejosh</li>
      <li class="flex items-center gap-1"><Icon name="skill-icons:twitter" />/joshuabriley</li>
    </ul>
  </div>
</template>
