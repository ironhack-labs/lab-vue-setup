<template>
  <h1>Contadores</h1>
  <div class="grid">
    <div class="options"><CounterO /></div>
    <div class="composition"><CounterC /></div>
  </div>
</template>

<script setup>
import CounterO from "./components/CounterO.vue";
import CounterC from "./components/CounterC.vue";
</script>

<style>
h1 {
  margin: 0 auto 2rem auto;
}

p {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.options,
.composition {
  padding: 1rem;
}

.options {
  background-color: #DCC;
}

.composition {
  background-color: #CDC;
}
</style>
