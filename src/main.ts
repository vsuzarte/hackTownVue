import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import roteador from './roteador'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { key, store } from './store'

createApp(App)
.use(roteador)
.use(store, key)
.mount('#app')
