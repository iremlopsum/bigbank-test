<script setup lang="ts">
import { useUIStore } from '@/stores/ui-store'

const uiStore = useUIStore()
</script>

<template>
  <header class="w-full sticky top-0 z-40 bg-background border-b border-accent-brown shadow-sm">
    <div class="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Burger Menu -->
      <button @click="uiStore.openSidebar" class="md:hidden text-xl">☰</button>

      <!-- Stats Row -->
      <div class="flex items-center gap-6 text-text-main text-sm md:text-base font-medium">
        <div class="flex items-center gap-2"><span>❤️</span><span>3</span></div>
        <div class="flex items-center gap-2"><span>💰</span><span>50</span></div>
        <div class="flex items-center gap-2"><span>🔥</span><span>1</span></div>
        <div class="flex items-center gap-2"><span>📊</span><span>10</span></div>
        <div class="flex items-center gap-2"><span>🧭</span><span>Turn 4</span></div>
      </div>
    </div>
  </header>
</template>
