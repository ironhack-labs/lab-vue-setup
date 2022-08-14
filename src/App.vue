<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style></style>
