#!/bin/bash

# Deployment script for Tersor Concept NAFDAC Consulting Website

echo "🚀 Starting deployment process..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t tersor-concept-website .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
else
    echo "❌ Docker build failed!"
    exit 1
fi

# Stop and remove existing container if it exists
echo "🔄 Stopping existing container..."
docker stop tersor-concept-website 2>/dev/null || true
docker rm tersor-concept-website 2>/dev/null || true

# Run the new container
echo "🚀 Starting new container..."
docker run -d \
  --name tersor-concept-website \
  -p 80:80 \
  --restart unless-stopped \
  tersor-concept-website

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Website is now available at: http://localhost"
    echo "📊 Container status:"
    docker ps | grep tersor-concept-website
else
    echo "❌ Deployment failed!"
    exit 1
fi
