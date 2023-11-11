//Importaciones base
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Para cambiar el tema de PrimeVue, elegir otro import de: https://primevue.org/theming/
import 'primevue/resources/themes/lara-light-blue/theme.css'

// Importación de iconos de PrimeVue
import 'primeicons/primeicons.css'


//Importación de PrimeVue
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// importación de rutas
import router from './router';

const app = createApp(App)

//Uso de dependencias
app.use(createPinia())
app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.mount('#app')
