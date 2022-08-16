<template>
  <div class="home">
    <h1>To-Do List</h1>
    <ul>
    <li>
      <to-do-item></to-do-item>
    </li>
  </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'HomeView',
  components: {
    ToDoItem,
  },
};
</script>
