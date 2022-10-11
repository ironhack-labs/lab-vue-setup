<template>
	<button @click="helloWorld()">Click aquí!</button>
</template>

<script setup>
const helloWorld = () => {
	alert("Hello world!!");
};
</script>

<style scoped></style>