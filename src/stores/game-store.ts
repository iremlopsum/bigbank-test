import { defineStore } from 'pinia'
import type { GameState } from '@/types/game-types'

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    gold: null,
    turn: null,
    lives: null,
    level: null,
    score: null,
    gameId: null,
    highScore: null,
  }),
  actions: {
    setGameData(data: GameState) {
      this.gold = data.gold
      this.turn = data.turn
      this.lives = data.lives
      this.level = data.level
      this.score = data.score
      this.gameId = data.gameId
      this.highScore = data.highScore
    },
  },
})
