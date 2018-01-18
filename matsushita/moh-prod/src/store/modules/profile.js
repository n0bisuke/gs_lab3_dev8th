import { firebaseAction } from 'vuexfire'
import firebase from 'firebase'
import {moment} from '../../App.vue'
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
  updateUserBreed(state, userBreed) {
    state.user.breed = userBreed
  },
  updateUserPhotoUrl1(state, userPhotoUrl1) {
    state.user.photoUrl1 = userPhotoUrl1
  },
  updateUserPhotoUrl2(state, userPhotoUrl2) {
    state.user.photoUrl2 = userPhotoUrl2
  },
  updateUserPhotoUrl3(state, userPhotoUrl3) {
    state.user.photoUrl3 = userPhotoUrl3
  },
  updateUserLiked(state, uid) {
    const key = uid
    console.log(uid)
    const timeStamp = moment().format();
    // state.user.liked = [{'uid': key, 'clickedAt': timeStamp}]
  }
}


const getters = {
  getUser: state => state.user
}

const actions = {
  setUsersRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
    console.log(ref)
    bindFirebaseRef('user', ref)
  }),
}
export default {
  state,
  mutations,
  getters,
  actions
}
