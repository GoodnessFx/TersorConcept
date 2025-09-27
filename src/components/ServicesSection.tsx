import { motion } from 'motion/react';
import { 
  FileText, 
  Globe, 
  Import, 
  Beaker, 
  Utensils, 
  ShoppingCart, 
  Copyright 
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export default function ServicesSection() {
  const handleNavClick = (href: string) => {
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
  };

  const services = [
    {
      icon: FileText,
      title: 'Products Registration with NAFDAC',
      description: 'Complete product registration process handling for NAFDAC compliance and approval.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Globe,
      title: 'Local Products Registration',
      description: 'Specialized registration services for locally manufactured products and formulations.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Import,
      title: 'Imported Products Registration',
      description: 'Comprehensive registration support for imported goods and international products.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Beaker,
      title: 'Chemical Import Permit',
      description: 'Expert handling of chemical import permits and regulatory compliance documentation.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Utensils,
      title: 'Bulk Food Import Permit',
      description: 'Streamlined processing of bulk food import permits and safety certifications.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: ShoppingCart,
      title: 'Global Listing of Supermarket & Restaurant Items',
      description: 'International product listing services for retail and food service establishments.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Copyright,
      title: 'Trademark Registration',
      description: 'Complete trademark registration and intellectual property protection services.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive NAFDAC regulatory and compliance solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${service.color} hover:bg-gray-50 p-0 h-auto font-medium`}
                  >
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let us create a tailored regulatory compliance strategy 
              that fits your specific requirements and timeline.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => handleNavClick('#contact')}
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
