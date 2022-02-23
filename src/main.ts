import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'
import filters from './filters'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/sass/main.scss'

const VueClipboards = require('vue-clipboard2')
Vue.use(VueClipboards)

filters.init()

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
