import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 1.引入300毫秒延迟插件
import fastclick from 'fastclick' // 页面点击 300毫秒延迟

// 2.引入axios
import axios from 'axios'

// 3.引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/reset.scss'
// 5.引入字体图标文件
import './assets/taoke-icon-font/iconfont.css'
// 6.引入图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('assets/rolling.gif')
})
Vue.prototype.$axios = axios
Vue.use(Vant)
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
