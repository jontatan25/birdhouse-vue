<template>
  <div class="w-full">
    <div
      class="min-h-home flex flex-col justify-center items-center h-full bg-black-pearl"
    >
      <h1
        class="font-poppins font-semibold text-2xl leading-9 text-center text-white mb-6"
      >
        Home page
      </h1>
      <button
        class="btn-home bg-blue-lagoon hover:bg-blue-600 text-white font-medium font-poppins py-3 px-5 rounded-lg mb-8 flex items-center"
        @click="navigateToDashboard"
      >
        To Birdhouses Overview
        <img
          src="../assets/img/arrow-right.svg"
          alt="Arrow to Left"
          class="ml-3"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  setup() {
    const router = useRouter();

    const navigateToDashboard = () => {
      router.push("/dashboard");
    };

    return {
      navigateToDashboard,
    };
  },
});
</script>

<style>
.btn-home {
  transition: all 0.3s ease-in-out;
}
.btn-home:hover {
  scale: 1.05;
  transition: all 0.3s ease-in-out;
}
</style>
