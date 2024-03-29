import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/SearchLocation.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    }
  ]
})

export default router
