import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/get-help',
    name: 'get-help',
    component: function () {
      return import(/* webpackChunkName: "get-help" */ '../views/get-help.vue')
    }
  },
  {
    path: '/news-events',
    name: 'news-events',
    component: function () {
      return import(/* webpackChunkName: "news-events" */ '../views/news-events.vue')
    }
  },
  {
    path: '/support',
    name: 'support',
    component: function () {
      return import(/* webpackChunkName: "support" */ '../views/support.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../views/contact.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
