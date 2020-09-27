import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' // 引入elementui
import 'element-ui/lib/theme-chalk/index.css' // 引入elementui样式
import router from './router'
import '@/styles/index.less' // 引入样式

Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册使用elementui
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
