# Use Node image to build
FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Use a minimal image to serve static files
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build ./build

# Serve the app using serve in SPA mode
CMD ["serve", "-s", "build", "-l", "80"]
