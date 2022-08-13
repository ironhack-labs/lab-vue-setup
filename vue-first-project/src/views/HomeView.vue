<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDoItem/>
    <HelloWorld msg="Welcome to my first Vue.js project"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ToDoItem,
  },
};
</script>
