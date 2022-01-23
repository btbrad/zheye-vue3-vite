import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Layout from '@/components/Layout.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'column/:id',
          name: 'ColumnDetail',
          component: () => import('@/components/ColumnDetail.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: Login,
        },
      ],
    },
  ],
})
