<template>
  <router-link :to="'/dashboard/house/' + birdhouse.id" class="house-item-link">
    <div class="house-item w-60 h-40 px-6 py-7 bg-black-russian rounded-xl">
      <h3 class="font-poppins font-semibold text-2xl text-white mb-5">
        Cool birdhouse
      </h3>
      <div class="flex justify-between mb-2">
        <img src="../assets/img/location.svg" alt="location" />
        <span class="text-white font-poppins font-normal"
          >({{ birdhouse.latitude }},{{ birdhouse.longitude }})</span
        >
      </div>
      <div class="flex">
        <div class="flex justify-between w-10 mr-3">
          <img src="../assets/img/pets.svg" alt="location" />
          <span class="text-white font-poppins font-normal">{{
            birdhouse.birds
          }}</span>
        </div>
        <div class="flex justify-between w-9">
          <img src="../assets/img/eggs.svg" alt="location" />
          <span class="text-white font-poppins">{{ birdhouse.eggs }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";
import { BirdHouse } from "@/types/birdhouse";

export default defineComponent({
  name: "HouseItem",
  props: {
    birdhouse: {
      type: Object as () => BirdHouse,
      required: true,
    },
  },
});
</script>

<style scoped>
.house-item {
  transition: all 0.5s ease-in-out;
}
.house-item:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
  outline: 1px solid rgb(75, 85, 99);
}
</style>
