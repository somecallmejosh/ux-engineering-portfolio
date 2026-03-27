<script setup>
const engagementSteps = useEngagementSteps()
</script>

<template>

  <ol class="not-prose grid lg:grid-cols-3 gap-6 list-none p-0 mb-4">
    <li v-for="(step, i) in engagementSteps" :key="i"
      class="rounded-lg border-2 border-neutral-200 bg-white p-6 flex flex-col gap-4">

      <div class="prose">
        <h3 class="text-lg">{{ step.title }}</h3>
        <p class="mb-4">{{ step.description }}</p>
        <ButtonLink :to="step.link">
          {{ step.cta }}
        </ButtonLink>
      </div>
    </li>
  </ol>
</template>
