import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import AuthModal from './components/Auth/AuthModal';
import HeroSection from './components/Hero/HeroSection';
import HowItWorks from './components/Sections/HowItWorks';
import FAQ from './components/Sections/FAQ';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import BlogSection from './components/Blog/BlogSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import PerformanceSection from './components/Performance/PerformanceSection';
import SecuritySection from './components/Security/SecuritySection';
import InvestmentCategories from './components/Investments/InvestmentCategories';
import InvestmentPackages from './components/Investments/InvestmentPackages';
import InvestmentModal from './components/Investments/InvestmentModal';
import InvestorDashboard from './components/Dashboard/InvestorDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

type ViewType = 'home' | 'categories' | 'packages' | 'dashboard';

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      setCurrentView('categories');
    } else {
      setShowAuthModal(true);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentView('packages');
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setSelectedCategoryId('');
  };

  const handleInvest = (packageId: string) => {
    setSelectedPackageId(packageId);
    setShowInvestmentModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    if (user?.role === 'admin') {
      setCurrentView('dashboard');
    } else {
      setCurrentView('categories');
    }
  };

  // Redirect authenticated users to appropriate dashboard
  React.useEffect(() => {
    if (user && currentView === 'home') {
      setCurrentView('dashboard');
    }
  }, [user, currentView]);

  const renderContent = () => {
    if (user && currentView === 'dashboard') {
      return user.role === 'admin' ? <AdminDashboard /> : <InvestorDashboard />;
    }

    switch (currentView) {
      case 'categories':
        return <InvestmentCategories onCategorySelect={handleCategorySelect} />;
      case 'packages':
        return (
          <InvestmentPackages
            categoryId={selectedCategoryId}
            onBack={handleBackToCategories}
            onInvest={handleInvest}
          />
        );
      default:
        return (
          <>
            <HeroSection onGetStarted={handleGetStarted} />
            <HowItWorks />
            <InvestmentCategories onCategorySelect={handleCategorySelect} />
            <PerformanceSection />
            <TestimonialsSection />
            <SecuritySection />
            <AboutSection />
            <BlogSection />
            <FAQ />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={() => setShowAuthModal(true)} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <WhatsAppWidget />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
      />
      
      <InvestmentModal
        isOpen={showInvestmentModal}
        onClose={() => setShowInvestmentModal(false)}
        packageId={selectedPackageId}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;