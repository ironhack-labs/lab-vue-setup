<template>
  Hello {{ name }}
  {{ 2 + 2 }}
  {{ value }} {{ valuePlusTwo }}
  <button @click="helloWorld">Hello World</button>
  <div v-if="show">true</div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
      {{ post.description }}
      {{ post.content }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    name: String,
  },
  methods: {
    helloWorld() {
      console.log("Hello World");
    },
  },
  data() {
    return {
      value: 2,
      show: true,
      posts: [
        {
          id: 0,
          title: "Super Sick",
          description: "About to die",
          content: "Give me a nice goodbye",
        },
        {
          id: 1,
          title: "No more weekends",
          description: "People bring covid",
          content: "Covid is not good",
        },
        {
          id: 2,
          title: "Vue better than JS",
          description: "Much nicer and quick",
          content: "Nice array of objects",
        },
      ],
    };
  },
  computed: {
    valuePlusTwo() {
      return this.value + 2;
    },
  },
};
</script>

<style></style>
