<template>
  <div class="container">
    <h1>Time Series Charts</h1>

    <div v-if="chartData">
      <MinMaxAreaChart :data="chartData" />

      <WeeklyAverageChart
        v-if="chartData.weeklyAverages && chartData.weeklyAverages.length > 0"
        :data="chartData.weeklyAverages"
      />

      <MonthlyChart
        v-if="chartData.monthlyAverages && chartData.monthlyAverages.length > 0"
        :data="chartData.monthlyAverages"
      />
    </div>

    <div v-else>
      <p>Loading data, please wait...</p>
    </div>
  </div>
</template>

<script>
import MinMaxAreaChart from "./components/MinMaxAreaChart.vue";
import WeeklyAverageChart from "./components/WeeklyAverage.vue";
import MonthlyChart from "./components/MonthlyAverage.vue";
import { fetchData } from "./services/apiService";
import { transformData } from "./utils/transformData";

export default {
  name: "App",
  components: {
    MinMaxAreaChart,
    WeeklyAverageChart,
    MonthlyChart,
  },
  data() {
    return {
      chartData: null,
    };
  },
  async mounted() {
    const rawData = await fetchData();
    if (rawData) {
      this.chartData = transformData(rawData);
      console.log(this.chartData);
    }
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
