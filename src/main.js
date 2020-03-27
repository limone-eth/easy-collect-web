import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFish, faPhone, faExclamationCircle, faCheckCircle, faSearch, faMapPin} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueGeolocation from 'vue-browser-geolocation';
import Multiselect from 'vue-multiselect';
import axios from 'axios'


// register globally
Vue.component('multiselect', Multiselect);

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    })
  }
});

library.add(faFish);
library.add(faExclamationCircle);
library.add(faCheckCircle);
library.add(faSearch);
library.add(faMapPin);
library.add(faPhone);
library.add(faFacebook);
library.add(faTelegram);

// leaflet
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueGeolocation);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
