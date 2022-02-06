<template>
  <div id="application">
    <div id="nav">
      <router-link to="/">Marketplace</router-link>
      <router-link to="/mint">Mint</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  try {
    store.dispatch("web3/init");
    const accounts = await store.getters["web3/provider"].listAccounts();
    if (accounts && accounts.length > 0) {
      store.dispatch("user/login", accounts[0]);
    }
  } catch (e) {
    console.error(e);
  }
});

// async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   if (provider) {
//     console.log(`Provider = `, provider);
//     const signer = provider.getSigner();
//     console.log(`Signer =`, signer);

//     provider
//       .getBlockNumber()
//       .then((block) => {
//         console.log(`Block number = ${block}`);
//       })
//       .catch(console.error);
//     provider
//       .getBalance("ethers.eth")
//       .then((balance) => {
//         console.log(`Balance = ${ethers.utils.formatEther(balance)}`);
//       })
//       .catch(console.error);

//     // const account = await loginWithMetamask();
//     const account = "0x00";

//     // Abort using non-local network
//     console.log(`Network version = ${window.ethereum.networkVersion}`);
//     if (window.ethereum.networkVersion !== "31337") {
//       console.error("Please select Rinkeby network");
//       return;
//     } else {
//       console.log(`Account = ${account}`);
//       console.log(`Selected address = ${window.ethereum.selectedAddress}`);
//     }
//   } else {
//     console.error("Provider not found");
//   }
// };
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ededed;
  background-color: #171717;
}

#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
  gap: 30px;
}

#nav a {
  font-weight: bold;
  color: #ededed;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #da0037;
}

button {
  border: none;
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background-color: #da0037;
  color: #fff;
}
button[disabled],
button[disabled]:hover {
  background-color: #ededed;
  opacity: 0.3;
  color: #171717;
}
</style>
