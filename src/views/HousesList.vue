<template>
  <div class="houses-container pt-8 pl-8">
    <div class="w-60 h-40 px-6 py-7 bg-black-russian rounded-xl">
      <h3 class="font-poppins font-semibold text-2xl text-white mb-5">
        Cool birdhouse
      </h3>
      <div class="flex justify-between mb-2">
        <img src="../assets/img/location.svg" alt="location" />
        <span class="text-white font-poppins font-normal"
          >(7.160850, 16.072736)</span
        >
      </div>
      <div class="flex">
        <div class="flex justify-between w-10 mr-3">
          <img src="../assets/img/pets.svg" alt="location" />
          <span class="text-white font-poppins font-normal">3</span>
        </div>
        <div class="flex justify-between w-9">
          <img src="../assets/img/eggs.svg" alt="location" />
          <span class="text-white font-poppins">2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HousesList",
});
</script>
