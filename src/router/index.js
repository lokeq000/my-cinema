import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import filmPage from "../views/film-page.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/film-page",
    name:'filmPage',
    component: filmPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
