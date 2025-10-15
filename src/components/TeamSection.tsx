import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Emmanuel Nwachukwu',
      position: 'Managing Director',
      background: 'Industrial Chemistry graduate with NAFDAC NYSC experience and 10+ years of product registration expertise.',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      name: 'Goodness Iyamah',
      position: 'Managing Partner',
      background: 'Accounting graduate specializing in Regulatory Affairs & Import/Documentation Management with extensive expertise.',
      icon: GraduationCap,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      name: 'Emmmauel Ohaekazi',
      position: 'Chief Operating Officer',
      background: 'Banking & Finance graduate with diverse experience in media, real estate, and product registration consulting.',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Management Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced leadership team dedicated to delivering exceptional NAFDAC regulatory services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 group">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                   <ImageWithFallback
  src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/560616039_1501765314298895_6353041700066081418_n.jpg?ccb=11-4&oh=01_Q5Aa2wGNqmYnIedQXTXTjFfYp57zABl5ydI7MYmcN6Ji96OLuA&oe=68FCAAFD&_nc_sid=5e03e0&_nc_cat=110"
  alt={`${member.name} - ${member.position}`}
  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${member.bgColor} rounded-full flex items-center justify-center mr-4`}>
                        <member.icon className={`w-6 h-6 ${member.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <div className={`text-sm font-medium ${member.color}`}>
                          {member.position}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.background}
                    </p>

                    {/* Professional badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        NAFDAC Expert
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        10+ Years
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Leadership Excellence
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our management team brings together decades of combined experience in regulatory affairs, 
              business operations, and client relations. We're committed to maintaining the highest 
              standards of service delivery while building long-term partnerships with our clients.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">30+</div>
                <div className="text-sm text-gray-600">Combined Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
