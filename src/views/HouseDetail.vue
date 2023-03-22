<template>
  <div class="w-60 h-40 px-6 py-7 bg-black-russian rounded-xl text-white">
    DETAILS
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BirdHouse } from "@/types/birdhouse";
import axios from "axios";

export default defineComponent({
  name: "HousesList",

  data() {
    return {
      birdhouse: {} as BirdHouse,
      error: null,
    };
  },
  async created() {
    const sampleID = "a44d22df-bf81-41eb-99c5-d6e2aa6bca3c";
    const houseId = this.$route.params.id;
    const house = axios
      .get(`http://192.168.0.106:3000/houses/${sampleID}`)
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
