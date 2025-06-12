import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories, investmentPackages } from '../../data/mockData';
import * as Icons from 'lucide-react';

interface InvestmentCategoriesProps {
  onCategorySelect: (categoryId: string) => void;
}

const InvestmentCategories: React.FC<InvestmentCategoriesProps> = ({ onCategorySelect }) => {
  return (
    <section id="investments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investment <span className="text-emerald-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of agricultural investment opportunities, 
            each designed to deliver sustainable returns while supporting farming innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = (Icons as any)[category.icon] || Icons.Package;
            const categoryPackages = investmentPackages.filter(pkg => pkg.categoryId === category.id);
            const avgROI = categoryPackages.length > 0 
              ? categoryPackages.reduce((sum, pkg) => sum + pkg.expectedROI, 0) / categoryPackages.length 
              : 0;

            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => onCategorySelect(category.id)}
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <IconComponent className="text-emerald-600" size={24} />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {avgROI.toFixed(1)}% Avg ROI
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {categoryPackages.length} packages available
                    </div>
                    <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-1 transition-transform">
                      <span className="text-sm">Explore</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentCategories;