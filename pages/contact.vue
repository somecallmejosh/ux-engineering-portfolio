<script setup lang="ts">
useSeoMeta({
  title: 'Contact Me',
  ogTitle: 'Contact Me',
  description: 'Contact me for enterprise UX engineering and consulting services.',
  ogDescription: 'Contact me for enterprise UX engineering and consulting services.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp'
})
</script>

<template>
  <div class="space-y-12">
    <div class="prose">
      <PageHeader pill="Contact Me">
        Let's Build Something Great Together!
      </PageHeader>
    </div>
    <div class="grid lg:grid-cols-2 gap-6 lg:gap-24 lg:items-center">
      <div class="prose order-2 lg:order-1">
        <p>So, you're looking for someone who can really wrangle the front-end, make your user interfaces sing, and build things that can grow without falling apart? That's pretty much my jam!</p>
        <p>
          Need someone to steer the ship on your front-end projects and make sure everything's sailing smoothly?
          Your user interface feels a bit like a tangled mess of wires? I can help you design a solid, easy-to-understand structure that makes future development a breeze.
          Want to build a set of reusable UI pieces that are both beautiful and work like a charm, no matter how big your project gets? And make sure everyone can use them, no matter how they access your stuff? <strong>I can help!</strong>
        </p>

      </div>
      <div class="order-1 lg:order-2">
        <AnimateImage
          src="https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp"
          class="w-full h-auto mb-4 rounded-lg border border-neutral-100 grayscale"
          alt="UX Engineer presenting to business people"
          :scaleY="0.75"
        />
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-2xl">How to Reach Me</h2>
      <ul class="not-prose space-y-4">
        <li class="flex items-center gap-1"><Icon name="skill-icons:gcp-dark" /> josh@thebrileys.com</li>
        <li class="flex items-center gap-1"><Icon name="skill-icons:linkedin" />/somecallmejosh</li>
        <li class="flex items-center gap-1"><Icon name="skill-icons:twitter" />/joshuabriley</li>
      </ul>
    </div>
  </div>
</template>
