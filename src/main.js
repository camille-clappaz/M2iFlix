import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



const app = createApp(App)

// // configuer la validation
// configure({
//     validateOnInput: true,
//     validateOnBlur: true,
//     validateOnChange: true
// })

// const pinia = createPinia()
// // personnaliser la langue des messages d'erreur
// setLocale(fr);
app.config.globalProperties.BASE_URL = 'http://localhost:5173'
app
    .use(router)
    //.component('HelloWorld', HelloWorld);
    .mount('#app')
