import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    'Chibest Excel Nig. Ltd',
    'Teruke International Co. Ltd',
    'Crowther Pharm. Ltd',
    'Olive Raymond Resources',
    'Deheef Marchant Intl. Ltd',
    'Tonak Concept Ltd',
    'Benny Global Services Nig. Ltd',
    'Ingomax Nig. Ltd',
    'Moore Food and Beverages Nig. Ltd',
    'Lavi Food N Beverages Nig. Ltd',
    'Firefly Farms',
    'George Nwatuson Ventures Ltd',
    'CCECC Nig. Ltd',
    'Navidechy Ventures Ltd',
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped dozens of companies navigate NAFDAC regulations successfully
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {client}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">14+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Products Registered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-full font-medium">
            <span className="text-lg">...experience the difference</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}