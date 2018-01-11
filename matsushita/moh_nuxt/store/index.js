import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  mutations: { ...firebaseMutations },
  modules: {
    users
  }
})
export default store
