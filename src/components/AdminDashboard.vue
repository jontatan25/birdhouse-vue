<template>
  <div class="min-h-home w-full bg-black-pearl">
    <div class="min-h-home flex">
      <router-view name="AdminSidebar"></router-view>
      <div
        class="min-h-home w-full overflow-scroll overflow-x-hidden overflow-y-hidden"
      >
        <router-view name="content"></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminDashboard",
});
</script>
