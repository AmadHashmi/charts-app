export const transformData = (data) => {
  const dailyData = Object.entries(data).map(([date, values]) => ({
    date,
    close: parseFloat(values["4. close"]),
  }));

  const minMaxData = {};
  const currentYear = new Date().getFullYear();

  dailyData.forEach((entry) => {
    const [year, month, day] = entry.date.split("-");
    const key = `${month}-${day}`;

    if (!minMaxData[key]) {
      minMaxData[key] = {
        min: entry.close,
        max: entry.close,
      };
    } else {
      if (year < currentYear) {
        minMaxData[key].min = Math.min(minMaxData[key].min, entry.close);
        minMaxData[key].max = Math.max(minMaxData[key].max, entry.close);
      }
    }
  });

  const weeklyData = {};
  const monthlyData = {};

  dailyData.forEach((entry) => {
    const date = new Date(entry.date);
    const week = `${date.getFullYear()}-W${Math.ceil(date.getDate() / 7)}`;
    const month = `${date.getFullYear()}-${date.getMonth() + 1}`;

    if (!weeklyData[week]) weeklyData[week] = [];
    weeklyData[week].push(entry.close);

    if (!monthlyData[month]) monthlyData[month] = [];
    monthlyData[month].push(entry.close);
  });

  const weeklyAverages = Object.entries(weeklyData).map(([week, closes]) => ({
    week,
    average: closes.reduce((acc, val) => acc + val, 0) / closes.length,
  }));

  const monthlyAverages = Object.entries(monthlyData).map(
    ([month, closes]) => ({
      month,
      average: closes.reduce((acc, val) => acc + val, 0) / closes.length,
    })
  );

  return { dailyData, minMaxData, weeklyAverages, monthlyAverages };
};
