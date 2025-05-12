<script setup>
import { motion, AnimatePresence } from 'motion-v'
const props = defineProps({
  links: {
    type: Object,
    required: true
  }
})

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleKeyDown = (event) => {
  const items = document.querySelectorAll('#toc-menue a')
  const currentIndex = Array.from(items).indexOf(document.activeElement)

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    const nextIndex = (currentIndex + 1) % items.length
    items[nextIndex].focus()
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    const prevIndex = (currentIndex - 1 + items.length) % items.length
    items[prevIndex].focus()
  } else if (event.key === 'Escape') {
    event.preventDefault()
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <section class="p-4 bg-white border border-neutral-200 rounded-lg" aria-labelledby="toc-header">
    <button class="text-sm flex items-center gap-1 w-full not-prose cursor-pointer group" @click="toggleMenu" aria-controls="toc-menue" :aria-expanded="menuOpen">
      <h2 id="toc-header" class="flex items-center gap-2 text-body text-sm flex-1 group-hover:underline">
        <Icon name="ph:book-open-text" size="1.3em" />
        <strong>Table of Contents</strong>
      </h2>
      <span>
        {{ menuOpen ? 'Hide' : 'Show' }}
        <Icon name="ph:triangle-fill" size=".75em"
          :class="menuOpen ? 'rotate-0' : 'rotate-180'"
          class="transition-transform duration-200 ease-in-out" />
      </span>
    </button>
    <AnimatePresence>
      <motion.ul v-if="menuOpen" id="toc-menue"
        :exit="{ opacity: 0, height: 0 }"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
      >
        <li v-for="item in links" :key="item.id">
          <a :href="`#${item.id}`" class="text-blue-500 hover:text-blue-700">
            {{ item.text }}
          </a>
        </li>
      </motion.ul>
    </AnimatePresence>
  </section>
</template>
