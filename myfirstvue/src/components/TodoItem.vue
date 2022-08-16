<template>
  <div>
    <h1>es un componente TodoItem</h1>
    <p>{{ hello }}</p>
    <button @click="helloworld">hello</button>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  data() {
    return {
      hello: '',
    };
  },
  methods: {
    helloworld() {
      this.hello = 'HelloWorld';
    },
  },
};
</script>
