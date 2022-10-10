<template>
  <h2>Options API</h2>
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

<script>
export default {
  data() {
    return {
      contador: 0,
      incremento: 1,
    };
  },
  methods: {
    sumar(qty = 1) {
      this.contador += qty;
    },
    restar(qty = 1) {
      this.contador -= qty;
    },
    reset() {
      this.contador = 0;
      this.incremento = 1;
    },
    hello() {
        console.log("'Hello World!' from Options");
    }
  },
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
