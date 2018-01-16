import { firebaseAction } from 'vuexfire'
import firebase from 'firebase'
const state = {
  user: {}
}
const mutations = {
  updateUser(state, user) {
    state.user = user
  },
  updateUserAge(state, userAge) {
    state.user.age = userAge
  },
  updateUserDesc(state, userDesc) {
    state.user.description = userDesc
  },
  updateUserDisplayName(state, userDisplayName) {
    state.user.displayName = userDisplayName
  },
  updateUserGender(state, userGender) {
    state.user.gender = userGender
  },
}


const getters = {
  getUser: state => state.user
}

const actions = {
  setUsersRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('user', ref)
  }),
}
export default {
  state,
  mutations,
  getters,
  actions
}
