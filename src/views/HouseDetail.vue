<template>
  <HouseDetailHeader />
  <HouseHistory
    v-if="birdhouse && showHistory"
    :residences="birdhouse.residences"
  />
  <HouseGraph
    v-else-if="birdhouse && !showHistory"
    :residences="birdhouse.residences"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BirdHouse } from "@/types/birdhouse";
import axios from "axios";
import HouseHistory from "../components/HouseHistory.vue";
import HouseDetailHeader from "@/components/HouseDetailHeader.vue";
import HouseGraph from "@/components/HouseGraph.vue";

export default defineComponent({
  name: "HousesList",
  components: {
    HouseDetailHeader,
    HouseHistory,
    HouseGraph,
  },
  data() {
    return {
      birdhouse: {} as BirdHouse,
      error: null,
      showHistory: true,
    };
  },
  async created() {
    // const sampleID = "a44d22df-bf81-41eb-99c5-d6e2aa6bca3c";
    const houseId = this.$route.params.id;
    axios
      .get(`http://192.168.0.106:3000/houses/${houseId}`)
      .then((response) => {
        this.birdhouse = response.data;
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
      });
  },
});
</script>
