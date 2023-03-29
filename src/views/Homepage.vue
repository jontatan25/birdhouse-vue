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
        <svg
          class="ml-3"
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
