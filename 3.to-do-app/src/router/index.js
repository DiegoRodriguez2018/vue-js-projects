import Vue from 'vue'
import VueRouter from 'vue-router'


import Welcome from '@/components/Welcome'
import ToDoApp from '@/components/ToDoApp'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/app',
      component: ToDoApp
    },
  ]
})
