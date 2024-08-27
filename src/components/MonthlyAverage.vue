<template>
  <div class="chart-container">
    <canvas ref="monthlyChart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "MonthlyChart",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    /**
     * Prepares chart data for rendering.
     * @returns {Object} - The structured data for Chart.js.
     */
    chartData() {
      return {
        labels: this.data.map((entry) => entry.month),
        datasets: [
          {
            label: "Monthly Average",
            data: this.data.map((entry) => entry.average),
            backgroundColor: "rgba(153, 102, 255, 0.6)",
          },
        ],
      };
    },
  },
  mounted() {
    new Chart(this.$refs.monthlyChart, {
      type: "bar",
      data: this.chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
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
