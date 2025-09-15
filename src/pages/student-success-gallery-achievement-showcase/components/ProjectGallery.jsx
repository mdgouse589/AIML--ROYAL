import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid3x3' },
    { id: 'ai', name: 'AI Applications', icon: 'Brain' },
    { id: 'ml', name: 'ML Models', icon: 'TrendingUp' },
    { id: 'cv', name: 'Computer Vision', icon: 'Eye' },
    { id: 'industry', name: 'Industry Collaboration', icon: 'Building2' }
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Healthcare Diagnosis System",
      category: "ai",
      description: "AI-powered diagnostic system using deep learning for early disease detection with 94% accuracy rate.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      team: ["Rahul Sharma", "Priya Patel", "Arjun Kumar"],
      technologies: ["TensorFlow", "Python", "React", "Flask"],
      outcomes: ["Published in IEEE Conference", "Patent Filed", "Industry Adoption"],
      demoLink: "https://demo.healthcare-ai.com",
      repoLink: "https://github.com/aiml/healthcare-diagnosis",
      year: "2024",
      duration: "8 months",
      mentor: "Dr. Rajesh Kumar"
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation",
      category: "cv",
      description: "Computer vision-based autonomous drone system for surveillance and delivery applications.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
      team: ["Sneha Reddy", "Vikram Singh", "Anita Joshi"],
      technologies: ["OpenCV", "PyTorch", "ROS", "C++"],
      outcomes: ["Won National Hackathon", "Industry Partnership", "Research Publication"],
      demoLink: "https://demo.drone-nav.com",
      repoLink: "https://github.com/aiml/drone-navigation",
      year: "2024",
      duration: "10 months",
      mentor: "Dr. Priya Sharma"
    },
    {
      id: 3,
      title: "Financial Fraud Detection",
      category: "ml",
      description: "Machine learning model for real-time fraud detection in banking transactions with 99.2% accuracy.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      team: ["Amit Gupta", "Kavya Nair", "Rohit Mehta"],
      technologies: ["Scikit-learn", "Pandas", "Apache Kafka", "Docker"],
      outcomes: ["Deployed in Production", "Cost Savings: ₹2.5 Cr", "Industry Recognition"],
      demoLink: "https://demo.fraud-detection.com",
      repoLink: "https://github.com/aiml/fraud-detection",
      year: "2023",
      duration: "6 months",
      mentor: "Dr. Suresh Babu"
    },
    {
      id: 4,
      title: "Smart City Traffic Management",
      category: "industry",
      description: "AI-powered traffic optimization system developed in collaboration with Bangalore Traffic Police.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      team: ["Deepak Rao", "Meera Iyer", "Karthik Shetty"],
      technologies: ["YOLO", "TensorFlow", "IoT Sensors", "MongoDB"],
      outcomes: ["Reduced Traffic by 35%", "Government Adoption", "Smart City Award"],
      demoLink: "https://demo.smart-traffic.com",
      repoLink: "https://github.com/aiml/smart-traffic",
      year: "2024",
      duration: "12 months",
      mentor: "Dr. Lakshmi Devi"
    },
    {
      id: 5,
      title: "Natural Language Processing Chatbot",
      category: "ai",
      description: "Advanced conversational AI system for customer service with multilingual support.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      team: ["Pooja Agarwal", "Ravi Kumar", "Sanjana Pillai"],
      technologies: ["BERT", "Transformers", "FastAPI", "Redis"],
      outcomes: ["95% Customer Satisfaction", "Multi-language Support", "Enterprise Deployment"],
      demoLink: "https://demo.nlp-chatbot.com",
      repoLink: "https://github.com/aiml/nlp-chatbot",
      year: "2023",
      duration: "7 months",
      mentor: "Dr. Anand Krishnan"
    },
    {
      id: 6,
      title: "Crop Disease Detection App",
      category: "cv",
      description: "Mobile application using computer vision to detect crop diseases and suggest treatments.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      team: ["Harish Patil", "Divya Sharma", "Manoj Reddy"],
      technologies: ["MobileNet", "Flutter", "Firebase", "TensorFlow Lite"],
      outcomes: ["10K+ Downloads", "Farmer Adoption", "Agriculture Ministry Recognition"],
      demoLink: "https://demo.crop-detection.com",
      repoLink: "https://github.com/aiml/crop-detection",
      year: "2024",
      duration: "5 months",
      mentor: "Dr. Geetha Rani"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects?.filter(project => project?.category === activeCategory);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div className="h-64 overflow-hidden rounded-t-xl">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {project?.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project?.description}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>{project?.year}</div>
                <div>{project?.duration}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  Team Members
                </h4>
                <ul className="space-y-1">
                  {project?.team?.map((member, index) => (
                    <li key={index} className="text-sm text-muted-foreground">• {member}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Icon name="Code" size={16} className="text-primary" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon name="Trophy" size={16} className="text-accent" />
                Key Outcomes & Achievements
              </h4>
              <ul className="space-y-2">
                {project?.outcomes?.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Mentor:</span> {project?.mentor}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Live Demo
                </Button>
                <Button size="sm">
                  <Icon name="Github" size={16} className="mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === category?.id
                ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            {category?.name}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((project) => (
          <div
            key={project?.id}
            className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md">
                {project?.year}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {project?.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Icon name="Users" size={12} />
                  {project?.team?.length} members
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Clock" size={12} />
                  {project?.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {project?.technologies?.slice(0, 3)?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project?.technologies?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                    +{project?.technologies?.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Icon name="Eye" size={14} className="mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="ghost">
                  <Icon name="ExternalLink" size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectGallery;