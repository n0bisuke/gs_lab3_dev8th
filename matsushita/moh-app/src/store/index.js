import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import auth from './modules/auth'
import { firebaseMutations } from 'vuexfire'

const store = new Vuex.Store({
  mutations :  { ...firebaseMutations },
  modules: {
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store
