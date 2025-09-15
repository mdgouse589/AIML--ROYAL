import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactCard from './components/ContactCard';
import CoordinatorCard from './components/CoordinatorCard';
import ContactForm from './components/ContactForm';
import CampusMap from './components/CampusMap';
import FAQSection from './components/FAQSection';
import LiveChatWidget from './components/LiveChatWidget';

const ContactSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for contact information
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "For general questions about our AIML programs and university information",
      icon: "Phone",
      contactInfo: [
        { icon: "Phone", value: "+91-80-2345-6789" },
        { icon: "Mail", value: "info@gmuniversity.edu.in" },
        { icon: "Clock", value: "Mon-Fri: 9:00 AM - 6:00 PM IST" }
      ],
      actionLabel: "Call Now",
      onAction: () => window.open('tel:+918023456789'),
      variant: "primary"
    },
    {
      title: "Emergency Support",
      description: "24/7 emergency contact for urgent matters and campus security",
      icon: "AlertTriangle",
      contactInfo: [
        { icon: "Phone", value: "+91-80-2345-6790" },
        { icon: "Mail", value: "emergency@gmuniversity.edu.in" },
        { icon: "Clock", value: "Available 24/7" }
      ],
      actionLabel: "Emergency Call",
      onAction: () => window.open('tel:+918023456790'),
      variant: "success"
    },
    {
      title: "WhatsApp Support",
      description: "Quick support via WhatsApp for instant responses and document sharing",
      icon: "MessageCircle",
      contactInfo: [
        { icon: "Phone", value: "+91-98765-43210" },
        { icon: "Clock", value: "Mon-Sat: 8:00 AM - 8:00 PM IST" },
        { icon: "Zap", value: "Instant responses" }
      ],
      actionLabel: "Chat on WhatsApp",
      onAction: () => window.open('https://wa.me/919876543210'),
      variant: "secondary"
    }
  ];

  const coordinators = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Admissions Coordinator",
      department: "Admissions",
      email: "priya.sharma@gmuniversity.edu.in",
      phone: "+91-80-2345-6791",
      whatsapp: "+91-98765-43211",
      officeHours: "Mon-Fri: 9:00 AM - 5:00 PM",
      office: "Admin Block, Room 201",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      description: "Handles all admission-related queries, application processes, and entrance exam information for AIML programs."
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      role: "Academic Coordinator",
      department: "Academics",
      email: "rajesh.kumar@gmuniversity.edu.in",
      phone: "+91-80-2345-6792",
      whatsapp: "+91-98765-43212",
      officeHours: "Mon-Fri: 10:00 AM - 4:00 PM",
      office: "AIML Block, Room 301",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      description: "Assists with curriculum queries, course selection, academic planning, and student academic performance matters."
    },
    {
      id: 3,
      name: "Ms. Anita Patel",
      role: "Placement Coordinator",
      department: "Placements",
      email: "anita.patel@gmuniversity.edu.in",
      phone: "+91-80-2345-6793",
      whatsapp: "+91-98765-43213",
      officeHours: "Mon-Fri: 9:30 AM - 5:30 PM",
      office: "Placement Cell, Room 101",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      description: "Manages placement activities, industry partnerships, internship programs, and career guidance for students."
    },
    {
      id: 4,
      name: "Dr. Suresh Reddy",
      role: "Student Affairs Coordinator",
      department: "Student Affairs",
      email: "suresh.reddy@gmuniversity.edu.in",
      phone: "+91-80-2345-6794",
      whatsapp: "+91-98765-43214",
      officeHours: "Mon-Sat: 9:00 AM - 6:00 PM",
      office: "Student Center, Room 205",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      description: "Handles student welfare, hostel matters, extracurricular activities, and general student support services."
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/school/gm-university-aiml",
      icon: "Linkedin",
      followers: "15.2K",
      color: "text-blue-600"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/gmuniversity_aiml",
      icon: "Twitter",
      followers: "8.5K",
      color: "text-blue-400"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/gmuniversity_aiml",
      icon: "Instagram",
      followers: "12.8K",
      color: "text-pink-600"
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/gmuniversity",
      icon: "Youtube",
      followers: "25.3K",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact & Support - GM University AIML Branch</title>
        <meta name="description" content="Get in touch with GM University AIML Branch. Find contact information, department coordinators, campus location, and support services." />
        <meta name="keywords" content="contact, support, GM University, AIML, coordinators, campus location, help" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="MessageCircle" size={20} className="text-secondary" />
              <span className="text-white font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-hero font-bold text-white mb-6">
              Contact & Support
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Connect with GM University's AIML Branch through multiple channels. Our dedicated support team and department coordinators are ready to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </section>
      {/* Quick Contact Methods */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods?.map((method, index) => (
              <ContactCard
                key={index}
                title={method?.title}
                description={method?.description}
                icon={method?.icon}
                contactInfo={method?.contactInfo}
                actionLabel={method?.actionLabel}
                onAction={method?.onAction}
                variant={method?.variant}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Department Coordinators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-primary font-medium">Department Coordinators</span>
            </div>
            <h2 className="text-section font-bold text-gray-900 mb-4">
              Get Direct Support from Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect directly with our specialized coordinators for personalized assistance with admissions, academics, placements, and student affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coordinators?.map((coordinator) => (
              <CoordinatorCard key={coordinator?.id} coordinator={coordinator} />
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form and Campus Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <CampusMap />
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>
      {/* Social Media & Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600">
              Follow us on social media for the latest updates and announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialLinks?.map((social, index) => (
              <a
                key={index}
                href={social?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-gray-200 card-hover shadow-royal text-center group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 mb-4`}>
                  <Icon name={social?.icon} size={24} className={social?.color} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{social?.platform}</h3>
                <p className="text-sm text-gray-600">{social?.followers} followers</p>
              </a>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-royal">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Additional Resources</h3>
              <p className="text-gray-600">Quick access to important documents and information</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-primary/30 transition-colors duration-200">
                <Icon name="Download" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Contact Directory</h4>
                <p className="text-sm text-gray-600 mb-3">Complete list of department contacts</p>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Download PDF
                </button>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-primary/30 transition-colors duration-200">
                <Icon name="Calendar" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                <p className="text-sm text-gray-600 mb-3">Faculty and staff availability schedule</p>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  View Schedule
                </button>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-primary/30 transition-colors duration-200">
                <Icon name="FileText" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Forms & Documents</h4>
                <p className="text-sm text-gray-600 mb-3">Application forms and important documents</p>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Access Forms
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+91-80-2345-6789</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@gmuniversity.edu.in</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Electronic City, Bangalore</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-emerald-400">Emergency: 24/7 Available</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Icon name={social?.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} GM University AIML Branch. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
};

export default ContactSupport;