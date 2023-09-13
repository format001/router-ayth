import { createApp } from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';
import { routerBeforeEach } from './router/route';
import '@/assets/resets.css';

routerBeforeEach(router, store);

const app = createApp(App)
            .use(store)
            .use(router)


const vm = app.mount('#app')


