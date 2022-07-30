<template>
  <div class="home">
    <HelloVue msg="This is my first Vue.js App" />
    <ImageNavigador />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloVue from "@/components/HelloVue.vue";
import ImageNavigador from "@/components/ImageNavigador.vue";

export default {
  name: "HomeView",
  components: {
    HelloVue,
    ImageNavigador,
  },
};
</script>
