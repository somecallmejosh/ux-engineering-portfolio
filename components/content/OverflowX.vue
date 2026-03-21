<script setup>
const overflowContainer = ref(null)
const overflowWrapper = ref(null)
const showBefore = ref(false)
const showAfter = ref(false)

const handleScroll = () => {
  const container = overflowContainer.value
  if (!container) return

  showBefore.value = container.scrollLeft > 0

  showAfter.value =
    container.scrollWidth > container.clientWidth &&
    container.scrollLeft + container.clientWidth < container.scrollWidth - 1
}

onMounted(() => {
  const container = overflowContainer.value
  if (!container) return

  container.addEventListener('scroll', handleScroll)
  handleScroll() // Check on mount
})

onBeforeUnmount(() => {
  const container = overflowContainer.value
  if (container) {
    container.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <!-- The nav element has .overflow-wrapper for the pseudo-elements -->
  <div ref="overflowWrapper" class="overflow-wrapper relative w-full max-w-full"
    :class="{ before: showBefore, after: showAfter }">
    <div class="w-full max-w-full overflow-visible">
      <div ref="overflowContainer" class="overflow-container max-w-full overflow-auto py-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-wrapper::before,
.overflow-wrapper::after {
  content: '';
  height: 100%;
  position: absolute;
  top: 0;
  width: 2rem;
  z-index: 2;
  pointer-events: none;
}

/* Show the left gradient when .before is applied */
.overflow-wrapper.before::before {
  background: linear-gradient(to left, rgba(255, 255, 255, 0), #fff);
  left: 0;
}

/* Show the right gradient when .after is applied */
.overflow-wrapper.after::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
  right: 0;
}

::-webkit-scrollbar {
  display: none;
}
</style>
