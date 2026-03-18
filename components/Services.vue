<script setup lang="ts">
interface Service {
  slug: string
  label: string
  tagline?: string
  price?: string
  timeline?: string
}

defineProps<{ services: Service[] }>()

const phases = [
  { label: 'Phase 1 — Audit', summary: 'Find the problems.' },
  { label: 'Phase 2 — Build', summary: 'Fix the foundation.' },
  { label: 'Phase 3 — Align', summary: 'Fix how the team works.' },
]
</script>

<template>
  <section class="space-y-8">
    <div class="prose">
      <h2>A phased path to a better design system</h2>
      <p>Most teams start with an audit, then move into a component library or workflow improvements based on what we
        find.</p>
    </div>

    <ul class="not-prose grid md:grid-cols-3 gap-6 list-none p-0 m-0">
      <li v-for="(service, index) in services" :key="service.slug" class="service-card rounded-lg border-2 p-6"
        :class="index === 0 ? 'border-blue-200 bg-blue-50/50' : 'border-neutral-200 bg-white'">

        <div class="space-y-0.5">
          <p v-if="index === 0" class="text-xs font-semibold tracking-widest uppercase text-blue-700">
            Where every engagement begins
          </p>
          <p class="text-xs font-semibold tracking-widest uppercase"
            :class="index === 0 ? 'text-blue-800' : 'text-neutral-700'">
            {{ phases[index]?.label }}<br />{{ phases[index]?.summary }}
          </p>
        </div>

        <div class="space-y-3">
          <p class="service-label text-xs font-semibold tracking-widest uppercase text-neutral-700">{{ service.label }}
          </p>
          <p v-if="service.tagline" class="service-tagline text-xl leading-snug font-semibold">{{ service.tagline }}</p>
          <p v-if="index === 0" class="text-sm text-neutral-700 leading-relaxed">
            Before building anything new, you need to understand what's actually broken. In five business days, you get
            a clear, prioritized plan to fix your system.
          </p>
        </div>

        <div class="flex items-baseline gap-3">
          <span v-if="service.price" class="price text-3xl">{{ service.price }}</span>
          <span v-if="service.timeline" class="text-sm text-neutral-700">· {{ service.timeline }}</span>
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
    grid-row: span 4;
    grid-template-rows: subgrid;
  }
}
</style>
