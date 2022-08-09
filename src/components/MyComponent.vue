<template>
  Hello {{ name }}
  {{ 2 + 2 }}
  {{ value }} {{ valuePlusTwo }}
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
  data() {
    return {
      value: 2,
    };
  },
  computed: {
    valuePlusTwo() {
      return this.value + 2;
    },
  },
};
</script>

<style></style>
