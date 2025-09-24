# Tersor Concept - NAFDAC Consulting Website

A production-ready React website for Tersor Concept, a leading NAFDAC consultant providing regulatory and compliance services in Nigeria.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with optimal viewing on all devices
- **Smooth Animations**: Powered by Motion (formerly Framer Motion)
- **Form Handling**: Advanced form validation with React Hook Form
- **Toast Notifications**: User feedback with Sonner
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **Accessible**: WCAG compliant with proper ARIA attributes

## 🎯 Key Sections

- **Hero Section**: Compelling headline with clear call-to-action
- **Mission/Vision/Values**: Company philosophy and approach
- **Services**: 7 comprehensive NAFDAC-related services
- **Clients**: Showcase of trusted partnerships
- **Team**: Management team profiles
- **Contact**: Conversion-focused contact form with WhatsApp integration

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tersor-concept-nafdac-consulting
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder with:
- Minified and compressed assets
- Code splitting for optimal loading
- Source maps removed for security
- Console logs removed

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your web server to serve the index.html for all routes

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WHATSAPP_NUMBER=+234XXXXXXXXXX
VITE_CONTACT_EMAIL=info@tensorconcept.com
VITE_SITE_URL=https://tensorconcept.com
```

### Customization

#### Colors
Update the color scheme in `/styles/globals.css`:
- `--primary`: Main brand color (currently blue #1e40af)
- `--secondary`: Secondary color (currently red #dc2626)
- `--accent`: Accent color (currently green #16a34a)

#### Content
- Update company information in components
- Replace placeholder images with actual photos
- Modify service offerings in `ServicesSection.tsx`
- Update team member profiles in `TeamSection.tsx`

## 📱 Features & Components

### Navigation
- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Eye-catching headline and tagline
- Dual call-to-action buttons
- Statistics showcase
- Background animations

### Services Section
- 7 comprehensive NAFDAC services
- Icon-based visual hierarchy
- Color-coded service categories

### Contact Section
- Validated contact form
- WhatsApp integration
- Multiple contact methods
- Business hours and location

### Animations
- Scroll-triggered animations
- Hover effects and transitions
- Loading states and micro-interactions

## 🔧 Technical Details

### Architecture
- Component-based React architecture
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for build tooling

### Performance
- Code splitting by route and vendor
- Optimized images and assets
- Lazy loading for non-critical components
- Efficient bundle sizes

### SEO & Analytics
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data markup
- Performance optimizations

## 📄 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: info@tensorconcept.com
- Phone: +234 803 123 4567
- WhatsApp: [Contact Us](https://wa.me/2348031234567)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Tersor Concept** - Your Trusted Partner for NAFDAC Approvals & Compliance