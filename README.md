# Time Series Data Visualization App

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

## Running the Vue.js App with Docker

This project includes a Dockerfile that allows you to build and run the application inside a Docker container.

### Building the Docker Image

1. Open a terminal and navigate to the root directory of the project.
2. Build the Docker image:

   ```bash
   docker build -t charts-app .
   ```

### Running the Docker Container

1. running the image

   ```bash
   docker run -d -p 8080:80 c
   ```
