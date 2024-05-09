# Use the official Node.js image as base
FROM node:20.11-alpine3.19

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Node.js app will run
EXPOSE 3000

# Command to run your Node.js application
CMD ["npm", "start"]
