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

# Step 6: Expose the port the app runs on
EXPOSE 2046

# Step 7: Command to run the app
CMD ["npm", "run", "start"]