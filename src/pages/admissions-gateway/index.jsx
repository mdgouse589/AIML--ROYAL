import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import EligibilitySection from './components/EligibilitySection';
import ApplicationProcess from './components/ApplicationProcess';
import ProgramHighlights from './components/ProgramHighlights';
import FeeStructure from './components/FeeStructure';
import VirtualTour from './components/VirtualTour';
import ContactSection from './components/ContactSection';

const AdmissionsGateway = () => {
  return (
    <>
      <Helmet>
        <title>Admissions Gateway - AIML Branch | GM University</title>
        <meta name="description" content="Join India's premier AIML program at GM University. Explore admission requirements, fee structure, scholarships, and virtual campus tour. Apply now for 2025-26." />
        <meta name="keywords" content="AIML admissions, artificial intelligence course, machine learning program, engineering admission, GM University, Bangalore" />
        <meta property="og:title" content="Admissions Gateway - AIML Branch | GM University" />
        <meta property="og:description" content="Your gateway to AI & ML excellence. Join our prestigious AIML program with 100% placement assistance and cutting-edge curriculum." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/admissions-gateway" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <HeroSection />
          <EligibilitySection />
          <ApplicationProcess />
          <ProgramHighlights />
          <FeeStructure />
          <VirtualTour />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">AIML Branch</h3>
                <p className="text-gray-300 text-sm">
                  Shaping the future of technology through excellence in AI and Machine Learning education.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/student-projects-innovation" className="hover:text-secondary transition-colors">Student Projects</a></li>
                  <li><a href="/iqac-documentation" className="hover:text-secondary transition-colors">IQAC Docs</a></li>
                  <li><a href="/alumni-network" className="hover:text-secondary transition-colors">Alumni Network</a></li>
                  <li><a href="/contact-support" className="hover:text-secondary transition-colors">Contact Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Admissions</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Application Deadline: March 15, 2025</li>
                  <li>Entrance Test: April 10, 2025</li>
                  <li>Classes Start: July 1, 2025</li>
                  <li>Phone: +91 9876543210</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300 text-sm">
                © {new Date()?.getFullYear()} GM University - AIML Branch. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdmissionsGateway;