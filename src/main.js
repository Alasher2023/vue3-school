import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
