<template>
  <div>
    <h1>Site Header {{sitename}}</h1>
    <button @click="helloWorld">Clic me!</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      sitename: "Sitio"
    }
  },
  methods: {
    helloWorld(){
      console.log("hello world")
    }
  }
}
</script>

<style>

</style>