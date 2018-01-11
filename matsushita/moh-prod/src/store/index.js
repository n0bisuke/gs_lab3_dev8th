import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import auth from './modules/auth'
import profile from './modules/profile'
import { firebaseMutations } from 'vuexfire'

const store = new Vuex.Store({
  mutations :  { ...firebaseMutations },
  modules: {
    auth,
    profile
  }
})
export default store
