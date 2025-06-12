import React from 'react';
import { Shield, Users, TrendingUp, Award, Target, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Investors', value: '2,500+' },
    { icon: TrendingUp, label: 'Total Investments', value: '$50M+' },
    { icon: Shield, label: 'Success Rate', value: '98.5%' },
    { icon: Award, label: 'Years Experience', value: '10+' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Transparency',
      description: 'Complete visibility into your investments with real-time tracking and detailed reporting.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'SEC registered and FDIC insured investments with comprehensive risk management.'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Supporting environmentally responsible farming practices for a better future.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in agricultural finance and sustainable farming initiatives.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former tech lead at major fintech companies, expert in investment platforms.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Agriculture',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Agricultural scientist with expertise in sustainable farming and crop optimization.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-emerald-600">FarmLink</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing agricultural investment by connecting investors with sustainable farming opportunities, 
            creating value for both investors and farmers while supporting food security and environmental sustainability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-emerald-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize agricultural investment by providing accessible, transparent, and profitable opportunities 
              for investors while supporting sustainable farming practices that benefit communities and the environment. 
              We believe everyone should have the opportunity to participate in feeding the world while earning sustainable returns.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the world's leading platform for agricultural investment, creating a global network of investors 
              and farmers working together to build a more sustainable and food-secure future. We envision a world where 
              technology bridges the gap between capital and agricultural innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-emerald-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  FarmLink was born from a simple observation: while millions of people want to invest in sustainable 
                  agriculture, traditional barriers make it difficult for most to participate in this vital sector.
                </p>
                <p>
                  Founded in 2014 by agricultural finance experts and technology innovators, we set out to create 
                  a platform that would democratize access to agricultural investments while supporting farmers 
                  with the capital they need to implement sustainable practices.
                </p>
                <p>
                  Today, we're proud to have facilitated over $50 million in agricultural investments, supporting 
                  hundreds of farms and thousands of investors in building a more sustainable food system.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable farming"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">10+</p>
                  <p className="text-xs text-gray-600">Years of Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;