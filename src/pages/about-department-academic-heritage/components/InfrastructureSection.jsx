import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InfrastructureSection = () => {
  const infrastructureData = [
    {
      title: "AI Research Laboratory",
      description: "State-of-the-art facility equipped with high-performance computing systems, GPU clusters, and specialized hardware for deep learning research and development.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      features: [
        "NVIDIA RTX 4090 GPU Clusters",
        "High-Performance Computing Servers",
        "Quantum Computing Simulator",
        "Advanced Visualization Systems"
      ],
      icon: "Cpu",
      capacity: "50 Students"
    },
    {
      title: "Machine Learning Lab",
      description: "Dedicated space for hands-on ML experiments with cloud computing access, data analytics tools, and collaborative workstations for project-based learning.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      features: [
        "Cloud Computing Access (AWS, Azure)",
        "Big Data Analytics Platform",
        "Collaborative Workstations",
        "Real-time Data Processing Tools"
      ],
      icon: "Database",
      capacity: "40 Students"
    },
    {
      title: "Computer Vision Lab",
      description: "Specialized laboratory for image processing, computer vision research with advanced cameras, sensors, and real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop",
      features: [
        "High-Resolution Cameras & Sensors",
        "Real-time Image Processing",
        "3D Scanning Equipment",
        "Augmented Reality Systems"
      ],
      icon: "Camera",
      capacity: "30 Students"
    },
    {
      title: "Robotics & IoT Lab",
      description: "Integrated facility for robotics research, IoT development, and embedded systems programming with industrial-grade equipment and prototyping tools.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      features: [
        "Industrial Robotic Arms",
        "IoT Development Kits",
        "3D Printing Facilities",
        "Embedded Systems Platform"
      ],
      icon: "Bot",
      capacity: "35 Students"
    },
    {
      title: "Data Science Center",
      description: "Comprehensive facility for big data analytics, statistical computing, and data visualization with enterprise-grade software and storage solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: [
        "Big Data Storage Systems",
        "Statistical Computing Software",
        "Data Visualization Tools",
        "Enterprise Analytics Platform"
      ],
      icon: "BarChart3",
      capacity: "60 Students"
    },
    {
      title: "Innovation Incubator",
      description: "Collaborative space for student startups, research projects, and industry partnerships with mentorship programs and funding opportunities.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      features: [
        "Startup Incubation Support",
        "Industry Mentorship Programs",
        "Funding & Investment Guidance",
        "Collaborative Work Spaces"
      ],
      icon: "Lightbulb",
      capacity: "25 Teams"
    }
  ];

  const facilitiesOverview = {
    totalArea: "15,000 sq ft",
    totalLabs: "12 Specialized Labs",
    equipment: "₹5 Crore Worth Equipment",
    capacity: "500+ Students",
    operatingHours: "24/7 Access",
    support: "Technical Support Team"
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Building2" size={20} className="text-primary" />
            <span className="text-primary font-medium">Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art laboratories and research facilities designed to provide hands-on experience with cutting-edge AI/ML technologies.
          </p>
        </motion.div>

        {/* Facilities Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {Object.entries(facilitiesOverview)?.map(([key, value], index) => (
            <div key={key} className="text-center">
              <div className="bg-card rounded-lg p-4 royal-shadow hover:royal-shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Laboratory Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {infrastructureData?.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden royal-shadow hover:royal-shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={lab?.image}
                    alt={lab?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={lab?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-white">
                        {lab?.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-accent">
                        <Icon name="Users" size={16} />
                        <span className="text-sm">{lab?.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {lab?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-playfair font-bold text-foreground mb-3">
                      Key Features
                    </h4>
                    {lab?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Infrastructure Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  Supporting Infrastructure
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Beyond our specialized laboratories, we provide comprehensive support infrastructure including high-speed internet, cloud computing access, digital library resources, and 24/7 technical support to ensure seamless learning and research experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Wifi" size={20} className="text-white" />
                    <span className="text-sm">High-Speed Internet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Cloud" size={20} className="text-white" />
                    <span className="text-sm">Cloud Computing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="BookOpen" size={20} className="text-white" />
                    <span className="text-sm">Digital Library</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Headphones" size={20} className="text-white" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={64} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">₹5+ Crore</div>
                <div className="text-white/80">Infrastructure Investment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;