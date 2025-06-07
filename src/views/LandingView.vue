<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { MugloarAPI } from '@/api/mugloar-api'
import { useUIStore } from '@/stores/ui-store'
import { useGameStore } from '@/stores/game-store'

const ui = useUIStore()
const router = useRouter()
const isLoading = ref(false)
const gameStore = useGameStore()

const startNewGame = async (): Promise<void> => {
  isLoading.value = true

  try {
    const data = await MugloarAPI.startGame()
    gameStore.setGameData(data)

    router.push({ path: '/missions' })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error occurred'

    // Use UI store to show error message in a global modal
    ui.showErrorModal(message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <main class="flex flex-col md:flex-row w-full h-full flex-grow">
      <!-- Left: Text Panel -->
      <section
        class="w-full h-full bg-background md:w-1/2 flex flex-col justify-center items-center text-center p-10 gap-6">
        <div>
          <h1
            class="relative text-text-main text-4xl md:text-6xl font-bold uppercase leading-tight z-10"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="150">
            The<br />Kingdom of Mugloar
          </h1>
          <p
            class="text-text-subtle font-semibold mt-4 text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="300">
            A game of dragons and bureaucracy
          </p>
        </div>

        <!-- Buttons -->
        <div
          class="flex flex-col items-center gap-4 w-full max-w-xs mt-6"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-delay="450">
          <button
            :disabled="isLoading"
            @click="startNewGame"
            class="bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold py-3 px-6 rounded w-full shadow-md flex items-center justify-center gap-2">
            <!-- Loader -->
            <svg
              v-if="isLoading"
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <!-- Button Text -->
            <span>{{ isLoading ? 'Starting...' : 'Start New Game' }}</span>
          </button>
        </div>
      </section>

      <!-- Right: Illustration -->
      <section class="w-full md:w-1/2 h-full bg-accent-yellow flex justify-center items-center relative">
        <img
          src="../assets/images/langing-page-illustration.webp"
          alt="Dragon village illustration"
          class="w-full h-full object-cover" />
      </section>
    </main>
  </div>
</template>
