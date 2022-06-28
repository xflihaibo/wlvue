import { RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
 {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue')
  },{
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes;