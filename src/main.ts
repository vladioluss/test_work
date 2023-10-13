import '@/app/assets/main.css'

import { createApp } from 'vue'
import stores from '@/stores/index'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(stores)

app.mount('#app')
