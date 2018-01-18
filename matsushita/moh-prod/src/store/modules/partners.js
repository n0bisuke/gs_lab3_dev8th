import { firebaseAction } from 'vuexfire'

const state  = {
  partners : []
}

const getters = {
  getPartners: state => state.partners
}

const mutations = {
  addLikeStatus(state, uid) {
    console.log(state.partners);
    if(state.partners['.key']) {
      state.partners['.key'].isLiked = true
    }
  }
}

const actions= {
  setPartnersRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('partners', ref)
  })
}
export default {
  state,
  mutations,
  getters,
  actions
}
