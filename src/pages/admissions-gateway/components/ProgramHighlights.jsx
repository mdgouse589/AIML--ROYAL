import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProgramHighlights = () => {
  const highlights = [
    {
      title: "Industry-Integrated Curriculum",
      description: "Curriculum designed with industry leaders including Google, Microsoft, and IBM. Real-world projects and case studies from day one.",
      features: [
        "Live industry projects",
        "Guest lectures by experts",
        "Internship opportunities",
        "Industry mentorship program"
      ],
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
    },
    {
      title: "100% Placement Assistance",
      description: "Dedicated placement cell with proven track record. Average package ₹8.5 LPA with highest package reaching ₹45 LPA.",
      features: [
        "Guaranteed placement support",
        "Resume building workshops",
        "Mock interview sessions",
        "Industry networking events"
      ],
      icon: "TrendingUp",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=500&h=300&fit=crop"
    },
    {
      title: "State-of-the-Art AI Labs",
      description: "Advanced computing infrastructure with GPU clusters, quantum computing access, and cloud computing resources.",
      features: [
        "NVIDIA GPU clusters",
        "Cloud computing access",
        "IoT development kits",
        "24/7 lab accessibility"
      ],
      icon: "Cpu",
      image: "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=500&h=300&fit=crop"
    }
  ];

  const statistics = [
    {
      number: "95%",
      label: "Placement Rate",
      icon: "Target"
    },
    {
      number: "₹8.5L",
      label: "Average Package",
      icon: "IndianRupee"
    },
    {
      number: "200+",
      label: "Industry Partners",
      icon: "Building"
    },
    {
      number: "50+",
      label: "Research Projects",
      icon: "FlaskConical"
    }
  ];

  const uniqueFeatures = [
    {
      title: "AI Research Center",
      description: "Dedicated research facility for cutting-edge AI/ML research",
      icon: "Microscope"
    },
    {
      title: "Startup Incubation",
      description: "Support for student startups with funding and mentorship",
      icon: "Rocket"
    },
    {
      title: "International Exposure",
      description: "Student exchange programs with top global universities",
      icon: "Globe"
    },
    {
      title: "Industry Certifications",
      description: "Free certifications from AWS, Google Cloud, and Microsoft",
      icon: "Award"
    },
    {
      title: "Hackathon Culture",
      description: "Regular hackathons and coding competitions",
      icon: "Code"
    },
    {
      title: "Alumni Network",
      description: "Strong alumni network in top tech companies worldwide",
      icon: "Users"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-accent font-bold text-primary mb-6">
            Program Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes our AIML program unique. From industry partnerships to cutting-edge facilities, 
            we provide everything you need to excel in the field of artificial intelligence and machine learning.
          </p>
        </div>

        {/* Main Highlights */}
        <div className="space-y-16 mb-20">
          {highlights?.map((highlight, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={highlight?.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">{highlight?.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {highlight?.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {highlight?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-royal-lg">
                  <Image 
                    src={highlight?.image}
                    alt={highlight?.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {statistics?.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={24} className="text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat?.number}</div>
                <div className="text-white/90 font-medium">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Why Choose Our AIML Program?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueFeatures?.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature?.icon} size={20} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature?.title}</h4>
                <p className="text-gray-600">{feature?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful graduates who have launched their careers in AI and Machine Learning. 
              Your future in technology starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-royal-lg transition-all duration-300">
                Apply Now
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;