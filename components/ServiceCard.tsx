import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    icon: string;
    description: string;
    gradient: string;
  };
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className={`h-24 bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
          <span className="text-4xl">{service.icon}</span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-crimson transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm">
            {service.description}
          </p>
          <div className="mt-4">
            <span className="text-crimson text-sm font-medium group-hover:text-crimson-dark transition-colors">
              Book Now →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}