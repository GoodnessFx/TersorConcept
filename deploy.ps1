# PowerShell deployment script for Tersor Concept NAFDAC Consulting Website

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if Docker is installed
try {
    docker --version | Out-Null
    Write-Host "✅ Docker is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not installed. Please install Docker first." -ForegroundColor Red
    exit 1
}

# Build the Docker image
Write-Host "📦 Building Docker image..." -ForegroundColor Yellow
docker build -t tersor-concept-website .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Docker build failed!" -ForegroundColor Red
    exit 1
}

# Stop and remove existing container if it exists
Write-Host "🔄 Stopping existing container..." -ForegroundColor Yellow
docker stop tersor-concept-website 2>$null
docker rm tersor-concept-website 2>$null

# Run the new container
Write-Host "🚀 Starting new container..." -ForegroundColor Yellow
docker run -d `
  --name tersor-concept-website `
  -p 80:80 `
  --restart unless-stopped `
  tersor-concept-website

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Website is now available at: http://localhost" -ForegroundColor Cyan
    Write-Host "📊 Container status:" -ForegroundColor Cyan
    docker ps | Select-String "tersor-concept-website"
} else {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}
