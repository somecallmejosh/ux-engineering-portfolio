<script setup lang="ts">
const testimonials = useState(() => getRandomTestimonials(2))

</script>

<template>
  <section aria-label="Testimonials">
    <ul class="list-none p-0">
      <li v-for="item in testimonials" :key="item.id">
        <div class=" prose">
          <blockquote class="flex gap-4 py-0">
            <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-full shrink-0" width="64" height="64"
              loading="lazy" />
            <div>
              <p class="p-0 m-0">{{ item.snippet }}</p>
              <cite>{{ item.name }}, {{ item.title }}<br>{{ item.company }}</cite>
            </div>
          </blockquote>
        </div>
      </li>
    </ul>
  </section>
</template>
