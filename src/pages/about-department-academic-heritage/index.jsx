import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import HodMessageSection from './components/HodMessageSection';
import VisionMissionSection from './components/VisionMissionSection';
import DepartmentStatsSection from './components/DepartmentStatsSection';
import InfrastructureSection from './components/InfrastructureSection';
import PartnershipsSection from './components/PartnershipsSection';

const AboutDepartmentPage = () => {
  return (
    <>
      <Helmet>
        <title>About Department - Academic Heritage | AIML Royal - GM University</title>
        <meta 
          name="description" 
          content="Discover the legacy of excellence that defines our AIML department at GM University. Learn about our journey, vision, mission, world-class infrastructure, and global partnerships that make us a leader in AI/ML education." 
        />
        <meta name="keywords" content="AIML department, GM University, artificial intelligence, machine learning, academic heritage, HOD message, vision mission, infrastructure, partnerships" />
        <meta property="og:title" content="About Department - Academic Heritage | AIML Royal" />
        <meta property="og:description" content="Explore the rich heritage and cutting-edge facilities of GM University's AIML department - where tradition meets innovation in AI/ML education." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-department-academic-heritage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          <HodMessageSection />
          <VisionMissionSection />
          <DepartmentStatsSection />
          <InfrastructureSection />
          <PartnershipsSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 royal-gradient rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold text-xl font-playfair">AI</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl">AIML Royal</h3>
                    <p className="text-accent text-sm">Academic Excellence</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Shaping the future of artificial intelligence and machine learning through world-class education and research.
                </p>
              </div>
              
              <div>
                <h4 className="font-playfair font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/homepage-royal-academic-portal" className="text-white/80 hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/programs-courses-academic-excellence-hub" className="text-white/80 hover:text-accent transition-colors">Programs</a></li>
                  <li><a href="/faculty-constellation-distinguished-educators" className="text-white/80 hover:text-accent transition-colors">Faculty</a></li>
                  <li><a href="/research-innovation-center" className="text-white/80 hover:text-accent transition-colors">Research</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-playfair font-bold mb-4">Department</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-white/80">HOD: Dr. Rajesh Kumar Sharma</span></li>
                  <li><span className="text-white/80">Email: hod.aiml@gmuniversity.edu.in</span></li>
                  <li><span className="text-white/80">Phone: +91 98765 43210</span></li>
                  <li><span className="text-white/80">Office: Block A, 3rd Floor</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-playfair font-bold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <span className="text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <span className="text-xs">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <span className="text-xs">in</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} GM University - AIML Department. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutDepartmentPage;