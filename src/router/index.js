import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'
import Excel from '../views/Excel.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/test'
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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
