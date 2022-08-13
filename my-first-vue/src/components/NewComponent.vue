<template>
  <button @click="toggler = !toggler">Click me!</button>
  <h1 v-if="toggler">{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      toggler: false,
      message: 'Hello Word',
    };
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  margin: 40px auto;
  padding: 20px;
}

h1 {
  padding: 30px;
}
</style>
