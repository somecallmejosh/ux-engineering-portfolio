<script setup lang="ts">
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

const tocMenuRef = ref<HTMLElement | null>(null)

const handleKeyDown = (event: KeyboardEvent) => {
  const items = tocMenuRef.value
    ? Array.from(tocMenuRef.value.querySelectorAll('a'))
    : []
  const currentIndex = items.indexOf(document.activeElement as HTMLAnchorElement)

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    const nextIndex = (currentIndex + 1) % items.length
    items[nextIndex]?.focus()
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    const prevIndex = (currentIndex - 1 + items.length) % items.length
    items[prevIndex]?.focus()
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
  <section v-if="links && links.length"
    class="overflow-hidden sticky top-20 lg:top-0 p-4 bg-white border border-neutral-200 rounded-lg z-50 toc"
    aria-labelledby="toc-header" :class="menuOpen && 'open'">
    <button class="text-sm flex items-center gap-1 w-full not-prose cursor-pointer group" @click="toggleMenu"
      aria-controls="toc-menu" :aria-expanded="menuOpen">
      <h2 id="toc-header" class="flex items-center gap-2 text-body text-sm flex-1 group-hover:underline">
        <Icon name="ph:book-open-text" size="1.3em" />
        <strong>Outline</strong>
      </h2>
      <span>
        {{ menuOpen ? 'Hide' : 'Show' }}
        <Icon name="ph:triangle-fill" size=".75em" :class="menuOpen ? 'rotate-0' : 'rotate-180'"
          class="transition-transform duration-200 ease-in-out" />
      </span>
    </button>
    <div class="toc-drawer" :class="{ 'toc-drawer--open': menuOpen }">
      <div ref="tocMenuRef" id="toc-menu" class="max-h-96 overflow-y-auto relative">
        <ul class="not-prose relative z-0 pb-4 text-sm" @click="menuOpen = false">
          <li v-for="item in links" :key="item.id">
            <a :href="`#${item.id}`" >
              <Icon class="h-6 w-6 flex items-center justify-center border rounded-lg" :name="`codex:h${item.depth}`" />
              {{ item.text }}
            </a>
            <ul v-if="item.children">
              <li v-for="child in item.children" :key="child.id">
                <a :href="`#${child.id}`" >
                  <Icon :name="`codex:h${child.depth}`" /> {{ child.text }}
                </a>
                <ul v-if="child.children">
                  <li v-for="subChild in child.children" :key="subChild.id">
                    <a :href="`#${subChild.id}`" >
                      <Icon :name="`codex:h${subChild.depth}`" /> {{ subChild.text }}
                    </a>
                    <component :is="TableOfContents" :links="[subChild]" />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
.toc.open::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  pointer-events: none;
  z-index: 100;
  background-image: linear-gradient(to bottom, transparent, white);
}

.toc-drawer {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.2s ease, opacity 0.2s ease;
}

.toc-drawer--open {
  grid-template-rows: 1fr;
  opacity: 1;
}

.toc-drawer>div {
  overflow: hidden;
}

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
    padding: .25rem 0;

    &:hover {
      background-color: var(--color-blue-50);
      text-decoration: underline;
    }
  }
}
</style>
