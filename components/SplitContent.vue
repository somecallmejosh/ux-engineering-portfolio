<template>
  <div class="flex flex-col lg:flex-row gap-12">
    <div class="prose lg:flex-1">
      <slot name="primary" />
    </div>
    <div class="prose lg:flex-1">
      <slot name="secondary" />
    </div>
  </div>
</template>
