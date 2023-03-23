<template>
  <div class="details-container">
    <div
      v-for="residence in residences"
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
  methods: {
    formatDate(date: Date): string {
      const formattedDate = new Date(date);
      return formattedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
    },
  },
});
</script>
