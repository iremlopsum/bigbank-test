<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUIStore } from '@/stores/ui-store'
import { MugloarAPI } from '@/api/mugloar-api'
import LayoutView from '@/views/LayoutView.vue'
import type { ShopItem } from '@/types/api-types'
import { useGameStore } from '@/stores/game-store'

const ui = useUIStore()
const gameStore = useGameStore()

const isLoading = ref(false)
const items = ref<ShopItem[]>([])
const buyingItemId = ref<string | null>(null)

async function fetchShop() {
  if (!gameStore.gameId) return

  isLoading.value = true
  try {
    items.value = await MugloarAPI.getShopItems(gameStore.gameId)
  } catch (err) {
    ui.showToast('Failed to load store items.', 'failure')
  } finally {
    isLoading.value = false
  }
}

async function buyItem(itemId: string) {
  buyingItemId.value = itemId

  try {
    const result = await MugloarAPI.buyItem(gameStore.gameId!, itemId)

    if (result.shoppingSuccess) {
      ui.showToast('Item purchased successfully!', 'success')

      // Update game state
      gameStore.gold = result.gold
      gameStore.lives = result.lives
      gameStore.level = result.level

      await fetchShop() // Refresh store inventory if needed
    } else {
      ui.showToast('Not enough gold to buy this item.', 'failure')
    }
  } catch (err) {
    ui.showToast('Purchase failed.', 'failure')
  } finally {
    buyingItemId.value = null
  }
}

onMounted(fetchShop)
</script>

<template>
  <LayoutView>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Shop</h2>
      <div v-if="items?.length === 0" class="text-text-subtle">Loading items.</div>

      <ul v-else class="space-y-4">
        <li
          v-for="item in items"
          :key="item.id"
          class="flex justify-between items-center bg-surface p-4 rounded-md shadow border">
          <div>
            <p class="text-text-main font-semibold">{{ item.name }}</p>
            <p class="text-sm text-text-subtle">Price: {{ item.cost }}g</p>
          </div>

          <button
            class="px-4 py-2 bg-primary text-footer-text rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            @click="buyItem(item.id)"
            :disabled="!!buyingItemId || isLoading || gameStore.gold! < item.cost">
            <span v-if="gameStore.gold! < item.cost">Not enough gold</span>
            <span v-else>Buy</span>
          </button>
        </li>
      </ul>
    </div>
  </LayoutView>
</template>
