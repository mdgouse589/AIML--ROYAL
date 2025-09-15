import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ResearchHero from './components/ResearchHero';
import ResearchCoordinator from './components/ResearchCoordinator';
import ResearchAreas from './components/ResearchAreas';
import PublicationsDatabase from './components/PublicationsDatabase';
import OngoingProjects from './components/OngoingProjects';
import InnovationLab from './components/InnovationLab';
import UpcomingEvents from './components/UpcomingEvents';

const ResearchInnovationCenter = () => {
  return (
    <>
      <Helmet>
        <title>Research & Innovation Center - AIML Royal | GM University</title>
        <meta name="description" content="Explore cutting-edge research in AI and Machine Learning at GM University's AIML Department. Discover our research areas, publications, ongoing projects, and innovation lab facilities." />
        <meta name="keywords" content="AI research, machine learning research, computer vision, NLP, quantum computing, ethical AI, research publications, innovation lab, GM University" />
        <meta property="og:title" content="Research & Innovation Center - AIML Royal" />
        <meta property="og:description" content="Leading research in artificial intelligence and machine learning with state-of-the-art facilities and groundbreaking projects." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/research-innovation-center" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ResearchHero />
          <ResearchCoordinator />
          <ResearchAreas />
          <PublicationsDatabase />
          <OngoingProjects />
          <InnovationLab />
          <UpcomingEvents />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-playfair font-bold mb-4">Research Center</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Advancing the frontiers of AI and ML through innovative research, 
                  collaborative partnerships, and cutting-edge facilities.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#publications" className="text-white/80 hover:text-accent transition-colors">Publications</a></li>
                  <li><a href="#projects" className="text-white/80 hover:text-accent transition-colors">Ongoing Projects</a></li>
                  <li><a href="#facilities" className="text-white/80 hover:text-accent transition-colors">Research Facilities</a></li>
                  <li><a href="#events" className="text-white/80 hover:text-accent transition-colors">Upcoming Events</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Research Areas</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-white/80">Machine Learning</span></li>
                  <li><span className="text-white/80">Computer Vision</span></li>
                  <li><span className="text-white/80">Natural Language Processing</span></li>
                  <li><span className="text-white/80">Ethical AI</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Research</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Dr. Priya Sharma</p>
                  <p>Research Coordinator</p>
                  <p>priya.sharma@gmuniversity.edu.in</p>
                  <p>+91 98765 43210</p>
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

export default ResearchInnovationCenter;