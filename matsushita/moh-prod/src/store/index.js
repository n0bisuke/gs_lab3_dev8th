import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import auth from './modules/auth'
import profile from './modules/profile'
import partners from './modules/partners'
import { firebaseMutations } from 'vuexfire'

const store = new Vuex.Store({
  mutations :  { ...firebaseMutations },
  modules: {
    auth,
    profile,
    partners
  }
})
export default store
