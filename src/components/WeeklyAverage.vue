<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

export default {
  name: "WeeklyAverageChart",
  props: {
    data: Array,
  },
  computed: {
    /**
     * Prepares chart data for rendering.
     * @returns {Object} - The structured data for Chart.js.
     */
    chartData() {
      return {
        labels: this.data.map((entry) => entry.week),
        datasets: [
          {
            label: "Weekly Average",
            data: this.data.map((entry) => entry.average),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      };
    },
  },
  mounted() {
    new Chart(this.$refs.chartCanvas, {
      type: "bar",
      data: this.chartData,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
          },
          zoom: {
            pan: {
              enabled: true,
              mode: "x",
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              mode: "x",
            },
          },
        },
        scales: {
          x: {
            type: "category",
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.chart-container {
  height: 400px;
  width: 100%;
}
</style>
