import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/AuthApp.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
      meta: { isAuthRequired: true },
      children: [
        {
          path: ':userId',
          name: 'userProfile',
          component: () => import('../components/UserProfile.vue'),
          props: true,
          meta: { isAuthRequired: true }
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token')
  const userRole = localStorage.getItem('user_role')

  if (to.meta.isAuthRequired && !isAuthenticated) {
    alert('Please log in to view users.')
    next({ name: 'Auth' })
  } else if (to.meta.admin && userRole !== 'admin') {
    next({ name: 'users' })
  } else {
    next()
  }
})

export default router
