<!--
  Callout — Decorative callout box for highlighting content on page-level layouts.

  No props. Renders slot content inside a styled box with an icon accent.
  For use in page templates (not Markdown). See content/CallOut.vue for the MDC variant.
-->
<template>
  <div class="bg-blue-50/50 px-4 py-6 lg:px-6 rounded-lg border-l-4 border-blue-300/50 prose">
    <div class="prose">
      <slot />
    </div>
  </div>
</template>
