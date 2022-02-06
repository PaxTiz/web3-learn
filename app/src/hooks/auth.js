import { readonly, ref } from 'vue'
import { useStore } from 'vuex'

export default () => {
    const store = useStore()
    const isAuth = ref(() => store.getters["user/isAuth"])
    const isError = ref(() => store.getters["user/isError"])
    const address = ref(() => store.getters["user/address"])
    const error = ref(() => store.getters["user/error"])
    return {
        isAuth: readonly(isAuth),
        isError: readonly(isError),
        address: readonly(address),
        error: readonly(error)
    }
}
