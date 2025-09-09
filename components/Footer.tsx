import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-crimson to-crimson-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">QuickLink Services</h3>
                <p className="text-xs text-gray-300">Connecting You to What Matters</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Fast & Reliable errands, delivery, and transportation services across Kirinyaga County.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/my-requests" className="text-gray-300 hover:text-white transition-colors">My Requests</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300 text-sm">0111679286</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300 text-sm">0717562660</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300 text-sm">info@quicklinkservices.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300 text-sm">Kerugoya, Kirinyaga County</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/254111679286"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={16} />
                <span className="text-sm font-medium">WhatsApp 1</span>
              </a>
              <a
                href="https://wa.me/254717562660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={16} />
                <span className="text-sm font-medium">WhatsApp 2</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 QuickLink Services. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-crimson-light text-sm font-medium">
                "Quick, Reliable, Always Linked"
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/admin"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}