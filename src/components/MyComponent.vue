<template>
  Hello {{ name }}
  {{ 2 + 2 }}
  {{ value }} {{ valuePlusTwo }}
  <button @click="helloWorld">Hello World</button>
  <div v-if="show">true</div>
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
      show: true,
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
