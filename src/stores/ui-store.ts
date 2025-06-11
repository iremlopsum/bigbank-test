import { ref } from 'vue'
import { defineStore } from 'pinia'

type ToastType = 'success' | 'failure'

interface Toast {
  id: number
  message: string
  type: ToastType
}

export const useUIStore = defineStore('ui', () => {
  const toasts = ref<Toast[]>([])
  let toastId = 0

  const showError = ref(false)
  const errorMessage = ref<string | null>(null)

  const showDeath = ref(false)

  function showErrorModal(message: string) {
    showError.value = true
    errorMessage.value = message
  }

  function closeErrorModal() {
    showError.value = false
    errorMessage.value = null
  }

  function showDeathModal() {
    showDeath.value = true
  }

  function closeDeathModal() {
    showDeath.value = false
  }

  function showToast(message: string, type: ToastType = 'success') {
    const id = toastId++
    toasts.value.push({ id, message, type })

    // Remove after 3 seconds
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, 3000)
  }

  const isSidebarOpen = ref(false)

  function openSidebar() {
    isSidebarOpen.value = true
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  return {
    // error modal
    showError,
    errorMessage,
    showErrorModal,
    closeErrorModal,

    // death modal
    showDeath,
    showDeathModal,
    closeDeathModal,

    // sidebar
    isSidebarOpen,
    openSidebar,
    closeSidebar,

    // toast
    toasts,
    showToast,
  }
})
