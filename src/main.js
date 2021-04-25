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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
