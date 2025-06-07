<script setup lang="ts">
import { useUIStore } from '@/stores/ui-store'

import SidebarContent from '@/components/SidebarContent.vue'

const uiStore = useUIStore()
</script>

<template>
  <!-- Desktop Sidebar -->
  <aside class="hidden md:flex w-96 bg-footer-bg text-footer-text flex-col justify-between px-6 py-8">
    <SidebarContent />
  </aside>

  <!-- Mobile Sidebar (Overlay) -->
  <transition name="slide">
    <aside
      v-if="uiStore.isSidebarOpen"
      class="fixed inset-0 z-50 bg-footer-bg text-footer-text w-screen h-screen flex flex-col justify-between px-6 py-8">
      <!-- Close Icon -->
      <button
        @click="uiStore.closeSidebar"
        class="absolute top-4 right-4 text-3xl font-bold text-footer-text hover:text-accent-yellow">
        ✕
      </button>
      <SidebarContent />
    </aside>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
