import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', () => {
  // Error Modal (existing logic)
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

  // New: Mobile Sidebar toggle
  const isSidebarOpen = ref(false)

  function openSidebar() {
    isSidebarOpen.value = true
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  return {
    showError,
    errorMessage,
    showErrorModal,
    closeErrorModal,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  }
})
