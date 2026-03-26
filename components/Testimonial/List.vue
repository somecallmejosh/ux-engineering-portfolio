<script setup lang="ts">
const testimonials = useState(() => getRandomTestimonials(2))

</script>

<template>
  <section aria-label="Testimonials" class="not-prose space-y-6">
    <div v-for="(item, index) in testimonials" :key="index" class="not-prose">
      <div
        class="flex gap-4 group hover:bg-blue-50 relative -m-2 p-2 rounded-lg transition-colors duration-150 ease-in-out">
        <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-full shrink-0" width="64" height="64"
          loading="lazy" />
        <div>
          <h2>{{ item.name }}</h2>
          <div>
            <small class="flex items-center gap-1  text-pretty ">{{ item.title }}</small>
            <small class="block  text-pretty">
              <Icon name="skill-icons:linkedin" size="0.75em" class="grayscale opacity-50" /> {{ item.company }}
            </small>
          </div>
        </div>

        <a class="absolute inset-0 group ring-blue-100 outline-0 focus:ring-2 focus:ring-offset-2 rounded-lg"
          :href="item.linkedIn" target="_blank" rel="noopener noreferrer">
          <div class="sr-only">View {{ item.name }}'s LinkedIn Profile</div>
          <Icon name="ph:arrow-square-out-fill" size="1em"
            class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 ease-in-out text-blue-600" />
        </a>
      </div>
      <div class="pl-8">
        <div class="border-l-4 border-neutral-100 pl-4 mt-6 relative">
          <div>
            <Icon name="ph:quotes-fill" size="10em" class="text-neutral-100 absolute -top-12 right-0" />
          </div>
          <div class="prose relative" v-html="item.snippet"></div>
        </div>
      </div>
    </div>
  </section>
</template>
