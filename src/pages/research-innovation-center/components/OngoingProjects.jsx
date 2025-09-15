import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OngoingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Driven Healthcare Diagnostics Platform",
      description: "Developing an advanced AI system for early disease detection using medical imaging and patient data analysis.",
      principalInvestigator: "Dr. Priya Sharma",
      teamMembers: ["Dr. Rajesh Kumar", "Ms. Anita Patel", "Mr. Vikram Singh", "Ms. Neha Gupta"],
      fundingAgency: "Department of Science & Technology (DST)",
      totalFunding: "₹45,00,000",
      duration: "36 months",
      startDate: "January 2023",
      endDate: "December 2025",
      progress: 65,
      status: "On Track",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      objectives: [
        "Develop ML models for medical image analysis",
        "Create patient data integration platform",
        "Implement real-time diagnostic algorithms",
        "Validate system with clinical partners"
      ],
      outcomes: [
        "3 research papers published",
        "2 patent applications filed",
        "Clinical trial with AIIMS Delhi initiated",
        "Prototype deployed in 2 hospitals"
      ],
      collaborators: ["AIIMS Delhi", "Manipal Hospital", "Philips Healthcare"],
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "DICOM", "HL7 FHIR"]
    },
    {
      id: 2,
      title: "Sustainable AI for Smart Cities",
      description: "Creating energy-efficient AI solutions for urban planning, traffic management, and resource optimization.",
      principalInvestigator: "Dr. Vikram Singh",
      teamMembers: ["Dr. Amit Verma", "Ms. Kavya Reddy", "Mr. Suresh Nair", "Ms. Priyanka Joshi"],
      fundingAgency: "Ministry of Electronics & IT (MeitY)",
      totalFunding: "₹38,50,000",
      duration: "30 months",
      startDate: "March 2023",
      endDate: "August 2025",
      progress: 52,
      status: "On Track",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop",
      objectives: [
        "Design energy-efficient AI algorithms",
        "Develop smart traffic management system",
        "Create urban resource optimization models",
        "Implement edge computing solutions"
      ],
      outcomes: [
        "Smart traffic system deployed in Bangalore",
        "Energy consumption reduced by 30%",
        "4 conference papers presented",
        "Collaboration with 3 city corporations"
      ],
      collaborators: ["Bangalore Smart City Ltd", "Pune Smart City", "IBM Research"],
      technologies: ["Edge AI", "IoT Sensors", "5G Networks", "Digital Twins", "Federated Learning"]
    },
    {
      id: 3,
      title: "Ethical AI Framework Development",
      description: "Building comprehensive frameworks for ethical AI implementation with bias detection and fairness mechanisms.",
      principalInvestigator: "Dr. Priya Sharma",
      teamMembers: ["Prof. Sarah Johnson", "Dr. Michael Chen", "Ms. Lisa Anderson"],
      fundingAgency: "IEEE Standards Association",
      totalFunding: "₹25,75,000",
      duration: "24 months",
      startDate: "June 2023",
      endDate: "May 2025",
      progress: 40,
      status: "On Track",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      objectives: [
        "Develop ethical AI assessment tools",
        "Create bias detection algorithms",
        "Establish fairness metrics framework",
        "Design transparency mechanisms"
      ],
      outcomes: [
        "Ethical AI toolkit released",
        "2 IEEE standards contributions",
        "Workshop conducted for 200+ professionals",
        "Open-source framework published"
      ],
      collaborators: ["IEEE", "Partnership on AI", "AI Ethics Lab Stanford"],
      technologies: ["Fairlearn", "AI Fairness 360", "LIME", "SHAP", "What-If Tool"]
    },
    {
      id: 4,
      title: "Quantum-Enhanced Machine Learning",
      description: "Exploring quantum computing applications in machine learning for financial risk assessment and optimization.",
      principalInvestigator: "Dr. Rajesh Kumar",
      teamMembers: ["Dr. James Wilson", "Ms. Priyanka Joshi", "Mr. Arjun Patel"],
      fundingAgency: "Science and Engineering Research Board (SERB)",
      totalFunding: "₹32,25,000",
      duration: "42 months",
      startDate: "September 2022",
      endDate: "February 2026",
      progress: 78,
      status: "Ahead of Schedule",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      objectives: [
        "Develop quantum ML algorithms",
        "Create financial risk models",
        "Implement quantum optimization",
        "Build hybrid classical-quantum systems"
      ],
      outcomes: [
        "Quantum advantage demonstrated",
        "5 high-impact publications",
        "Collaboration with IBM Quantum",
        "Patent filed for quantum algorithm"
      ],
      collaborators: ["IBM Quantum Network", "IIT Bombay", "Goldman Sachs"],
      technologies: ["Qiskit", "Cirq", "PennyLane", "Quantum Circuits", "VQE"]
    },
    {
      id: 5,
      title: "Multi-Modal Sentiment Analysis",
      description: "Advanced sentiment analysis combining text, image, and video data for comprehensive social media monitoring.",
      principalInvestigator: "Ms. Anita Patel",
      teamMembers: ["Dr. Suresh Nair", "Ms. Neha Gupta", "Mr. Rohit Sharma"],
      fundingAgency: "Indian Council of Social Science Research (ICSSR)",
      totalFunding: "₹18,90,000",
      duration: "18 months",
      startDate: "October 2023",
      endDate: "March 2025",
      progress: 35,
      status: "On Track",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      objectives: [
        "Develop multi-modal fusion techniques",
        "Create sentiment classification models",
        "Build real-time monitoring system",
        "Analyze social media trends"
      ],
      outcomes: [
        "Multi-modal dataset created",
        "Baseline models established",
        "2 conference papers accepted",
        "Industry partnership initiated"
      ],
      collaborators: ["Twitter India", "Meta Research", "Microsoft Research"],
      technologies: ["BERT", "Vision Transformers", "Multi-Modal Fusion", "Real-time Analytics"]
    },
    {
      id: 6,
      title: "Autonomous Vehicle Decision Making",
      description: "Developing explainable AI systems for autonomous vehicle navigation and decision-making processes.",
      principalInvestigator: "Dr. Vikram Singh",
      teamMembers: ["Ms. Kavya Reddy", "Dr. James Wilson", "Mr. Arun Kumar"],
      fundingAgency: "Automotive Research Association of India (ARAI)",
      totalFunding: "₹41,80,000",
      duration: "36 months",
      startDate: "April 2023",
      endDate: "March 2026",
      progress: 45,
      status: "On Track",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      objectives: [
        "Design explainable AI for AVs",
        "Develop real-time decision systems",
        "Create safety validation frameworks",
        "Implement edge computing solutions"
      ],
      outcomes: [
        "Prototype AV system developed",
        "Safety framework validated",
        "3 patents filed",
        "Test track deployment completed"
      ],
      collaborators: ["Tata Motors", "Mahindra Research", "Bosch India"],
      technologies: ["Deep RL", "Computer Vision", "LiDAR", "Sensor Fusion", "Edge AI"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'bg-green-100 text-green-800';
      case 'Ahead of Schedule': return 'bg-blue-100 text-blue-800';
      case 'Delayed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Ongoing <span className="text-primary">Research Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our current research initiatives that are shaping the future of AI and machine learning
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects?.map((project, index) => (
            <motion.div
              key={project?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
                    {project?.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm font-bold text-foreground">{project?.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project?.progress)}`}
                        style={{ width: `${project?.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-foreground mb-2 hover:text-primary transition-colors">
                  {project?.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project?.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">PI: {project?.principalInvestigator}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Funding: {project?.totalFunding}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Duration: {project?.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project?.teamMembers?.length} members</span>
                  </div>
                  <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors">
                    <span className="text-sm font-medium">View Details</span>
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Icon name="X" size={20} className="text-foreground" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProject?.status)}`}>
                    {selectedProject?.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                  {selectedProject?.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject?.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="User" size={16} className="text-primary" />
                        <span className="text-sm"><strong>PI:</strong> {selectedProject?.principalInvestigator}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Building" size={16} className="text-primary" />
                        <span className="text-sm"><strong>Funding Agency:</strong> {selectedProject?.fundingAgency}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="DollarSign" size={16} className="text-primary" />
                        <span className="text-sm"><strong>Total Funding:</strong> {selectedProject?.totalFunding}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        <span className="text-sm"><strong>Duration:</strong> {selectedProject?.startDate} - {selectedProject?.endDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Progress Overview</h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Completion</span>
                        <span className="text-sm font-bold">{selectedProject?.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(selectedProject?.progress)}`}
                          style={{ width: `${selectedProject?.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Status: <span className="font-medium text-foreground">{selectedProject?.status}</span>
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Team Members</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.teamMembers?.map((member, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Objectives and Outcomes */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Objectives</h3>
                    <ul className="space-y-2">
                      {selectedProject?.objectives?.map((objective, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Target" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Outcomes</h3>
                    <ul className="space-y-2">
                      {selectedProject?.outcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Collaborators and Technologies */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Collaborators</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.collaborators?.map((collaborator, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {collaborator}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OngoingProjects;