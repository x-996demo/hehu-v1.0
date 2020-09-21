import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 用按需加载的方式配置路由
const Layout = () => import('@/views/layout') // 按需引入layout 二级路由
const Home = () => import('@/views/home') // 按需引入home 二级路由
const Maintain = () => import('@/views/maintain') // 按需引入maintain 二级路由
// 其他一级路由
const Login = () => import('@/views/login')
const routes = [
  {
    path: '/layout',
    name: Home,
    component: Layout, // 布局组件 一级路由
    children: [{
      path: '/home', // 如果path什么都不写 默认就是二级路由的默认组件
      component: Home // 资产管理组件

    }, {
      path: '/maintain',
      component: Maintain // 运行维护组件

    }]
  }, {
    path: '',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
