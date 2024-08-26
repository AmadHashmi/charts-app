<template>
  <div class="chart-container">
    <canvas ref="minMaxAreaChart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "MinMaxAreaChart",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chartData() {
      if (!this.data || !this.data.minMaxData) {
        return {
          labels: [],
          datasets: [],
        };
      }

      const labels = Object.keys(this.data.minMaxData);
      const minData = labels.map((label) => this.data.minMaxData[label].min);
      const maxData = labels.map((label) => this.data.minMaxData[label].max);
      const currentYearData = this.data.dailyData
        .filter(
          (entry) =>
            new Date(entry.date).getFullYear() === new Date().getFullYear()
        )
        .map((entry) => entry.close);

      return {
        labels,
        datasets: [
          {
            label: "Min",
            data: minData,
            fill: "+1",
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
          {
            label: "Max",
            data: maxData,
            fill: "-1",
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
          {
            label: "Current Year",
            data: currentYearData,
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };
    },
  },
  mounted() {
    new Chart(this.$refs.minMaxAreaChart, {
      type: "line",
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
