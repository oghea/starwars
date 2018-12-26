import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About')
    },
    {
      path: '/film/:id',
      name: 'film',
      component: () => import(/* webpackChunkName: "film" */ './views/Film')
    }
  ]
})
