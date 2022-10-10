<template>
  <h2>Composition API</h2>
  <p>Contador: {{ contador }}</p>
  <div class="controles">
    <div class="qty">
      <label for="qty">Qty</label>
      <input type="number" name="qty" id="" v-model="incremento" />
    </div>
    <button @click="sumar(incremento)">Suma</button>
    <button @click="restar(incremento)">Resta</button>
    <button @click="reset()">Reset</button>
  </div>
  <button @click="hello()">Hello World!</button>
</template>

<script setup>
import { ref } from "vue";

const contador = ref(0);
const incremento = ref(1);

const sumar = (qty = 1) => {
  contador.value += qty;
};

const restar = (qty = 1) => {
  contador.value -= qty;
};

const reset = () => {
  contador.value = 0;
  incremento.value = 1;
};

const hello = () => {
  console.log("'Hello World!' from Composition");
};
</script>

<style scoped>
p {
  text-align: center;
}

.controles {
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  min-height: 2rem;
  margin-bottom: 2rem;
}

.qty {
  display: flex;
  width: 12ch;
}
.qty > * {
  width: 50%;
}
</style>
