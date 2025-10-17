import React, { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare 
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Products Registration with NAFDAC',
    'Local Products Registration',
    'Imported Products Registration',
    'Chemical Import Permit',
    'Bulk Food Import Permit',
    'Global Listing Services',
    'Trademark Registration',
    'General Consultation',
  ];

  const handleInputChange = useCallback((field: string, value: string) => {
    // Basic XSS protection - sanitize input
    const sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Enhanced validation with security checks
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      toast.error('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch {
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+234 803 123 4567',
      link: 'tel:+2348031234567',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@tersorconcept.com',
      link: 'mailto:info@tersorconcept.com',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Lagos, Nigeria',
      link: '#',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      link: '#',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your NAFDAC registration process? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Send us a Message
                    </h3>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project and requirements..."
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white h-12 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">
                          {info.title}
                        </div>
                        <div className="text-gray-900 font-medium">
                          {info.content}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Quick Contact */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">
                  Quick WhatsApp Chat
                </h3>
                <p className="text-green-100 text-sm mb-4">
                  Get instant responses to your questions
                </p>
                <Button
                  size="lg"
                  className="w-full bg-white text-green-600 hover:bg-gray-100 font-medium"
                  onClick={() => window.open('https://wa.me/2348031234567?text=Hello, I need help with NAFDAC registration services.', '_blank')}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Success Guarantee */}
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">
                  100% Success Guarantee
                </h3>
                <p className="text-red-100 text-sm">
                  We guarantee successful NAFDAC registration or your money back
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-green-100 to-red-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600">Lagos, Nigeria</p>
                <p className="text-sm text-gray-500 mt-2">Interactive map integration available</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
