<template>
  <div v-if="!loading">
    <div class="min-h-home">
      <HouseDetailHeader
        v-if="birdhouse"
        :birdhouse="birdhouse"
        :showHistory="showHistory"
        :toggleHistory="toggleHistory"
      />
      <HouseHistory
        v-if="birdhouse && showHistory"
        :residences="birdhouse.residences"
      />
      <HouseGraph
        v-else-if="birdhouse && !showHistory"
        :residences="birdhouse.residences"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BirdHouse } from "@/types/birdhouse";
import axios from "axios";
import HouseHistory from "../components/HouseHistory.vue";
import HouseDetailHeader from "@/components/HouseDetailHeader.vue";
import HouseGraph from "@/components/HouseGraph.vue";
import NProgress from "nprogress";

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
      loading: true,
      error: null,
      showHistory: true,
    };
  },
  async created() {
    NProgress.start();
    try {
      const houseId = this.$route.params.id;
      const response = await axios.get(
        `http://192.168.0.104:3000/houses/${houseId}`
      );
      this.birdhouse = response.data;
    } catch (error: any) {
      this.error = error;
      console.log(error);
      this.$router.push({
        name: "404Resource",
        params: { resource: "Birdhouse" },
      });
    } finally {
      this.loading = false;
      NProgress.done();
    }
  },
  methods: {
    toggleHistory(value: boolean) {
      this.showHistory = value;
    },
  },
});
</script>
