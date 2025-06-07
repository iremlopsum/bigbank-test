<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUIStore } from '@/stores/ui-store'

const route = useRoute()
const router = useRouter()
const uiStore = useUIStore()

function isActive(path: string) {
  return route.path === path
}

function confirmRestart() {
  // uiStore.showErrorModal()
}
</script>

<template>
  <aside class="w-96 bg-footer-bg text-footer-text flex flex-col justify-between px-6 py-8">
    <div class="flex flex-col items-center">
      <img src="../../public/favicon.ico" alt="Game Logo" class="w-16 h-16 mb-4" />
      <h1 class="text-xl font-bold text-center leading-snug tracking-wide uppercase">
        The<br />Kingdom of<br />Mugloar
      </h1>

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

    <button
      @click="confirmRestart"
      class="w-full mt-10 bg-primary text-footer-text font-semibold py-3 rounded-md hover:bg-primary-hover transition">
      Restart Game
    </button>
  </aside>
</template>
