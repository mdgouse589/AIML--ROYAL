import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FacultyCard from './components/FacultyCard';
import FacultyFilters from './components/FacultyFilters';
import ResearchCoordinatorSpotlight from './components/ResearchCoordinatorSpotlight';
import FacultyDetailModal from './components/FacultyDetailModal';
import FacultyStats from './components/FacultyStats';

const FacultyConstellation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    researchAreas: [],
    experience: 'all',
    designations: []
  });
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Mock Faculty Data
  const facultyData = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head of Department",
      qualification: "Ph.D. in Computer Science, IIT Bombay",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      experience: "20",
      publications: "95",
      students: "45",
      email: "rajesh.kumar@gmuniversity.edu.in",
      phone: "+91 98765 43210",
      office: "Room 101, AIML Block",
      officeHours: "Mon-Fri 10:00-12:00 PM",
      status: "Available",
      researchAreas: ["Machine Learning", "Deep Learning", "Computer Vision"],
      specializations: ["Neural Networks", "Pattern Recognition", "Image Processing", "AI Ethics"],
      researchInterests: `Leading research in advanced machine learning algorithms with focus on deep neural networks and computer vision applications. Current work involves developing explainable AI systems for healthcare diagnostics and autonomous vehicle perception systems. Collaborating with industry partners on real-world AI implementations.`,
      recentPublications: [
        {
          title: "Explainable Deep Learning for Medical Image Analysis",
          journal: "IEEE Transactions on Medical Imaging",
          year: "2024",
          citations: 45,
          impactFactor: "10.048"
        },
        {
          title: "Federated Learning in Healthcare: Privacy-Preserving Approaches",
          journal: "Nature Machine Intelligence",
          year: "2023",
          citations: 78,
          impactFactor: "25.898"
        }
      ],
      currentProjects: [
        {
          title: "AI-Driven Healthcare Diagnostics Platform",
          description: "Developing explainable AI models for early disease detection",
          duration: "2023-2025",
          funding: "₹35 Lakhs"
        }
      ],
      achievements: [
        {
          title: "Best Research Paper Award",
          organization: "IEEE Conference on Computer Vision",
          year: "2023"
        }
      ]
    },
    {
      id: 2,
      name: "Dr. Anita Patel",
      designation: "Associate Professor",
      qualification: "Ph.D. in Artificial Intelligence, IISc Bangalore",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      experience: "12",
      publications: "67",
      students: "28",
      email: "anita.patel@gmuniversity.edu.in",
      phone: "+91 98765 43211",
      office: "Room 205, AIML Block",
      officeHours: "Tue-Thu 2:00-4:00 PM",
      status: "Available",
      researchAreas: ["Natural Language Processing", "Machine Learning", "Data Science"],
      specializations: ["Text Mining", "Sentiment Analysis", "Chatbots", "Language Models"],
      researchInterests: `Specializing in natural language processing with emphasis on multilingual text analysis and conversational AI systems. Research focuses on developing culturally-aware language models for Indian languages and building intelligent chatbot systems for educational applications.`,
      recentPublications: [
        {
          title: "Multilingual Sentiment Analysis for Indian Languages",
          journal: "ACM Transactions on Asian Language Processing",
          year: "2024",
          citations: 32,
          impactFactor: "3.2"
        },
        {
          title: "Conversational AI for Educational Support Systems",
          journal: "Computers & Education",
          year: "2023",
          citations: 56,
          impactFactor: "8.538"
        }
      ]
    },
    {
      id: 3,
      name: "Dr. Vikram Singh",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Data Science, IIT Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "8",
      publications: "42",
      students: "18",
      email: "vikram.singh@gmuniversity.edu.in",
      phone: "+91 98765 43212",
      office: "Room 308, AIML Block",
      officeHours: "Mon-Wed 3:00-5:00 PM",
      status: "Busy",
      researchAreas: ["Data Science", "Big Data Analytics", "Machine Learning"],
      specializations: ["Predictive Analytics", "Data Visualization", "Statistical Modeling", "Business Intelligence"],
      researchInterests: `Focused on big data analytics and predictive modeling for business intelligence applications. Research involves developing scalable machine learning algorithms for large-scale data processing and creating innovative data visualization techniques for complex datasets.`,
      recentPublications: [
        {
          title: "Scalable Machine Learning for Big Data Analytics",
          journal: "IEEE Transactions on Big Data",
          year: "2024",
          citations: 28,
          impactFactor: "7.5"
        },
        {
          title: "Interactive Data Visualization for Business Intelligence",
          journal: "Information Visualization",
          year: "2023",
          citations: 41,
          impactFactor: "2.1"
        }
      ]
    },
    {
      id: 4,
      name: "Dr. Meera Reddy",
      designation: "Associate Professor",
      qualification: "Ph.D. in Robotics, Carnegie Mellon University",
      image: "https://images.unsplash.com/photo-1494790108755-2616c96d5e2c?w=400&h=400&fit=crop&crop=face",
      experience: "14",
      publications: "73",
      students: "32",
      email: "meera.reddy@gmuniversity.edu.in",
      phone: "+91 98765 43213",
      office: "Room 402, AIML Block",
      officeHours: "Thu-Fri 1:00-3:00 PM",
      status: "Available",
      researchAreas: ["Robotics", "Computer Vision", "Artificial Intelligence"],
      specializations: ["Autonomous Systems", "Robot Vision", "Human-Robot Interaction", "SLAM"],
      researchInterests: `Leading research in autonomous robotics and computer vision with applications in service robotics and industrial automation. Current projects involve developing intelligent navigation systems for mobile robots and human-robot collaboration frameworks for manufacturing environments.`,
      recentPublications: [
        {
          title: "Autonomous Navigation in Dynamic Environments",
          journal: "IEEE Robotics and Automation Letters",
          year: "2024",
          citations: 38,
          impactFactor: "4.321"
        },
        {
          title: "Human-Robot Collaboration in Manufacturing",
          journal: "Robotics and Computer-Integrated Manufacturing",
          year: "2023",
          citations: 52,
          impactFactor: "6.0"
        }
      ]
    },
    {
      id: 5,
      name: "Dr. Arjun Sharma",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Machine Learning, Stanford University",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      experience: "6",
      publications: "35",
      students: "15",
      email: "arjun.sharma@gmuniversity.edu.in",
      phone: "+91 98765 43214",
      office: "Room 506, AIML Block",
      officeHours: "Mon-Tue 4:00-6:00 PM",
      status: "Available",
      researchAreas: ["Machine Learning", "Deep Learning", "Neural Networks"],
      specializations: ["Reinforcement Learning", "Generative Models", "Transfer Learning", "Meta-Learning"],
      researchInterests: `Specializing in advanced machine learning techniques including reinforcement learning and generative models. Research focuses on developing novel neural network architectures and training methodologies for complex decision-making tasks and creative AI applications.`,
      recentPublications: [
        {
          title: "Meta-Learning for Few-Shot Classification",
          journal: "International Conference on Machine Learning",
          year: "2024",
          citations: 25,
          impactFactor: "N/A"
        },
        {
          title: "Generative Adversarial Networks for Data Augmentation",
          journal: "Neural Networks",
          year: "2023",
          citations: 43,
          impactFactor: "7.197"
        }
      ]
    },
    {
      id: 6,
      name: "Dr. Kavya Nair",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Computer Vision, MIT",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      experience: "7",
      publications: "48",
      students: "22",
      email: "kavya.nair@gmuniversity.edu.in",
      phone: "+91 98765 43215",
      office: "Room 603, AIML Block",
      officeHours: "Wed-Fri 11:00 AM-1:00 PM",
      status: "Available",
      researchAreas: ["Computer Vision", "Deep Learning", "Pattern Recognition"],
      specializations: ["Object Detection", "Image Segmentation", "3D Vision", "Medical Imaging"],
      researchInterests: `Focused on computer vision applications in medical imaging and autonomous systems. Research involves developing advanced deep learning models for medical image analysis, 3D scene understanding, and real-time object detection systems for safety-critical applications.`,
      recentPublications: [
        {
          title: "3D Medical Image Segmentation using Deep Learning",
          journal: "Medical Image Analysis",
          year: "2024",
          citations: 31,
          impactFactor: "13.828"
        },
        {
          title: "Real-time Object Detection for Autonomous Vehicles",
          journal: "IEEE Transactions on Intelligent Transportation Systems",
          year: "2023",
          citations: 47,
          impactFactor: "9.551"
        }
      ]
    }
  ];

  // Filter and search faculty
  const filteredFaculty = facultyData?.filter(faculty => {
    const matchesSearch = faculty?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         faculty?.researchAreas?.some(area => area?.toLowerCase()?.includes(searchTerm?.toLowerCase())) ||
                         faculty?.specializations?.some(spec => spec?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

    const matchesResearchAreas = filters?.researchAreas?.length === 0 ||
                                filters?.researchAreas?.some(area => faculty?.researchAreas?.includes(area));

    const matchesExperience = filters?.experience === 'all' ||
                             (filters?.experience === '0-5' && parseInt(faculty?.experience) <= 5) ||
                             (filters?.experience === '6-10' && parseInt(faculty?.experience) >= 6 && parseInt(faculty?.experience) <= 10) ||
                             (filters?.experience === '11-15' && parseInt(faculty?.experience) >= 11 && parseInt(faculty?.experience) <= 15) ||
                             (filters?.experience === '16+' && parseInt(faculty?.experience) >= 16);

    const matchesDesignations = filters?.designations?.length === 0 ||
                               filters?.designations?.some(designation => faculty?.designation?.includes(designation));

    return matchesSearch && matchesResearchAreas && matchesExperience && matchesDesignations;
  });

  // Sort faculty
  const sortedFaculty = [...filteredFaculty]?.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a?.name?.localeCompare(b?.name);
      case 'experience':
        return parseInt(b?.experience) - parseInt(a?.experience);
      case 'publications':
        return parseInt(b?.publications) - parseInt(a?.publications);
      default:
        return 0;
    }
  });

  const handleViewDetails = (faculty) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setFilters({
      researchAreas: [],
      experience: 'all',
      designations: []
    });
    setSearchTerm('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Faculty Constellation - Distinguished Educators | AIML Royal</title>
        <meta name="description" content="Meet our distinguished faculty members specializing in AI, ML, and cutting-edge research at GM University's AIML Department." />
        <meta name="keywords" content="AIML faculty, professors, research, machine learning, artificial intelligence, GM University" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-primary/90 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full translate-x-40 translate-y-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Icon name="Users" size={16} className="mr-2 text-accent" />
              <span className="text-accent font-medium">Distinguished Educators</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Faculty <span className="text-accent">Constellation</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Meet our world-class faculty members who are shaping the future of AI and Machine Learning through groundbreaking research, innovative teaching, and industry collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="gold-gradient text-primary hover:scale-105 transition-transform duration-300"
                iconName="Search"
                iconPosition="left"
                iconSize={16}
              >
                Explore Faculty Profiles
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
                iconName="BookOpen"
                iconPosition="left"
                iconSize={16}
              >
                View Research Publications
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Faculty Statistics */}
        <FacultyStats facultyData={facultyData} />

        {/* Research Coordinator Spotlight */}
        <ResearchCoordinatorSpotlight />

        {/* Filters */}
        <FacultyFilters
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={handleClearFilters}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Showing {sortedFaculty?.length} of {facultyData?.length} faculty members
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="experience">Sort by Experience</option>
              <option value="publications">Sort by Publications</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-200 ${
                  viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Grid3X3" size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors duration-200 ${
                  viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="List" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        {sortedFaculty?.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
          }`}>
            {sortedFaculty?.map((faculty) => (
              <FacultyCard
                key={faculty?.id}
                faculty={faculty}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Faculty Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or clearing the filters.
            </p>
            <Button
              variant="outline"
              onClick={handleClearFilters}
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={16}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            Interested in Collaborating with Our Faculty?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our faculty members are always open to research collaborations, industry partnerships, and academic exchanges. Reach out to explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="gold-gradient text-primary"
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
            >
              Contact Research Coordinator
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary"
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
            >
              Schedule Faculty Meeting
            </Button>
          </div>
        </div>
      </div>
      {/* Faculty Detail Modal */}
      <FacultyDetailModal
        faculty={selectedFaculty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/80">
            © {new Date()?.getFullYear()} GM University - AIML Department. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FacultyConstellation;