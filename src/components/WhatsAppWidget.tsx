import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '+1234567890';
  const defaultMessage = encodeURIComponent('Hi! 👋 How can you help me with my farming investment?');

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${defaultMessage}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat bubble */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-w-sm animate-slide-up">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">FarmLink Support</h4>
                <p className="text-xs text-green-500">● Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <p className="text-sm text-gray-700">
              Hi! 👋 How can we help you with your farming investment?
            </p>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle size={16} />
            <span>Start Chat on WhatsApp</span>
          </button>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            Typically replies within minutes
          </p>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;