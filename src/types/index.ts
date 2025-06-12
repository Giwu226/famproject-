export interface User {
  id: string;
  email: string;
  name: string;
  role: 'investor' | 'admin';
  phone?: string;
  profileImage?: string;
  createdAt: string;
}

export interface Investment {
  id: string;
  userId: string;
  packageId: string;
  amount: number;
  startDate: string;
  duration: number; // in months
  expectedROI: number;
  status: 'active' | 'completed' | 'pending';
  currentValue: number;
  harvestDate?: string;
  profits: number;
}

export interface InvestmentPackage {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  shortDescription: string;
  minAmount: number;
  maxAmount: number;
  expectedROI: number;
  duration: number; // in months
  image: string;
  features: string[];
  bankDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    routingNumber?: string;
  };
  isActive: boolean;
  created: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  isActive: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}