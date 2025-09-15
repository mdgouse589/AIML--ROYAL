import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MentorshipProgram = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const programStats = [
    { label: "Active Mentors", value: "150+", icon: "UserCheck" },
    { label: "Students Mentored", value: "500+", icon: "Users" },
    { label: "Success Rate", value: "92%", icon: "TrendingUp" },
    { label: "Average Duration", value: "6 months", icon: "Clock" }
  ];

  const mentorshipAreas = [
    {
      id: 1,
      title: "Career Guidance",
      description: "Navigate career transitions, interview preparation, and professional development",
      icon: "Briefcase",
      mentors: 45,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "Technical Skills",
      description: "Deep dive into AI/ML technologies, coding practices, and system design",
      icon: "Code",
      mentors: 38,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "Research & Academia",
      description: "Research methodology, publication strategies, and academic career paths",
      icon: "BookOpen",
      mentors: 25,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      title: "Entrepreneurship",
      description: "Startup journey, business development, and funding strategies",
      icon: "Rocket",
      mentors: 22,
      color: "bg-orange-100 text-orange-800"
    },
    {
      id: 5,
      title: "Leadership",
      description: "Team management, strategic thinking, and executive presence",
      icon: "Crown",
      mentors: 20,
      color: "bg-red-100 text-red-800"
    }
  ];

  const featuredMentors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior ML Engineer",
      company: "Google",
      experience: "8 years",
      specialization: ["Career Growth", "Technical Skills", "Interview Prep"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      mentees: 12,
      rating: 4.9,
      bio: "Passionate about helping students transition from academia to industry. Specializes in ML engineering best practices and career advancement strategies.",
      achievements: ["Led 5+ ML projects at scale", "Mentor of the Year 2023", "Published 10+ research papers"]
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "AI Research Scientist",
      company: "Microsoft Research",
      experience: "6 years",
      specialization: ["Research", "Academia", "Publications"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      mentees: 8,
      rating: 4.8,
      bio: "Dedicated researcher helping students navigate the path from coursework to cutting-edge research. Expert in computer vision and NLP.",
      achievements: ["15+ top-tier publications", "Best Paper Award at NeurIPS", "PhD from Stanford"]
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "Founder & CEO",
      company: "TechVision AI",
      experience: "5 years",
      specialization: ["Entrepreneurship", "Leadership", "Business Strategy"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      mentees: 15,
      rating: 4.9,
      bio: "Serial entrepreneur passionate about building AI-first companies. Helps students understand the startup ecosystem and develop entrepreneurial mindset.",
      achievements: ["$50M company valuation", "Forbes 30 Under 30", "2 successful exits"]
    }
  ];

  const successStories = [
    {
      id: 1,
      mentee: "Rahul Kumar",
      mentor: "Priya Sharma",
      outcome: "Landed ML Engineer role at Amazon",
      duration: "4 months",
      story: "Through regular 1:1 sessions and mock interviews, Priya helped me transition from a software developer to an ML engineer. Her guidance on system design and ML best practices was invaluable.",
      beforeRole: "Software Developer",
      afterRole: "ML Engineer, Amazon",
      salaryIncrease: "60%"
    },
    {
      id: 2,
      mentee: "Ananya Singh",
      mentor: "Arjun Patel",
      outcome: "Accepted to PhD program at MIT",
      duration: "8 months",
      story: "Arjun's mentorship was crucial in helping me identify my research interests and prepare a strong PhD application. His insights into the research process and academic career paths were incredibly helpful.",
      beforeRole: "Final Year Student",
      afterRole: "PhD Candidate, MIT",
      salaryIncrease: "N/A"
    },
    {
      id: 3,
      mentee: "Vikram Joshi",
      mentor: "Sneha Reddy",
      outcome: "Founded AI startup with $2M seed funding",
      duration: "6 months",
      story: "Sneha\'s entrepreneurial experience and network were instrumental in helping me validate my startup idea and connect with the right investors. Her practical advice on building a team and product was game-changing.",
      beforeRole: "Product Manager",
      afterRole: "Founder & CEO",
      salaryIncrease: "Equity-based"
    }
  ];

  const programProcess = [
    {
      step: 1,
      title: "Application",
      description: "Submit your mentorship application with goals and preferences",
      icon: "FileText",
      duration: "5 minutes"
    },
    {
      step: 2,
      title: "Matching",
      description: "Our algorithm matches you with the most suitable mentor",
      icon: "Users",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Introduction",
      description: "Initial meeting to set expectations and create a roadmap",
      icon: "Handshake",
      duration: "1 hour"
    },
    {
      step: 4,
      title: "Regular Sessions",
      description: "Bi-weekly 1:1 sessions with your mentor for 6 months",
      icon: "Calendar",
      duration: "6 months"
    },
    {
      step: 5,
      title: "Progress Review",
      description: "Monthly progress reviews and goal adjustments",
      icon: "BarChart3",
      duration: "Ongoing"
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Program Overview', icon: 'Info' },
    { id: 'mentors', name: 'Featured Mentors', icon: 'UserCheck' },
    { id: 'success', name: 'Success Stories', icon: 'Trophy' },
    { id: 'process', name: 'How It Works', icon: 'GitBranch' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="UserCheck" size={20} className="text-primary" />
            <span className="text-primary font-medium">Mentorship Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from the <span className="text-gradient-gold">Best in Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with successful AIML alumni for personalized career guidance, technical mentorship, and professional development.
          </p>
        </div>

        {/* Program Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {programStats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-royal">
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
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl p-8 shadow-royal">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Mentorship Areas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentorshipAreas?.map((area) => (
                  <div key={area?.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-royal transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={area?.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{area?.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${area?.color}`}>
                          {area?.mentors} Mentors
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{area?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Mentors</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredMentors?.map((mentor) => (
                  <div key={mentor?.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-royal transition-all duration-300">
                    <div className="text-center mb-6">
                      <Image
                        src={mentor?.image}
                        alt={mentor?.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      />
                      <h4 className="font-bold text-gray-900 text-lg">{mentor?.name}</h4>
                      <p className="text-primary font-medium">{mentor?.role}</p>
                      <p className="text-gray-600 text-sm">{mentor?.company}</p>
                      <div className="flex items-center justify-center space-x-4 mt-3 text-sm text-gray-500">
                        <span>{mentor?.experience} experience</span>
                        <span>•</span>
                        <span>{mentor?.mentees} mentees</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Icon name="Star" size={14} className="text-yellow-400 mr-1" />
                          <span>{mentor?.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Specializations</h5>
                      <div className="flex flex-wrap gap-2">
                        {mentor?.specialization?.map((spec, index) => (
                          <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{mentor?.bio}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements</h5>
                      <ul className="space-y-1">
                        {mentor?.achievements?.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <Icon name="CheckCircle" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button
                      variant="default"
                      fullWidth
                      className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Request Mentorship
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'success' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Success Stories</h3>
              <div className="space-y-8">
                {successStories?.map((story) => (
                  <div key={story?.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">
                              {story?.mentee?.split(' ')?.map(n => n?.[0])?.join('')}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{story?.mentee}</h4>
                            <p className="text-sm text-gray-600">Mentored by {story?.mentor}</p>
                            <p className="text-xs text-gray-500">{story?.duration} mentorship</p>
                          </div>
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                          "{story?.story}"
                        </blockquote>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Career Transition</h5>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="ArrowRight" size={14} className="text-gray-400" />
                              <span className="text-sm text-gray-600">From: {story?.beforeRole}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="Target" size={14} className="text-primary" />
                              <span className="text-sm font-medium text-gray-900">To: {story?.afterRole}</span>
                            </div>
                            {story?.salaryIncrease !== 'N/A' && story?.salaryIncrease !== 'Equity-based' && (
                              <div className="flex items-center space-x-2">
                                <Icon name="TrendingUp" size={14} className="text-green-600" />
                                <span className="text-sm text-green-600 font-medium">+{story?.salaryIncrease} salary increase</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <Icon name="CheckCircle" size={14} />
                            <span>{story?.outcome}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">How the Program Works</h3>
              <div className="space-y-8">
                {programProcess?.map((step, index) => (
                  <div key={step?.step} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {step?.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{step?.title}</h4>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                          {step?.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{step?.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon name={step?.icon} size={20} className="text-gray-600" />
                      </div>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Mentorship Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our mentorship program and accelerate your career with guidance from industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="UserPlus"
                iconPosition="left"
              >
                Apply as Mentee
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Heart"
                iconPosition="left"
              >
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipProgram;