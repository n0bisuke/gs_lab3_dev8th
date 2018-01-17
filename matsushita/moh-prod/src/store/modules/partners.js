import { firebaseAction } from 'vuexfire'

const state  = {
  partners : []
}

const getters = {
  getPartners: state => state.partners
}

const mutations = {
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
