<template>
  <ol class="not-prose space-y-2 divide-y divide-neutral-200">
    <li class="pb-2">
      <div class="prose lg:flex gap-2 items-baseline">
        <p class="font-semibold mb-0">System feels inconsistent?</p>
        <span class="hidden lg:inline-flex">
          <Icon name="ph:arrow-right" size="0.9rem" />
        </span>
        <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/audit/">Design System Audit.
        </NuxtLink>
      </div>
    </li>
    <li class="pb-2">
      <div class="prose lg:flex gap-2 items-baseline">
        <p class="font-semibold mb-0">Foundation is weak or patchy?</p>
        <span class="hidden lg:inline-flex">
          <Icon name="ph:arrow-right" size="0.9rem" />
        </span>
        <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/starter/">Component Library Starter.
        </NuxtLink>
      </div>
    </li>
    <li class="pb-2">
      <div class="prose lg:flex gap-2 items-baseline">
        <p class="font-semibold mb-0">Design and dev are out of sync?</p>
        <span class="hidden lg:inline-flex">
          <Icon name="ph:arrow-right" size="0.9rem" />
        </span>
        <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/workflow/">Design-to-Code Workflow.
        </NuxtLink>
      </div>
    </li>
  </ol>
</template>
