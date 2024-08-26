<template>
  <div class="chart-container">
    <canvas ref="weeklyAverageChart"></canvas>
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
  name: "WeeklyAverageChart",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
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
    new Chart(this.$refs.weeklyAverageChart, {
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
