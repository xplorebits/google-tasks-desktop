<template>
  <div class="relative h-screen w-full">
    <div class="sidebar">
      <div class="flex flex-col h-full gap-6">
        <div class="h-12 flex items-center px-3">
          <p class="font-medium">Google Tasks Desktop</p>
        </div>
        <ul>
          <li
            v-for="item in nav" :key="item.id"
            :aria-checked="item.id === currentNavId"
            class="sidebar-nav-item"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const nav = [
  { id: 'app-nav-my_tasks', text: 'My Tasks' },
  { id: 'app-nav-all_tasks', text: 'All Tasks' }
]

const currentNavId = ref('app-nav-my_tasks')
</script>

<style>
html, body {
  background-color: #1E1F21;
  color: #F5F4F3;
}

.sidebar {
  @apply absolute top-0 bottom-0 left-0 w-64 bg-[#2E2E30];
}

.sidebar-nav-item {
  @apply px-3 py-2 bg-[#454547] bg-opacity-0 hover:bg-opacity-20 text-sm aria-checked:bg-opacity-100 hover:aria-checked:bg-opacity-80;
}
</style>
