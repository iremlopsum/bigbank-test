<script setup lang="ts">
import GlobalToast from '@/components/GlobalToast.vue'
import GlobalErrorModal from '@/components/GlobalErrorModal.vue'
import GlobalDeathModal from '@/components/GlobalDeathModal.vue'
</script>

<template>
  <RouterView />
  <!-- Used for displaying toast messages (Success | Failure of mission and buying items) -->
  <GlobalToast />
  <!-- Used in case of errors -->
  <GlobalErrorModal />
  <!-- Used in case of death -->
  <GlobalDeathModal />
</template>
