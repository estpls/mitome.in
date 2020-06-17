import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyPairs: {}, // genrated key pairs
    publicKeys: [], // for encryption
    privateKey: {}, // for decrpytion and clear sign
    publicKey: {} // for verifitcation
  },
  mutations: {
    setKeyPair: (state, payload) => {
      state.keyPairs[payload.owner] = payload.keyPair
    },
    setPublicKeys: (state, publicKeys) => {
      state.publicKeys = publicKeys
    },
    setPrivateKey: (state, payload) => {
      state.privateKey[payload.owner] = payload.key
    },
    setPublicKey: (state, payload) => {
      state.publicKey[payload.owner] = payload.key
    }
  }
});
