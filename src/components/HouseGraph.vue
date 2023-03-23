<template>
  <div class="details-container">GRAPH</div>
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
