<script setup lang="ts">
import Header from '@/components/Header.vue'
import NavigationSidebar from '@/components/NavigationSidebar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-[--color-background] text-[--color-text-main]">
    <NavigationSidebar />
    <main class="flex-1 overflow-y-auto">
      <Header />
      <slot />
    </main>
  </div>
</template>
