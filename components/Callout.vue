<template>
  <div class="bg-blue-50/50 px-4 py-6 rounded-lg border-l-4 border-blue-300/50 flex gap-2 prose">
    <div class="shrink-0 translate-y-0.5">
      <Icon name="ph:dots-nine" size="1.5rem" class="text-blue-400 no-shrink" />
    </div>
    <div class="prose prose-headings:text-neutral-900 prose-p:leading-relaxed prose-p:text-neutral-900">
      <slot />
    </div>
  </div>
</template>
