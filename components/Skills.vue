<!--
  Skills — Displays a grid of technology skill icons with accessible labels.

  No props. Renders all entries from utils/skillIcons.ts.
  Each icon has aria-hidden="true" and a visually hidden label via sr-only.
-->
<script setup lang="ts">
const skillIcons = SKILL_ICONS
</script>
<template>
  <fieldset class="space-y-2 border pt-1 px-4 pb-2 rounded-lg border-neutral-200">
    <legend class="px-2 font-medium ">Languages & Resources Used Across Projects</legend>
    <ul class="flex flex-wrap gap-1 not-prose">
      <li v-for="(item, index) in skillIcons" :key="index">
        <Icon :name="item.name" size="1.25em" aria-hidden="true" />
        <span class="sr-only">{{ item.label }}</span>
      </li>
    </ul>
  </fieldset>
</template>
