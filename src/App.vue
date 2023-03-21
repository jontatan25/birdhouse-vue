<template>
  <HomePage msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "./components/Homepage.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
});
</script>
