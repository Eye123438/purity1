import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/contact' },
    { name: 'My Requests', href: '/my-requests' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-crimson to-crimson-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-midnight">QuickLink</h1>
              <p className="text-xs text-gray-600">Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-crimson transition-colors duration-200 font-medium ${
                  router.pathname === item.href ? 'text-crimson' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0111679286"
              className="flex items-center space-x-1 text-crimson hover:text-crimson-dark transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <a
              href="https://wa.me/254111679286"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-crimson transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
              <a
                href="tel:0111679286"
                className="flex items-center space-x-1 text-crimson"
              >
                <Phone size={16} />
                <span className="text-sm">Call</span>
              </a>
              <a
                href="https://wa.me/254111679286"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-green-600"
              >
                <MessageCircle size={16} />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}