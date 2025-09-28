import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCallback } from 'react';

export default function HeroSection() {
  const handleNavClick = useCallback((href: string) => {
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Account for fixed header with extra margin
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll past the top
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with ID "${targetId}" not found`);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTQwYWYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">Trusted NAFDAC Partner</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Your Trusted Partner for{' '}
              <span className="text-green-600 relative">
                NAFDAC Approvals
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-green-600 origin-left"
                />
              </span>{' '}
              & Compliance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Navigate NAFDAC regulations with confidence. Our expert team delivers 
              top-quality registration and compliance services with guaranteed results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium group"
                onClick={() => handleNavClick('#contact')}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
             
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Products Registered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <ImageWithFallback
                src="data:image/png;base64,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" 
                alt="Professional NAFDAC consulting office"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-medium text-gray-900">Available Now</div>
                  <div className="text-sm text-gray-600">Free consultation</div>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-green-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-100 rounded-full opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-green-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
