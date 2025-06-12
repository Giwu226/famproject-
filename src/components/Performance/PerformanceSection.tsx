import React from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';

const PerformanceSection: React.FC = () => {
  const performanceData = [
    { category: 'Crop Farming', roi: 15.2, investments: 45, totalValue: 12500000 },
    { category: 'Livestock', roi: 18.7, investments: 32, totalValue: 8900000 },
    { category: 'Aquaculture', roi: 12.8, investments: 28, totalValue: 6200000 },
    { category: 'Organic Produce', roi: 16.4, investments: 38, totalValue: 9800000 }
  ];

  const monthlyReturns = [
    { month: 'Jan', return: 1.2 },
    { month: 'Feb', return: 1.8 },
    { month: 'Mar', return: 2.1 },
    { month: 'Apr', return: 1.9 },
    { month: 'May', return: 2.3 },
    { month: 'Jun', return: 2.0 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Platform <span className="text-emerald-600">Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our consistent performance across all investment categories with transparent reporting and real-time data
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp size={32} />
              <span className="text-emerald-100 text-sm">Overall</span>
            </div>
            <div className="text-3xl font-bold mb-2">15.8%</div>
            <div className="text-emerald-100">Average ROI</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <DollarSign size={32} />
              <span className="text-blue-100 text-sm">Total</span>
            </div>
            <div className="text-3xl font-bold mb-2">$37.4M</div>
            <div className="text-blue-100">Assets Under Management</div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <PieChart size={32} />
              <span className="text-amber-100 text-sm">Active</span>
            </div>
            <div className="text-3xl font-bold mb-2">143</div>
            <div className="text-amber-100">Investment Packages</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 size={32} />
              <span className="text-purple-100 text-sm">Growth</span>
            </div>
            <div className="text-3xl font-bold mb-2">+24%</div>
            <div className="text-purple-100">Year over Year</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Category Performance */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance by Category</h3>
            <div className="space-y-6">
              {performanceData.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{category.category}</h4>
                    <span className="text-emerald-600 font-bold">{category.roi}% ROI</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="block">Active Investments</span>
                      <span className="font-medium text-gray-900">{category.investments}</span>
                    </div>
                    <div>
                      <span className="block">Total Value</span>
                      <span className="font-medium text-gray-900">${(category.totalValue / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(category.roi / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Returns Chart */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Returns (2024)</h3>
            <div className="space-y-4">
              {monthlyReturns.map((month, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{month.month}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                      style={{ width: `${(month.return / 3) * 100}%` }}
                    >
                      <span className="text-white text-sm font-medium">{month.return}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-emerald-700 font-medium">Average Monthly Return</span>
                <span className="text-emerald-600 font-bold text-lg">1.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Risk Management & Security</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Diversified Portfolio</h4>
              <p className="text-gray-600 text-sm">Spread risk across multiple agricultural sectors and geographic regions</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="text-emerald-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Insurance Coverage</h4>
              <p className="text-gray-600 text-sm">Comprehensive insurance protection against weather and market risks</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-amber-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Management</h4>
              <p className="text-gray-600 text-sm">Professional agricultural experts managing all investment operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;