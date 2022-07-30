<template>
  <div>
    <h1>Hello Vue 💚</h1>
    <h2>{{ msg }}</h2>
    <button @click="helloWorld">Write hello to console</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    helloWorld() {
      console.log("👋 Hello world 🌍");
    },
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
