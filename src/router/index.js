import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'
import Excel from '../views/Excel.vue'
import Movies from '../views/Movies.vue'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/Home'
 },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/excel',
    name: 'Excel',
    component: Excel
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
