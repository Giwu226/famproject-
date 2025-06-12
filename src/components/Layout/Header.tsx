import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import NotificationCenter from '../Notifications/NotificationCenter';

interface HeaderProps {
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FL</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FarmLink</h1>
              <p className="text-xs text-emerald-600">Digital Farming for Everyone</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-emerald-600 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('investments')} className="text-gray-700 hover:text-emerald-600 transition-colors">Investments</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <NotificationCenter />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Login
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-emerald-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-gray-700 hover:text-emerald-600 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('investments')} className="block text-gray-700 hover:text-emerald-600 transition-colors">Investments</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-emerald-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-emerald-600 transition-colors">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;