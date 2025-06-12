import React, { useState } from 'react';
import { TrendingUp, Calendar, DollarSign, Download, Filter } from 'lucide-react';
import { mockInvestments, investmentPackages } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';

const InvestmentTracking: React.FC = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const userInvestments = mockInvestments.filter(inv => inv.userId === user?.id);

  const filteredInvestments = userInvestments.filter(investment => {
    if (selectedStatus !== 'all' && investment.status !== selectedStatus) return false;
    
    if (selectedPeriod !== 'all') {
      const investmentDate = new Date(investment.startDate);
      const now = new Date();
      const monthsAgo = selectedPeriod === '3m' ? 3 : selectedPeriod === '6m' ? 6 : 12;
      const cutoffDate = new Date(now.getFullYear(), now.getMonth() - monthsAgo, now.getDate());
      
      if (investmentDate < cutoffDate) return false;
    }
    
    return true;
  });

  const totalInvested = filteredInvestments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalCurrentValue = filteredInvestments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalProfits = filteredInvestments.reduce((sum, inv) => sum + inv.profits, 0);
  const avgROI = totalInvested > 0 ? ((totalCurrentValue - totalInvested) / totalInvested) * 100 : 0;

  const exportData = () => {
    const csvContent = [
      ['Investment ID', 'Package', 'Amount', 'Start Date', 'Duration', 'Current Value', 'Profits', 'Status'],
      ...filteredInvestments.map(inv => {
        const pkg = investmentPackages.find(p => p.id === inv.packageId);
        return [
          inv.id,
          pkg?.title || 'Unknown',
          inv.amount,
          inv.startDate,
          `${inv.duration} months`,
          inv.currentValue,
          inv.profits,
          inv.status
        ];
      })
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'investment-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-gray-900">Investment Tracking</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Time</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="12m">Last 12 Months</option>
            </select>
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button
            onClick={exportData}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2 text-sm"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">${totalInvested.toLocaleString()}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Value</p>
              <p className="text-2xl font-bold text-gray-900">${totalCurrentValue.toLocaleString()}</p>
            </div>
            <div className="bg-emerald-100 p-3 rounded-lg">
              <TrendingUp className="text-emerald-600" size={24} />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <span className={`text-sm font-medium ${avgROI >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              {avgROI >= 0 ? '+' : ''}{avgROI.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Profits</p>
              <p className="text-2xl font-bold text-gray-900">${totalProfits.toLocaleString()}</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg">
              <TrendingUp className="text-amber-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Investments</p>
              <p className="text-2xl font-bold text-gray-900">{filteredInvestments.length}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Investment List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Investment Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit/Loss</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInvestments.map((investment) => {
                const packageData = investmentPackages.find(pkg => pkg.id === investment.packageId);
                const roi = ((investment.currentValue - investment.amount) / investment.amount) * 100;
                const progressPercentage = Math.min(
                  ((Date.now() - new Date(investment.startDate).getTime()) / (investment.duration * 30 * 24 * 60 * 60 * 1000)) * 100,
                  100
                );

                return (
                  <tr key={investment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={packageData?.image}
                          alt={packageData?.title}
                          className="w-10 h-10 rounded-lg object-cover mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{packageData?.title}</div>
                          <div className="text-sm text-gray-500">{new Date(investment.startDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${investment.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${investment.currentValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`font-medium ${investment.profits >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {investment.profits >= 0 ? '+' : ''}${investment.profits.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`font-medium ${roi >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {roi >= 0 ? '+' : ''}{roi.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        investment.status === 'active' ? 'bg-green-100 text-green-800' :
                        investment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{progressPercentage.toFixed(0)}%</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTracking;