<script setup lang="ts">
import { useUIStore } from '@/stores/ui-store'
import { useGameStore } from '@/stores/game-store'

import GameStat from '@/components/GameStat.vue'

import GoldIcon from '@/assets/svgs/cash.svg'
import ScoreIcon from '@/assets/svgs/3d-stairs.svg'
import TurnIcon from '@/assets/svgs/pocket-watch.svg'
import LivesIcon from '@/assets/svgs/heart-wings.svg'
import LevelIcon from '@/assets/svgs/bleeding-eye.svg'

const game = useGameStore()
const ui = useUIStore()
</script>

<template>
  <header class="sticky min-h-12 top-0 z-40 bg-background shadow-[0px_0px_17px_7px_#00000024]">
    <div
      class="max-w-screen-xl mx-auto w-full px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <!-- Row 1: Burger + Title -->
      <div class="relative flex items-center justify-center md:justify-start md:gap-4">
        <!-- Burger (mobile only) -->
        <button @click="ui.openSidebar" class="absolute left-0 top-1/2 -translate-y-1/2 text-xl md:hidden">☰</button>

        <!-- Title -->
        <h1 class="text-lg md:text-xl md:hidden font-bold font-serif uppercase text-text-main text-center">
          The Kingdom of Mugloar
        </h1>
      </div>

      <!-- Row 2: Stats -->
      <div
        class="flex flex-wrap h-auto md:h-12 justify-center md:justify-end items-center gap-6 text-sm md:text-base font-medium text-text-main">
        <GameStat :icon="LivesIcon" :value="game.lives!" label="Lives" />
        <GameStat :icon="GoldIcon" :value="game.gold!" label="Gold" />
        <GameStat :icon="TurnIcon" :value="game.turn!" label="Turn" />
      </div>
    </div>
  </header>
</template>
