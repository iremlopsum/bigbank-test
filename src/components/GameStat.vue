<script setup lang="ts">
defineProps<{
  icon: string
  value: number | string
  label: string
}>()
</script>

<template>
  <div class="relative group flex items-center gap-2 cursor-default">
    <!-- Emoji Icon -->
    <span class="text-lg text-center whitespace-nowrap">
      {{ icon }}
    </span>

    <!-- Value -->
    <span>{{ value }}</span>

    <!-- Tooltip -->
    <span
      class="absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] bg-footer-text text-footer-bg text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
      {{ label }}
    </span>
  </div>
</template>
