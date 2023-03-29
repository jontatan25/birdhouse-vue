<template>
  <div
    v-if="loading"
    class="min-h-home flex w-full justify-center items-center"
  >
    <svg
      role="img"
      width="800"
      height="575"
      aria-labelledby="loading-aria"
      viewBox="0 0 800 575"
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
          <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
          <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
          <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
          <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
          <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
          <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
          <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
          <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
          <circle cx="286" cy="536" r="12" />
          <circle cx="319" cy="535" r="12" />
          <circle cx="353" cy="535" r="12" />
          <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
          <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
          <circle cx="210" cy="535" r="12" />
          <circle cx="428" cy="536" r="12" />
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
    <div
      v-if="!displayedBirdhouses.length"
      class="min-h-home flex w-full justify-center items-center"
    >
      <p class="font-poppins font-medium text-2xl text-white m-12">
        No BirdHouses added yet.
      </p>
    </div>
    <div
      v-if="displayedBirdhouses.length"
      class="min-h-home flex flex-col w-full justify-between overflow-scroll overflow-x-hidden overflow-y-hidden"
    >
      <div class="flex flex-wrap gap-8 p-7">
        <HouseItem
          v-for="birdhouse in displayedBirdhouses"
          :key="birdhouse.id"
          :birdhouse="birdhouse"
        />
      </div>
      <div class="flex justify-center h-16 bg-black-russian w-full">
        <button
          v-show="currentPage !== 1"
          class="btn-pag mr-5 px-1"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          <img src="@/assets/img/arrow-prev.svg" alt="arrow to go back" />
        </button>
        <div class="flex items-center">
          <button
            :class="{
              'bg-blue-lagoon hover:bg-blue-lagoon text-white text-opacity-100':
                currentPage === page,
              'text-gray-500  hover:bg-gray-600': currentPage !== page,
            }"
            class="font-poppins font-medium text-2xl mx-1 px-3 h-10 rounded-md hover:text-white min-w-[40px]"
            v-for="page in totalPages"
            :key="page"
            :disabled="currentPage === page"
            @click="() => goToPage(page)"
          >
            {{ page }}
          </button>
        </div>
        <button
          v-show="currentPage !== totalPages"
          class="btn-pag ml-5 px-1"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          <img src="@/assets/img/arrow-next.svg" alt="arrow to go back" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BirdHouse } from "@/types/birdhouse";
import HouseItem from "@/components/HouseItem.vue";
import axios from "axios";
import NProgress from "nprogress";
// import { ContentLoader } from "vue-content-loader";

export default defineComponent({
  name: "HousesList",
  components: {
    HouseItem,
    // ContentLoader,
  },
  data() {
    return {
      birdhouses: [] as BirdHouse[],
      loading: true,
      error: null,
      itemsPerPage: 24,
      currentPage: 1,
    };
  },
  async created() {
    NProgress.start();
    try {
      const API_URL =
        process.env.VUE_APP_LOCAL_BASE_URL ||
        "https://birdhouse-api.onrender.com";
      const response = await axios.get(`${API_URL}/houses`);
      this.birdhouses = response.data;
    } catch (error: any) {
      this.error = error;
      console.log(error);
    } finally {
      this.loading = false;
      NProgress.done();
    }
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.birdhouses.length / this.itemsPerPage);
    },
    displayedBirdhouses(): BirdHouse[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.birdhouses.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.currentPage++;
      window.scrollTo(0, 0);
    },
    prevPage() {
      this.currentPage--;
      window.scrollTo(0, 0);
    },
    goToPage(page: number) {
      this.currentPage = page;
      window.scrollTo(0, 0);
    },
  },
});
</script>
