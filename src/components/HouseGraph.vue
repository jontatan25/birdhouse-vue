<template>
  <div class="min-h-details flex justify-center w-full px-8">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chart, { ChartItem } from "chart.js/auto";
import { Residency } from "@/types/residency";

export default defineComponent({
  name: "HouseHistory",
  props: {
    residences: {
      type: Array as () => Residency[],
      required: true,
    },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    residences: {
      handler() {
        this.renderChart();
      },
      deep: true,
    },
  },
  methods: {
    renderChart() {
      if (!this.residences) {
        return;
      }

      const data = {
        //Formatting date from the API
        labels: this.residences.map((residency) => {
          const date = new Date(residency.date);
          return date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
        }),
        datasets: [
          {
            label: "Number of Birds",
            data: this.residences.map((residency) => residency.birds),
            borderColor: "#744F99",
            fill: true,
            backgroundColor: "rgba(116, 79, 153, 0.2)",
            tension: 0.4,
          },
          {
            label: "Number of eggs",
            data: this.residences.map((residency) => residency.eggs),
            borderColor: "#0074D9",
            fill: true,
            backgroundColor: "rgba(0, 116, 217, 0.2)",
            tension: 0.4,
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Timeline",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.05)",
            },
          },
          y: {
            title: {
              display: true,
              text: "BirdHouse",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.05)",
            },
          },
        },
        plugins: {
          //displays color and name Info
          legend: {
            display: true,
          },
        },
      };

      const chart = new Chart(this.$refs.chart as ChartItem, {
        type: "line",
        data,
        options,
      });
    },
  },
});
</script>
