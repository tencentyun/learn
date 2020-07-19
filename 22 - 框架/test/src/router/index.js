import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/Base/Base'
import Advanced from '@/components/Advanced/Advanced'
import Theory from '@/components/Theory/Theory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base
    },
    {
      path: '/advanced',
      name: 'Advanced',
      component: Advanced
    },
    {
      path: '/theory',
      name: 'Theory',
      component: Theory
    }
  ]
})
