import Vue from 'vue'
import App from './App.vue'
import './utils/rem'
import './assets/swiper.min.css'
import './assets/animate.min.css'
import './index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
