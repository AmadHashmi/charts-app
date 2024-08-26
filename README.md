# Time Series Data Visualization App

## Overview

This project is part of a technical assessment to evaluate front-end development skills, specifically in the context of fetching and visualizing time series data using a charting library. The application retrieves time series data from an external API and presents it in an interactive and responsive manner. The charts focus on the closing prices of stock data and are designed to be user-friendly and adaptable to various screen sizes.

## Objective

The primary goal of this project is to fetch time series data from the provided API and display it using interactive charts. The charts enable users to view the closing prices over time and offer features such as zooming, panning, and tooltips for a better user experience.

## Features

### 1. Data Fetching

- **API Integration**: The app retrieves time series data using the Alpha Vantage API.
- **Error Handling**: In cases where the API is unavailable or returns an error, the app generates dummy data to ensure the charts remain functional.

### 2. Interactive Charting

- **Min-Max Area Range Chart**: Displays the minimum and maximum closing prices for each day of the year, with the current year's data overlaid as a line chart.
- **Weekly Average Chart**: Shows the average closing price for each ISO week.
- **Monthly Average Chart**: Visualizes the average closing price for each month.
- **Interactivity**: All charts include zooming, panning, and tooltips, providing a highly interactive experience for the user.

### 3. Responsiveness

The charts and the overall layout are designed to be responsive, ensuring a seamless experience on devices of all sizes, from desktop monitors to mobile phones.

## Implementation Details

### 1. Tech Stack

- **Vue.js**: The primary front-end framework used for building the user interface.
- **Chart.js**: Used for rendering charts. The `chartjs-plugin-zoom` is integrated to enable zooming and panning features.
- **Axios**: For making HTTP requests to the API.
- **SCSS**: For styling the components, ensuring a consistent and customizable design.

### 2. Project Structure

- **apiService.js**: Handles data fetching from the API, including error handling and dummy data generation.
- **transformData.js**: Processes the raw API data into a format suitable for the charts.
- **Components**:
  - `MinMaxAreaChart.vue`: Renders the Min-Max Area Range Chart.
  - `WeeklyAverageChart.vue`: Renders the Weekly Average Chart.
  - `MonthlyChart.vue`: Renders the Monthly Average Chart.
- **App.vue**: The main component that ties everything together, fetching the data and passing it to the individual chart components.

### 3. How to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/timeseries-charts-app.git
   cd timeseries-charts-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run serve
   ```

The application will be accessible at http://localhost:8080.

4. **Build for Production**:
   ```bash
   npm run build
   ```
