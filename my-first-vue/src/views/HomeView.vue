<template>
  <div class="home">
    <new-component></new-component>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import newComponent from '@/components/NewComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    newComponent,
  },
};
</script>
