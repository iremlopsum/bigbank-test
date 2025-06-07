<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUIStore } from '@/stores/ui-store'
import { MugloarAPI } from '@/api/mugloar-api'
import LayoutView from '@/views/LayoutView.vue'
import type { Message } from '@/types/api-types'
import { useGameStore } from '@/stores/game-store'

const ui = useUIStore()
const gameStore = useGameStore()

type DecodedMessage = Message & {
  decodedMessage: string
  decodedProbability: string
}

const isLoading = ref(false)
const messages = ref<DecodedMessage[]>([])
const error = ref<string | null>(null)
const solvingAdId = ref<string | null>(null)

async function fetchMessages() {
  if (!gameStore.gameId) {
    error.value = 'No active game session.'
    return
  }

  isLoading.value = true
  error.value = null
  try {
    const rawMessages = await MugloarAPI.getMessages(gameStore.gameId)
    messages.value = rawMessages.map(msg => ({
      ...msg,
      decodedMessage: msg.encrypted ? atob(msg.message) : msg.message,
      decodedProbability: msg.encrypted ? atob(msg.probability) : msg.probability,
    }))
  } catch (err) {
    error.value = (err as Error).message
    ui.showErrorModal(error.value)
  } finally {
    isLoading.value = false
  }
}

async function solve(adId: string) {
  solvingAdId.value = adId

  try {
    const result = await MugloarAPI.solveMessage(gameStore.gameId!, adId)

    // Update gameStore values
    gameStore.lives = result.lives
    gameStore.gold = result.gold
    gameStore.score = result.score
    gameStore.turn = result.turn
    gameStore.highScore = result.highScore

    // Handle Game Over
    if (result.lives === 0) {
      console.log('Game Over! You have no lives left.')
      // TODO: Show custom "You Died" modal
      // ui.showDeathModal("You died a tragic bureaucratic death.")
      return
    }

    // Refresh missions
    await fetchMessages()
  } catch (err) {
    error.value = (err as Error).message
    ui.showErrorModal(error.value)
  } finally {
    solvingAdId.value = null
  }
}

onMounted(fetchMessages)
</script>

<template>
  <LayoutView>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Available Missions</h2>

      <div v-if="isLoading" class="text-text-subtle">Loading missions…</div>
      <div v-else-if="error" class="text-red-700 font-medium">{{ error }}</div>
      <div v-else-if="messages.length === 0" class="text-text-subtle">No missions available.</div>

      <ul v-else class="space-y-4">
        <li
          v-for="msg in messages"
          :key="msg.adId"
          class="flex justify-between items-start border rounded-md p-4 bg-surface shadow-sm">
          <div>
            <p class="text-text-main font-semibold">{{ msg.decodedMessage }}</p>
            <div class="text-sm mt-2 text-text-subtle flex gap-4">
              <span>💰 {{ msg.reward }}g</span>
              <span>⏳ {{ msg.expiresIn }} turns</span>
              <span>🎲 {{ msg.decodedProbability }}</span>
              <span v-if="msg.encrypted" title="Encrypted Message">🔐 Encrypted</span>
            </div>
          </div>

          <button
            class="ml-4 px-4 py-2 bg-primary text-footer-text rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            @click="solve(msg.adId)"
            :disabled="!!solvingAdId || isLoading">
            Solve
          </button>
        </li>
      </ul>
    </div>
  </LayoutView>
</template>
