import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InnovationLab = () => {
  const [activeTab, setActiveTab] = useState('facilities');

  const facilities = [
    {
      id: 1,
      name: "AI Computing Cluster",
      description: "High-performance computing infrastructure with GPU clusters for deep learning research",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      specifications: [
        "NVIDIA A100 GPUs (8x)",
        "AMD EPYC 7742 Processors",
        "1TB DDR4 RAM",
        "100TB NVMe Storage",
        "InfiniBand Networking"
      ],
      usage: "Deep Learning, Computer Vision, NLP Research"
    },
    {
      id: 2,
      name: "Quantum Computing Lab",
      description: "State-of-the-art quantum computing research facility with IBM Quantum access",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      specifications: [
        "IBM Quantum Network Access",
        "Qiskit Development Environment",
        "Quantum Simulators",
        "Cryogenic Systems",
        "Microwave Electronics"
      ],
      usage: "Quantum ML, Optimization, Cryptography"
    },
    {
      id: 3,
      name: "Robotics & Automation Lab",
      description: "Advanced robotics laboratory for AI-driven automation and autonomous systems",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      specifications: [
        "Industrial Robot Arms (6x)",
        "Autonomous Mobile Robots",
        "Computer Vision Systems",
        "Sensor Integration Platform",
        "Real-time Control Systems"
      ],
      usage: "Autonomous Navigation, Industrial Automation"
    },
    {
      id: 4,
      name: "Data Analytics Center",
      description: "Big data processing and analytics infrastructure for large-scale research projects",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      specifications: [
        "Hadoop Cluster (20 nodes)",
        "Apache Spark Framework",
        "Elasticsearch Stack",
        "Real-time Streaming",
        "Data Visualization Tools"
      ],
      usage: "Big Data Analytics, Social Media Analysis"
    }
  ];

  const studentProjects = [
    {
      id: 1,
      title: "Smart Healthcare Monitoring System",
      student: "Rahul Sharma (M.Tech AI/ML)",
      supervisor: "Dr. Priya Sharma",
      description: "IoT-based patient monitoring system with AI-powered anomaly detection for early health issue identification.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      status: "Completed",
      achievements: ["Best Project Award 2024", "Patent Filed", "Published in IEEE Conference"],
      technologies: ["IoT Sensors", "Machine Learning", "Real-time Analytics", "Mobile App"]
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation",
      student: "Priya Patel (B.Tech AI/ML)",
      supervisor: "Dr. Vikram Singh",
      description: "Computer vision-based autonomous drone navigation system for search and rescue operations.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
      status: "Ongoing",
      achievements: ["Hackathon Winner", "Industry Collaboration"],
      technologies: ["Computer Vision", "Deep Learning", "ROS", "Python"]
    },
    {
      id: 3,
      title: "AI-Powered Traffic Management",
      student: "Amit Kumar (M.Tech AI/ML)",
      supervisor: "Dr. Rajesh Kumar",
      description: "Intelligent traffic signal optimization system using reinforcement learning and real-time traffic data.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      status: "Completed",
      achievements: ["City Implementation", "Research Publication", "Startup Founded"],
      technologies: ["Reinforcement Learning", "Computer Vision", "IoT", "Cloud Computing"]
    },
    {
      id: 4,
      title: "Natural Language Processing for Legal Documents",
      student: "Sneha Reddy (M.Tech AI/ML)",
      supervisor: "Ms. Anita Patel",
      description: "Automated legal document analysis and summarization system using advanced NLP techniques.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      status: "Ongoing",
      achievements: ["Legal Firm Partnership", "Conference Presentation"],
      technologies: ["BERT", "Transformers", "NLP", "Document Processing"]
    },
    {
      id: 5,
      title: "Predictive Maintenance for Manufacturing",
      student: "Karthik Nair (B.Tech AI/ML)",
      supervisor: "Dr. Amit Verma",
      description: "Machine learning-based predictive maintenance system for industrial equipment monitoring.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop",
      status: "Completed",
      achievements: ["Industry Award", "Patent Pending", "Job Offer from Bosch"],
      technologies: ["Time Series Analysis", "IoT Sensors", "Machine Learning", "Dashboard"]
    },
    {
      id: 6,
      title: "Emotion Recognition in Virtual Reality",
      student: "Neha Gupta (M.Tech AI/ML)",
      supervisor: "Dr. Vikram Singh",
      description: "Real-time emotion recognition system for enhanced virtual reality experiences using facial analysis.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
      status: "Ongoing",
      achievements: ["VR Conference Demo", "Tech Company Interest"],
      technologies: ["Computer Vision", "Deep Learning", "VR/AR", "Real-time Processing"]
    }
  ];

  const competitions = [
    {
      name: "Smart India Hackathon 2024",
      participants: 15,
      achievements: "2 Teams in Finals, 1 Winner",
      prize: "₹1,00,000"
    },
    {
      name: "IEEE International Conference",
      participants: 8,
      achievements: "6 Papers Accepted",
      prize: "Best Paper Award"
    },
    {
      name: "Google AI Challenge",
      participants: 12,
      achievements: "Top 10 Globally",
      prize: "$5,000"
    },
    {
      name: "Microsoft Imagine Cup",
      participants: 6,
      achievements: "National Finalists",
      prize: "Azure Credits"
    }
  ];

  const getStatusColor = (status) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-800' :'bg-blue-100 text-blue-800';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Innovation <span className="text-primary">Laboratory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art facilities and student research projects driving innovation in AI and machine learning
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'facilities', label: 'Research Facilities', icon: 'Building' },
            { id: 'projects', label: 'Student Projects', icon: 'Lightbulb' },
            { id: 'competitions', label: 'Competitions', icon: 'Trophy' }
          ]?.map((tab) => (
            <motion.button
              key={tab?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-foreground hover:bg-primary/10 hover:text-primary royal-shadow'
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span className="font-medium">{tab?.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {facilities?.map((facility, index) => (
              <motion.div
                key={facility?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={facility?.image}
                  alt={facility?.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                    {facility?.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {facility?.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {facility?.specifications?.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-green-500" />
                          <span className="text-sm text-muted-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Target" size={16} className="text-primary" />
                    <span className="text-muted-foreground">
                      <strong>Primary Usage:</strong> {facility?.usage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Student Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {studentProjects?.map((project, index) => (
              <motion.div
                key={project?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
                      {project?.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-2">
                    {project?.title}
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={14} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{project?.student}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="UserCheck" size={14} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Supervisor: {project?.supervisor}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project?.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Achievements:</h4>
                    <div className="space-y-1">
                      {project?.achievements?.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <Icon name="Award" size={12} className="text-accent" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project?.technologies?.slice(0, 3)?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.technologies?.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        +{project?.technologies?.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Competitions Tab */}
        {activeTab === 'competitions' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {competitions?.map((competition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl royal-shadow p-6 hover:royal-shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Trophy" size={24} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-foreground">
                      {competition?.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Participants</span>
                      <span className="font-semibold text-foreground">{competition?.participants}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Achievements</span>
                      <span className="font-semibold text-foreground text-right">{competition?.achievements}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Prize/Recognition</span>
                      <span className="font-semibold text-primary">{competition?.prize}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Competition Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-playfair font-bold mb-6">Competition Highlights 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">41</div>
                  <div className="text-sm opacity-90">Students Participated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm opacity-90">Competitions Entered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <div className="text-sm opacity-90">Awards Won</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">₹2.5L</div>
                  <div className="text-sm opacity-90">Prize Money</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InnovationLab;