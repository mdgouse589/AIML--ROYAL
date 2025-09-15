import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DocumentCard from './components/DocumentCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import StatsOverview from './components/StatsOverview';
import DocumentViewer from './components/DocumentViewer';
import QuickActions from './components/QuickActions';

const IQACDocumentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Mock data for documents
  const documents = [
    {
      id: 1,
      title: "NAAC Self Study Report 2023-24",
      category: "NAAC Accreditation",
      type: "naac",
      description: "Comprehensive self-assessment report submitted to NAAC for institutional accreditation covering all seven criteria including curricular aspects, teaching-learning evaluation, research innovations, infrastructure, student support, governance, and institutional values.",
      date: "March 15, 2024",
      size: "12.5 MB",
      downloads: 1247,
      status: "published",
      summary: "This comprehensive self-study report demonstrates GM University AIML Branch's commitment to academic excellence across all NAAC criteria. The report highlights significant achievements in curriculum design, faculty development, research output, and student satisfaction.",
      keyPoints: [
        "NAAC Grade A+ achieved with 3.65 CGPA",
        "100% faculty with PhD qualifications",
        "95% student satisfaction rate",
        "50+ research publications in peer-reviewed journals",
        "Industry partnerships with 25+ leading tech companies"
      ]
    },
    {
      id: 2,
      title: "Annual Quality Assurance Report 2023-24",
      category: "Quality Assurance",
      type: "aqar",
      description: "Detailed annual report covering academic performance, infrastructure development, faculty achievements, student outcomes, and quality enhancement initiatives undertaken during the academic year 2023-24.",
      date: "April 10, 2024",
      size: "8.7 MB",
      downloads: 892,
      status: "published",
      summary: "The AQAR 2023-24 showcases remarkable progress in academic delivery, research output, and student development programs. Key achievements include curriculum updates, faculty training programs, and enhanced industry collaborations.",
      keyPoints: [
        "Curriculum updated with latest AI/ML technologies",
        "Faculty completed 120+ hours of professional development",
        "Student placement rate increased to 98%",
        "New research labs established with ₹2.5 crore investment",
        "International collaborations with 5 universities"
      ]
    },
    {
      id: 3,
      title: "Academic Audit Report 2023-24",
      category: "Academic Audit",
      type: "audit",
      description: "Independent academic audit report evaluating curriculum effectiveness, teaching methodologies, assessment practices, and learning outcomes achievement across all AIML programs.",
      date: "February 28, 2024",
      size: "6.2 MB",
      downloads: 654,
      status: "published",
      summary: "The academic audit confirms high standards of educational delivery with recommendations for continuous improvement. The report validates the effectiveness of outcome-based education and industry-aligned curriculum.",
      keyPoints: [
        "95% course learning outcomes achieved",
        "Innovative teaching methods implemented",
        "Continuous assessment practices enhanced",
        "Industry feedback integrated into curriculum",
        "Student performance analytics improved"
      ]
    },
    {
      id: 4,
      title: "Infrastructure Quality Assessment 2024",
      category: "Infrastructure",
      type: "infrastructure",
      description: "Comprehensive assessment of laboratory facilities, computing infrastructure, library resources, and physical amenities supporting AIML education and research activities.",
      date: "January 20, 2024",
      size: "15.3 MB",
      downloads: 423,
      status: "published",
      summary: "Infrastructure assessment reveals world-class facilities supporting cutting-edge AI/ML education. Recent upgrades include high-performance computing clusters, specialized AI labs, and enhanced digital library resources.",
      keyPoints: [
        "State-of-the-art AI/ML laboratories with latest hardware",
        "High-performance computing cluster with 500+ cores",
        "Digital library with 10,000+ technical resources",
        "Smart classrooms with interactive learning systems",
        "24/7 internet connectivity with 1 Gbps bandwidth"
      ]
    },
    {
      id: 5,
      title: "Faculty Development Report 2023-24",
      category: "Faculty Development",
      type: "faculty",
      description: "Annual report on faculty training programs, skill enhancement initiatives, research activities, and professional development achievements across the AIML department.",
      date: "March 25, 2024",
      size: "4.8 MB",
      downloads: 567,
      status: "published",
      summary: "Faculty development initiatives have significantly enhanced teaching quality and research capabilities. The report highlights successful completion of training programs, conference participations, and research collaborations.",
      keyPoints: [
        "100% faculty completed mandatory training programs",
        "Faculty published 45+ research papers",
        "International conference presentations: 25+",
        "Industry collaboration projects: 15+",
        "Patent applications filed: 8"
      ]
    },
    {
      id: 6,
      title: "Student Feedback Analysis 2023-24",
      category: "Student Feedback",
      type: "feedback",
      description: "Comprehensive analysis of student feedback on teaching effectiveness, course content, infrastructure facilities, and overall satisfaction with AIML programs.",
      date: "April 5, 2024",
      size: "3.9 MB",
      downloads: 789,
      status: "published",
      summary: "Student feedback analysis reveals high satisfaction levels across all parameters. The report includes actionable insights for continuous improvement and enhancement of student experience.",
      keyPoints: [
        "Overall satisfaction score: 4.7/5.0",
        "Teaching effectiveness rating: 4.8/5.0",
        "Infrastructure satisfaction: 4.6/5.0",
        "Course content relevance: 4.9/5.0",
        "Career guidance satisfaction: 4.5/5.0"
      ]
    },
    {
      id: 7,
      title: "Industry Advisory Board Minutes 2024",
      category: "Advisory Board",
      type: "advisory",
      description: "Meeting minutes and recommendations from the Industry Advisory Board comprising senior executives from leading technology companies providing guidance on curriculum and industry alignment.",
      date: "February 15, 2024",
      size: "2.1 MB",
      downloads: 345,
      status: "published",
      summary: "Industry Advisory Board meeting focused on curriculum alignment with industry requirements, emerging technology trends, and placement opportunities. Key recommendations include integration of generative AI and MLOps practices.",
      keyPoints: [
        "Curriculum alignment with industry 4.0 requirements",
        "Integration of generative AI and large language models",
        "MLOps and deployment practices emphasis",
        "Industry internship program expansion",
        "Skill certification partnerships established"
      ]
    },
    {
      id: 8,
      title: "Research Quality Metrics 2023-24",
      category: "Research Quality",
      type: "research",
      description: "Detailed analysis of research output quality, publication standards, peer review processes, citation metrics, and ethical compliance measures in AIML research activities.",
      date: "March 30, 2024",
      size: "7.4 MB",
      downloads: 456,
      status: "published",
      summary: "Research quality metrics demonstrate significant improvement in publication standards and citation impact. The report highlights adherence to ethical research practices and international collaboration growth.",
      keyPoints: [
        "Research publications in Q1 journals: 35+",
        "Average citation impact factor: 3.2",
        "International research collaborations: 12",
        "Research grants secured: ₹1.8 crore",
        "PhD scholars enrolled: 25"
      ]
    },
    {
      id: 9,
      title: "Placement Quality Assurance 2023-24",
      category: "Placement Quality",
      type: "placement",
      description: "Comprehensive report on placement processes, employer feedback, salary verification, career tracking systems, and quality assurance measures for student placements.",
      date: "April 15, 2024",
      size: "5.6 MB",
      downloads: 1123,
      status: "published",
      summary: "Placement quality assurance report confirms excellent career outcomes for AIML graduates. The report includes employer satisfaction surveys, salary trends, and long-term career tracking data.",
      keyPoints: [
        "Placement rate: 98% for 2023-24 batch",
        "Average salary package: ₹12.5 LPA",
        "Highest package offered: ₹45 LPA",
        "Top recruiters: Google, Microsoft, Amazon, TCS",
        "Employer satisfaction rating: 4.8/5.0"
      ]
    },
    {
      id: 10,
      title: "UGC Compliance Report 2024",
      category: "Regulatory Compliance",
      type: "compliance",
      description: "Comprehensive compliance report covering UGC regulations, AICTE norms, Karnataka state requirements, and institutional adherence to statutory guidelines.",
      date: "January 10, 2024",
      size: "9.8 MB",
      downloads: 234,
      status: "published",
      summary: "Compliance report demonstrates full adherence to all regulatory requirements including UGC guidelines, AICTE norms, and state regulations. The report confirms institutional eligibility for all academic programs.",
      keyPoints: [
        "100% compliance with UGC regulations",
        "AICTE approval maintained for all programs",
        "Karnataka state university affiliation confirmed",
        "Statutory committees functioning effectively",
        "Regular compliance audits conducted"
      ]
    }
  ];

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Documents', count: documents?.length },
    { id: 'naac', name: 'NAAC Accreditation', count: documents?.filter(d => d?.type === 'naac')?.length },
    { id: 'aqar', name: 'Quality Assurance', count: documents?.filter(d => d?.type === 'aqar')?.length },
    { id: 'audit', name: 'Academic Audit', count: documents?.filter(d => d?.type === 'audit')?.length },
    { id: 'infrastructure', name: 'Infrastructure', count: documents?.filter(d => d?.type === 'infrastructure')?.length },
    { id: 'faculty', name: 'Faculty Development', count: documents?.filter(d => d?.type === 'faculty')?.length },
    { id: 'feedback', name: 'Student Feedback', count: documents?.filter(d => d?.type === 'feedback')?.length },
    { id: 'advisory', name: 'Advisory Board', count: documents?.filter(d => d?.type === 'advisory')?.length },
    { id: 'research', name: 'Research Quality', count: documents?.filter(d => d?.type === 'research')?.length },
    { id: 'placement', name: 'Placement Quality', count: documents?.filter(d => d?.type === 'placement')?.length },
    { id: 'compliance', name: 'Compliance', count: documents?.filter(d => d?.type === 'compliance')?.length }
  ];

  // Mock stats data
  const stats = {
    totalDocuments: documents?.length,
    naacGrade: 'A+',
    complianceRate: 100,
    lastUpdated: 'April 15, 2024'
  };

  // Filter and sort documents
  const filteredDocuments = documents?.filter(doc => {
      const matchesSearch = doc?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           doc?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           doc?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      const matchesCategory = activeCategory === 'all' || doc?.type === activeCategory;
      return matchesSearch && matchesCategory;
    })?.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'title-asc':
          return a?.title?.localeCompare(b?.title);
        case 'title-desc':
          return b?.title?.localeCompare(a?.title);
        case 'downloads-desc':
          return b?.downloads - a?.downloads;
        default:
          return 0;
      }
    });

  const handleDocumentView = (document) => {
    setSelectedDocument(document);
    setIsViewerOpen(true);
  };

  const handleDocumentDownload = (document) => {
    // Mock download functionality
    console.log(`Downloading: ${document?.title}`);
    // In a real application, this would trigger the actual download
  };

  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case 'latest-aqar':
        const latestAqar = documents?.find(d => d?.type === 'aqar');
        if (latestAqar) handleDocumentView(latestAqar);
        break;
      case 'naac-documents':
        setActiveCategory('naac');
        break;
      case 'compliance-status': setActiveCategory('compliance');
        break;
      case 'feedback-reports': setActiveCategory('feedback');
        break;
      case 'request-document':
        console.log('Request new document functionality');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>IQAC Documentation - GM University AIML Branch</title>
        <meta name="description" content="Access comprehensive quality assurance documentation including NAAC reports, AQAR documents, academic audits, and compliance materials for GM University AIML Branch." />
        <meta name="keywords" content="IQAC, quality assurance, NAAC, AQAR, academic audit, compliance, GM University, AIML" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-gradient pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-royal">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
              </div>
              
              <h1 className="text-hero font-bold text-white mb-6">
                IQAC Documentation
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive quality assurance documentation demonstrating our commitment to academic excellence, 
                institutional transparency, and continuous improvement in AI/ML education.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-black font-cta shadow-golden btn-pulse"
                >
                  Download Latest AQAR
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View NAAC Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsOverview stats={stats} />
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
                
                <QuickActions onAction={handleQuickAction} />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  onSortChange={setSortBy}
                  sortBy={sortBy}
                />

                {/* Results Header */}
                <div className="bg-white rounded-lg shadow-royal border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {activeCategory === 'all' ? 'All Documents' : categories?.find(c => c?.id === activeCategory)?.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {filteredDocuments?.length} document{filteredDocuments?.length !== 1 ? 's' : ''} found
                        {searchTerm && ` for "${searchTerm}"`}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Icon name="Clock" size={16} />
                      <span>Last updated: {stats?.lastUpdated}</span>
                    </div>
                  </div>
                </div>

                {/* Documents Grid */}
                {filteredDocuments?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDocuments?.map((document) => (
                      <DocumentCard
                        key={document?.id}
                        document={document}
                        onView={handleDocumentView}
                        onDownload={handleDocumentDownload}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-royal border border-gray-200 p-12 text-center">
                    <Icon name="FileX" size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search terms or filter criteria to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('all');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Document Viewer Modal */}
        <DocumentViewer
          document={selectedDocument}
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
          onDownload={handleDocumentDownload}
        />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">IQAC Office</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>GM University, AIML Department</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>+91 80 2345 6789</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>iqac.aiml@gmu.edu.in</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    NAAC Portal
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    UGC Guidelines
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    AICTE Norms
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    Quality Manual
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    Document Request
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    Technical Support
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    Feedback Form
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-secondary transition-colors duration-200">
                    Help Center
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date()?.getFullYear()} GM University AIML Branch. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IQACDocumentation;