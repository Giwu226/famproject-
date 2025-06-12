import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-blue-50 pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Own a Farm,
                <span className="text-emerald-600 block">Virtually.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Invest in real farms remotely and earn sustainable returns while supporting 
                agricultural innovation. Start with as little as $2,000.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">2,500+</p>
                <p className="text-sm text-gray-600">Active Investors</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">15.2%</p>
                <p className="text-sm text-gray-600">Avg. ROI</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <Shield className="text-amber-600" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Insured</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-medium text-lg"
              >
                <span>Start Investing</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="text-emerald-600" size={20} />
                <span className="text-sm text-gray-600">SEC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-emerald-600" size={20} />
                <span className="text-sm text-gray-600">FDIC Insured</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern sustainable farming"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Monitoring</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">+18.5%</p>
                  <p className="text-xs text-gray-600">Current ROI</p>
                </div>
              </div>
            </div>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-blue-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;