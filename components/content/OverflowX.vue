<script setup>
const overflowContainer = ref(null)

const handleScroll = () => {
  const container = overflowContainer.value
  if (!container) return

  const wrapperEl = container.closest('div.overflow-wrapper')
  if (!wrapperEl) return

  // Show `.before` if NOT at far-left edge
  if (container.scrollLeft > 0) {
    wrapperEl.classList.add('before')
  } else {
    wrapperEl.classList.remove('before')
  }

  // Show `.after` if horizontally overflowing AND not near far-right edge
  // Using '-1' (or '-2') to counter floating point/rounding issues
  if (
    container.scrollWidth > container.clientWidth &&
    container.scrollLeft + container.clientWidth < container.scrollWidth - 1
  ) {
    wrapperEl.classList.add('after')
  } else {
    wrapperEl.classList.remove('after')
  }
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
  <component ref="overflowWrapper" is="div" class="overflow-wrapper relative w-full max-w-full">
    <div class="w-full max-w-full overflow-visible">
      <div
        ref="overflowContainer"
        class="overflow-container max-w-full overflow-auto py-4"
      >
        <slot />
      </div>
    </div>
  </component>
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
