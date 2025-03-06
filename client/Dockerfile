# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the project
RUN npm run build  # This ensures the dist folder is created

# Expose the port Vite preview runs on (default: 4173)
EXPOSE 4173

# Command to start the built app
CMD ["npm", "run", "preview", "--", "--host"]
