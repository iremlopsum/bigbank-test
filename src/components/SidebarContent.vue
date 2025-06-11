<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="../../public/favicon.ico" alt="Game Logo" class="w-16 h-16 mb-4 rounded-xl" />
    <h1 class="text-xl font-bold text-center leading-snug tracking-wide uppercase">The<br />Kingdom of<br />Mugloar</h1>

    <nav class="mt-10 w-full space-y-2">
      <router-link
        to="/missions"
        class="block w-full px-4 py-3 rounded-md transition"
        :class="
          isActive('/missions') ? 'bg-background text-text-main' : 'hover:bg-accent-brown hover:text-footer-text'
        ">
        Missions
      </router-link>
      <router-link
        to="/store"
        class="block w-full px-4 py-3 rounded-md transition"
        :class="isActive('/store') ? 'bg-background text-text-main' : 'hover:bg-accent-brown hover:text-footer-text'">
        Store
      </router-link>
    </nav>
  </div>
</template>
