import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqItems = [
    {
      question: 'How does FarmLink work?',
      answer: 'FarmLink connects investors with real agricultural projects. You invest in specific farming operations and earn returns based on the harvest and market performance. Our expert team manages the day-to-day operations while you track your investment through our platform.'
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment varies by package, starting from as low as $2,000 for organic vegetable gardens. Each investment package has its own minimum and maximum limits clearly displayed on the package details page.'
    },
    {
      question: 'How are returns calculated and paid?',
      answer: 'Returns are calculated based on the actual performance of your investment package. Profits are distributed after harvest and sale of produce. You can expect payments quarterly, and all transactions are transparent and trackable through your dashboard.'
    },
    {
      question: 'What happens if a farm underperforms?',
      answer: 'All our investments are insured to protect against major losses due to weather, disease, or other unforeseen circumstances. While returns can vary based on performance, we have risk management strategies in place to minimize potential losses.'
    },
    {
      question: 'Can I visit the farms I invest in?',
      answer: 'Yes! We encourage investor engagement. Depending on the package, you may have opportunities for farm visits, virtual tours, and regular photo/video updates. Some packages include quarterly visit opportunities.'
    },
    {
      question: 'How do I track my investment performance?',
      answer: 'Your investor dashboard provides real-time updates on your investments, including current value, expected returns, harvest progress, and detailed performance reports. You also receive monthly email updates with photos and progress reports.'
    },
    {
      question: 'Is my investment safe and regulated?',
      answer: 'Yes, FarmLink is SEC registered and all investments are FDIC insured up to applicable limits. We follow strict regulatory guidelines and maintain transparency in all our operations. Your investments are professionally managed by experienced agricultural experts.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, wire transfers, and major credit cards. Each investment package has specific bank details provided for direct transfers. All payments are processed securely through encrypted channels.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about investing with FarmLink
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="text-emerald-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12 bg-emerald-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our investment experts are here to help you understand how FarmLink can work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Contact Support
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;