<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 v-if="isError">{{ error }}</h1>
    <h1 v-else-if="isAuth">{{ address }}</h1>
    <h1 v-else>
      <button @click="loginWithMetamask">Connect with Metamask</button>
    </h1>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const isAuth = computed(() => store.getters["user/isAuth"]);
const isError = computed(() => store.getters["user/isError"]);
const address = computed(() => store.getters["user/address"]);
const error = computed(() => store.getters["user/error"]);

const loginWithMetamask = () => store.dispatch("user/loginWithMetamask");
</script>
