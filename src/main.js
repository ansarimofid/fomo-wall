import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'

Vue.config.productionTip = false

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')