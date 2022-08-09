<template>
  Hello {{ name }}
  <button @click="helloWorld">Hello World</button>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    name: String,
  },
  methods: {
    helloWorld() {
      console.log("Hello World");
    },
  },
};
</script>

<style></style>
