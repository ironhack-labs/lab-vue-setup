<template>

	<div>Hola!</div>
	<p>{{ actualizado }}</p>
	<Boton/>

</template>

<script setup>

import { ref } from "vue";
import Informacion from "./components/Informacion.vue";
import Boton from "./components/Boton.vue"

let actualizado = "informacion de js";
</script>

<style scoped></style>