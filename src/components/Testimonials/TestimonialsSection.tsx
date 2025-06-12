import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Jennifer Martinez',
      role: 'Retail Investor',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'FarmLink has been an incredible investment platform. I\'ve earned consistent returns while supporting sustainable agriculture. The transparency and regular updates make me feel confident about my investments.',
      rating: 5,
      investment: '$15,000 invested',
      returns: '18.5% ROI'
    },
    {
      id: '2',
      name: 'David Thompson',
      role: 'Portfolio Manager',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'As a professional investor, I appreciate FarmLink\'s rigorous due diligence and risk management. The platform provides excellent diversification opportunities in the agricultural sector.',
      rating: 5,
      investment: '$50,000 invested',
      returns: '22.3% ROI'
    },
    {
      id: '3',
      name: 'Sarah Chen',
      role: 'First-time Investor',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'I was hesitant about investing in agriculture, but FarmLink made it so easy to understand and get started. The educational resources and customer support are outstanding.',
      rating: 5,
      investment: '$5,000 invested',
      returns: '16.8% ROI'
    },
    {
      id: '4',
      name: 'Michael Rodriguez',
      role: 'Sustainable Investor',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'What I love most about FarmLink is the impact. I\'m not just earning returns, I\'m supporting sustainable farming practices and helping feed communities. It feels good to invest with purpose.',
      rating: 5,
      investment: '$25,000 invested',
      returns: '19.7% ROI'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-emerald-600">Investors</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied investors who are earning sustainable returns while supporting agricultural innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-emerald-600 font-medium">{testimonial.role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="text-emerald-200" size={32} />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{testimonial.investment}</span>
                </div>
                <div className="text-sm">
                  <span className="text-emerald-600 font-bold">{testimonial.returns}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Investors Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2,500+</div>
                <div className="text-sm text-gray-600">Happy Investors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">98.5%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$50M+</div>
                <div className="text-sm text-gray-600">Invested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;