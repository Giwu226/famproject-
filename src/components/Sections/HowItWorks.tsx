import React from 'react';
import { UserPlus, Search, DollarSign, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Sign up for free and complete your investor profile to get started with your farming journey.'
    },
    {
      icon: Search,
      title: 'Browse Investments',
      description: 'Explore our curated selection of agricultural investments across different categories and risk levels.'
    },
    {
      icon: DollarSign,
      title: 'Make Investment',
      description: 'Choose your investment amount and secure your stake in real farming operations with our easy payment process.'
    },
    {
      icon: TrendingUp,
      title: 'Track & Earn',
      description: 'Monitor your investments through our dashboard and receive regular updates on your farm performance and returns.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-emerald-600">FarmLink</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your agricultural investment journey in four simple steps. 
            From registration to earning returns, we've made the process seamless and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300 transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 z-10">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Investing?</h3>
            <p className="text-gray-600 mb-6">Join thousands of investors who are already earning from agriculture</p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;