import '@/app/assets/main.css'
import { createApp } from 'vue'
import stores from '@/stores/index'
import App from './App.vue'
import router from './router'
// import PreloaderDirective from "@/scripts/PreloaderDirective.ts";


const app = createApp(App)

app.use(router)
app.use(stores)
// app.directive('preloader', PreloaderDirective);

app.mount('#app')
