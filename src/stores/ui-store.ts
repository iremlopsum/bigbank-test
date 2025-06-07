import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', () => {
  const showError = ref(false)
  const errorMessage = ref<string | null>(null)

  function showErrorModal(message: string) {
    showError.value = true
    errorMessage.value = message
  }

  function closeErrorModal() {
    showError.value = false
    errorMessage.value = null
  }

  return {
    showError,
    errorMessage,
    showErrorModal,
    closeErrorModal,
  }
})
