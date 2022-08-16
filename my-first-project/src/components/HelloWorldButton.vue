<script>
export default {
  name: 'HelloWorld',
  props: {
    data: String,
    msg: String,
  },
  methods: {
    HelloWorld() {
      console.log('Hello World');
    },
  },
};
</script>

<template>
  <button @click="HelloWorld()">Say Hello</button>
</template>
