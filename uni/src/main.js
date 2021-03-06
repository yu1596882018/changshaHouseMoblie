import Vue from 'vue'
import App from './App'
import store from './store'
import mixins from './mixins/global'
import services from './services'
import '@/lib'

Vue.use(services)
Vue.mixin(mixins)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
