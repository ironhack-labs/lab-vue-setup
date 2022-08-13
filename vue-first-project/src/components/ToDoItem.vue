<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">My Todo Item</label>
    <br />
    <button @click="HelloWorld">Click to print the message on console</button>
  </div>
</template>

<script>
export default {
  name: "ToDoItem", 

  methods: {
    HelloWorld() {
      console.log("OMG, this actually works!");
    },
  },
};
</script>

<style>
label {
  color: #42b983;
}

button {
  margin-top: 20px;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background-color: #43d2ff;
  color: #072ac8;
  transform: scale(1.1);
  transition: 0.5s ease-in-out 0s;
}
</style>