import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

Vue.use(Vuex)

const vuex = new Vuex.Store(store)

new Vue({
  el: '#app',
  render: h => h(App),
  store: vuex
})
