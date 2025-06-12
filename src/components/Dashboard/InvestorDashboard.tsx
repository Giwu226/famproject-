import React, { useState } from 'react';
import { TrendingUp, DollarSign, PieChart, Calendar, Bell, ArrowUpRight, BarChart3 } from 'lucide-react';
import { mockInvestments, investmentPackages, mockNotifications } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';
import InvestmentTracking from './InvestmentTracking';

const InvestorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'tracking' | 'reports'>('overview');
  
  const userInvestments = mockInvestments.filter(inv => inv.userId === user?.id);
  const userNotifications = mockNotifications.filter(notif => notif.userId === user?.id);
  
  const totalInvested = userInvestments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalCurrentValue = userInvestments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalProfits = userInvestments.reduce((sum, inv) => sum + inv.profits, 0);
  const avgROI = totalInvested > 0 ? ((totalCurrentValue - totalInvested) / totalInvested) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's an overview of your farming investments</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'tracking', label: 'Investment Tracking', icon: BarChart3 },
              { id: 'reports', label: 'Reports', icon: PieChart }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                  <ArrowUpRight className="text-emerald-600" size={16} />
                  <span className="text-emerald-600 text-sm font-medium">+{avgROI.toFixed(1)}%</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Profits</p>
                    <p className="text-2xl font-bold text-gray-900">${totalProfits.toLocaleString()}</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <PieChart className="text-amber-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Investments</p>
                    <p className="text-2xl font-bold text-gray-900">{userInvestments.length}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Calendar className="text-purple-600" size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Active Investments */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">Active Investments</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    {userInvestments.map(investment => {
                      const packageData = investmentPackages.find(pkg => pkg.id === investment.packageId);
                      const progressPercentage = ((Date.now() - new Date(investment.startDate).getTime()) / (investment.duration * 30 * 24 * 60 * 60 * 1000)) * 100;
                      
                      return (
                        <div key={investment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <img
                                src={packageData?.image}
                                alt={packageData?.title}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div>
                                <h3 className="font-medium text-gray-900">{packageData?.title}</h3>
                                <p className="text-sm text-gray-600">Invested: ${investment.amount.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">${investment.currentValue.toLocaleString()}</p>
                              <div className="flex items-center">
                                <ArrowUpRight className="text-emerald-600" size={12} />
                                <span className="text-emerald-600 text-sm">+${investment.profits}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-600">
                              <span>Progress</span>
                              <span>{Math.min(progressPercentage, 100).toFixed(0)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {userInvestments.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No active investments yet</p>
                        <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                          Start Investing
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Notifications & Performance */}
              <div className="space-y-6">
                {/* Recent Notifications */}
                <div className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Updates</h3>
                      <Bell className="text-gray-400" size={20} />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {userNotifications.slice(0, 3).map(notification => (
                      <div key={notification.id} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-emerald-500' :
                          notification.type === 'warning' ? 'bg-amber-500' :
                          notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Summary */}
                <div className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Performance Summary</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Best Performing</span>
                      <span className="font-medium text-emerald-600">Corn Farming +15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total ROI</span>
                      <span className="font-medium text-gray-900">{avgROI.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Profit</span>
                      <span className="font-medium text-gray-900">${(totalProfits / 3).toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Investment Tracking Tab */}
        {activeTab === 'tracking' && <InvestmentTracking />}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Reports</h3>
            <p className="text-gray-600 mb-6">
              Access comprehensive reports on your investment performance, tax documents, and portfolio analysis.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Download Portfolio Report
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Tax Documents
              </button>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                Performance Analysis
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorDashboard;