/**
 * 路由配置
 * @description 统一管理应用路由
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

/**
 * 路由配置
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/houseInfoList',
    name: 'HouseInfoList',
    component: () => import('../views/houseInfoList.vue'),
    meta: {
      title: '房源列表',
    },
  },
  {
    path: '/houseChildren',
    name: 'HouseChildren',
    component: () => import('../views/houseChildren.vue'),
    meta: {
      title: '房源详情',
    },
  },
  {
    path: '/houseChildrenInfo',
    name: 'HouseChildrenInfo',
    component: () => import('../views/houseChildrenInfo.vue'),
    meta: {
      title: '房源信息',
    },
  },
  {
    path: '/houseSearch',
    name: 'HouseSearch',
    component: () => import('../views/houseSearch.vue'),
    meta: {
      title: '房源搜索',
    },
  },
]

/**
 * 创建路由实例
 */
const router = new VueRouter({
  routes,
  mode: 'hash', // 使用hash模式，适合移动端
})

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
