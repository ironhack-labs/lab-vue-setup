<template>
  <div>
    <h1>I´M THE {{ componentNumber }} {{ language }} COMPONENT</h1>
    <h3 v-text="date"></h3>
  </div>
</template>

<script setup>
import { ref } from "vue";

let componentNumber = ref("FIRST");
let language = ref("VUEJs");
let date = ref("26/09/22");
</script>
<style></style>
