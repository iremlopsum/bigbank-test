import { useGameStore } from '@/stores/game-store'
import { createWebHistory, createRouter } from 'vue-router'

import StoreView from '@/views/StoreView.vue'
import LandingView from '@/views/LandingView.vue'
import MissionsView from '@/views/MissionsView.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingView },
  {
    path: '/store',
    name: 'Store',
    component: StoreView,
    meta: { requiresActiveGame: true },
  },
  {
    path: '/missions',
    name: 'Missions',
    component: MissionsView,
    meta: { requiresActiveGame: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🛡️ Global Route Guard
router.beforeEach((to, from, next) => {
  const store = useGameStore()
  const gameIsActive = !!store.gameId

  if (to.meta.requiresActiveGame && !gameIsActive) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
