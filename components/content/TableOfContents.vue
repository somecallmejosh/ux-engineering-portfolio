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
      <motion.ul v-if="menuOpen" id="toc-menue" class="not-prose"
        :exit="{ opacity: 0, height: 0 }"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
      >
        <li v-for="item in links" :key="item.id">
          <a :href="`#${item.id}`" class="text-blue-500 hover:text-blue-700">
            <Icon class="h-6 w-6 flex items-center justify-center border rounded-lg" :name="`codex:h${item.depth}`" /> {{ item.text }}
          </a>
          <ul v-if="item.children">
            <li v-for="child in item.children" :key="child.id">
              <a :href="`#${child.id}`" class="text-blue-500 hover:text-blue-700">
                <Icon :name="`codex:h${child.depth}`" />  {{ child.text }}
              </a>
              <ul v-if="child.children">
                <li v-for="subChild in child.children" :key="subChild.id">
                  <a :href="`#${subChild.id}`" class="text-blue-500 hover:text-blue-700">
                    <Icon :name="`codex:h${subChild.depth}`" />  {{ subChild.text }}
                  </a>
                  <component :is="TableOfContents" :links="[subChild]" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </motion.ul>
    </AnimatePresence>
  </section>
</template>
<style scoped>
  ul {
    margin-top: 1rem;
    ul {
      margin-top: 0;
      margin-left: 1.5rem;
    }

    a {
      color: var(--color-neutral-900);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 4px;

      &:hover {
        background-color: var(--color-blue-50);
        text-decoration: underline;
      }
    }
  }
</style>
