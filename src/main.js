import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Own JS
import './lib/filter'

// Third Party JS
import VueAxios from 'vue-axios'
import axios from 'axios'

// Third Party CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
