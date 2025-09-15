import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AlumniHero = () => {
  const featuredAlumni = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior ML Engineer",
      company: "Google",
      year: "2019",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      achievement: "Led AI initiatives for Google Search"
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "AI Research Scientist",
      company: "Microsoft",
      year: "2020",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      achievement: "Published 15+ research papers in top-tier conferences"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "Founder & CEO",
      company: "TechVision AI",
      year: "2018",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      achievement: "Built $50M valuation AI startup"
    }
  ];

  const stats = [
    { label: "Alumni Network", value: "2,500+", icon: "Users" },
    { label: "Countries", value: "25+", icon: "Globe" },
    { label: "Fortune 500 Companies", value: "150+", icon: "Building" },
    { label: "Average Salary", value: "₹18 LPA", icon: "TrendingUp" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Icon name="Award" size={20} className="text-secondary" />
            <span className="text-secondary font-medium">Alumni Excellence Network</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Where <span className="text-gradient-gold">Success Stories</span>
            <br />Begin at GM University
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join a prestigious network of 2,500+ AIML graduates making breakthrough innovations at leading tech companies, research institutions, and successful startups worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-black font-cta shadow-golden btn-pulse"
              iconName="UserPlus"
              iconPosition="left"
            >
              Join Alumni Network
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="Calendar"
              iconPosition="left"
            >
              Upcoming Events
            </Button>
          </div>
        </div>

        {/* Featured Alumni */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Alumni Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAlumni?.map((alumni) => (
              <div key={alumni?.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src={alumni?.image}
                      alt={alumni?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={14} className="text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{alumni?.name}</h3>
                    <p className="text-secondary font-medium">{alumni?.role}</p>
                    <p className="text-gray-300 text-sm">{alumni?.company} • Class of {alumni?.year}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{alumni?.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-3">
                <Icon name={stat?.icon} size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{stat?.value}</div>
              <div className="text-gray-300 text-sm">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniHero;