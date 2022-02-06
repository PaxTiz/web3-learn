<template>
  <div class="mint">
    <div class="mint-card">
      <div class="input">
        <input type="text" v-model="count" disabled />
        <div class="buttons">
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </div>
      </div>
      <button :disabled="count == 0">Mint</button>
    </div>

    <div class="faq">
      <h1>FAQ</h1>
      <div
        v-for="question in faq"
        :key="question.id"
        class="mint-card"
        :class="{ open: question.open }"
      >
        <div @click="() => toggle(question.id)" class="mint-card-header">
          <h2>{{ question.title }}</h2>
          <span>{{ question.open ? "-" : "+" }}</span>
        </div>
        <p class="mint-card-body">
          {{ question.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => {
  if (count.value < 10) count.value++;
};
const decrement = () => {
  if (count.value > 0) count.value--;
};

const faq = ref([
  {
    id: 0,
    title: "How many avatars are available?",
    open: true,
    content: `There are a total of 10,000 avatars in this collection. 8900 are
          available to mint, 1000 are reserved for our presale and latest 100
          are reserved for our team.`,
  },
  {
    id: 1,
    title: "How many avatars are available?",
    open: false,
    content: `There are a total of 10,000 avatars in this collection. 8900 are
          available to mint, 1000 are reserved for our presale and latest 100
          are reserved for our team.`,
  },
]);

const toggle = (i) => (faq.value[i].open = !faq.value[i].open);
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}

.mint {
  width: 400px;
  margin: 64px auto;
}

.mint-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #444444;
  padding: 16px;
  border-radius: 16px;
  text-align: left;
}

.mint-card input {
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #171717;
  border: none;
  color: #ededed;
  width: 100%;
}

.input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.input .buttons {
  display: flex;
  gap: 16px;
  width: max-content;
}

.faq {
  margin-top: 64px;
}
.faq .mint-card {
  gap: 16px;
  border: 0.5px solid #ededed;
  margin-bottom: 16px;
}
.faq .mint-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171717;
  border-radius: 16px;
  padding: 16px;
  margin: -16px;
  cursor: pointer;
}
.faq .mint-card-header * {
  margin: 0;
  font-size: 16px;
}
.faq .mint-card-body {
  display: none;
}

.mint-card.open .mint-card-header {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.mint-card.open .mint-card-body {
  display: block;
}
</style>
