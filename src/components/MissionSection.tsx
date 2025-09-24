import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function MissionSection() {
  const items = [
    {
      icon: Target,
      title: 'Mission Statement',
      content: 'To provide on-time and top quality Services.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'To make registrations of products with NAFDAC effortless and go to such great measures to build a long term, mutually beneficial relationships with our clients.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Heart,
      title: 'Our Values',
      content: 'On-time Service delivery. Top quality service delivery. Innovative and creative service delivery.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on strong principles and unwavering commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium">
            <span className="text-lg">...experience the difference</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}