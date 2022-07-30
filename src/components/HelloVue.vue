<template>
  <h1>Hello Vue 💚</h1>
  <h2>{{ msg }}</h2>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h2::before {
  content: "🚧";
}

h2::after {
  content: "🚧";
}
</style>
