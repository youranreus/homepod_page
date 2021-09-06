import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home.vue'),
    meta: {title:'Homepod',keyword:'homepod',description:'homepod'},
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about.vue'),
    meta: {title:'About',keyword:'homepod',description:'homepod'},
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('../components/system.vue'),
    meta: {title:'System Info',keyword:'homepod',description:'homepod'},
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
