import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PianoPage from '../views/PianoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: HomePage
    },
    {
      path: '/piano',
      name: 'PianoPlayer',
      component: PianoPage
    }
  ]
})

export default router
