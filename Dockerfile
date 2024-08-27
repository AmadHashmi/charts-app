# Step 1: Build the Vue.js app
FROM node:18-alpine as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine as production-stage

# Copy the built files from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
