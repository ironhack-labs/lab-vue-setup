<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <ToDoItem />
    <HelloWorldButton />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ToDoItem from '@/components/ToDoItem.vue';
import HelloWorldButton from '@/components/HelloWorldButton.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ToDoItem,
    HelloWorldButton,
  },
};
</script>
