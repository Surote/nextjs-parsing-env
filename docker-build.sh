#!/bin/bash

# Build Docker image with build args for NEXT_PUBLIC_* variables
docker build \
  --build-arg NEXT_PUBLIC_API_URL="https://api.example.com" \
  --build-arg NEXT_PUBLIC_APP_NAME="My Next.js App" \
  --build-arg NEXT_PUBLIC_VERSION="1.0.0" \
  -t nextjs-env-app:latest \
  .

echo "Docker image built successfully!"
echo "Run with: docker run -p 3000:3000 -e DATABASE_URL='postgresql://localhost:5432/mydb' -e SERVER_SECRET='your-secret' nextjs-env-app:latest"