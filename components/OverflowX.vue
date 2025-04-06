<script setup>
const overflowContainer = ref(null)

const handleScroll = () => {
  const container = overflowContainer.value
  if (!container) return

  const navEl = container.closest('nav')
  if (!navEl) return

  // Show `.before` if NOT at far-left edge
  if (container.scrollLeft > 0) {
    navEl.classList.add('before')
  } else {
    navEl.classList.remove('before')
  }

  // Show `.after` if horizontally overflowing AND not near far-right edge
  // Using '-1' (or '-2') to counter floating point/rounding issues
  if (
    container.scrollWidth > container.clientWidth &&
    container.scrollLeft + container.clientWidth < container.scrollWidth - 1
  ) {
    navEl.classList.add('after')
  } else {
    navEl.classList.remove('after')
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
  <component ref="nav" is="nav" class="overflow-wrapper relative max-w-full">
    <div class="sr-only">Categories</div>
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
  width: 4rem;
  z-index: 2;
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
