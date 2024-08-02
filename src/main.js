import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { createHead } from '@vueuse/head';
import { auth } from './firebase'


const head = createHead();



createApp(App)
  .use(router)
  .use(store)
  .use(head)
  .mount('#app')