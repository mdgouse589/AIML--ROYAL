import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProgramCard from './components/ProgramCard';
import CourseModule from './components/CourseModule';
import FilterTabs from './components/FilterTabs';
import LearningResourcesSection from './components/LearningResourcesSection';
import IndustryPartnerships from './components/IndustryPartnerships';
import StudentTestimonials from './components/StudentTestimonials';
import AcademicCoordinator from './components/AcademicCoordinator';

const ProgramsCoursesAcademicExcellenceHub = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedModule, setExpandedModule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data for programs
  const programs = [
    {
      id: 1,
      title: "B.Tech in Artificial Intelligence",
      level: "Undergraduate",
      duration: "4 Years",
      credits: "160",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
      description: "Comprehensive undergraduate program covering fundamentals of AI, machine learning, and their applications in various domains. Students gain hands-on experience with cutting-edge technologies and industry-relevant projects.",
      features: ["Industry Internships", "Research Projects", "AI Lab Access", "Industry Mentorship", "Capstone Projects", "International Exposure"],
      intake: "120",
      placement: "95",
      coreSubjects: [
        "Mathematics for AI",
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Robotics & Automation"
      ],
      careers: ["AI Engineer", "ML Engineer", "Data Scientist", "Research Scientist", "AI Consultant"],
      requirements: [
        "12th grade with 85% in PCM",
        "JEE Main score of 85+ percentile",
        "English proficiency",
        "Entrance interview"
      ]
    },
    {
      id: 2,
      title: "M.Tech in Machine Learning",
      level: "Postgraduate",
      duration: "2 Years",
      credits: "80",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      description: "Advanced postgraduate program focusing on machine learning algorithms, deep learning architectures, and their practical implementations in real-world scenarios.",
      features: ["Research Thesis", "Industry Projects", "Conference Publications", "Advanced Labs", "International Collaborations", "Startup Incubation"],
      intake: "60",
      placement: "98",
      coreSubjects: [
        "Advanced Machine Learning",
        "Deep Neural Networks",
        "Reinforcement Learning",
        "Computer Vision",
        "NLP & Text Mining",
        "Big Data Analytics",
        "AI Ethics & Governance",
        "Research Methodology"
      ],
      careers: ["Senior ML Engineer", "Research Scientist", "AI Architect", "Data Science Manager", "AI Startup Founder"],
      requirements: [
        "B.Tech/B.E. in relevant field with 70%",
        "GATE score (preferred)",
        "Research aptitude test",
        "Technical interview"
      ]
    },
    {
      id: 3,
      title: "Ph.D in AI & Machine Learning",
      level: "Research",
      duration: "3-5 Years",
      credits: "Variable",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      description: "Doctoral research program for aspiring researchers and academicians focusing on cutting-edge AI/ML research with international collaboration opportunities.",
      features: ["Research Funding", "International Conferences", "Publication Support", "Teaching Assistantship", "Industry Collaboration", "Patent Filing"],
      intake: "20",
      placement: "100",
      coreSubjects: [
        "Advanced Research Methods",
        "AI Theory & Foundations",
        "Specialized Research Areas",
        "Interdisciplinary Studies",
        "Ethics in AI Research",
        "Technology Transfer",
        "Academic Writing",
        "Dissertation Research"
      ],
      careers: ["Research Scientist", "Professor", "Principal Researcher", "CTO", "AI Research Director"],
      requirements: [
        "M.Tech/M.S. with 75% or above",
        "Research proposal",
        "UGC NET/GATE qualification",
        "Research interview & presentation"
      ]
    },
    {
      id: 4,
      title: "Professional Certificate in Deep Learning",
      level: "Certification",
      duration: "6 Months",
      credits: "24",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      description: "Industry-focused certification program designed for working professionals to upskill in deep learning technologies and neural network architectures.",
      features: ["Weekend Classes", "Online Support", "Industry Projects", "Job Placement", "Flexible Schedule", "Expert Mentorship"],
      intake: "80",
      placement: "85",
      coreSubjects: [
        "Neural Network Fundamentals",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Generative Models",
        "Transfer Learning",
        "Model Deployment",
        "MLOps Practices",
        "Capstone Project"
      ],
      careers: ["Deep Learning Engineer", "AI Developer", "ML Specialist", "Computer Vision Engineer", "NLP Engineer"],
      requirements: [
        "Bachelor\'s degree in any field",
        "Basic programming knowledge",
        "2+ years work experience",
        "Aptitude test"
      ]
    },
    {
      id: 5,
      title: "M.Tech in Computer Vision",
      level: "Postgraduate",
      duration: "2 Years",
      credits: "80",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500",
      description: "Specialized master's program focusing on computer vision, image processing, and visual AI applications with extensive hands-on laboratory experience.",
      features: ["Vision Lab Access", "Industry Projects", "Robotics Integration", "AR/VR Applications", "Medical Imaging", "Autonomous Systems"],
      intake: "40",
      placement: "96",
      coreSubjects: [
        "Digital Image Processing",
        "Computer Vision Algorithms",
        "3D Vision & Geometry",
        "Object Detection & Recognition",
        "Medical Image Analysis",
        "Autonomous Vehicle Vision",
        "Augmented Reality",
        "Vision-based Robotics"
      ],
      careers: ["Computer Vision Engineer", "Robotics Engineer", "AR/VR Developer", "Medical Imaging Specialist", "Autonomous Systems Engineer"],
      requirements: [
        "B.Tech in CSE/ECE/IT with 70%",
        "Strong mathematical background",
        "Programming proficiency",
        "Technical interview"
      ]
    },
    {
      id: 6,
      title: "Executive Program in AI Strategy",
      level: "Certification",
      duration: "3 Months",
      credits: "12",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
      description: "Executive-level program designed for senior managers and leaders to understand AI strategy, implementation, and business transformation.",
      features: ["Executive Faculty", "Case Studies", "Industry Visits", "Networking", "Strategic Projects", "Leadership Focus"],
      intake: "30",
      placement: "92",
      coreSubjects: [
        "AI Strategy & Planning",
        "Digital Transformation",
        "AI Ethics & Governance",
        "Change Management",
        "ROI & Business Cases",
        "Technology Leadership",
        "Innovation Management",
        "Strategic Implementation"
      ],
      careers: ["Chief AI Officer", "Digital Transformation Leader", "AI Strategy Consultant", "Innovation Director", "Technology Executive"],
      requirements: [
        "10+ years senior management experience",
        "Graduate degree",
        "Leadership role in organization",
        "Executive interview"
      ]
    }
  ];

  // Mock data for course modules
  const courseModules = [
    {
      id: 1,
      title: "Fundamentals of Machine Learning",
      credits: "4",
      duration: "14 Weeks",
      description: "Introduction to machine learning concepts, algorithms, and practical applications. Covers supervised, unsupervised, and reinforcement learning paradigms with hands-on programming exercises.",
      outcomes: [
        "Understand core ML algorithms and their applications",
        "Implement ML models using Python and scikit-learn",
        "Evaluate model performance and handle overfitting",
        "Apply feature engineering and data preprocessing techniques"
      ],
      prerequisites: ["Linear Algebra", "Statistics", "Python Programming"],
      faculty: {
        name: "Dr. Priya Mehta",
        designation: "Associate Professor",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      assessment: [
        { type: "Assignments", weightage: 30 },
        { type: "Mid-term Exam", weightage: 25 },
        { type: "Final Project", weightage: 35 },
        { type: "Class Participation", weightage: 10 }
      ]
    },
    {
      id: 2,
      title: "Deep Neural Networks",
      credits: "4",
      duration: "14 Weeks",
      description: "Comprehensive study of deep learning architectures including feedforward networks, CNNs, RNNs, and advanced architectures like Transformers and GANs.",
      outcomes: [
        "Design and implement various neural network architectures",
        "Understand backpropagation and optimization techniques",
        "Work with popular deep learning frameworks",
        "Apply deep learning to real-world problems"
      ],
      prerequisites: ["Machine Learning", "Linear Algebra", "Calculus"],
      faculty: {
        name: "Dr. Arjun Singh",
        designation: "Professor",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg"
      },
      assessment: [
        { type: "Programming Assignments", weightage: 40 },
        { type: "Theory Exam", weightage: 30 },
        { type: "Research Project", weightage: 25 },
        { type: "Presentation", weightage: 5 }
      ]
    },
    {
      id: 3,
      title: "Computer Vision Applications",
      credits: "4",
      duration: "14 Weeks",
      description: "Practical applications of computer vision in various domains including medical imaging, autonomous vehicles, surveillance, and augmented reality.",
      outcomes: [
        "Implement image processing and computer vision algorithms",
        "Develop applications for object detection and recognition",
        "Work with OpenCV and other vision libraries",
        "Create end-to-end vision systems"
      ],
      prerequisites: ["Digital Image Processing", "Machine Learning"],
      faculty: {
        name: "Dr. Kavya Sharma",
        designation: "Assistant Professor",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg"
      },
      assessment: [
        { type: "Lab Exercises", weightage: 35 },
        { type: "Mid-term Project", weightage: 25 },
        { type: "Final Project", weightage: 30 },
        { type: "Viva Voce", weightage: 10 }
      ]
    },
    {
      id: 4,
      title: "Natural Language Processing",
      credits: "4",
      duration: "14 Weeks",
      description: "Study of computational linguistics and NLP techniques including text processing, sentiment analysis, machine translation, and language models.",
      outcomes: [
        "Process and analyze textual data effectively",
        "Implement NLP algorithms and models",
        "Build chatbots and language applications",
        "Understand transformer architectures and attention mechanisms"
      ],
      prerequisites: ["Machine Learning", "Statistics", "Programming"],
      faculty: {
        name: "Dr. Rohit Kumar",
        designation: "Associate Professor",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      assessment: [
        { type: "Text Analysis Projects", weightage: 40 },
        { type: "Written Exam", weightage: 25 },
        { type: "Research Paper Review", weightage: 20 },
        { type: "Class Participation", weightage: 15 }
      ]
    }
  ];

  // Filter programs based on active filter
  const filteredPrograms = programs?.filter(program => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'undergraduate') return program?.level === 'Undergraduate';
    if (activeFilter === 'postgraduate') return program?.level === 'Postgraduate';
    if (activeFilter === 'research') return program?.level === 'Research';
    if (activeFilter === 'certification') return program?.level === 'Certification';
    return true;
  });

  // Calculate program counts for filter tabs
  const programCounts = {
    all: programs?.length,
    undergraduate: programs?.filter(p => p?.level === 'Undergraduate')?.length,
    postgraduate: programs?.filter(p => p?.level === 'Postgraduate')?.length,
    research: programs?.filter(p => p?.level === 'Research')?.length,
    certification: programs?.filter(p => p?.level === 'Certification')?.length
  };

  const handleViewDetails = (program) => {
    // Handle program details view
    console.log('View details for:', program?.title);
  };

  const handleModuleToggle = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Programs...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Programs & Courses - Academic Excellence Hub | AIML Royal</title>
        <meta name="description" content="Explore comprehensive AI & ML programs at GM University. Undergraduate, postgraduate, and research programs with industry partnerships and cutting-edge curriculum." />
        <meta name="keywords" content="AI programs, machine learning courses, computer science education, GM University, artificial intelligence degree" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 royal-gradient overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                Programs & Courses
                <span className="block text-accent">Academic Excellence Hub</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover world-class AI & ML programs designed to shape the future of technology. 
                From undergraduate foundations to advanced research, we offer comprehensive pathways 
                to excellence in artificial intelligence and machine learning.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-white/80 text-sm">Programs Offered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-white/80 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-white/80 text-sm">Industry Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">₹12.5L</div>
                  <div className="text-white/80 text-sm">Avg. Package</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                Our Academic Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our diverse range of programs tailored to meet industry demands and academic excellence
              </p>
            </div>

            {/* Filter Tabs */}
            <FilterTabs 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              programCounts={programCounts}
            />

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms?.map((program) => (
                <ProgramCard
                  key={program?.id}
                  program={program}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {filteredPrograms?.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No programs found for the selected filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Course Modules Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                Sample Course Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore detailed course modules with learning outcomes, faculty information, and assessment methods
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {courseModules?.map((module) => (
                <CourseModule
                  key={module.id}
                  module={module}
                  isOpen={expandedModule === module.id}
                  onToggle={() => handleModuleToggle(module.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <LearningResourcesSection />

        {/* Industry Partnerships */}
        <IndustryPartnerships />

        {/* Student Testimonials */}
        <StudentTestimonials />

        {/* Academic Coordinator */}
        <AcademicCoordinator />

        {/* Call to Action */}
        <section className="py-16 royal-gradient">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Ready to Begin Your AI/ML Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful graduates who have transformed their careers through our world-class programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gold-gradient text-primary hover:scale-105 transition-transform duration-300"
                iconName="GraduationCap"
                iconPosition="left"
              >
                Apply for Admission
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
                iconName="Download"
                iconPosition="left"
              >
                Download Brochure
              </Button>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 royal-gradient rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold text-xl font-playfair">AI</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold">AIML Royal</h3>
                    <p className="text-xs text-accent">Academic Excellence</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  Shaping the future of artificial intelligence and machine learning through world-class education and research.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="/about-department-academic-heritage" className="hover:text-accent transition-colors">About Department</a></li>
                  <li><a href="/faculty-constellation-distinguished-educators" className="hover:text-accent transition-colors">Faculty</a></li>
                  <li><a href="/research-innovation-center" className="hover:text-accent transition-colors">Research</a></li>
                  <li><a href="/student-success-gallery-achievement-showcase" className="hover:text-accent transition-colors">Student Success</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><span className="hover:text-accent transition-colors">B.Tech AI</span></li>
                  <li><span className="hover:text-accent transition-colors">M.Tech ML</span></li>
                  <li><span className="hover:text-accent transition-colors">Ph.D Research</span></li>
                  <li><span className="hover:text-accent transition-colors">Certifications</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-white/70">
                  <p>GM University Campus</p>
                  <p>Bangalore, Karnataka</p>
                  <p>admissions@gmuniversity.edu.in</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
              <p>&copy; {new Date()?.getFullYear()} AIML Royal - GM University. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProgramsCoursesAcademicExcellenceHub;