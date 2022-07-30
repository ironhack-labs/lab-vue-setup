<template>
  <div class="home">
    <HelloVue msg="This is my first Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloVue from "@/components/HelloVue.vue";
export default {
  name: "HomeView",
  components: {
    HelloVue,
  },
};
</script>
