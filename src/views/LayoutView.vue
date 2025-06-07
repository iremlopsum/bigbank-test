<script setup lang="ts">
import NavigationSidebar from '@/components/NavigationSidebar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-[--color-background] text-[--color-text-main]">
    <NavigationSidebar />
    <main class="flex-1 p-8 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
