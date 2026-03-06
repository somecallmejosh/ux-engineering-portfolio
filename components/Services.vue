<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'summary' | 'full' }>(), { variant: 'summary' })

const { services, testimonials } = useServices()
</script>

<template>
  <section class="space-y-8" aria-labelledby="services-heading">
    <div class="prose">
      <h2 id="services-heading" class="text-2xl">Work with me</h2>
      <p>Three focused engagements at fixed scope and price. You know exactly what you're getting before we start.</p>
    </div>

    <!-- Summary: 3-up grid -->
    <ul id="condensed" v-if="props.variant === 'summary'"
      class="not-prose grid md:grid-cols-3 gap-6 md:gap-y-5 list-none p-0 m-0 mb-6">
      <li v-for="service in services" :key="service.id"
        class="service-card rounded-lg border-2 border-neutral-200 bg-white p-6 prose">
        <div class="space-y-0.5">
          <h3 class="text-xl leading-snug">{{ service.label }}</h3>
          <p class="price text-3xl leading-none mt-1">{{ service.price }}</p>
        </div>

        <div class="space-y-1">
          <p class="font-semibold tracking-wider">Who it's for</p>
          <p class="leading-relaxed">{{ service.audience }}</p>
        </div>

        <div class="space-y-3">
          <p class="font-semibold tracking-wider">What you get</p>
          <p class="leading-relaxed">{{ service.outcome }}</p>
        </div>

        <ul class="mt-2 space-y-1.5 list-none p-0">
          <li v-for="item in service.includes" :key="item" class="flex gap-2 items-start">
            <Icon name="ph:check" class="shrink-0 mt-0.5 text-neutral-400" size="1rem" />
            {{ item }}
          </li>
        </ul>

        <p class="font-semibold tracking-wider">
          {{ service.timeline }} &middot; {{ service.format }}
        </p>

        <div class="not-prose">
          <ButtonLink to="/contact/">Get in touch</ButtonLink>
        </div>
      </li>
    </ul>

    <!-- Full: single-column with testimonials interleaved -->
    <ul id="expanded" v-else class="not-prose grid md:grid-cols-3 gap-6 md:gap-y-5 list-none p-0 m-0 mb-6">
      <li v-for="(service, i) in services" :key="service.id"
        class="max-w-none rounded-lg border-2 border-neutral-200 bg-white p-8 self-stretch flex flex-grow flex-1 expanded-service-card">

        <div class="space-y-2">
          <h3 class="text-2xl leading-snug">{{ service.label }}</h3>
          <span class="price text-3xl leading-none">{{ service.price }}</span>
        </div>

        <dl class="grid gap-6 not-prose">
          <div>
            <dt class="font-semibold tracking-wider mb-1">Turnaround</dt>
            <dd>{{ service.timeline }}</dd>
          </div>
          <div>
            <dt class="font-semibold tracking-wider mb-1">Delivered as</dt>
            <dd class="text-pretty">{{ service.deliveredAs }}</dd>
          </div>
        </dl>

        <div class="space-y-1">
          <p class="font-semibold tracking-wider">Who it's for</p>
          <p class="leading-relaxed">{{ service.audience }} {{ service.audienceDetail }}</p>
        </div>

        <div class="space-y-3">
          <p class="font-semibold tracking-wider">What you get</p>
          <p class="leading-relaxed">{{ service.outcomeFull }}</p>
          <ul class="space-y-1.5 list-none p-0 m-0">
            <li v-for="item in service.includesFull" :key="item" class="flex gap-2 items-start">
              <Icon name="ph:check" class="shrink-0 mt-0.5 text-neutral-400 translate-y-1" size="1rem" />
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="space-y-1">
          <p class="font-semibold tracking-wider">Why teams pay for this</p>
          <p class="leading-relaxed">{{ service.insight }}</p>
        </div>

        <div>
          <blockquote v-if="testimonials[i]" class="border-l-4 border-neutral-200 pl-6 prose max-w-none">
            <p class="italic">{{ testimonials[i].quote }}</p>
            <cite>{{ testimonials[i].author }}, {{ testimonials[i].role }}</cite>
          </blockquote>
        </div>

        <div class="not-prose mt-auto">
          <ButtonLink to="/contact/">Get in touch</ButtonLink>
        </div>
      </li>
    </ul>

    <trust-bar class="mb-6">Component libraries shipped at <strong>Travelers</strong>, <strong>Berkshire Hathaway
        Specialty Insurance</strong>, and <strong>America's Test Kitchen</strong>.</trust-bar>
  </section>
</template>

<style scoped>
dd {
  text-wrap: pretty;
}

.price {
  font-family: "DM Serif Text", serif;
}

.service-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.expanded-service-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  gap: 2rem;
}

@media (min-width: 768px) {
  .service-card {
    display: grid;
    grid-row: span 6;
    grid-template-rows: subgrid;
  }

  .expanded-service-card {
    height: 100%;
    display: grid;
    grid-row: span 7;
    grid-template-rows: subgrid;
  }
}
</style>
