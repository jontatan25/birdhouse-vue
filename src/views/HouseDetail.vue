<template>
  <div
    v-if="loading"
    class="min-h-home flex w-full justify-center items-center"
  >
    <svg
      role="img"
      width="800"
      height="375"
      aria-labelledby="loading-aria"
      viewBox="0 0 800 375"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style="fill: url('#fill')"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <circle cx="30" cy="35" r="25" />
          <rect x="80" y="15" rx="5" ry="5" width="600" height="40" />
          <circle cx="30" cy="105" r="25" />
          <rect x="80" y="85" rx="5" ry="5" width="600" height="40" />
          <circle cx="30" cy="175" r="25" />
          <rect x="80" y="155" rx="5" ry="5" width="600" height="40" />
          <circle cx="30" cy="245" r="25" />
          <rect x="80" y="225" rx="5" ry="5" width="600" height="40" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stop-color="#2E2F37" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stop-color="#3C3D48" stop-opacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stop-color="#2E2F37" stop-opacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
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
      const API_URL =
        process.env.VUE_APP_LOCAL_BASE_URL ||
        "https://birdhouse-api.onrender.com";
      const response = await axios.get(`${API_URL}/houses/${houseId}`);
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
