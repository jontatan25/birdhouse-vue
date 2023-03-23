<template>
  <div
    class="list-container min-h-home flex flex-col w-full justify-between overflow-x-hidden"
  >
    <div class="flex flex-wrap gap-8 mb-8 pt-8 px-8">
      <div v-for="birdhouse in displayedBirdhouses" :key="birdhouse.id">
        <HouseItem :birdhouse="birdhouse" />
      </div>
    </div>
    <div class="flex justify-center h-16 bg-black-russian w-full">
      <button
        class="font-poppins font-medium text-2xl text-white mr-7"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <img src="@/assets/img/arrow-prev.svg" alt="arrow to go back" />
      </button>
      <div class="flex items-center">
        <button
          :class="{ 'bg-blue-lagoon text-opacity-100': currentPage === page }"
          class="font-poppins font-medium text-2xl text-white text-opacity-40 mx-1 px-3 h-10 rounded-md hover:text-opacity-100"
          v-for="page in totalPages"
          :key="page"
          :disabled="currentPage === page"
          @click="() => goToPage(page)"
        >
          {{ page }}
        </button>
      </div>
      <button
        class="ml-7"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        <img src="@/assets/img/arrow-next.svg" alt="arrow to go back" />
      </button>
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
      itemsPerPage: 24,
      currentPage: 1,
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
