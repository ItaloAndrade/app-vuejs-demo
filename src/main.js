import 'normalize.css/normalize.css';
import 'vuetify/dist/vuetify.min.css'; 
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue'
import vuetify from './plugins/vuetify'; 

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './locate/index'; // Internationalization
import '@/scss/style.scss'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'   
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  PerfectScrollbar,
  i18n, 
  render: h => h(App)
}).$mount('#app')
