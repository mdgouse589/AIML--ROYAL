import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import ProjectCoordinatorProfile from './components/ProjectCoordinatorProfile';
import ProjectGallery from './components/ProjectGallery';
import AchievementTimeline from './components/AchievementTimeline';
import PlacementStatistics from './components/PlacementStatistics';
import AlumniSuccessStories from './components/AlumniSuccessStories';
import StudentTestimonials from './components/StudentTestimonials';
import StudentActivities from './components/StudentActivities';

const StudentSuccessGallery = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: 'Overview', icon: 'Home' },
    { id: 'coordinator', name: 'Project Coordinator', icon: 'User' },
    { id: 'projects', name: 'Student Projects', icon: 'Code' },
    { id: 'achievements', name: 'Achievement Timeline', icon: 'Trophy' },
    { id: 'placements', name: 'Placement Statistics', icon: 'TrendingUp' },
    { id: 'alumni', name: 'Alumni Success', icon: 'Users' },
    { id: 'testimonials', name: 'Student Testimonials', icon: 'MessageSquare' },
    { id: 'activities', name: 'Student Activities', icon: 'Activity' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'coordinator':
        return <ProjectCoordinatorProfile />;
      case 'projects':
        return <ProjectGallery />;
      case 'achievements':
        return <AchievementTimeline />;
      case 'placements':
        return <PlacementStatistics />;
      case 'alumni':
        return <AlumniSuccessStories />;
      case 'testimonials':
        return <StudentTestimonials />;
      case 'activities':
        return <StudentActivities />;
      default:
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="royal-gradient p-12 text-center text-white">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                    Student Success Gallery
                  </h1>
                  <p className="text-xl md:text-2xl text-accent mb-8">
                    Celebrating Excellence, Innovation & Achievement
                  </p>
                  <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                    Discover the remarkable journey of our students through cutting-edge projects, 
                    industry placements, research publications, and entrepreneurial ventures that 
                    define the future of AI and Machine Learning.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="gold-gradient text-primary hover:scale-105 transition-transform"
                      onClick={() => setActiveSection('projects')}
                    >
                      <Icon name="Eye" size={20} className="mr-2" />
                      Explore Projects
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-primary"
                      onClick={() => setActiveSection('placements')}
                    >
                      <Icon name="TrendingUp" size={20} className="mr-2" />
                      View Placements
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl royal-shadow p-6 text-center hover:royal-shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code" size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Student Projects</div>
              </div>

              <div className="bg-white rounded-xl royal-shadow p-6 text-center hover:royal-shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>

              <div className="bg-white rounded-xl royal-shadow p-6 text-center hover:royal-shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">₹45L</div>
                <div className="text-sm text-muted-foreground">Highest Package</div>
              </div>

              <div className="bg-white rounded-xl royal-shadow p-6 text-center hover:royal-shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-green-500" />
                </div>
                <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Alumni Network</div>
              </div>
            </div>
            {/* Section Navigation Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections?.slice(1)?.map((section) => (
                <div
                  key={section?.id}
                  className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 p-6 cursor-pointer group"
                  onClick={() => setActiveSection(section?.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon name={section?.icon} size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section?.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {section?.id === 'coordinator' && "Meet our dedicated project coordinator who guides students through their academic and professional journey."}
                    {section?.id === 'projects' && "Explore innovative student projects spanning AI applications, ML models, and industry collaborations."}
                    {section?.id === 'achievements' && "Discover our students' remarkable achievements in competitions, research, and industry recognition."}
                    {section?.id === 'placements' && "Comprehensive placement statistics showcasing career outcomes and industry partnerships."}
                    {section?.id === 'alumni' && "Success stories of our graduates making impact in leading tech companies and startups worldwide."}
                    {section?.id === 'testimonials' && "Hear directly from our students about their transformative academic experience."}
                    {section?.id === 'activities' && "Vibrant student community with technical clubs, societies, and leadership opportunities."}
                  </p>
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <Icon name="ArrowRight" size={14} className="mr-2" />
                    Explore
                  </Button>
                </div>
              ))}
            </div>
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white text-center">
              <Icon name="Rocket" size={48} className="mx-auto mb-4 text-accent" />
              <h2 className="text-2xl font-playfair font-bold mb-4">
                Ready to Join Our Success Story?
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Become part of our thriving AIML community and embark on a journey of innovation, 
                learning, and career excellence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gold-gradient text-primary">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Contact Coordinator
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Student Success Gallery - Achievement Showcase | AIML Royal</title>
        <meta name="description" content="Celebrate student excellence through innovative projects, industry placements, research achievements, and alumni success stories at GM University's AIML Department." />
        <meta name="keywords" content="student success, AIML projects, placement statistics, alumni stories, student achievements, GM University" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="container mx-auto px-6 py-8">
            {/* Section Navigation */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {sections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => setActiveSection(section?.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === section?.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary royal-shadow'
                    }`}
                  >
                    <Icon name={section?.icon} size={16} />
                    {section?.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="max-w-7xl mx-auto">
              {renderSection()}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 royal-gradient rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold text-xl font-playfair">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">AIML Royal</h3>
                <p className="text-xs text-accent">Academic Excellence</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Empowering the next generation of AI/ML professionals through excellence in education and innovation.
            </p>
            <p className="text-sm text-white/60">
              © {new Date()?.getFullYear()} GM University - AIML Department. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StudentSuccessGallery;