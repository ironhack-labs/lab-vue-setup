<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyComponent name="Elena" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyComponent from "@/components/MyComponent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MyComponent,
  },
};
</script>
