# Use an official Node.js 18 image as a base
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy only the package.json and yarn.lock to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port Vite dev server will run on (default is 5173)
EXPOSE 5173

# Run the Vite dev server when the container starts
CMD ["yarn", "dev", "--host"]
