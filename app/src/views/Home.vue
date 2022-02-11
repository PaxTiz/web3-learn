<template>
  <div class="home">
    <h1 v-if="auth.isError.value">{{ auth.error.value }}</h1>
    <h1 v-else-if="auth.isAuth.value">{{ auth.address.value }}</h1>
    <h1 v-else>
      <button @click="loginWithMetamask">Connect with Metamask</button>
    </h1>

    <div class="grid">
      <Card
        image="https://picsum.photos/300"
        name="Snoop Dogg #2"
        :price="0.1"
      />
      <Card
        image="https://picsum.photos/300"
        name="Snoop Dogg #3"
        :price="0.1"
      />
      <Card
        image="https://picsum.photos/300"
        name="Snoop Dogg #1"
        :price="0.1"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import useAuth from "../hooks/auth";
import Card from "../components/Card.vue";

const store = useStore();
const auth = useAuth();

const loginWithMetamask = () => store.dispatch("user/loginWithMetamask");
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin: 64px 200px;
}
</style>
