import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Results from '@/views/Results.vue'
import Histori from '@/views/Histori.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'test',
        name: 'Test',
        component: Test
      },
      {
        path: 'results',
        name: 'Results',
        component: Results
      },
      {
        path: 'histori',
        name: 'Histori',
        component: Histori
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router