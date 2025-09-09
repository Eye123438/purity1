import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Clock, Shield, Heart } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { services } from '../lib/services';

export default function Home() {
  const handleServiceClick = (serviceId: string) => {
    // Redirect to WhatsApp with pre-filled message
    const message = `Hi! I'd like to book a service: ${services.find(s => s.id === serviceId)?.name}`;
    window.open(`https://wa.me/254111679286?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-midnight via-gray-900 to-midnight text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              QuickLink <span className="text-crimson-light">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Connecting You to What Matters — <span className="text-crimson-light">Fast & Reliable</span>
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/254111679286?text=Hi! I'd like to book an errand"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-crimson text-white px-8 py-4 rounded-lg font-semibold hover:bg-crimson-dark transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book an Errand</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/254111679286?text=Hi! I need a taxi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-midnight transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book a Ride</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From errands to transportation, we've got you covered with fast, reliable, and affordable services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard 
                  service={service} 
                  onClick={() => handleServiceClick(service.id)} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">
              Why Choose QuickLink?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to delivering exceptional service every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-crimson" />,
                title: 'Fast',
                description: 'Quick response times and efficient service delivery'
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-green-500" />,
                title: 'Affordable',
                description: 'Competitive pricing with no hidden fees'
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-500" />,
                title: 'Trusted',
                description: 'Reliable service with verified professionals'
              },
              {
                icon: <Heart className="w-12 h-12 text-pink-500" />,
                title: 'Personalized',
                description: 'Tailored solutions for your specific needs'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-midnight mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-crimson to-crimson-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Special Offers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm"
              >
                <Users className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Corporate Packages</h3>
                <p className="text-lg">
                  Bulk discounts for businesses and organizations. Perfect for office errands and employee transportation.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm"
              >
                <Heart className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Household Plans</h3>
                <p className="text-lg">
                  Monthly subscription plans for families. Save on regular errands and transportation needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-gray-300"
          >
            "Quick, Reliable, Always Linked — QuickLink Services."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/254111679286"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-crimson text-white px-8 py-4 rounded-lg font-semibold hover:bg-crimson-dark transition-all duration-300"
            >
              Start Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-midnight transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}