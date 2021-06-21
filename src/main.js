import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex';
import store from './store';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart)


Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  Vuex,
  store,
  render: h => h(App),
}).$mount('#app')






