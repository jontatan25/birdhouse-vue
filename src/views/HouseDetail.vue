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
          >(7.160850, 16.072736)</span
        >
      </div>
    </div>
    <div class="flex">
      <span
        class="text-blue-lagoon font-poppins font-normal text-base border-b-2 border-b-blue-lagoon pb-3 mr-8"
        >Overview</span
      >
      <span class="font-poppins font-normal text-base pb-3">Graph</span>
    </div>
  </div>

  <HouseHistory :residences="birdhouse.residences" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BirdHouse } from "@/types/birdhouse";
import axios from "axios";
import HouseHistory from "./HouseHistory.vue";

export default defineComponent({
  name: "HousesList",
  components: {
    HouseHistory,
  },
  data() {
    return {
      birdhouse: {} as BirdHouse,
      error: null,
    };
  },
  async created() {
    // const sampleID = "a44d22df-bf81-41eb-99c5-d6e2aa6bca3c";
    const houseId = this.$route.params.id;
    axios
      .get(`http://192.168.0.106:3000/houses/${houseId}`)
      .then((response) => {
        this.birdhouse = response.data;
        console.log(this.birdhouse);
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
      });
  },
});
</script>
