<template>
  <p>El resultado de 2 + 2 es: {{var1}}</p>
  <button @click="showNumber">Calcular</button>
  <p v-if="check">El resultado es: {{var1}}</p>
  <div class="content">
    <article v-for="juego in juegos">
      <h3 >{{juego.titulo}}</h3>
      <p>{{juego.descripcion}}</p>
      <p>{{juego.contenido}}</p>
    </article>
  </div>
  
</template>

<script setup>
import {ref } from "vue";

let juegos = [
  {
  titulo: "Red dead Redemption",
  descripcion: "es un videojuego de acción-aventura western basado en el drama",
  contenido: "Juego + DLCs"
  },
  {
  titulo: "Half life",
  descripcion: "Half-Life es una serie de videojuegos pertenecientes al género de disparos",
  contenido: "Juego + DLCs"
  },
  {
  titulo: "Portal 2",
  descripcion: "Portal 2 es el segundo videojuego mezcla de videojuego de lógica y de disparos",
  contenido: "Juego + DLCs"
  }
]

console.log(juegos[0].titulo)

const var1 = ref(0);
const check = ref(false);

  function showNumber() {
    var1.value = 2 + 2;
    check.value = true;
  }
  </script>

<style>
  article{
    border: 1px solid grey;
    padding: 70px 20px 70px 20px;
  }
  .content{
    display: flex;
    margin-top: 50px;
  }
</style>
