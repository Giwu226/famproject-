import React, { useState } from 'react';
import { Plus, Edit, Trash2, Users, TrendingUp, Package, DollarSign } from 'lucide-react';
import { categories, investmentPackages, mockInvestments } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'packages' | 'categories' | 'users'>('overview');
  const [showPackageForm, setShowPackageForm] = useState(false);
  
  const totalInvestors = 2500;
  const totalInvestments = mockInvestments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalProfits = mockInvestments.reduce((sum, inv) => sum + inv.profits, 0);
  const activePackages = investmentPackages.filter(pkg => pkg.isActive).length;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your FarmLink platform</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'packages', label: 'Investment Packages', icon: Package },
              { id: 'categories', label: 'Categories', icon: Package },
              { id: 'users', label: 'Users', icon: Users }
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
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Investors</p>
                    <p className="text-2xl font-bold text-gray-900">{totalInvestors.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Investments</p>
                    <p className="text-2xl font-bold text-gray-900">${totalInvestments.toLocaleString()}</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <DollarSign className="text-emerald-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Platform Profits</p>
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
                    <p className="text-sm font-medium text-gray-600">Active Packages</p>
                    <p className="text-2xl font-bold text-gray-900">{activePackages}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Package className="text-purple-600" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { action: 'New investment', details: 'John Doe invested $5,000 in Corn Farming', time: '2 hours ago' },
                    { action: 'Package updated', details: 'Premium Corn Farming package modified', time: '5 hours ago' },
                    { action: 'User registered', details: 'New investor Sarah Smith joined', time: '1 day ago' },
                    { action: 'Harvest completed', details: 'Tilapia Fish Farming harvest completed', time: '2 days ago' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 py-3 border-b last:border-b-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.details}</p>
                      </div>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Investment Packages Tab */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">Investment Packages</h2>
              <button
                onClick={() => setShowPackageForm(true)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Package</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {investmentPackages.map((pkg) => {
                      const category = categories.find(cat => cat.id === pkg.categoryId);
                      return (
                        <tr key={pkg.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img src={pkg.image} alt={pkg.title} className="w-10 h-10 rounded-lg object-cover mr-3" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{pkg.title}</div>
                                <div className="text-sm text-gray-500">{pkg.shortDescription}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{category?.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${pkg.minAmount.toLocaleString()} - ${pkg.maxAmount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pkg.expectedROI}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pkg.duration} months</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              pkg.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {pkg.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-emerald-600 hover:text-emerald-900">
                                <Edit size={16} />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">Investment Categories</h2>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                <Plus size={20} />
                <span>Add Category</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        category.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {category.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {investmentPackages.filter(pkg => pkg.categoryId === category.id).length} packages
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="text-emerald-600 hover:text-emerald-700">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Users</option>
                  <option>Investors</option>
                  <option>Admins</option>
                </select>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Export
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investments</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Invested</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: '1', name: 'John Investor', email: 'investor@farmlink.com', role: 'Investor', investments: 2, totalInvested: 15000, joined: '2024-01-15' },
                      { id: '2', name: 'Admin User', email: 'admin@farmlink.com', role: 'Admin', investments: 0, totalInvested: 0, joined: '2024-01-01' },
                      { id: '3', name: 'Sarah Smith', email: 'sarah@example.com', role: 'Investor', investments: 1, totalInvested: 5000, joined: '2024-02-01' },
                      { id: '4', name: 'Mike Johnson', email: 'mike@example.com', role: 'Investor', investments: 3, totalInvested: 25000, joined: '2024-01-20' }
                    ].map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-emerald-600 font-medium text-sm">{user.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.investments}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${user.totalInvested.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(user.joined).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-emerald-600 hover:text-emerald-900">View</button>
                            <button className="text-red-600 hover:text-red-900">Block</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;