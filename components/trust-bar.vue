<template>
  <div class="border border-blue-100 p-2 py-3 rounded-lg not-prose flex gap-2">
    <div class="shrink-0">
      <Icon name="ph:users" size="1.25rem" class="text-blue-400 no-shrink" />
    </div>
    <div class="space-y-2 font-medium text-sm text-pretty ">
      <slot />
    </div>
  </div>
</template>
