<template>
  <!-- <header>
    <div class="flex items-center justify-center max-h-70 bg-gray-900">
      <h1 class="font-inter font-semibold text-2xl leading-30 text-white">
        Shockbyte BirdHouses Admin Panel
      </h1>
    </div>
  </header>
  <main>
    <div class="flex items-center justify-center h-20 bg-gray-900"></div>
  </main> -->

  <div class="w-screen h-screen">
    <header class="bg-black-russian">
      <div class="w-full my-0 mx-auto text-center">
        <h1 class="font-inter font-bold text-2xl leading-30 py-5 text-white">
          Shockbyte BirdHouses Admin Panel
        </h1>
      </div>
    </header>
    <div
      class="flex flex-col justify-center items-center h-full bg-black-pearl"
    >
      <h1
        class="font-poppins font-semibold text-2xl leading-9 text-center text-white mb-6"
      >
        Home page
      </h1>
      <button
        class="bg-blue-lagoon hover:bg-blue-600 text-white font-medium font-poppins py-3 px-4 rounded-lg mb-8 flex items-center"
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
  props: {
    msg: String,
  },
});
</script>
