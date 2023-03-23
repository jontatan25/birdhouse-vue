<template>
    <div>ERROR</div>
  <!-- <div
    v-else-if="error"
    class="flex flex-col px-6 pt-7 bg-black-russian text-white w-full rounded-xl mb-6"
  >
    Oops Something went wrong. Please try again
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Residency } from "@/types/residency";

export default defineComponent({
  name: "HouseGraph",
  props: {
    residences: {
      type: Array as () => Residency[],
      required: true,
    },
  },
});
</script>
