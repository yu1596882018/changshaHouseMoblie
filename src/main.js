import Vue from 'vue'
import '@/lib'
import App from './App.vue'
import router from './router'
import store from './store'
import services from './services'
import mixins from './mixins/global'

Vue.use(services)
Vue.mixin(mixins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
