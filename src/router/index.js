import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home', component: () => import('../views/Home.vue')
  },
  {
    path: '/settings',name: 'Settings',  component: () => import('../views/Settings.vue')
  },
  {
    path: '/planning',name: 'Planning',  component: () => import('../views/Planning.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router