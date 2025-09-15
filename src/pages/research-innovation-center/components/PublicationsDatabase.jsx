import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PublicationsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const publications = [
    {
      id: 1,
      title: "Deep Learning Approaches for Medical Image Segmentation: A Comprehensive Survey",
      authors: ["Dr. Priya Sharma", "Dr. Rajesh Kumar", "Ms. Anita Patel"],
      journal: "IEEE Transactions on Medical Imaging",
      year: 2024,
      type: "Journal Article",
      citations: 127,
      impact: "Q1",
      doi: "10.1109/TMI.2024.1234567",
      abstract: `This comprehensive survey examines the latest deep learning methodologies for medical image segmentation, covering convolutional neural networks, attention mechanisms, and transformer-based approaches. The paper provides a systematic analysis of 150+ recent publications and benchmarks performance across multiple medical imaging modalities.`,
      keywords: ["Deep Learning", "Medical Imaging", "Segmentation", "CNN", "Transformers"],
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Ethical AI Framework for Autonomous Decision Making in Healthcare Systems",
      authors: ["Dr. Priya Sharma", "Dr. Vikram Singh", "Prof. Sarah Johnson"],
      journal: "Nature Machine Intelligence",
      year: 2024,
      type: "Research Article",
      citations: 89,
      impact: "Q1",
      doi: "10.1038/s42256-024-0789-1",
      abstract: `We propose a novel ethical AI framework that addresses bias, fairness, and transparency in autonomous healthcare decision-making systems. The framework includes algorithmic auditing tools and real-time bias detection mechanisms validated across three major hospital networks.`,
      keywords: ["AI Ethics", "Healthcare", "Bias Detection", "Fairness", "Transparency"],
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Federated Learning for Privacy-Preserving Smart City Applications",
      authors: ["Dr. Amit Verma", "Ms. Neha Gupta", "Dr. Priya Sharma"],
      journal: "ACM Computing Surveys",
      year: 2024,
      type: "Survey Paper",
      citations: 156,
      impact: "Q1",
      doi: "10.1145/3589334.3645123",
      abstract: `This survey explores federated learning applications in smart city environments, focusing on privacy preservation, communication efficiency, and scalability challenges. We analyze 200+ research papers and present a taxonomy of federated learning approaches for urban computing.`,
      keywords: ["Federated Learning", "Smart Cities", "Privacy", "Urban Computing", "IoT"],
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Quantum-Enhanced Machine Learning for Financial Risk Assessment",
      authors: ["Dr. Rajesh Kumar", "Ms. Priyanka Joshi", "Dr. Michael Chen"],
      journal: "Quantum Information Processing",
      year: 2023,
      type: "Conference Paper",
      citations: 73,
      impact: "Q2",
      doi: "10.1007/s11128-023-4567-8",
      abstract: `We present a quantum-enhanced machine learning approach for financial risk assessment that demonstrates significant improvements in prediction accuracy and computational efficiency compared to classical methods. The approach is validated using real-world financial datasets from major banks.`,
      keywords: ["Quantum Computing", "Machine Learning", "Financial Risk", "Portfolio Optimization"],
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Explainable AI for Autonomous Vehicle Decision Making",
      authors: ["Dr. Vikram Singh", "Ms. Kavya Reddy", "Dr. James Wilson"],
      journal: "IEEE Transactions on Intelligent Transportation Systems",
      year: 2023,
      type: "Journal Article",
      citations: 94,
      impact: "Q1",
      doi: "10.1109/TITS.2023.9876543",
      abstract: `This paper introduces an explainable AI framework for autonomous vehicle decision-making that provides real-time interpretability of driving decisions. The system combines deep reinforcement learning with attention mechanisms to generate human-understandable explanations.`,
      keywords: ["Explainable AI", "Autonomous Vehicles", "Deep Reinforcement Learning", "Attention Mechanisms"],
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Multi-Modal Sentiment Analysis for Social Media Monitoring",
      authors: ["Ms. Anita Patel", "Dr. Suresh Nair", "Dr. Lisa Anderson"],
      journal: "Information Processing & Management",
      year: 2023,
      type: "Research Article",
      citations: 112,
      impact: "Q1",
      doi: "10.1016/j.ipm.2023.103456",
      abstract: `We propose a multi-modal sentiment analysis framework that combines text, image, and video data from social media platforms. The approach achieves state-of-the-art performance on benchmark datasets and provides insights into public opinion dynamics during major events.`,
      keywords: ["Sentiment Analysis", "Multi-Modal", "Social Media", "Natural Language Processing", "Computer Vision"],
      downloadUrl: "#"
    }
  ];

  const yearOptions = [
    { value: '', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' }
  ];

  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'Journal Article', label: 'Journal Article' },
    { value: 'Conference Paper', label: 'Conference Paper' },
    { value: 'Research Article', label: 'Research Article' },
    { value: 'Survey Paper', label: 'Survey Paper' }
  ];

  const filteredPublications = publications?.filter(pub => {
    const matchesSearch = pub?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         pub?.authors?.some(author => author?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    const matchesYear = !selectedYear || pub?.year?.toString() === selectedYear;
    const matchesType = !selectedType || pub?.type === selectedType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Q1': return 'bg-green-100 text-green-800';
      case 'Q2': return 'bg-blue-100 text-blue-800';
      case 'Q3': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            Publications <span className="text-primary">Database</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of research publications, papers, and scholarly contributions
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl royal-shadow p-6 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <Input
              type="search"
              placeholder="Search publications, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="md:col-span-1"
            />
            <Select
              placeholder="Select Year"
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
            />
            <Select
              placeholder="Select Type"
              options={typeOptions}
              value={selectedType}
              onChange={setSelectedType}
            />
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Showing {filteredPublications?.length} of {publications?.length} publications
            </span>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <Icon name="Download" size={16} />
                <span className="text-sm">Export Results</span>
              </button>
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <Icon name="Filter" size={16} />
                <span className="text-sm">Advanced Filters</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications?.map((publication, index) => (
            <motion.div
              key={publication?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {publication?.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">
                        {publication?.authors?.join(', ')}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm font-medium text-primary">{publication?.journal}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{publication?.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(publication?.impact)}`}>
                        {publication?.impact} Journal
                      </span>
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {publication?.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="Quote" size={14} />
                        <span>{publication?.citations} citations</span>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {publication?.abstract}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {publication?.keywords?.map((keyword, keyIndex) => (
                    <span
                      key={keyIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    DOI: <span className="font-mono">{publication?.doi}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                      <Icon name="Download" size={16} />
                      <span>Download PDF</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-sm">
                      <Icon name="ExternalLink" size={16} />
                      <span>View Online</span>
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Share2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPublications?.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No publications found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPublications?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Load More Publications
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PublicationsDatabase;