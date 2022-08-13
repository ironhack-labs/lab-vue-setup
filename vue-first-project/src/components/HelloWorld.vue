<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{message2}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    message2: String,
  },
  data() {
    return {
      message2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.',
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  margin: 40px 0 0;
  color: #6b708d;
}
h2 {
  padding: 20px;
  font-style: oblique;
}
</style>
