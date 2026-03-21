<script setup>
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { ROUTES } from '@/utils/routes'
const target = useTemplateRef('target')
onClickOutside(target, event => navOpen.value = false)

const navToggle = () => {
  navOpen.value ? navOpen.value = false : navOpen.value = true
}

const navGroups = [
  {
    groupTitle: 'Main',
    items: [
      { title: 'Home', path: ROUTES.home, icon: 'ph:house' },
      { title: 'Services', path: ROUTES.services, icon: 'ph:handshake' },
      { title: 'Recent Projects', path: ROUTES.projects, icon: 'ph:projector-screen-chart' },
    ]
  },

  {
    groupTitle: 'Personal',
    items: [
      { title: 'Testimonials', path: ROUTES.testimonials, icon: 'ph:chats' },
      { title: 'About Me', path: ROUTES.about, icon: 'ph:lego-smiley' },
      { title: 'Contact Me', path: ROUTES.contact, icon: 'ph:address-book' },
    ]
  },
  {
    groupTitle: 'Writing',
    items: [
      { title: 'Guides', path: ROUTES.guides, icon: 'ph:map-trifold' },
      { title: 'Blog', path: ROUTES.blog, icon: 'ph:article-ny-times' },
      { title: 'FAQs', path: ROUTES.faqs, icon: 'ph:question' },
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
  <div>
    <a class="absolute -top-full left-1/2 -translate-x-1/2 z-50 p-4 bg-white rounded-lg focus:top-2 transition-all duration-300"
      href="#main-content">Skip to main content</a>
    <div class="lg:flex min-h-dvh gap-12 relative z-10">
      <header ref="target"
        class="lg:basis-72 shrink-0 bg-white lg:bg-neutral-50 p-6 lg:p-10 lg:space-y-6 lg:h-dvh lg:flex lg:flex-col sticky top-0 z-50"
        :class="navOpen && 'shadow-lg lg:shadow-0'">
        <div class="flex items-center justify-between">
          <Logo class="lg:hidden" />
          <div>
            <button @click="navToggle"
              class="menu-toggle flex lg:hidden cursor-pointer items-center gap-1   font-medium"
              aria-label="Toggle nav menu visibility">
              Menu
              <Icon v-if="!navOpen" name="ph:equals-bold" size="1.5em" />
              <Icon v-if="navOpen" name="ph:x-bold" size="1.5em" />
            </button>
          </div>
        </div>
        <nav aria-label="Main Navigation" :class="{ 'lg:flex lg:flex-col lg:flex-1': !navOpen }">
          <div class="nav-drawer" :class="{ 'nav-drawer--open': navOpen }">
            <NavMenu :groups="navGroups" listClass="border-l border-neutral-200 mb-2 mt-4 space-y-4"
              linkClass="flex items-center gap-3 group transition-colors duration-150 font-medium  py-2"
              iconSize="1.2rem" @nav-click="navOpen = false" />
          </div>
          <div class="hidden items-stretch lg:flex lg:flex-1 flex-col justify-between">
            <NavMenu :groups="navGroups" listClass="border-l border-neutral-200 mt-0 space-y-10"
              linkClass="flex items-center gap-3 group transition-colors duration-150 font-medium"
              @link-click="blurAndRemoveFocus" />
          </div>
        </nav>
      </header>
      <div class="flex-grow lg:overflow-y-scroll">
        <div class="hidden lg:flex lg:justify-between p-6 lg:px-10 lg:pt-10 lg:pb-16 lg:gap-6">
          <div class="flex-1">
            <Logo />
          </div>
        </div>
        <main id="main-content" class="p-6 lg:px-10 lg:pt-0 pb-12 w-full max-w-6xl">
          <slot />
        </main>
        <footer class="p-6 lg:px-10 pb-10 text-sm text-neutral-600">
          &copy; {{ new Date().getFullYear() }} Briley Creative &middot; Joshua Briley, DBA
        </footer>
      </div>
    </div>
    <span aria-hidden="true" role="presentation"
      class="script fixed -top-40 lg:top-1/3 lg:-translate-y-1/2 right-0 lg:right-20 text-[700px] lg:text-[1100px] opacity-[0.025] z-0 -rotate-90">jb</span>
  </div>
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

.menu-toggle:active {
  transform: scale(1.1);
}
</style>
