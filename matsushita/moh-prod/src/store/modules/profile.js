import { firebaseAction } from 'vuexfire'
const state = {
  users: []
}
const getters = {
  getUser: state => state.users
}
const mutations = {
  addUser: (state, users) => state.users.push(users)
}
const actions = {
  setOrdersRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('users', ref)
  })
}
export default {
  state,
  mutations,
  getters,
  actions
}
