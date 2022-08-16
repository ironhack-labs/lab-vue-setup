<template>
  <form>
    <label for="todo-item">
      <span> Message: {{ message }}</span>
      <input type="checkbox" id="todo-item" />
      <button @click="printMessage">Add 1</button>
      <p>Count is: {{ count }}</p>
    </label>
  </form>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Object World',
      count: 0,
    };
  },
  methods: {
    printMessage() {
      console.log('message printed');
      alert('message printed');
      this.count += 1;
    },
  },
};
</script>
