<template>
  <div class="flex flex-wrap gap-8">
    <div v-for="birdhouse in birdhouses" :key="birdhouse.id">
      <HouseItem :birdhouse="birdhouse" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BirdHouse } from "@/types/birdhouse";
import HouseItem from "@/components/HouseItem.vue";
import axios from "axios";

export default defineComponent({
  name: "HousesList",
  components: {
    HouseItem,
  },
  data() {
    return {
      birdhouses: [] as BirdHouse[],
      error: null,
    };
  },
  created() {
    axios
      .get("http://192.168.0.106:3000/houses")
      .then((response) => {
        this.birdhouses = response.data;
      })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  },
});
</script>
