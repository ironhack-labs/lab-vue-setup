<template>
  <div class="home">
    <ToDoItem />
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'HomeView',
  components: {
    ToDoItem,
  },
};
</script>
