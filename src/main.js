import Vue from 'vue'
import store from '@/assets/store/store'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';



Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
