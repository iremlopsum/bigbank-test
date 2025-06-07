import AOS from 'aos'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'aos/dist/aos.css'

import router from '@/router'

import App from '@/App.vue'

import '@/styles/main.css'

const app = createApp(App)

AOS.init({
  startEvent: 'DOMContentLoaded',
})

app.use(createPinia()).use(router).mount('#app')
