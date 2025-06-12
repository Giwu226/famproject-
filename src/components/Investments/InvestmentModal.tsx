import React, { useState } from 'react';
import { X, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { investmentPackages } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageId: string;
}

const InvestmentModal: React.FC<InvestmentModalProps> = ({ isOpen, onClose, packageId }) => {
  const { user } = useAuth();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'card' | 'wire'>('bank');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const pkg = investmentPackages.find(p => p.id === packageId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pkg || !amount) return;

    const investmentAmount = parseInt(amount);
    if (investmentAmount < pkg.minAmount || investmentAmount > pkg.maxAmount) {
      alert(`Investment amount must be between $${pkg.minAmount.toLocaleString()} and $${pkg.maxAmount.toLocaleString()}`);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Investment of $${investmentAmount.toLocaleString()} in ${pkg.title} has been submitted for processing. You will receive confirmation via email.`);
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  const expectedReturns = amount ? (parseInt(amount) * (pkg?.expectedROI || 0)) / 100 : 0;

  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Invest in {pkg.title}</h2>
            <p className="text-gray-600 mt-1">Complete your investment application</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Investment Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={pkg.minAmount}
                max={pkg.maxAmount}
                step="100"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={`${pkg.minAmount.toLocaleString()}`}
                required
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Range: ${pkg.minAmount.toLocaleString()} - ${pkg.maxAmount.toLocaleString()}
            </p>
          </div>

          {/* Expected Returns */}
          {amount && (
            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-medium text-emerald-900 mb-2">Expected Returns</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-emerald-700">Investment Period</p>
                  <p className="font-semibold text-emerald-900">{pkg.duration} months</p>
                </div>
                <div>
                  <p className="text-emerald-700">Expected Profit</p>
                  <p className="font-semibold text-emerald-900">${expectedReturns.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('bank')}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  paymentMethod === 'bank'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Banknote size={24} className="mx-auto mb-2" />
                <span className="text-sm font-medium">Bank Transfer</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  paymentMethod === 'card'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard size={24} className="mx-auto mb-2" />
                <span className="text-sm font-medium">Credit Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('wire')}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  paymentMethod === 'wire'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Smartphone size={24} className="mx-auto mb-2" />
                <span className="text-sm font-medium">Wire Transfer</span>
              </button>
            </div>
          </div>

          {/* Bank Details (if bank transfer selected) */}
          {paymentMethod === 'bank' && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Bank Transfer Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Name:</span>
                  <span className="font-medium">{pkg.bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Number:</span>
                  <span className="font-medium">{pkg.bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank Name:</span>
                  <span className="font-medium">{pkg.bankDetails.bankName}</span>
                </div>
                {pkg.bankDetails.routingNumber && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Routing Number:</span>
                    <span className="font-medium">{pkg.bankDetails.routingNumber}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Agreement */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
            />
            <p className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-emerald-600 hover:underline">Terms and Conditions</a> and 
              understand the risks associated with agricultural investments.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !amount}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isSubmitting ? 'Processing Investment...' : 'Submit Investment'}
          </button>
        </form>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
            By investing, you acknowledge that agricultural investments carry inherent risks and returns are not guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentModal;