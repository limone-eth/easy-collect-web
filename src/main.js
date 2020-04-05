import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFish, faPhone, faExclamationCircle,
  faCheckCircle, faSearch, faMapPin,
  faGlobe, faMapMarkerAlt, faTags,
  faFont, faStoreAlt, faCity, faEnvelope}
  from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueGeolocation from 'vue-browser-geolocation';
import Multiselect from 'vue-multiselect';
import VueToast from 'vue-toast-notification';

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

if (process.env.VUE_APP_ENV === 'production') {
  Sentry.init({
    dsn: 'https://67f1654682a245c5be0a2d589eb0ae1e@sentry.io/5179083',
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
  });
}


import axios from 'axios'


// register globally
Vue.component('multiselect', Multiselect);

import { LMap, LTileLayer, LMarker, LCircleMarker } from 'vue2-leaflet';
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
library.add(faGlobe);
library.add(faMapMarkerAlt);
library.add(faFont);
library.add(faTags);
library.add(faCity);
library.add(faStoreAlt);
library.add(faEnvelope);
library.add(faPhone);
library.add(faFacebook);
library.add(faTelegram);
library.add(faWhatsapp);

// leaflet
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-circle-marker', LCircleMarker);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueGeolocation);

Vue.use(VueToast);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
