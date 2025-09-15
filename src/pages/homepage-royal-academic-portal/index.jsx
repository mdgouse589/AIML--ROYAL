import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import ExcellenceSection from './components/ExcellenceSection';
import FeaturedCarousel from './components/FeaturedCarousel';
import HodWelcomeSection from './components/HodWelcomeSection';
import QuickAccessSection from './components/QuickAccessSection';
import CoordinatorSpotlight from './components/CoordinatorSpotlight';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>AIML Royal - Premier AI & Machine Learning Department | GM University</title>
        <meta name="description" content="Welcome to AIML Royal - Where tradition meets innovation. Experience world-class AI/ML education with 96% placement rate, distinguished faculty, and cutting-edge research opportunities." />
        <meta name="keywords" content="AIML, Artificial Intelligence, Machine Learning, GM University, Computer Science, Technology Education, Research, Placements" />
        <meta property="og:title" content="AIML Royal - Premier AI & Machine Learning Department" />
        <meta property="og:description" content="Forging the future of AI/ML education with royal academic excellence and technological innovation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-royal-academic-portal" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          <ExcellenceSection />
          <FeaturedCarousel />
          <HodWelcomeSection />
          <QuickAccessSection />
          <CoordinatorSpotlight />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 royal-gradient rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold text-xl font-playfair">AI</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-white">AIML Royal</h3>
                    <p className="text-accent text-sm">Academic Excellence</p>
                  </div>
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Department of Artificial Intelligence and Machine Learning at GM University - 
                  Where tradition meets innovation in creating tomorrow's technology leaders.
                </p>
                <div className="text-white/60 text-sm">
                  <p>GM University Campus, Bangalore - 560001</p>
                  <p>Phone: +91 98765 43200 | Email: info.aiml@gmuniversity.edu.in</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/80">
                  <li><a href="/about-department-academic-heritage" className="hover:text-accent transition-colors">About Department</a></li>
                  <li><a href="/programs-courses-academic-excellence-hub" className="hover:text-accent transition-colors">Programs</a></li>
                  <li><a href="/faculty-constellation-distinguished-educators" className="hover:text-accent transition-colors">Faculty</a></li>
                  <li><a href="/research-innovation-center" className="hover:text-accent transition-colors">Research</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Student Services</h4>
                <ul className="space-y-2 text-white/80">
                  <li><a href="/admissions" className="hover:text-accent transition-colors">Admissions</a></li>
                  <li><a href="/student-success-gallery-achievement-showcase" className="hover:text-accent transition-colors">Student Success</a></li>
                  <li><a href="/resources" className="hover:text-accent transition-colors">Resources</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; {new Date()?.getFullYear()} AIML Royal, GM University. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;