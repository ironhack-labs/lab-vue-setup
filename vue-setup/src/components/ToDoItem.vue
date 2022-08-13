<template>
    <label for="todo">{{ message }}
        <input type="checkbox" id="todo" />
    </label>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('My ToDo Item');
</script>

<style>

</style>
