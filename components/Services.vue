<script setup lang="ts">
interface Service {
  slug: string
  label: string
  tagline?: string
  price?: string
  timeline?: string
}

defineProps<{ services: Service[] }>()
</script>

<template>
  <section class="space-y-8">
    <div class="prose">
      <h2>Three focused ways to fix your UI system</h2>
      <p>Fixed scope. Fixed price. No surprises.</p>
    </div>

    <ul class="not-prose grid md:grid-cols-3 gap-6 list-none p-0 m-0">
      <li v-for="service in services" :key="service.slug"
        class="service-card rounded-lg border-2 border-neutral-200 bg-white p-6">
        <div class="space-y-3">
          <p class="service-label text-xs font-semibold tracking-widest uppercase text-neutral-500">{{ service.label }}
          </p>
          <p v-if="service.tagline" class="service-tagline text-xl leading-snug font-semibold">{{ service.tagline }}</p>
        </div>

        <div class="flex items-baseline gap-3">
          <span v-if="service.price" class="price text-3xl">{{ service.price }}</span>
          <span v-if="service.timeline" class="text-sm text-neutral-500">· {{ service.timeline }}</span>
        </div>

        <div>
          <ButtonLink :to="`/services/${service.slug}/`">See what's included</ButtonLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.price {
  font-family: "DM Serif Text", serif;
}

.service-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .service-card {
    display: grid;
    grid-row: span 3;
    grid-template-rows: subgrid;
  }
}
</style>
