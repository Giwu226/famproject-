import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">FarmLink</h3>
                <p className="text-sm text-emerald-400">Digital Farming for Everyone</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering sustainable agriculture through smart investment opportunities. 
              Join thousands of investors in building a greener future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#investments" className="text-gray-300 hover:text-emerald-400 transition-colors">Investment Packages</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Investment Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Investment Categories</h4>
            <ul className="space-y-2">
              <li><a href="#crops" className="text-gray-300 hover:text-emerald-400 transition-colors">Crop Farming</a></li>
              <li><a href="#livestock" className="text-gray-300 hover:text-emerald-400 transition-colors">Livestock</a></li>
              <li><a href="#aquaculture" className="text-gray-300 hover:text-emerald-400 transition-colors">Aquaculture</a></li>
              <li><a href="#organic" className="text-gray-300 hover:text-emerald-400 transition-colors">Organic Produce</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-300 text-sm">info@farmlink.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-gray-300 text-sm">123 Farm Street, AgriCity</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FarmLink. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;