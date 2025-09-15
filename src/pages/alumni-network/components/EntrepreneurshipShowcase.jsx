import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EntrepreneurshipShowcase = () => {
  const [selectedStartup, setSelectedStartup] = useState(0);

  const startupStats = [
    { label: "Alumni Startups", value: "85+", icon: "Rocket" },
    { label: "Total Funding Raised", value: "$250M+", icon: "DollarSign" },
    { label: "Jobs Created", value: "2,000+", icon: "Users" },
    { label: "Successful Exits", value: "12", icon: "TrendingUp" }
  ];

  const featuredStartups = [
    {
      id: 1,
      name: "NeuralTech Solutions",
      founder: "Vikram Singh",
      founderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      graduationYear: "2019",
      founded: "2021",
      sector: "Enterprise AI",
      stage: "Series A",
      funding: "$25M",
      valuation: "$100M",
      employees: 150,
      description: "Building next-generation AI infrastructure for enterprise automation and decision-making systems.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
      achievements: [
        "200+ enterprise clients globally",
        "Featured in Forbes AI 50 list",
        "Winner of TechCrunch Disrupt 2023",
        "Partnership with Microsoft Azure"
      ],
      keyMetrics: {
        revenue: "$15M ARR",
        growth: "300% YoY",
        customers: "200+",
        retention: "95%"
      },
      investors: ["Sequoia Capital", "Accel Partners", "Matrix Partners"],
      website: "https://neuraltech.ai"
    },
    {
      id: 2,
      name: "DataVision Analytics",
      founder: "Priya Mehta",
      founderImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      graduationYear: "2018",
      founded: "2020",
      sector: "Healthcare AI",
      stage: "Series B",
      funding: "$40M",
      valuation: "$200M",
      employees: 220,
      description: "AI-powered medical imaging and diagnostics platform helping radiologists detect diseases earlier and more accurately.",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
      achievements: [
        "FDA approval for 3 AI diagnostic tools",
        "Partnership with 50+ hospitals",
        "Published 15+ peer-reviewed papers",
        "Reduced diagnostic errors by 40%"
      ],
      keyMetrics: {
        revenue: "$25M ARR",
        growth: "250% YoY",
        customers: "150+",
        retention: "98%"
      },
      investors: ["Andreessen Horowitz", "GV (Google Ventures)", "Khosla Ventures"],
      website: "https://datavision.health"
    },
    {
      id: 3,
      name: "AutoDrive Intelligence",
      founder: "Arjun Sharma",
      founderImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      graduationYear: "2017",
      founded: "2019",
      sector: "Autonomous Vehicles",
      stage: "IPO Ready",
      funding: "$150M",
      valuation: "$1.2B",
      employees: 500,
      description: "Developing advanced computer vision and ML algorithms for Level 4 autonomous driving systems.",
      logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop",
      achievements: [
        "First unicorn from AIML department",
        "10M+ autonomous miles driven",
        "Partnership with major OEMs",
        "Patents in 15+ countries"
      ],
      keyMetrics: {
        revenue: "$80M ARR",
        growth: "180% YoY",
        customers: "25+",
        retention: "100%"
      },
      investors: ["Tiger Global", "SoftBank Vision Fund", "General Motors Ventures"],
      website: "https://autodrive.ai"
    }
  ];

  const fundingRounds = [
    {
      year: "2024",
      totalFunding: "$85M",
      deals: 12,
      avgDeal: "$7.1M",
      sectors: ["Enterprise AI", "Healthcare", "Fintech", "EdTech"]
    },
    {
      year: "2023",
      totalFunding: "$120M",
      deals: 18,
      avgDeal: "$6.7M",
      sectors: ["Autonomous Vehicles", "Robotics", "Computer Vision", "NLP"]
    },
    {
      year: "2022",
      totalFunding: "$45M",
      deals: 8,
      avgDeal: "$5.6M",
      sectors: ["MLOps", "Data Analytics", "Cybersecurity", "IoT"]
    }
  ];

  const ecosystemPartners = [
    { name: "Y Combinator", type: "Accelerator", startups: 8 },
    { name: "Techstars", type: "Accelerator", startups: 5 },
    { name: "500 Startups", type: "Accelerator", startups: 6 },
    { name: "Sequoia Capital", type: "VC Fund", investments: 12 },
    { name: "Accel Partners", type: "VC Fund", investments: 10 },
    { name: "Matrix Partners", type: "VC Fund", investments: 8 }
  ];

  const currentStartup = featuredStartups?.[selectedStartup];

  const formatCurrency = (amount) => {
    if (amount?.includes('M')) return amount;
    if (amount?.includes('B')) return amount;
    return amount;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Rocket" size={20} className="text-primary" />
            <span className="text-primary font-medium">Entrepreneurship Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building the <span className="text-gradient-gold">Future of AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our alumni are transforming industries through innovative AI startups and groundbreaking technologies.
          </p>
        </div>

        {/* Startup Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {startupStats?.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat?.value}</div>
              <div className="text-gray-600">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Startups */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Success Stories</h3>
          
          {/* Startup Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {featuredStartups?.map((startup, index) => (
              <button
                key={startup?.id}
                onClick={() => setSelectedStartup(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedStartup === index
                    ? 'bg-primary text-white shadow-royal'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-black text-xs font-bold">
                    {startup?.name?.split(' ')?.map(word => word?.[0])?.join('')}
                  </span>
                </div>
                <span className="font-medium">{startup?.name}</span>
              </button>
            ))}
          </div>

          {/* Startup Details */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-royal">
                    <span className="text-white text-2xl font-bold">
                      {currentStartup?.name?.split(' ')?.map(word => word?.[0])?.join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{currentStartup?.name}</h4>
                    <p className="text-lg text-primary font-medium mb-1">{currentStartup?.sector}</p>
                    <p className="text-gray-600 mb-3">{currentStartup?.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Founded: {currentStartup?.founded}</span>
                      <span>•</span>
                      <span>{currentStartup?.employees} employees</span>
                      <span>•</span>
                      <span>{currentStartup?.stage}</span>
                    </div>
                  </div>
                </div>

                {/* Founder Info */}
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="User" size={18} className="text-primary mr-2" />
                    Founder
                  </h5>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={currentStartup?.founderImage}
                      alt={currentStartup?.founder}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h6 className="font-bold text-gray-900">{currentStartup?.founder}</h6>
                      <p className="text-primary font-medium">Founder & CEO</p>
                      <p className="text-sm text-gray-600">AIML Graduate, Class of {currentStartup?.graduationYear}</p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-white rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Award" size={18} className="text-primary mr-2" />
                    Key Achievements
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentStartup?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics & Funding */}
              <div className="space-y-6">
                {/* Funding Info */}
                <div className="bg-white rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="DollarSign" size={18} className="text-primary mr-2" />
                    Funding & Valuation
                  </h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Funding</span>
                      <span className="font-bold text-primary">{currentStartup?.funding}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Valuation</span>
                      <span className="font-bold text-secondary">{currentStartup?.valuation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Stage</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {currentStartup?.stage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-white rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="BarChart3" size={18} className="text-primary mr-2" />
                    Key Metrics
                  </h5>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue</span>
                      <span className="font-bold text-gray-900">{currentStartup?.keyMetrics?.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Growth Rate</span>
                      <span className="font-bold text-green-600">{currentStartup?.keyMetrics?.growth}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customers</span>
                      <span className="font-bold text-gray-900">{currentStartup?.keyMetrics?.customers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Retention</span>
                      <span className="font-bold text-blue-600">{currentStartup?.keyMetrics?.retention}</span>
                    </div>
                  </div>
                </div>

                {/* Investors */}
                <div className="bg-white rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Building2" size={18} className="text-primary mr-2" />
                    Investors
                  </h5>
                  <div className="space-y-2">
                    {currentStartup?.investors?.map((investor, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-secondary" />
                        <span className="text-sm text-gray-700">{investor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  fullWidth
                  className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Funding Trends */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="TrendingUp" size={24} className="text-primary mr-3" />
              Funding Trends
            </h3>
            <div className="space-y-6">
              {fundingRounds?.map((round, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{round?.year}</h4>
                    <span className="text-2xl font-bold text-primary">{round?.totalFunding}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Deals</p>
                      <p className="font-bold text-gray-900">{round?.deals}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg Deal Size</p>
                      <p className="font-bold text-gray-900">{round?.avgDeal}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Top Sectors</p>
                    <div className="flex flex-wrap gap-2">
                      {round?.sectors?.map((sector, sectorIndex) => (
                        <span key={sectorIndex} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="Users" size={24} className="text-primary mr-3" />
              Ecosystem Partners
            </h3>
            <div className="space-y-4">
              {ecosystemPartners?.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{partner?.name}</h4>
                    <p className="text-sm text-gray-600">{partner?.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      {partner?.startups ? `${partner?.startups} startups` : `${partner?.investments} investments`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our entrepreneurship program and get access to mentorship, funding opportunities, and a network of successful founders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Rocket"
                iconPosition="left"
              >
                Join Startup Program
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Connect with Founders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurshipShowcase;