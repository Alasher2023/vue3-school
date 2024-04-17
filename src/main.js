import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
