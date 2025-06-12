import { Category, InvestmentPackage, Investment, Notification } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Crop Farming',
    description: 'Invest in sustainable crop production including grains, vegetables, and fruits',
    icon: 'Wheat',
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800',
    isActive: true
  },
  {
    id: '2',
    name: 'Livestock',
    description: 'Invest in cattle, poultry, and other livestock farming operations',
    icon: 'Cow',
    image: 'https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&w=800',
    isActive: true
  },
  {
    id: '3',
    name: 'Aquaculture',
    description: 'Invest in fish farming and aquatic agriculture ventures',
    icon: 'Fish',
    image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800',
    isActive: true
  },
  {
    id: '4',
    name: 'Organic Produce',
    description: 'Invest in certified organic farming operations',
    icon: 'Leaf',
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
    isActive: true
  }
];

export const investmentPackages: InvestmentPackage[] = [
  {
    id: '1',
    title: 'Premium Corn Farming',
    categoryId: '1',
    description: 'Invest in high-yield corn farming with advanced irrigation systems and sustainable practices. This package includes modern farming equipment, premium seeds, and expert management.',
    shortDescription: 'High-yield corn farming with sustainable practices',
    minAmount: 5000,
    maxAmount: 50000,
    expectedROI: 15,
    duration: 6,
    image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Organic corn delivery every harvest',
      'Real-time farm monitoring',
      'Expert management team',
      'Insurance coverage included',
      'Monthly progress reports'
    ],
    bankDetails: {
      accountName: 'FarmLink Corn Ventures',
      accountNumber: '1234567890',
      bankName: 'Agricultural Bank',
      routingNumber: '123456789'
    },
    isActive: true,
    created: '2024-01-15'
  },
  {
    id: '2',
    title: 'Sustainable Cattle Ranch',
    categoryId: '2',
    description: 'Join our sustainable cattle ranching program with grass-fed cattle and ethical farming practices. Experience premium beef production with environmental responsibility.',
    shortDescription: 'Ethical cattle ranching with premium results',
    minAmount: 10000,
    maxAmount: 100000,
    expectedROI: 18,
    duration: 12,
    image: 'https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Premium grass-fed beef allocation',
      'Veterinary care included',
      'Sustainable grazing practices',
      'Quarterly ranch visits available',
      'Detailed health monitoring'
    ],
    bankDetails: {
      accountName: 'FarmLink Livestock Corp',
      accountNumber: '2345678901',
      bankName: 'Ranch Banking Co',
      routingNumber: '234567890'
    },
    isActive: true,
    created: '2024-01-20'
  },
  {
    id: '3',
    title: 'Tilapia Fish Farming',
    categoryId: '3',
    description: 'Modern aquaculture facility producing premium tilapia with controlled environment and sustainable feed systems. Perfect for steady returns and fresh fish supply.',
    shortDescription: 'Modern tilapia production facility',
    minAmount: 3000,
    maxAmount: 30000,
    expectedROI: 12,
    duration: 8,
    image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Fresh tilapia monthly delivery',
      'Water quality monitoring',
      'Automated feeding systems',
      'Disease prevention program',
      'Harvest participation opportunity'
    ],
    bankDetails: {
      accountName: 'FarmLink Aquaculture Ltd',
      accountNumber: '3456789012',
      bankName: 'Marine Finance Bank',
      routingNumber: '345678901'
    },
    isActive: true,
    created: '2024-02-01'
  },
  {
    id: '4',
    title: 'Organic Vegetable Garden',
    categoryId: '4',
    description: 'Certified organic vegetable production featuring seasonal varieties grown without synthetic pesticides or fertilizers. Healthy, sustainable, and profitable.',
    shortDescription: 'Certified organic seasonal vegetables',
    minAmount: 2000,
    maxAmount: 25000,
    expectedROI: 14,
    duration: 4,
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Weekly organic produce box',
      'Seasonal variety rotation',
      'Composting program included',
      'Pest management without chemicals',
      'Farm-to-table recipe collection'
    ],
    bankDetails: {
      accountName: 'FarmLink Organic Co',
      accountNumber: '4567890123',
      bankName: 'Green Banking Solutions',
      routingNumber: '456789012'
    },
    isActive: true,
    created: '2024-02-10'
  }
];

export const mockInvestments: Investment[] = [
  {
    id: '1',
    userId: '1',
    packageId: '1',
    amount: 10000,
    startDate: '2024-01-15',
    duration: 6,
    expectedROI: 15,
    status: 'active',
    currentValue: 11200,
    profits: 1200
  },
  {
    id: '2',
    userId: '1',
    packageId: '3',
    amount: 5000,
    startDate: '2024-02-01',
    duration: 8,
    expectedROI: 12,
    status: 'active',
    currentValue: 5300,
    profits: 300
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'Harvest Update',
    message: 'Your corn farming investment is ready for harvest! Expected yield exceeded by 12%.',
    type: 'success',
    read: false,
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    title: 'Monthly Report Available',
    message: 'Your February investment report is now available in your dashboard.',
    type: 'info',
    read: false,
    createdAt: '2024-03-01T09:00:00Z'
  },
  {
    id: '3',
    userId: '1',
    title: 'Payment Received',
    message: 'Profit payment of $400 has been processed to your account.',
    type: 'success',
    read: true,
    createdAt: '2024-02-28T14:15:00Z'
  }
];