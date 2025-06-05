import AOS from 'aos'
import { createApp } from 'vue'

import 'aos/dist/aos.css'

import router from './router'

import App from './App.vue'

import './styles/main.css'

const app = createApp(App)

AOS.init({
  startEvent: 'DOMContentLoaded',
})

app.use(router).mount('#app')
