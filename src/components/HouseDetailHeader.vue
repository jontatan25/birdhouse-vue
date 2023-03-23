<template>
  <div
    class="flex flex-col px-6 pt-7 bg-black-russian text-white w-full rounded-xl mb-6"
  >
    <div class="flex justify-between w-full h-14">
      <h2 class="font-poppins font-semibold text-2xl text-white">
        Cool birdhouse
      </h2>
      <div class="flex justify-between items-end w-48 h-6">
        <img class="h-4" src="../assets/img/location.svg" alt="location" />
        <span class="text-white font-poppins font-medium leading-none"
          >({{ birdhouse.latitude }},{{ birdhouse.longitude }})</span
        >
      </div>
    </div>
    <div class="flex">
      <button :class="overviewClass" @click="() => toggleHistory(true)">
        Overview
      </button>
      <button :class="historyClass" @click="() => toggleHistory(false)">
        Graph
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const classes = {
  activeTab: "font-poppins font-normal text-base pb-3 mr-8",
  inactiveTab:
    "text-blue-lagoon font-poppins font-normal text-base border-b-2 border-b-blue-lagoon pb-3 mr-8",
};

export default defineComponent({
  name: "HouseDetailHeader",
  props: ["showHistory", "toggleHistory", "birdhouse"],
  computed: {
    overviewClass(): string {
      return this.showHistory ? classes.inactiveTab : classes.activeTab;
    },
    historyClass(): string {
      return this.showHistory ? classes.activeTab : classes.inactiveTab;
    },
  },
});
</script>
