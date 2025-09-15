import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import FeaturedProject from './components/FeaturedProject';
import ProjectDemo from './components/ProjectDemo';
import ProjectStats from './components/ProjectStats';
import ProjectTimeline from './components/ProjectTimeline';

const StudentProjectsInnovation = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    year: [],
    technology: [],
    status: []
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid, timeline

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "COVID-19 Detection using Chest X-rays",
      description: `Advanced deep learning model utilizing convolutional neural networks to detect COVID-19 pneumonia patterns in chest X-ray images. The system achieves 94.2% accuracy through transfer learning and data augmentation techniques.\n\nImplemented with TensorFlow and deployed as a web application for healthcare professionals.`,
      category: "Healthcare AI",
      year: "2024",
      status: "Deployed",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
      team: [
        { name: "Arjun Patel", avatar: "https://randomuser.me/api/portraits/men/32.jpg", role: "Team Lead" },
        { name: "Priya Sharma", avatar: "https://randomuser.me/api/portraits/women/44.jpg", role: "ML Engineer" },
        { name: "Rahul Kumar", avatar: "https://randomuser.me/api/portraits/men/56.jpg", role: "Backend Developer" }
      ],
      metrics: {
        accuracy: "94.2%",
        performance: "0.8s",
        dataset: "10K+ images"
      },
      github: {
        url: "https://github.com/aiml-gmu/covid-detection",
        stars: 156,
        forks: 43,
        lastUpdated: "2 days ago"
      },
      hasDemo: true,
      awards: ["Best Healthcare AI Project 2024", "IEEE Student Paper Award"],
      mentor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      title: "Smart Traffic Management System",
      description: `Intelligent traffic optimization system using computer vision and machine learning to analyze real-time traffic patterns and optimize signal timing. Reduces average wait time by 35% in urban intersections.\n\nIntegrates with existing traffic infrastructure and provides real-time analytics dashboard.`,
      category: "Smart Cities",
      year: "2024",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "OpenCV", "PyTorch", "React", "Node.js", "MongoDB"],
      team: [
        { name: "Vikram Singh", avatar: "https://randomuser.me/api/portraits/men/78.jpg", role: "Project Lead" },
        { name: "Anita Desai", avatar: "https://randomuser.me/api/portraits/women/67.jpg", role: "Computer Vision" },
        { name: "Karthik Reddy", avatar: "https://randomuser.me/api/portraits/men/89.jpg", role: "Full Stack" },
        { name: "Meera Joshi", avatar: "https://randomuser.me/api/portraits/women/23.jpg", role: "Data Analyst" }
      ],
      metrics: {
        efficiency: "35%",
        coverage: "12 intersections",
        uptime: "99.2%"
      },
      github: {
        url: "https://github.com/aiml-gmu/smart-traffic",
        stars: 89,
        forks: 27,
        lastUpdated: "1 week ago"
      },
      hasDemo: true,
      awards: ["Smart City Innovation Award 2024"],
      mentor: "Prof. Rajesh Gupta"
    },
    {
      id: 3,
      title: "Sentiment Analysis for Social Media",
      description: `Real-time sentiment analysis platform for social media monitoring using advanced NLP techniques. Processes over 10,000 posts per minute with 92% accuracy across multiple languages.\n\nFeatures include trend detection, influencer analysis, and automated reporting dashboard.`,
      category: "Natural Language Processing",
      year: "2023",
      status: "Deployed",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "NLTK", "Scikit-learn", "React", "Flask"],
      team: [
        { name: "Sneha Agarwal", avatar: "https://randomuser.me/api/portraits/women/34.jpg", role: "NLP Specialist" },
        { name: "Amit Verma", avatar: "https://randomuser.me/api/portraits/men/45.jpg", role: "Backend Developer" }
      ],
      metrics: {
        accuracy: "92.3%",
        throughput: "10K posts/min"
      },
      github: {
        url: "https://github.com/aiml-gmu/sentiment-analysis",
        stars: 234,
        forks: 78,
        lastUpdated: "3 weeks ago"
      },
      hasDemo: true,
      awards: ["Best NLP Project 2023"],
      mentor: "Dr. Kavita Sharma"
    },
    {
      id: 4,
      title: "Autonomous Drone Navigation",
      description: `Computer vision-based autonomous navigation system for drones using deep reinforcement learning. Enables safe navigation in complex environments with obstacle avoidance and path optimization.\n\nTested in various scenarios including indoor navigation and outdoor surveillance missions.`,
      category: "Autonomous Systems",
      year: "2023",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "C++"],
      team: [
        { name: "Rohan Mehta", avatar: "https://randomuser.me/api/portraits/men/67.jpg", role: "Robotics Engineer" },
        { name: "Divya Nair", avatar: "https://randomuser.me/api/portraits/women/56.jpg", role: "Computer Vision" },
        { name: "Suresh Babu", avatar: "https://randomuser.me/api/portraits/men/78.jpg", role: "Control Systems" }
      ],
      metrics: {
        accuracy: "96.8%",
        range: "5km",
        battery: "45 min"
      },
      github: {
        url: "https://github.com/aiml-gmu/drone-navigation",
        stars: 167,
        forks: 52,
        lastUpdated: "2 months ago"
      },
      hasDemo: false,
      awards: ["Robotics Excellence Award 2023"],
      mentor: "Prof. Anil Kumar"
    },
    {
      id: 5,
      title: "Financial Fraud Detection System",
      description: `Machine learning-based fraud detection system for financial transactions using ensemble methods and anomaly detection. Achieves 98.5% accuracy with minimal false positives.\n\nReal-time processing capability handles millions of transactions daily with sub-second response times.`,
      category: "Financial Technology",
      year: "2023",
      status: "Deployed",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "Scikit-learn", "XGBoost", "Apache Kafka", "PostgreSQL"],
      team: [
        { name: "Neha Gupta", avatar: "https://randomuser.me/api/portraits/women/78.jpg", role: "Data Scientist" },
        { name: "Rajesh Yadav", avatar: "https://randomuser.me/api/portraits/men/34.jpg", role: "ML Engineer" }
      ],
      metrics: {
        accuracy: "98.5%",
        latency: "0.3s",
        throughput: "1M+ txns/day"
      },
      github: {
        url: "https://github.com/aiml-gmu/fraud-detection",
        stars: 298,
        forks: 89,
        lastUpdated: "1 month ago"
      },
      hasDemo: true,
      awards: ["FinTech Innovation Award 2023"],
      mentor: "Dr. Pradeep Singh"
    },
    {
      id: 6,
      title: "Crop Disease Detection App",
      description: `Mobile application for farmers to detect crop diseases using smartphone cameras. Utilizes transfer learning on agricultural datasets to identify 15+ common plant diseases with 91% accuracy.\n\nIncludes treatment recommendations and connects farmers with agricultural experts.`,
      category: "Agriculture AI",
      year: "2022",
      status: "Deployed",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "TensorFlow", "React Native", "Firebase"],
      team: [
        { name: "Pooja Patel", avatar: "https://randomuser.me/api/portraits/women/89.jpg", role: "Mobile Developer" },
        { name: "Harish Kumar", avatar: "https://randomuser.me/api/portraits/men/23.jpg", role: "ML Engineer" }
      ],
      metrics: {
        accuracy: "91.2%",
        downloads: "50K+",
        diseases: "15 types"
      },
      github: {
        url: "https://github.com/aiml-gmu/crop-disease-detection",
        stars: 145,
        forks: 67,
        lastUpdated: "6 months ago"
      },
      hasDemo: true,
      awards: ["AgriTech Innovation Award 2022"],
      mentor: "Dr. Sunita Rao"
    }
  ];

  // Filter configuration
  const filterOptions = {
    categories: [
      { value: "Healthcare AI", label: "Healthcare AI", count: projects?.filter(p => p?.category === "Healthcare AI")?.length },
      { value: "Smart Cities", label: "Smart Cities", count: projects?.filter(p => p?.category === "Smart Cities")?.length },
      { value: "Natural Language Processing", label: "NLP", count: projects?.filter(p => p?.category === "Natural Language Processing")?.length },
      { value: "Autonomous Systems", label: "Autonomous Systems", count: projects?.filter(p => p?.category === "Autonomous Systems")?.length },
      { value: "Financial Technology", label: "FinTech", count: projects?.filter(p => p?.category === "Financial Technology")?.length },
      { value: "Agriculture AI", label: "Agriculture AI", count: projects?.filter(p => p?.category === "Agriculture AI")?.length }
    ],
    years: [
      { value: "2024", label: "2024", count: projects?.filter(p => p?.year === "2024")?.length },
      { value: "2023", label: "2023", count: projects?.filter(p => p?.year === "2023")?.length },
      { value: "2022", label: "2022", count: projects?.filter(p => p?.year === "2022")?.length }
    ],
    technologies: [
      { value: "Python", label: "Python", count: projects?.filter(p => p?.technologies?.includes("Python"))?.length },
      { value: "TensorFlow", label: "TensorFlow", count: projects?.filter(p => p?.technologies?.includes("TensorFlow"))?.length },
      { value: "PyTorch", label: "PyTorch", count: projects?.filter(p => p?.technologies?.includes("PyTorch"))?.length },
      { value: "React", label: "React", count: projects?.filter(p => p?.technologies?.includes("React"))?.length },
      { value: "OpenCV", label: "OpenCV", count: projects?.filter(p => p?.technologies?.includes("OpenCV"))?.length }
    ],
    statuses: [
      { value: "Deployed", label: "Deployed", count: projects?.filter(p => p?.status === "Deployed")?.length },
      { value: "In Progress", label: "In Progress", count: projects?.filter(p => p?.status === "In Progress")?.length },
      { value: "Completed", label: "Completed", count: projects?.filter(p => p?.status === "Completed")?.length }
    ]
  };

  // Featured project (latest deployed project)
  const featuredProject = projects?.find(p => p?.status === "Deployed" && p?.year === "2024") || projects?.[0];

  useEffect(() => {
    let filtered = projects;

    // Apply filters
    Object.entries(activeFilters)?.forEach(([key, values]) => {
      if (values?.length > 0) {
        filtered = filtered?.filter(project => {
          switch (key) {
            case 'category':
              return values?.includes(project?.category);
            case 'year':
              return values?.includes(project?.year);
            case 'technology':
              return values?.some(tech => project?.technologies?.includes(tech));
            case 'status':
              return values?.includes(project?.status);
            default:
              return true;
          }
        });
      }
    });

    setFilteredProjects(filtered);
  }, [activeFilters]);

  const handleFilterChange = (filterKey, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterKey]: values
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      category: [],
      year: [],
      technology: [],
      status: []
    });
  };

  const handleViewDemo = (project) => {
    setSelectedProject(project);
    setIsDemoOpen(true);
  };

  const handleViewDetails = (project) => {
    // Scroll to project details or open modal
    console.log('View details for:', project?.title);
  };

  return (
    <>
      <Helmet>
        <title>Student Projects & Innovation | AIML Branch - GM University</title>
        <meta name="description" content="Explore innovative AI/ML projects by GM University students. Interactive demos, GitHub repositories, and real-world applications in healthcare, smart cities, and more." />
        <meta name="keywords" content="student projects, AI ML projects, innovation, healthcare AI, smart cities, computer vision, NLP" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-gradient pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Icon name="Lightbulb" size={20} className="text-secondary" />
                <span className="font-medium">Innovation Showcase</span>
              </div>
              
              <h1 className="text-hero font-bold mb-6">
                Student Projects & <span className="text-gradient-gold">Innovation</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover groundbreaking AI/ML projects created by our talented students. From healthcare solutions to smart city applications, explore the future of technology through interactive demos and live implementations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="default"
                  className="bg-secondary hover:bg-accent text-black font-cta btn-pulse"
                  iconName="Play"
                  iconPosition="left"
                  onClick={() => handleViewDemo(featuredProject)}
                >
                  Try Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open('https://github.com/aiml-gmu', '_blank')}
                >
                  View All Repositories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Project Statistics */}
          <ProjectStats projects={projects} />

          {/* Featured Project */}
          <FeaturedProject 
            project={featuredProject} 
            onViewDemo={handleViewDemo}
          />

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Projects</h2>
              <p className="text-gray-600">Explore our complete portfolio of student innovations</p>
            </div>
            
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  viewMode === 'grid' ?'bg-primary text-white' :'text-gray-600 hover:text-primary'
                }`}
              >
                <Icon name="Grid3X3" size={16} className="inline mr-2" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  viewMode === 'timeline' ?'bg-primary text-white' :'text-gray-600 hover:text-primary'
                }`}
              >
                <Icon name="Clock" size={16} className="inline mr-2" />
                Timeline
              </button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <>
              {/* Project Filters */}
              <ProjectFilter
                filters={filterOptions}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                projectCount={filteredProjects?.length}
              />

              {/* Projects Grid */}
              {filteredProjects?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onViewDemo={handleViewDemo}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Icon name="Search" size={64} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    iconName="RotateCcw"
                    iconPosition="left"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          ) : (
            <ProjectTimeline projects={projects} />
          )}
        </div>

        {/* Project Demo Modal */}
        <ProjectDemo
          project={selectedProject}
          isOpen={isDemoOpen}
          onClose={() => {
            setIsDemoOpen(false);
            setSelectedProject(null);
          }}
        />

        {/* Call to Action Section */}
        <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our AIML program and create innovative solutions that make a real-world impact
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                className="bg-secondary hover:bg-accent text-black font-cta"
                iconName="GraduationCap"
                iconPosition="left"
              >
                Apply for Admission
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Contact Faculty
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentProjectsInnovation;