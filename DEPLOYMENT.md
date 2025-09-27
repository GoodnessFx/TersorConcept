# Deployment Guide - Tersor Concept NAFDAC Consulting Website

## 🚀 Quick Deployment

### Prerequisites
- Node.js 18+ and npm 9+
- Docker (for containerized deployment)
- Git

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment

#### Option 1: Using npm scripts (Recommended)
```bash
# Full deployment with Docker
npm run deploy

# Or step by step:
npm run docker:build
npm run docker:run

# Check status
npm run docker:status

# View logs
npm run docker:logs

# Stop container
npm run docker:stop
```

#### Option 2: Manual Docker commands
```bash
# Build the image
docker build -t tersor-concept-website .

# Run the container
docker run -d \
  --name tersor-concept-website \
  -p 80:80 \
  --restart unless-stopped \
  tersor-concept-website
```

### Production Deployment

#### Using Docker (Recommended)
1. **Build the image:**
   ```bash
   docker build -t tersor-concept-website .
   ```

2. **Run the container:**
   ```bash
   docker run -d \
     --name tersor-concept-website \
     -p 80:80 \
     --restart unless-stopped \
     tersor-concept-website
   ```

3. **Verify deployment:**
   ```bash
   docker ps
   curl http://localhost
   ```

#### Using Static Hosting (Netlify, Vercel, etc.)
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your static hosting provider

3. **Configure redirects** for client-side routing:
   - Create `_redirects` file in `public` folder with: `/* /index.html 200`

### Environment Configuration

The application is configured for production with:
- ✅ Optimized build with code splitting
- ✅ Terser minification with console removal
- ✅ Gzip compression
- ✅ Security headers
- ✅ Static asset caching
- ✅ Client-side routing support

### Performance Optimizations

- **Code Splitting:** Vendor, motion, radix, and icons are split into separate chunks
- **Tree Shaking:** Unused code is eliminated
- **Minification:** JavaScript and CSS are minified
- **Compression:** Gzip compression enabled
- **Caching:** Static assets cached for 1 year

### Security Features

- **CSP Headers:** Content Security Policy implemented
- **XSS Protection:** X-XSS-Protection header
- **Frame Options:** X-Frame-Options set to SAMEORIGIN
- **Content Type:** X-Content-Type-Options set to nosniff
- **Input Sanitization:** Form inputs are sanitized

### Monitoring and Maintenance

#### Health Checks
```bash
# Check container status
docker ps | grep tersor-concept-website

# View logs
docker logs tersor-concept-website

# Check resource usage
docker stats tersor-concept-website
```

#### Updates
```bash
# Pull latest changes
git pull origin main

# Rebuild and redeploy
npm run docker:stop
npm run docker:build
npm run docker:run
```

### Troubleshooting

#### Common Issues

1. **Port 80 already in use:**
   ```bash
   # Use a different port
   docker run -d --name tersor-concept-website -p 8080:80 tersor-concept-website
   ```

2. **Container won't start:**
   ```bash
   # Check logs
   docker logs tersor-concept-website
   
   # Check if image exists
   docker images | grep tersor-concept-website
   ```

3. **Build fails:**
   ```bash
   # Clear Docker cache
   docker system prune -a
   
   # Rebuild
   npm run docker:build
   ```

### Production Checklist

- [ ] ✅ Build completes without errors
- [ ] ✅ All linting issues resolved
- [ ] ✅ TypeScript compilation successful
- [ ] ✅ Docker image builds successfully
- [ ] ✅ Container runs without errors
- [ ] ✅ Website loads at http://localhost
- [ ] ✅ All sections are accessible
- [ ] ✅ Contact form validation works
- [ ] ✅ Mobile responsiveness verified
- [ ] ✅ Performance optimizations applied
- [ ] ✅ Security headers configured

### Support

For deployment issues or questions, please refer to:
- Docker documentation: https://docs.docker.com/
- Vite documentation: https://vitejs.dev/
- React documentation: https://react.dev/
