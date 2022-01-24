import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
// app.use(store)
app.use(createPinia())
app.mount('#app')
