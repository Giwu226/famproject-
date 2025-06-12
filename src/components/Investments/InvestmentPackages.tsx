import React, { useState } from 'react';
import { ArrowLeft, Clock, TrendingUp, Shield, MessageCircle, DollarSign } from 'lucide-react';
import { categories, investmentPackages } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';

interface InvestmentPackagesProps {
  categoryId: string;
  onBack: () => void;
  onInvest: (packageId: string) => void;
}

const InvestmentPackages: React.FC<InvestmentPackagesProps> = ({ categoryId, onBack, onInvest }) => {
  const { user } = useAuth();
  const category = categories.find(cat => cat.id === categoryId);
  const packages = investmentPackages.filter(pkg => pkg.categoryId === categoryId);

  const handleWhatsAppContact = () => {
    const whatsappNumber = '+1234567890';
    const message = encodeURIComponent(`Hi! I'm interested in the ${category?.name} investment packages. Can you provide more information?`);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Categories
          </button>
          
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {category?.name} <span className="text-emerald-600">Investments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category?.description}
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Package Image */}
              <div className="relative h-64">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                  <p className="text-white/90 text-sm">{pkg.shortDescription}</p>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.expectedROI}% ROI
                </div>
              </div>

              {/* Package Content */}
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <DollarSign className="text-blue-600" size={20} />
                    </div>
                    <p className="text-sm text-gray-600">Investment Range</p>
                    <p className="font-semibold text-gray-900">${pkg.minAmount.toLocaleString()} - ${pkg.maxAmount.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <TrendingUp className="text-emerald-600" size={20} />
                    </div>
                    <p className="text-sm text-gray-600">Expected ROI</p>
                    <p className="font-semibold text-gray-900">{pkg.expectedROI}%</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-100 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Clock className="text-amber-600" size={20} />
                    </div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-900">{pkg.duration} months</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="text-emerald-600 mt-0.5 mr-3 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Bank Details for Investment:</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><span className="font-medium">Account Name:</span> {pkg.bankDetails.accountName}</p>
                    <p><span className="font-medium">Account Number:</span> {pkg.bankDetails.accountNumber}</p>
                    <p><span className="font-medium">Bank:</span> {pkg.bankDetails.bankName}</p>
                    {pkg.bankDetails.routingNumber && (
                      <p><span className="font-medium">Routing:</span> {pkg.bankDetails.routingNumber}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => user ? onInvest(pkg.id) : alert('Please login to invest')}
                    className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    {user ? 'Invest Now' : 'Login to Invest'}
                  </button>
                  <button
                    onClick={handleWhatsAppContact}
                    className="flex items-center justify-center space-x-2 border-2 border-emerald-600 text-emerald-600 py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                  >
                    <MessageCircle size={18} />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our investment experts are here to help you find the perfect farming investment opportunity.
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center space-x-2 mx-auto"
          >
            <MessageCircle size={20} />
            <span>Chat with Expert on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPackages;