<script setup>
import { AnimatePresence, motion } from 'motion-v'
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
const target = useTemplateRef('target')
onClickOutside(target, event => navOpen.value = false)

const navToggle = () => {
  navOpen.value ? navOpen.value = false : navOpen.value = true
}

const navGroups = [
  { groupTitle: 'Main',
    items: [
    { title: 'Home', path: '/', icon: 'ph:house' },
    { title: 'About', path: '/about', icon: 'ph:user-circle-check' },
    { title: 'Testimonials', path: '/testimonials', icon: 'ph:chats' },
  ]},
  { groupTitle: 'Projects',
    items: [
      { title: 'Projects', path: '/projects', icon: 'ph:projector-screen-chart' },
      { title: 'Blog', path: '/blog', icon: 'ph:article-ny-times' },
      { title: 'Case Studies', path: '/case-studies', icon: 'ph:book-open' },
      { title: 'Dev Notes', path: '/dev-notes', icon: 'ph:clipboard-text' },
    ]
  },
  { groupTitle: 'Other',
    items:  [
      { title: 'Contact', path: '/contact', icon: 'ph:address-book' },
    ]
  },
]
const navOpen = ref(false)

const blurAndRemoveFocus = () => {
  if (navOpen.value) {
    document.activeElement.blur();
    navOpen.value = false;
  }
}
</script>
<template>
  <NuxtLayout>
    <a class="absolute -top-full left-1/2 -translate-x-1/2 z-50 p-4 bg-white rounded-lg focus:top-2 transition-all duration-300" href="#main-content">Skip to main content</a>
    <div class="lg:flex lg:h-dvh gap-12 relative z-10">
      <header ref="target" class="lg:basis-72 shrink-0 bg-white lg:bg-neutral-50 p-6 lg:p-10 lg:space-y-6 lg:h-dvh lg:flex lg:flex-col sticky top-0 z-50"
        :class="navOpen && 'shadow-lg lg:shadow-0'"
      >
        <div class="flex items-center justify-between">
          <Logo class="lg:hidden" />
          <div>
            <motion.button @click="navToggle"
              :whilePress="{ scale: 1.1 }"
              class="flex lg:hidden cursor-pointer flex items-center gap-1 text-xs uppercase font-medium"
              aria-label="Toggle nav menu visibility">
              Menu
              <Icon v-if="!navOpen" name="ph:equals-bold" size="1.5em" />
              <Icon v-if="navOpen" name="ph:x-bold" size="1.5em" />
            </motion.button>
          </div>
        </div>
        <nav aria-label="Main Navigation" :class="{ 'lg:flex lg:flex-col lg:flex-1': !navOpen }">
          <AnimatePresence :initial="false">
            <motion.div
              v-if="navOpen"
              :initial="{opacity: 0, height: 0}"
              :animate="{opacity: 1, height: 'auto'}"
              :exit="{opacity: 0, height: 0}"
              :transition="{
                duration: 0.2,
              }"
            >
            <ul
              @click="navOpen = false"
              class="border-l border-neutral-200 mb-2 mt-4 space-y-4">
              <li v-for="(group, index) in navGroups">
                <ul>
                  <li
                    v-for="item in group.items" :key="item.path">
                    <NuxtLink :whilePress="{ y: 4 }" class="flex items-center gap-3 group transition-colors duration-150 font-medium text-sm" :to="item.path">
                      <span class="flex items-center gap-3">
                        <Icon :name="item.icon"
                          class="opacity-70 group-hover:opacity-100 transition-opacity duration-150" />
                          {{ item.title }}
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
            </motion.div>
          </AnimatePresence>
          <div class="hidden items-stretch lg:flex lg:flex-1 flex-col justify-between">
            <ul
              @click="navOpen = false"
              class="border-l border-neutral-200 mt-0 space-y-10">
              <li v-for="(group, index) in navGroups">
                <ul>
                  <li
                    v-for="item in group.items" :key="item.path">
                    <NuxtLink @click="blurAndRemoveFocus" class="flex items-center gap-3 group transition-colors duration-150 font-medium" :to="item.path">
                      <span class="flex items-center gap-3">
                        <Icon :name="item.icon"
                          class="opacity-70 group-hover:opacity-100 transition-opacity duration-150" />
                          {{ item.title }}
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="flex items-center gap-2">
              <a href="/docs/joshua-briley-resume.pdf" target="_blank" class="text-sm font-semibold border-0! flex items-center gap-1 bg-neutral-100 hover:bg-blue-50 p-3! rounded-md transition-colors duration-150"><Icon name="ph:file-pdf" size="1.5em" /> Download my resume</a>
            </div>
          </div>
        </nav>
      </header>
      <div class="flex-grow overflow-y-scroll">
        <div class="hidden lg:block lg:mb-12 p-6 lg:px-10 lg:pt-10 lg:pb-16">
          <Logo />
        </div>
        <main id="main-content" class="mx-auto p-6 lg:px-10 lg:pt-0 pb-12 scroll-mt-24 lg:scroll-mt-10">
          <NuxtPage />
        </main>
      </div>
    </div>
    <span aria-hidden="true" role="presentation" class="script fixed -top-40 lg:top-1/3 lg:-translate-y-1/2 right-0 lg:right-20 text-[700px] lg:text-[1100px] opacity-[0.025] z-0 -rotate-90">jb</span>
  </NuxtLayout>
</template>

<style>
.router-link-active {
  border-color: var(--color-blue-400);
}

header {
  nav {
    a {
      color: var(--color-neutral-950);
      padding: 0.5em 1rem;
      border-left: 2px solid transparent;
      margin: 0 0 0 -1px;

      &:hover {
        border-color: var(--color-blue-200);
      }
    }
  }
}

.prose i {
  font-style: normal;
  font-weight: 600;
  padding: 2px 3px 2px 3px;
  margin: -2px -3px -2px -3px;
  background-color: var(--color-blue-100);
}
</style>
