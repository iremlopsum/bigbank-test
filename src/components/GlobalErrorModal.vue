<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUIStore } from '@/stores/ui-store'
import { onMounted, onBeforeUnmount } from 'vue'

import AlertIcon from '@/icons/AlertIcon.vue'

const ui = useUIStore()
const { showError, errorMessage } = storeToRefs(ui) // this keeps reactivity
const { closeErrorModal } = ui

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeErrorModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="showError" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <!-- Split Background Layer -->
      <div class="absolute inset-0 flex pointer-events-none">
        <div class="w-1/2 h-full bg-background" data-aos="fade-right" data-aos-duration="500" data-aos-delay="0"></div>
        <div
          class="w-1/2 h-full bg-accent-yellow"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="0"></div>
      </div>

      <div
        class="relative overflow-hidden w-full max-w-sm md:max-w-md bg-background rounded-2xl border-4 border-accent-brown shadow-lg text-center p-6 flex flex-col items-center gap-4 z-10"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="75">
        <AlertIcon />

        <h2
          class="text-text-main font-bold text-xl md:text-2xl"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150">
          An Error<br class="md:hidden" />
          Occurred
        </h2>
        <p
          class="text-text-subtle text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="250">
          {{ errorMessage || 'Something went wrong. Please try again later.' }}
        </p>

        <button
          @click="closeErrorModal"
          class="mt-4 bg-primary hover:bg-primary-hover text-white font-semibold text-sm px-6 py-2 rounded shadow"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300">
          Close
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
