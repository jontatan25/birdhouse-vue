<template>
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
          class="btn-pag mr-7"
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
          class="btn-pag ml-7"
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

export default defineComponent({
  name: "HousesList",
  components: {
    HouseItem,
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
