import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';

import { setupRouter } from '@/routes';
import { setupElementPlus, setupPinia, setupZoomer } from '@/plugins';

const app = createApp(App);
setupRouter(app); //vue-router apply
setupElementPlus(app); //element plus apply
setupPinia(app); //pinia apply
setupZoomer(app); //vue-zoomer apply
app.mount('#app');
