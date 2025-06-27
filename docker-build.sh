#!/bin/bash

# Build Docker image
docker build -t nextjs-env-app:latest .

echo "Docker image built successfully!"
echo "Run with: docker run -p 3000:3000 -e DATABASE_URL='postgresql://localhost:5432/mydb' -e SERVER_SECRET='your-secret' nextjs-env-app:latest"