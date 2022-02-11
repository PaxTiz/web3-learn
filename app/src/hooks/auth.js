import { computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
    const store = useStore()
    const isAuth = computed(() => store.getters["user/isAuth"])
    const isError = computed(() => store.getters["user/isError"])
    const address = computed(() => store.getters["user/address"])
    const error = computed(() => store.getters["user/error"])
    return {
        isAuth,
        isError,
        address,
        error
    }
}
