import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/coll',

    children: [
      {
        path: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'house',
        component: () => import('@/views/house')
      },
      {
        path: 'news',
        component: () => import('@/views/news')
      },
      {
        path: 'my',
        component: () => import('@/views/my')
      },
      {
        path: 'denglu',
        component: () => import('@/views/login/denglu.vue')
      }
    ]
  },
  {
    path: '/coll',
    component: () => import('@/views/my/colle')
  }
]

const router = new VueRouter({
  routes
})

export default router
