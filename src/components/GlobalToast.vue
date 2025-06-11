<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUIStore } from '@/stores/ui-store'

const ui = useUIStore()
const { toasts } = storeToRefs(ui)
</script>

<template>
  <div class="fixed top-21 right-4 z-50 space-y-3">
    <TransitionGroup name="toast" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="min-w-[200px] max-w-sm px-4 py-3 mb-2.5 rounded shadow-lg text-white text-sm font-semibold"
        :class="toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'">
        {{ toast.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
</style>
