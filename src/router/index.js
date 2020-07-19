import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/nine',
    name: 'Nine',
    component: () => import('views/Nine')
  },
  {
    path: '/cate',
    name: 'Cate',
    component: () => import('views/Cate')
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import('views/Favourite')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('views/Mine')
  }
]

const router = new VueRouter({
  routes
})

export default router
