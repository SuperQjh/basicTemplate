import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'
import Excel from '../views/Excel.vue'
import Movies from '../views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/Movies'
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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
