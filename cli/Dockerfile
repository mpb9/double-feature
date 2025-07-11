# syntax=docker/dockerfile:1

# Step 1: Use the official Node.js image
FROM node:24.0.1-slim

# Step 2: Set working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm ci

# Step 5: Copy the rest of the app's source code
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Expose the port the app runs on
EXPOSE 3000

# Step 8: Command to serve the app
CMD ["npm", "run", "start"]