import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter("ellipsis", (str, maxLen) => {
  return str.length > maxLen ? str.slice(0, maxLen) + "..." : str;
});

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});

import Scroller from '@/components/scroller'
Vue.component('Scroller', Scroller);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

