<template>
    <button class="log" @click="helloWorld" >Log</button>
    <label for="todo">{{ message }}
        <input type="checkbox" id="todo" />
    </label>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('My ToDo Item');
const helloWorld = () => console.log('Hello world');
</script>

<style>
    .log {
        display: block;
        margin: 20px auto;
    }
</style>
