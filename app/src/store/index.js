import { createStore } from 'vuex'
import user from './user'
import web3 from './web3'

export default createStore({
  strict: true,
  modules: {
    user,
    web3,
  }
})
