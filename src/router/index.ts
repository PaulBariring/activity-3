import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
