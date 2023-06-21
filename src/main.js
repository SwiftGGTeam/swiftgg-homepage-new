import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'

import App from './App.vue'

if (window.location.href.endsWith('wwdc23')) {
  window.location.href = '/wwdc23_en.html'
}

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
