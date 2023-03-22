<template>
  <div class="min-h-home w-full bg-black-pearl">
    <div class="container-dashboard flex">
      <router-view name="AdminSidebar"></router-view>
      <div class="container-component">
        <router-view name="content"></router-view>
      </div>
    </div>
    <div class="pages-container h-16 text-white bg-black-russian">FOOTER</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import DashboardContent from "./DashboardContent.vue";
// import HousesList from "@/views/HousesList.vue";
// import AdminSidebar from "./AdminAdminSidebar.vue";

export default defineComponent({
  name: "AdminDashboard",
  components: {
    // DashboardContent,
    // HousesList,
    // AdminSidebar,
  },
});
</script>

<style scoped>
.container-dashboard {
  height: calc(100vh - 136px);
}
</style>
