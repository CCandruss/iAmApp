import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/iAM.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'iAM',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/photos.vue')
  },
  {
    path: '/Goals',
    name: 'goals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Goals.vue')
  },
  {
    path: '/create-profile',
    name: 'Create-Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Create-Profile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
