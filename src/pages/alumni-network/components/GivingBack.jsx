import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const GivingBack = () => {
  const [activeTab, setActiveTab] = useState('scholarships');

  const givingStats = [
    { label: "Total Contributions", value: "₹2.5 Cr", icon: "Heart" },
    { label: "Scholarships Funded", value: "150+", icon: "GraduationCap" },
    { label: "Guest Lectures", value: "200+", icon: "Presentation" },
    { label: "Infrastructure Projects", value: "8", icon: "Building" }
  ];

  const scholarshipPrograms = [
    {
      id: 1,
      name: "Excellence in AI/ML Scholarship",
      donor: "Priya Sharma (Class of 2019)",
      amount: "₹2,00,000",
      recipients: 15,
      criteria: "Academic excellence and innovative project work",
      description: "Supporting outstanding students who demonstrate exceptional potential in artificial intelligence and machine learning research.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      established: "2022",
      totalAwarded: "₹30,00,000"
    },
    {
      id: 2,
      name: "Women in Tech Leadership Fund",
      donor: "Sneha Reddy (Class of 2018)",
      amount: "₹1,50,000",
      recipients: 20,
      criteria: "Female students pursuing AI/ML with leadership potential",
      description: "Empowering women to become leaders in the technology industry through financial support and mentorship.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      established: "2021",
      totalAwarded: "₹45,00,000"
    },
    {
      id: 3,
      name: "Rural Innovation Scholarship",
      donor: "Arjun Patel (Class of 2020)",
      amount: "₹1,00,000",
      recipients: 25,
      criteria: "Students from rural backgrounds with innovative ideas",
      description: "Bridging the digital divide by supporting talented students from rural areas to pursue AI/ML education.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      established: "2023",
      totalAwarded: "₹25,00,000"
    }
  ];

  const guestLectures = [
    {
      id: 1,
      speaker: "Rahul Krishnan",
      company: "Amazon",
      topic: "Scaling ML Systems in Production",
      date: "2024-09-15",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Deep dive into the challenges and solutions for deploying machine learning models at scale in production environments.",
      feedback: 4.9,
      recording: true
    },
    {
      id: 2,
      speaker: "Ananya Gupta",
      company: "OpenAI",
      topic: "The Future of Large Language Models",
      date: "2024-08-22",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Exploring the latest developments in LLMs and their potential impact on various industries and applications.",
      feedback: 4.8,
      recording: true
    },
    {
      id: 3,
      speaker: "Vikram Singh",
      company: "NeuralTech Solutions",
      topic: "From Student to Entrepreneur",
      date: "2024-07-10",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Sharing the entrepreneurial journey from university projects to building a successful AI startup.",
      feedback: 4.7,
      recording: false
    }
  ];

  const infrastructureProjects = [
    {
      id: 1,
      name: "AI Research Lab Upgrade",
      donor: "Class of 2018 Batch",
      contribution: "₹50,00,000",
      status: "Completed",
      year: "2023",
      description: "State-of-the-art GPU cluster and research infrastructure for advanced AI/ML research projects.",
      impact: "Enabled 50+ research projects and 20+ publications",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Smart Classroom Initiative",
      donor: "Priya Sharma & Alumni Network",
      contribution: "₹25,00,000",
      status: "Completed",
      year: "2022",
      description: "Interactive smart boards, AR/VR equipment, and collaborative learning spaces for enhanced education.",
      impact: "Improved learning experience for 500+ students annually",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Innovation Incubation Center",
      donor: "Multiple Alumni Contributors",
      contribution: "₹75,00,000",
      status: "In Progress",
      year: "2024",
      description: "Dedicated space for student startups with mentorship programs and seed funding opportunities.",
      impact: "Expected to support 20+ student startups annually",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    }
  ];

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Career Mentorship Program",
      commitment: "2 hours/month",
      participants: 45,
      description: "Guide current students in career planning and industry preparation",
      skills: ["Career Guidance", "Industry Insights", "Interview Preparation"]
    },
    {
      id: 2,
      title: "Technical Workshop Instructor",
      commitment: "4 hours/quarter",
      participants: 28,
      description: "Conduct hands-on workshops on latest AI/ML technologies and tools",
      skills: ["Technical Expertise", "Teaching", "Workshop Design"]
    },
    {
      id: 3,
      title: "Industry Project Reviewer",
      commitment: "1 hour/week",
      participants: 35,
      description: "Review and provide feedback on student capstone and research projects",
      skills: ["Project Evaluation", "Technical Review", "Feedback"]
    },
    {
      id: 4,
      title: "Alumni Event Organizer",
      commitment: "5 hours/month",
      participants: 20,
      description: "Help organize networking events, reunions, and professional meetups",
      skills: ["Event Planning", "Community Building", "Networking"]
    }
  ];

  const tabs = [
    { id: 'scholarships', name: 'Scholarships', icon: 'GraduationCap' },
    { id: 'lectures', name: 'Guest Lectures', icon: 'Presentation' },
    { id: 'infrastructure', name: 'Infrastructure', icon: 'Building' },
    { id: 'volunteer', name: 'Volunteer', icon: 'Heart' }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Heart" size={20} className="text-primary" />
            <span className="text-primary font-medium">Giving Back</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alumni <span className="text-gradient-gold">Contributing to Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our alumni continue to support and nurture the next generation through scholarships, mentorship, and infrastructure development.
          </p>
        </div>

        {/* Giving Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {givingStats?.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat?.value}</div>
              <div className="text-gray-600">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-white shadow-royal'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-8">
          {activeTab === 'scholarships' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Scholarship Programs</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {scholarshipPrograms?.map((scholarship) => (
                  <div key={scholarship?.id} className="bg-white rounded-lg p-6 shadow-royal">
                    <div className="flex items-start space-x-4 mb-6">
                      <Image
                        src={scholarship?.image}
                        alt={scholarship?.donor}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{scholarship?.name}</h4>
                        <p className="text-primary font-medium text-sm mb-1">Donor: {scholarship?.donor}</p>
                        <p className="text-gray-600 text-sm">Established: {scholarship?.established}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-secondary">{scholarship?.amount}</div>
                        <div className="text-xs text-gray-500">per recipient</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{scholarship?.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-900">{scholarship?.recipients}</div>
                        <div className="text-sm text-gray-600">Recipients</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-900">{scholarship?.totalAwarded}</div>
                        <div className="text-sm text-gray-600">Total Awarded</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Selection Criteria</h5>
                      <p className="text-sm text-gray-600">{scholarship?.criteria}</p>
                    </div>
                    
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'lectures' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Guest Lectures</h3>
              <div className="space-y-6">
                {guestLectures?.map((lecture) => (
                  <div key={lecture?.id} className="bg-white rounded-lg p-6 shadow-royal">
                    <div className="flex items-start space-x-6">
                      <Image
                        src={lecture?.image}
                        alt={lecture?.speaker}
                        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">{lecture?.topic}</h4>
                            <p className="text-primary font-medium">{lecture?.speaker}</p>
                            <p className="text-gray-600 text-sm">{lecture?.company}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">{formatDate(lecture?.date)}</div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Icon name="Users" size={14} className="text-gray-400" />
                              <span className="text-sm text-gray-600">{lecture?.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{lecture?.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Icon name="Star" size={16} className="text-yellow-400" />
                              <span className="text-sm font-medium text-gray-900">{lecture?.feedback}</span>
                              <span className="text-sm text-gray-500">rating</span>
                            </div>
                            {lecture?.recording && (
                              <div className="flex items-center space-x-1">
                                <Icon name="Video" size={16} className="text-green-500" />
                                <span className="text-sm text-green-600">Recording Available</span>
                              </div>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="Play"
                            iconPosition="left"
                            disabled={!lecture?.recording}
                          >
                            {lecture?.recording ? 'Watch Recording' : 'No Recording'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'infrastructure' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Infrastructure Development Projects</h3>
              <div className="space-y-8">
                {infrastructureProjects?.map((project) => (
                  <div key={project?.id} className="bg-white rounded-lg overflow-hidden shadow-royal">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={project?.image}
                          alt={project?.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{project?.name}</h4>
                            <p className="text-primary font-medium mb-1">Donor: {project?.donor}</p>
                            <p className="text-gray-600 text-sm">Year: {project?.year}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-secondary">{project?.contribution}</div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project?.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' :'bg-orange-100 text-orange-800'
                            }`}>
                              {project?.status}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{project?.description}</p>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Icon name="Target" size={16} className="text-primary mr-2" />
                            Impact
                          </h5>
                          <p className="text-sm text-gray-700">{project?.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'volunteer' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Volunteer Opportunities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {volunteerOpportunities?.map((opportunity) => (
                  <div key={opportunity?.id} className="bg-white rounded-lg p-6 shadow-royal">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">{opportunity?.title}</h4>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {opportunity?.commitment}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{opportunity?.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Required Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {opportunity?.skills?.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Users" size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600">{opportunity?.participants} volunteers</span>
                      </div>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                        iconName="UserPlus"
                        iconPosition="left"
                      >
                        Join Program
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Give Back?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join fellow alumni in supporting the next generation of AI/ML leaders through various contribution opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Heart"
                iconPosition="left"
              >
                Start Contributing
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Users"
                iconPosition="left"
              >
                Volunteer Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GivingBack;