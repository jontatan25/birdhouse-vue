<template>
  <div
    class="min-h-home flex flex-col w-full justify-center items-center bg-black-russian"
  >
    <h1 class="font-poppins font-semibold text-7xl text-white">Oops!</h1>
    <h3 class="font-poppins font-medium text-2xl text-white m-12">
      The {{ resource }} you're looking for is not here.
    </h3>
    <router-link :to="{ name: 'home' }">
      <button
        class="btn-home bg-blue-lagoon hover:bg-blue-600 text-white font-medium font-poppins py-3 px-5 rounded-lg mb-8 flex items-center"
      >
        Back to the home page
      </button></router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
});
</script>
