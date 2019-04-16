import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import LogIn from '@/components/LogIn'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/',
      component: LogIn
    },
  ]
})
