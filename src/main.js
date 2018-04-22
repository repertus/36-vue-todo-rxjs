import Vue from 'vue'
import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

Vue.use(Vuex, VueRx, { Observable })

const vuex = new Vuex.Store(store)

new Vue({
  el: '#app',
  render: h => h(App),
  store: vuex
})
