import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const companies = [
    { value: '', label: 'All Companies' },
    { value: 'google', label: 'Google' },
    { value: 'microsoft', label: 'Microsoft' },
    { value: 'amazon', label: 'Amazon' },
    { value: 'meta', label: 'Meta' },
    { value: 'apple', label: 'Apple' },
    { value: 'netflix', label: 'Netflix' },
    { value: 'uber', label: 'Uber' },
    { value: 'startup', label: 'Startup/Own Company' }
  ];

  const locations = [
    { value: '', label: 'All Locations' },
    { value: 'bangalore', label: 'Bangalore, India' },
    { value: 'hyderabad', label: 'Hyderabad, India' },
    { value: 'mumbai', label: 'Mumbai, India' },
    { value: 'delhi', label: 'Delhi, India' },
    { value: 'seattle', label: 'Seattle, USA' },
    { value: 'san-francisco', label: 'San Francisco, USA' },
    { value: 'london', label: 'London, UK' },
    { value: 'singapore', label: 'Singapore' }
  ];

  const graduationYears = [
    { value: '', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' }
  ];

  const alumniData = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior ML Engineer",
      company: "Google",
      location: "Seattle, USA",
      graduationYear: "2019",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      specialization: ["Machine Learning", "Computer Vision", "Deep Learning"],
      experience: "5 years",
      openToMentor: true,
      openToHire: false,
      linkedinUrl: "https://linkedin.com/in/priyasharma",
      bio: "Passionate ML engineer working on large-scale recommendation systems at Google. Love mentoring students and contributing to open source projects.",
      achievements: ["Led ML team of 8 engineers", "Published 5 research papers", "Speaker at ML conferences"],
      skills: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "GCP"]
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "AI Research Scientist",
      company: "Microsoft Research",
      location: "Hyderabad, India",
      graduationYear: "2020",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialization: ["Natural Language Processing", "Research", "AI Ethics"],
      experience: "4 years",
      openToMentor: true,
      openToHire: true,
      linkedinUrl: "https://linkedin.com/in/arjunpatel",
      bio: "AI researcher focused on developing ethical and responsible AI systems. Currently working on multilingual NLP models at Microsoft Research.",
      achievements: ["15+ publications in top venues", "Best Paper Award at ACL", "Reviewer for major conferences"],
      skills: ["Python", "PyTorch", "Transformers", "BERT", "Research"]
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "Founder & CEO",
      company: "TechVision AI",
      location: "Bangalore, India",
      graduationYear: "2018",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialization: ["Entrepreneurship", "Computer Vision", "Product Management"],
      experience: "6 years",
      openToMentor: true,
      openToHire: true,
      linkedinUrl: "https://linkedin.com/in/snehareddy",
      bio: "Serial entrepreneur building AI-first products. Founded TechVision AI which serves 200+ enterprise clients globally.",
      achievements: ["$50M company valuation", "Forbes 30 Under 30", "Raised $25M in funding"],
      skills: ["Leadership", "Product Strategy", "Computer Vision", "Business Development", "Fundraising"]
    },
    {
      id: 4,
      name: "Rahul Krishnan",
      role: "Principal Data Scientist",
      company: "Amazon",
      location: "Seattle, USA",
      graduationYear: "2017",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialization: ["Data Science", "MLOps", "Recommendation Systems"],
      experience: "7 years",
      openToMentor: true,
      openToHire: false,
      linkedinUrl: "https://linkedin.com/in/rahulkrishnan",
      bio: "Leading data science initiatives at Amazon, focusing on personalization and recommendation systems that serve millions of customers daily.",
      achievements: ["Led team of 15 data scientists", "Filed 12 patents", "Improved recommendation CTR by 25%"],
      skills: ["Python", "Scala", "Spark", "AWS", "MLOps", "A/B Testing"]
    },
    {
      id: 5,
      name: "Ananya Gupta",
      role: "AI Research Director",
      company: "OpenAI",
      location: "San Francisco, USA",
      graduationYear: "2018",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      specialization: ["Large Language Models", "Research Leadership", "AI Safety"],
      experience: "6 years",
      openToMentor: true,
      openToHire: false,
      linkedinUrl: "https://linkedin.com/in/ananyagupta",
      bio: "Leading cutting-edge research in large language models and AI safety at OpenAI. Passionate about responsible AI development.",
      achievements: ["Co-authored GPT-4 paper", "MIT TR Innovator Under 35", "Keynote at 15+ conferences"],
      skills: ["Research", "Large Language Models", "AI Safety", "Team Leadership", "Publications"]
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Senior Software Engineer",
      company: "Meta",
      location: "London, UK",
      graduationYear: "2021",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialization: ["Computer Vision", "AR/VR", "Mobile Development"],
      experience: "3 years",
      openToMentor: true,
      openToHire: false,
      linkedinUrl: "https://linkedin.com/in/vikramsingh",
      bio: "Working on next-generation AR/VR experiences at Meta. Focused on computer vision algorithms for real-time applications.",
      achievements: ["Shipped 3 major AR features", "Patent in AR technology", "Mentored 10+ interns"],
      skills: ["C++", "Python", "OpenCV", "AR/VR", "Mobile Development", "Computer Vision"]
    },
    {
      id: 7,
      name: "Kavya Nair",
      role: "Data Scientist",
      company: "Netflix",
      location: "Mumbai, India",
      graduationYear: "2022",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialization: ["Recommendation Systems", "Data Analytics", "A/B Testing"],
      experience: "2 years",
      openToMentor: true,
      openToHire: false,
      linkedinUrl: "https://linkedin.com/in/kavyanair",
      bio: "Building personalization algorithms at Netflix to enhance user experience. Passionate about using data to drive product decisions.",
      achievements: ["Improved recommendation accuracy by 15%", "Led 5 A/B tests", "Netflix Hackathon winner"],
      skills: ["Python", "SQL", "Spark", "Machine Learning", "Statistics", "A/B Testing"]
    },
    {
      id: 8,
      name: "Suresh Patel",
      role: "ML Engineer",
      company: "Uber",
      location: "Bangalore, India",
      graduationYear: "2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialization: ["Real-time ML", "Distributed Systems", "Optimization"],
      experience: "1 year",
      openToMentor: false,
      openToHire: false,
      linkedinUrl: "https://linkedin.com/in/sureshpatel",
      bio: "Working on real-time ML systems for Uber\'s marketplace optimization. Interested in scalable ML infrastructure and optimization algorithms.",
      achievements: ["Reduced prediction latency by 40%", "Contributed to open source ML tools", "Uber Rising Star Award"],
      skills: ["Python", "Go", "Kafka", "Redis", "Machine Learning", "Distributed Systems"]
    }
  ];

  const filteredAlumni = alumniData?.filter(alumni => {
    const matchesSearch = alumni?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         alumni?.role?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         alumni?.company?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
    const matchesCompany = !selectedCompany || 
                          (selectedCompany === 'startup' && alumni?.company?.includes('AI')) ||
                          alumni?.company?.toLowerCase()?.includes(selectedCompany);
    
    const matchesLocation = !selectedLocation || 
                           alumni?.location?.toLowerCase()?.includes(selectedLocation?.replace('-', ' '));
    
    const matchesYear = !selectedYear || alumni?.graduationYear === selectedYear;

    return matchesSearch && matchesCompany && matchesLocation && matchesYear;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCompany('');
    setSelectedLocation('');
    setSelectedYear('');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Users" size={20} className="text-primary" />
            <span className="text-primary font-medium">Alumni Directory</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect with <span className="text-gradient-gold">Fellow Alumni</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and connect with AIML graduates working across the globe. Build your professional network and explore collaboration opportunities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 shadow-royal mb-8">
          <div className="grid lg:grid-cols-5 gap-4 mb-4">
            <div className="lg:col-span-2">
              <Input
                type="search"
                placeholder="Search by name, role, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full"
              />
            </div>
            <Select
              options={companies}
              value={selectedCompany}
              onChange={setSelectedCompany}
              placeholder="Company"
            />
            <Select
              options={locations}
              value={selectedLocation}
              onChange={setSelectedLocation}
              placeholder="Location"
            />
            <Select
              options={graduationYears}
              value={selectedYear}
              onChange={setSelectedYear}
              placeholder="Graduation Year"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredAlumni?.length} alumni found
              </span>
              {(searchTerm || selectedCompany || selectedLocation || selectedYear) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  iconName="X"
                  iconPosition="left"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon name="Grid3X3" size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon name="List" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Alumni Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni?.map((alumni) => (
              <div key={alumni?.id} className="bg-white rounded-xl p-6 shadow-royal card-hover">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src={alumni?.image}
                      alt={alumni?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 flex space-x-1">
                      {alumni?.openToMentor && (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center" title="Open to Mentor">
                          <Icon name="UserCheck" size={12} className="text-white" />
                        </div>
                      )}
                      {alumni?.openToHire && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center" title="Open to Hire">
                          <Icon name="Briefcase" size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 truncate">{alumni?.name}</h3>
                    <p className="text-primary font-medium text-sm truncate">{alumni?.role}</p>
                    <p className="text-gray-600 text-sm truncate">{alumni?.company}</p>
                    <p className="text-gray-500 text-xs">{alumni?.location} • Class of {alumni?.graduationYear}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{alumni?.bio}</p>

                {/* Specializations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {alumni?.specialization?.slice(0, 3)?.map((spec, index) => (
                      <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                    {alumni?.specialization?.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{alumni?.specialization?.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Connect
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAlumni?.map((alumni) => (
              <div key={alumni?.id} className="bg-white rounded-xl p-6 shadow-royal">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={alumni?.image}
                      alt={alumni?.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 flex space-x-1">
                      {alumni?.openToMentor && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center" title="Open to Mentor">
                          <Icon name="UserCheck" size={14} className="text-white" />
                        </div>
                      )}
                      {alumni?.openToHire && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center" title="Open to Hire">
                          <Icon name="Briefcase" size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{alumni?.name}</h3>
                        <p className="text-primary font-medium">{alumni?.role}</p>
                        <p className="text-gray-600">{alumni?.company} • {alumni?.location}</p>
                        <p className="text-sm text-gray-500">Class of {alumni?.graduationYear} • {alumni?.experience} experience</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                          iconName="MessageCircle"
                          iconPosition="left"
                        >
                          Connect
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="ExternalLink"
                        >
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{alumni?.bio}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                        <div className="flex flex-wrap gap-2">
                          {alumni?.specialization?.map((spec, index) => (
                            <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {alumni?.skills?.slice(0, 5)?.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                          {alumni?.skills?.length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              +{alumni?.skills?.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredAlumni?.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Users" size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Alumni Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters.</p>
            <Button
              variant="outline"
              onClick={clearFilters}
              iconName="RefreshCw"
              iconPosition="left"
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join the Alumni Directory</h3>
            <p className="text-lg mb-6 opacity-90">
              Update your profile and connect with fellow AIML graduates. Share your journey and help others in their career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="UserPlus"
                iconPosition="left"
              >
                Update Profile
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Users"
                iconPosition="left"
              >
                Join Alumni Network
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniDirectory;