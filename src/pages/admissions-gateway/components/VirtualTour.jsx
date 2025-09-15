import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VirtualTour = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const tourLocations = [
    {
      id: 1,
      name: "AI Research Lab",
      description: "State-of-the-art artificial intelligence research facility with GPU clusters and quantum computing access.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop",
      features: [
        "NVIDIA RTX 4090 GPU Clusters",
        "Quantum Computing Simulators",
        "High-Performance Computing Servers",
        "24/7 Access for Research Students"
      ],
      icon: "Cpu"
    },
    {
      id: 2,
      name: "Machine Learning Lab",
      description: "Dedicated space for hands-on machine learning projects with industry-standard tools and software.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=800&h=500&fit=crop",
      features: [
        "TensorFlow & PyTorch Workstations",
        "Data Visualization Displays",
        "Cloud Computing Access",
        "Collaborative Project Spaces"
      ],
      icon: "Brain"
    },
    {
      id: 3,
      name: "Innovation Hub",
      description: "Creative workspace for student projects, hackathons, and startup incubation programs.",
      image: "https://images.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg?w=800&h=500&fit=crop",
      features: [
        "Flexible Workspace Design",
        "3D Printing Facilities",
        "Prototype Development Tools",
        "Startup Mentorship Area"
      ],
      icon: "Lightbulb"
    },
    {
      id: 4,
      name: "Digital Library",
      description: "Modern library with extensive digital resources, research databases, and quiet study areas.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
      features: [
        "10,000+ Digital Books",
        "Research Database Access",
        "Silent Study Pods",
        "Group Discussion Rooms"
      ],
      icon: "BookOpen"
    },
    {
      id: 5,
      name: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive displays and collaborative learning tools.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?w=800&h=500&fit=crop",
      features: [
        "Interactive Smart Boards",
        "Wireless Presentation Systems",
        "Recording Capabilities",
        "Climate Controlled Environment"
      ],
      icon: "Monitor"
    },
    {
      id: 6,
      name: "Student Lounge",
      description: "Comfortable recreational space for students to relax, network, and collaborate.",
      image: "https://images.pixabay.com/photo/2016/11/19/13/06/cafe-1839191_1280.jpg?w=800&h=500&fit=crop",
      features: [
        "Comfortable Seating Areas",
        "Gaming & Recreation Zone",
        "Cafeteria & Snack Bar",
        "Networking Events Space"
      ],
      icon: "Coffee"
    }
  ];

  const virtualTourStats = [
    {
      number: "15+",
      label: "Specialized Labs",
      icon: "FlaskConical"
    },
    {
      number: "500+",
      label: "Workstations",
      icon: "Monitor"
    },
    {
      number: "24/7",
      label: "Lab Access",
      icon: "Clock"
    },
    {
      number: "₹50Cr",
      label: "Infrastructure Investment",
      icon: "Building"
    }
  ];

  const currentLocation = tourLocations?.[activeLocation];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-accent font-bold text-primary mb-6">
            Virtual Campus Tour
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our world-class AIML facilities from the comfort of your home. 
            Take a virtual tour of our labs, classrooms, and innovation spaces.
          </p>
        </div>

        {/* Tour Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tourLocations?.map((location, index) => (
              <button
                key={location?.id}
                onClick={() => setActiveLocation(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-royal'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon name={location?.icon} size={16} />
                <span className="hidden sm:inline">{location?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Tour Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-royal-lg">
              <Image 
                src={currentLocation?.image}
                alt={currentLocation?.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Virtual Tour Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                <Icon name="Camera" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">360° Virtual Tour</span>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setActiveLocation(activeLocation > 0 ? activeLocation - 1 : tourLocations?.length - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={20} className="text-primary" />
              </button>
              
              <button 
                onClick={() => setActiveLocation(activeLocation < tourLocations?.length - 1 ? activeLocation + 1 : 0)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
              >
                <Icon name="ChevronRight" size={20} className="text-primary" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name={currentLocation?.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary">{currentLocation?.name}</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {currentLocation?.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-gray-900">Key Features:</h4>
              {currentLocation?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-royal-lg transition-all duration-300 flex items-center space-x-2">
                <Icon name="Play" size={16} />
                <span>Start Virtual Tour</span>
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Schedule Visit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tour Statistics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {virtualTourStats?.map((stat, index) => (
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

        {/* Interactive Map */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Campus Location</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white rounded-xl p-6 shadow-royal">
                <h4 className="text-xl font-bold text-gray-900 mb-4">GM University - AIML Campus</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">Tech Park Road, Electronic City, Bangalore - 560100</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">admissions@gmuniversity.edu.in</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-3">How to Reach:</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Icon name="Car" size={16} className="text-primary" />
                      <span>15 minutes from Electronic City Metro Station</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Plane" size={16} className="text-primary" />
                      <span>45 minutes from Kempegowda International Airport</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Train" size={16} className="text-primary" />
                      <span>30 minutes from Bangalore City Railway Station</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-96 rounded-xl overflow-hidden shadow-royal">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="GM University AIML Campus"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=12.8456,77.6632&z=14&output=embed"
                className="border-0"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Visit in Person?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a personalized campus tour with our admission counselors. Experience our facilities firsthand 
              and interact with faculty and current students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-royal-lg transition-all duration-300">
                Schedule Campus Visit
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Download Virtual Tour App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;