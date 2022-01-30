const handleLoginError = error => {
    if (error.code === 4001) {
        return 'Please login with Metamask'
    }
    return 'Unknown error'
}

export default {
    namespaced: true,
    state: {
        address: null,
        metamaskError: null
    },
    getters: {
        isAuth: state => state.address !== null,
        isError: state => state.metamaskError !== null,
        address: state => state.address,
        error: state => state.metamaskError,
    },
    mutations: {
        reset (state) {
            state.address = null
        },
        login (state, address) {
            state.address = address
        },
        setError (state, error) {
            state.metamaskError = error
        }
    },
    actions: {
        login ({ commit }, address) {
            commit('login', address)
        },
        async loginWithMetamask ({ commit }) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                if (accounts && accounts.length > 0) {
                    commit('login', accounts[0])
                } else {
                    throw Error("Failed to fetch user account")
                }
            } catch (e) {
                commit('reset')
                commit('setError', handleLoginError(e))
            }
        }
    }
}
