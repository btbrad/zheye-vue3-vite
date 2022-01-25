import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Layout from '@/components/Layout.vue'

const router = createRouter({
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
          meta: {
            requireAuth: true,
          },
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
          meta: {
            requireAuth: true,
          },
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

router.beforeEach((to, from, next) => {
  console.log(to, JSON.parse(window.localStorage.getItem('isLogin') || 'false'))
  if (
    to.meta.requireAuth &&
    !JSON.parse(window.localStorage.getItem('isLogin') || 'false')
  ) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
