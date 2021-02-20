import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/houseInfoList',
    component: () => import('../views/houseInfoList.vue'),
  },
  {
    path: '/houseChildren',
    component: () => import('../views/houseChildren.vue'),
  },
  {
    path: '/houseChildrenInfo',
    component: () => import('../views/houseChildrenInfo.vue'),
  },
  {
    path: '/houseSearch',
    component: () => import('../views/houseSearch.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
