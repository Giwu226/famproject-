import React from 'react';
import { Shield, Lock, Eye, FileCheck, Users, Award } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'SEC Registered',
      description: 'Fully registered with the Securities and Exchange Commission, ensuring compliance with all federal regulations.'
    },
    {
      icon: Lock,
      title: 'FDIC Insured',
      description: 'Your investments are protected by FDIC insurance up to applicable limits for maximum security.'
    },
    {
      icon: Eye,
      title: 'Transparent Operations',
      description: 'Complete visibility into all investment operations with real-time reporting and regular audits.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Strict adherence to all financial regulations and industry best practices for investor protection.'
    },
    {
      icon: Users,
      title: 'Expert Oversight',
      description: 'Professional management team with decades of experience in agricultural finance and investment.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized by leading financial institutions and agricultural organizations for excellence.'
    }
  ];

  const certifications = [
    { name: 'SEC Registered', logo: '🏛️' },
    { name: 'FDIC Insured', logo: '🛡️' },
    { name: 'ISO 27001', logo: '🔒' },
    { name: 'SOC 2 Type II', logo: '✅' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Security is Our <span className="text-emerald-600">Priority</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of security and regulatory compliance to protect your investments and personal information
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{cert.logo}</div>
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Security Measures */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Protection</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">256-bit SSL Encryption</h4>
                  <p className="text-gray-600 text-sm">All data transmission is protected with bank-level encryption</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Factor Authentication</h4>
                  <p className="text-gray-600 text-sm">Additional security layers to protect your account access</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Security Audits</h4>
                  <p className="text-gray-600 text-sm">Continuous monitoring and testing of our security systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Data Backup & Recovery</h4>
                  <p className="text-gray-600 text-sm">Multiple backup systems ensure your data is always protected</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Protection</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Segregated Accounts</h4>
                  <p className="text-gray-600 text-sm">Your funds are kept separate from company operating accounts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Insurance Coverage</h4>
                  <p className="text-gray-600 text-sm">Comprehensive insurance against operational and market risks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Reporting</h4>
                  <p className="text-gray-600 text-sm">Transparent reporting on all investment activities and performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Third-Party Audits</h4>
                  <p className="text-gray-600 text-sm">Independent verification of our financial and operational practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Trust, Our Commitment</h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We understand that trust is earned through consistent action and transparency. That's why we've built our platform 
            with the highest security standards and maintain full regulatory compliance. Your investment security and data privacy 
            are not just priorities—they're the foundation of everything we do.
          </p>
          <div className="mt-6">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Learn More About Our Security
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;