<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SaludoComp></SaludoComp>
    <ToDoItem></ToDoItem>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SaludoComp from '@/components/SaludoComp.vue';
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SaludoComp,
    ToDoItem,
  },
};
</script>
