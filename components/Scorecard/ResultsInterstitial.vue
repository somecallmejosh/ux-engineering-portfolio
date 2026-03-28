<script setup lang="ts">
const props = defineProps<{
  resultsUrl: string
}>()

const emit = defineEmits<{
  cancel: []
}>()

// ─── Staggered text sequence ──────────────────────────────────────────────────

const steps = [
  'Scoring 5 dimensions...',
  'Identifying your weakest area...',
  'Building your recommendation...',
  'Redirecting to your results...',
]

const visibleCount = ref(1)
const timers: ReturnType<typeof setTimeout>[] = []

onMounted(() => {
  timers.push(setTimeout(() => { visibleCount.value = 2 }, 700))
  timers.push(setTimeout(() => { visibleCount.value = 3 }, 1400))
  timers.push(setTimeout(() => { visibleCount.value = 4 }, 2100))
  timers.push(setTimeout(() => { navigateTo(props.resultsUrl) }, 2800))
})

onUnmounted(() => {
  timers.forEach(clearTimeout)
})

function cancel() {
  timers.forEach(clearTimeout)
  emit('cancel')
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm px-6">
    <div class="flex flex-col items-center gap-8 max-w-sm w-full text-center">
      <!-- Animated indicator -->
      <div class="flex items-center gap-1.5" aria-hidden="true">
        <span class="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" style="animation-delay: 0ms" />
        <span class="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" style="animation-delay: 200ms" />
        <span class="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" style="animation-delay: 400ms" />
      </div>

      <!-- Staggered steps -->
      <div class="space-y-3 w-full" role="status" aria-live="polite" aria-atomic="false">
        <p
          v-for="(step, i) in steps"
          :key="step"
          class="text-lg transition-all duration-500"
          :class="i < visibleCount - 1
            ? 'text-neutral-400'
            : i === visibleCount - 1
              ? 'text-neutral-900 font-medium'
              : 'opacity-0 select-none'"
        >
          {{ step }}
        </p>
      </div>

      <!-- Cancel -->
      <button
        type="button"
        class="text-sm text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer mt-4"
        @click="cancel"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
