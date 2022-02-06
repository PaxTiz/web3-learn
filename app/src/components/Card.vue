<template>
  <div class="card">
    <img :src="image" />
    <h2>{{ name }}</h2>
    <button>Buy now - {{ price }} ETH</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  image: String,
  name: String,
  price: Number,
});
</script>

<style scoped>
.card {
  background-color: #444444;
  padding: 16px;
  border-radius: 16px;
  text-align: left;
}
.card img {
  border-radius: 16px;
}
</style>
