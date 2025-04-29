<script setup>
useSeoMeta({
  title: 'Contact Me',
  ogTitle: 'Contact Me',
  description: 'Contact me for enterprise UX engineering and consulting services.',
  ogDescription: 'Contact me for enterprise UX engineering and consulting services.',
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp'
})

const formData = ref({
  name: '',
  email: '',
  message: ''
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
          Your user interface feels a bit like a tangled mess of wires? <i>I can help you design a solid, easy-to-understand structure that makes future development a breeze</i>.
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

    <div class="space-y-4 grid lg:grid-cols-2 lg:gap-24 gap-12 lg:items-center">
      <div class="space-y-4">
        <h2 class="text-2xl">Drop Me a Line</h2>
        <form netlify data-netlify-honeypot="bot-field" name="contact-form" action="/contact-submit" class="space-y-4" method="POST">
          <input type="hidden" name="bot-field" />
          <div class="space-y-1">
            <div class="flex justify-between gap-1">
              <label for="name">Name</label>
              <small>Required</small>
            </div>
            <input name="name" type="text" required class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          </div>
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="space-y-1">
              <div class="flex justify-between gap-1">
                <label for="email">Email</label>
                <small>Required</small>
              </div>
              <input name="email" type="email" required class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>
            <div class="space-y-1">
              <label for="phone">Phone Number</label>
              <input name="phone" type="tel" class="bg-white w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>
          </div>
          <div class="space-y-1">
            <div class="flex justify-between gap-1">
              <label for="message">Message</label>
              <small>Required</small>
            </div>
            <textarea name="message" required class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          </div>
          <button type="submit" class="font-semibold px-6 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-400">Send Message</button>
        </form>
      </div>
      <div class="space-y-4 lg:space-y-8">
        <div class="prose">
          <h3 class="text-2xl">Or Find Me On The Socials</h3>
          <p>Admittendly, I don't post on social sites all that often, but I do receive notifcations from them when folks send me messages.</p>
        </div>
        <ul class="not-prose space-y-4">
          <li class="flex items-center gap-1"><Icon name="skill-icons:linkedin" size="1.5em" /><a href="https://linkedin.com/somecallmejosh" class="hover:underline" target="_blank" rel="noreferrer nofollow">/somecallmejosh</a></li>
          <li class="flex items-center gap-1"><Icon name="skill-icons:twitter" size="1.5em" /><a href="https://twitter.com/joshuabriley" class="hover:underline" target="_blank" rel="noreferrer nofollow">/joshuabriley</a></li>
        </ul>
      </div>
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
