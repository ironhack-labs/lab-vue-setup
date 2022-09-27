<template>
  <section>
    <!-- Iteration 1 -->
    <h1>I´M THE {{ componentNumber }} {{ language }} COMPONENT</h1>
    <img src="imgURL" alt="" />
    <h3 v-text="date"></h3>
    <!-- Iteration 2 -->
    <div>
      <button v-on:click="Tool">Function expression</button>
      <button @click="tool2">Function declaration</button>
    </div>
  </section>
</template>

<script setup>
// Iteration 1
import { ref } from "vue";

let componentNumber = ref("FIRST");
let language = ref("VUEJs");

const imgURL = ref("../assets/run.jpg");
// Iteration 2
// function expressions
function Tool() {
  console.log(`Tool is da bomb!`);
  alert(`Tool is da bomb!`);
}
// function declarations
const tool2 = () => {
  console.log(`Tool is da bomb!`);
  alert(`Tool is da bomb!`);
};
</script>
<style scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
h1 {
  text-align: center;
}
img {
  width: 100%;
  height: 400px;
}

button {
  padding: 2rem;
  border-radius: 10%;
}
button:nth-child(even) {
  margin-left: 2rem;
}
div {
  display: flex;
  justify-content: space-around;
}
</style>
