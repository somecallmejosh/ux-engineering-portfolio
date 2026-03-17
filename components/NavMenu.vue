<script setup>
defineProps({
  groups: { type: Array, required: true },
  listClass: { type: String, default: '' },
  linkClass: { type: String, default: '' },
  iconSize: { type: String, default: '1.25rem' },
})

const emit = defineEmits(['nav-click', 'link-click'])
</script>

<template>
  <ul :class="listClass" @click="emit('nav-click')">
    <li v-for="(group, index) in groups" :key="index">
      <ul>
        <li v-for="item in group.items" :key="item.path">
          <NuxtLink :class="linkClass" :to="item.path" @click="emit('link-click')">
            <span class="flex items-center gap-3">
              <Icon :name="item.icon" :size="iconSize"
                class="opacity-70 group-hover:opacity-100 transition-opacity duration-150" />
              {{ item.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
