<template>
  <HelloWorld />
  <div>
    <h2>Hello {{ name }}!</h2>
    <h3 v-if="show">Hello World!</h3>
    <button @click="helloWorld">Show</button>
  </div>
  
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import {ref} from "vue"

const name = ref("Laura")
const show = ref(true)

function helloWorld() {
  show.value === true ? show.value = false : show.value = true
}

</script>

<style scoped>
div {
  text-align: center;
}
</style>