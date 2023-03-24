<template>
  <div class="min-h-details p-8">
    <div
      v-for="residence in displayedResidences"
      :key="residence.id"
      class="flex flex-col"
    >
      <div
        class="flex detail-info p-6 bg-black-russian text-white w-full rounded-xl mb-6"
      >
        <span class="mr-9 font-poppins font-normal text-base text-white">
          {{ formatDate(residence.date) }}</span
        >
        <div class="flex mr-2">
          <img class="mr-2" src="../assets/img/pets.svg" alt="location" /><span
            class="font-poppins font-normal text-base text-white"
            >{{ residence.birds }}</span
          >
        </div>
        <div class="flex">
          <img class="mr-2" src="../assets/img/eggs.svg" alt="location" /><span
            class="font-poppins font-normal text-base text-white"
            >{{ residence.eggs }}</span
          >
        </div>
      </div>
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
        class="font-poppins font-medium text-2xl text-white text-opacity-40 mx-1 px-3 h-10 rounded-md hover:text-opacity-100 hover:bg-gray-600"
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Residency } from "@/types/residency";

export default defineComponent({
  name: "HouseHistory",
  props: {
    residences: {
      type: Array as () => Residency[],
      required: true,
    },
  },
  data() {
    return {
      error: null,
      itemsPerPage: 6,
      currentPage: 1,
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.residences.length / this.itemsPerPage);
    },
    displayedResidences(): Residency[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.residences.slice(start, end);
    },
  },
  methods: {
    formatDate(date: Date): string {
      const formattedDate = new Date(date);
      return formattedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
    },
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
