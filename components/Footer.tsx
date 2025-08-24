import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Code, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-cyan-400" />
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold gradient-text">Ghouri Nexus</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              We are a dual-purpose company combining professional software house services with innovative gaming solutions. 
              Creating digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/gaming" className="text-gray-400 hover:text-cyan-400 transition-colors">Gaming</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>ghourinexus@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+92 317 8389785</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ghouri Nexus. All rights reserved. | 
            <span className="text-cyan-400"> ghourinexus.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}