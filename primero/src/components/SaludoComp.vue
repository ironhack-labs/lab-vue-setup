<template>
  <div>
    <h1>{{message}}</h1>
  <button @click= "helloworld">Cambiar Saludo</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hola que tal',
    };
  },
  methods: {
    helloworld() {
      this.message = 'Hello World';
    },
  },
};
</script>
