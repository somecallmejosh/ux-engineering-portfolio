<!--
  ButtonLink — Styled NuxtLink rendered as a pill-shaped button.

  Props:
    to      (string, required)             — Route to navigate to.
    variant ('base' | 'inverse', optional) — Visual style. Defaults to 'base' (dark fill).
                                             'inverse' renders an outlined style.
-->
<script setup lang="ts">
const props = defineProps<{
  to: string
  variant?: 'base' | 'inverse'
}>()

const className: Record<string, string> = {
  base: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-700 focus:ring-blue-400',
  inverse: 'border-neutral-900 hover:bg-neutral-100 focus:ring-blue-400',
}
</script>
<template>
  <NuxtLink :to="props.to"
    class="not-prose inline-flex no-underline border items-center gap-1.5 font-medium rounded-full pr-4 pl-5 py-2 justify-center hover:gap-2"
    :class="className[props.variant ?? 'base']">
    <slot />
    <Icon name="ph:caret-right-bold" size="0.9rem" />
  </NuxtLink>
</template>
<style scoped>
a {
  text-decoration: none !important;
}
</style>
