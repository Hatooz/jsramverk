import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reports/week',
    name: 'Reports',
    component: () => import('../views/Reports.vue'),
    children: [
      {
        path: '1',
        name: '1',
        component: () => import('../views/Week1.vue'),
      },
      {
        path: '2',
        name: '2',
        component: () => import('../views/Week2.vue'),
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')    
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')    
  },
  {
    path: '/redovisning',
    name: 'Redovisning',
    component: () => import('../views/Redovisning.vue')    
  }
  // {
  //   path: '/reports',
  //   name: 'Reports',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
