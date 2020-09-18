import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home' // 引入主页
import Login from '@/views/login' // 引入登录页

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home' // 强制跳转到home页
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
