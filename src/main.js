// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 解决某些移动端click延迟问题
import fastClick from 'fastclick'
// 样式重置
import './assets/styles/reset.css'
// 高分屏的边框显示宽问题
import './assets/styles/border.css'
// iconfont
import './assets/styles/iconfont.css'
// vue-awesome-swiper stylesheet
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
