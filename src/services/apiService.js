import axios from "axios";

const API_KEY = "your-api-key";
const BASE_URL = "https://www.alphavantage.co";

const generateDummyData = () => {
  const data = {};
  const startDate = new Date("2023-01-01");
  const endDate = new Date();

  let currentDate = startDate;

  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().split("T")[0];
    data[dateString] = {
      "1. open": (Math.random() * 100 + 100).toFixed(2),
      "2. high": (Math.random() * 100 + 150).toFixed(2),
      "3. low": (Math.random() * 100 + 50).toFixed(2),
      "4. close": (Math.random() * 100 + 100).toFixed(2),
      "5. volume": Math.floor(Math.random() * 100000000),
    };
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log("Using generated dummy data:", data);
  return data;
};

export const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: "AAPL",
        outputsize: "full",
        apikey: API_KEY,
      },
    });
    if (response.data["Time Series (Daily)"]) {
      return response.data["Time Series (Daily)"];
    } else {
      console.warn("No data available, using dummy data");
      return generateDummyData();
    }
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    return generateDummyData();
  }
};
