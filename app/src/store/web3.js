import { ethers } from "ethers"
import { markRaw } from 'vue'

export default {
    namespaced: true,
    state: {
        provider: null,
    },
    getters: {
        provider: state => state.provider,
    },
    mutations: {
        setProvider (state, provider) {
            state.provider = markRaw(provider)
        }
    },
    actions: {
        init ({ commit }) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                commit('setProvider', provider)
            } catch {
                throw Error('Failed to initialize Web3 provider')
            }
        }
    }
}
