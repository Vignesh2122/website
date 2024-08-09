# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js static site
RUN npm run build

# Create a new stage for serving the static files
FROM node:18-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Install `serve` globally
RUN npm install -g serve

# Copy the built files from the build stage
COPY --from=build /app/out /app/out

# Expose the port the app will run on
EXPOSE 3000

# Command to serve the static files
CMD ["serve", "-s", "out", "-l", "3000"]
