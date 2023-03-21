<template>
  <div class="w-full">
    <div
      class="home-container flex flex-col justify-center items-center h-full bg-black-pearl"
    >
      <h1
        class="font-poppins font-semibold text-2xl leading-9 text-center text-white mb-6"
      >
        Home page
      </h1>
      <button
        class="bg-blue-lagoon hover:bg-blue-600 text-white font-medium font-poppins py-3 px-5 rounded-lg mb-8 flex items-center"
      >
        To Birdhouses Overview
        <img src="../assets/img/Icon.svg" alt="Arrow to Left" class="ml-3" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  // props: {
  //   msg: String,
  // },
});
</script>

<style scoped>
.home-container {
  min-height: calc(100vh - 72px);
}
</style>
