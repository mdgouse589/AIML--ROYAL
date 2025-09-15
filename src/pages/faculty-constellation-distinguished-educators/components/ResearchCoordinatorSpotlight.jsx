import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchCoordinatorSpotlight = () => {
  const coordinator = {
    name: "Dr. Priya Sharma",
    designation: "Research Coordinator & Professor",
    qualification: "Ph.D. in Machine Learning, IIT Delhi",
    image: "https://images.unsplash.com/photo-1494790108755-2616c96d5e2c?w=400&h=400&fit=crop&crop=face",
    experience: "15",
    publications: "85",
    hIndex: "28",
    email: "priya.sharma@gmuniversity.edu.in",
    phone: "+91 98765 43210",
    office: "Room 301, AIML Block",
    officeHours: "Mon-Fri 2:00-4:00 PM",
    researchAreas: ["Machine Learning", "Deep Learning", "Computer Vision", "AI Ethics"],
    currentProjects: [
      {
        title: "Explainable AI for Healthcare Diagnostics",
        funding: "₹25 Lakhs",
        duration: "2023-2025",
        collaborators: "AIIMS Delhi, Microsoft Research"
      },
      {
        title: "Federated Learning for Privacy-Preserving ML",
        funding: "₹18 Lakhs",
        duration: "2024-2026",
        collaborators: "Google Research, IISc Bangalore"
      },
      {
        title: "AI-Driven Climate Change Prediction Models",
        funding: "₹30 Lakhs",
        duration: "2023-2026",
        collaborators: "ISRO, MIT Climate Portal"
      }
    ],
    achievements: [
      "Best Research Paper Award - ICML 2023",
      "Young Scientist Award - Indian Academy of Sciences",
      "Google Research Scholar Award 2022",
      "Featured in Top 40 Under 40 AI Researchers - Analytics India Magazine"
    ],
    collaborationOpportunities: [
      "Industry Partnership Programs",
      "Student Research Internships",
      "Joint Publication Opportunities",
      "Conference Collaboration",
      "Grant Application Support"
    ]
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl royal-shadow-lg p-8 mb-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full translate-y-24 -translate-x-24" />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-4">
            <Icon name="Star" size={16} className="mr-2 text-accent" />
            <span className="text-accent font-medium">Research Coordinator Spotlight</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-2">Leading Research Excellence</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Driving innovation and fostering collaborative research opportunities in AI/ML
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coordinator Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="relative inline-block mb-4">
                <Image
                  src={coordinator?.image}
                  alt={coordinator?.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-accent"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Award" size={16} className="text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-playfair font-bold mb-1">{coordinator?.name}</h3>
              <p className="text-accent font-medium mb-2">{coordinator?.designation}</p>
              <p className="text-white/80 text-sm mb-4">{coordinator?.qualification}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{coordinator?.experience}</div>
                  <div className="text-xs text-white/70">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{coordinator?.publications}</div>
                  <div className="text-xs text-white/70">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{coordinator?.hIndex}</div>
                  <div className="text-xs text-white/70">H-Index</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center">
                  <Icon name="Mail" size={14} className="mr-2 text-accent" />
                  <span className="text-white/90">{coordinator?.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon name="Phone" size={14} className="mr-2 text-accent" />
                  <span className="text-white/90">{coordinator?.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon name="MapPin" size={14} className="mr-2 text-accent" />
                  <span className="text-white/90">{coordinator?.office}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Icon name="Clock" size={14} className="mr-2 text-accent" />
                  <span className="text-white/90">{coordinator?.officeHours}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-4 border-accent text-accent hover:bg-accent hover:text-primary"
                iconName="Calendar"
                iconPosition="left"
                iconSize={14}
              >
                Schedule Meeting
              </Button>
            </div>
          </div>

          {/* Current Projects & Opportunities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Projects */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Beaker" size={20} className="mr-2 text-accent" />
                Current Research Projects
              </h4>
              <div className="space-y-4">
                {coordinator?.currentProjects?.map((project, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-semibold text-accent mb-2">{project?.title}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-white/80">
                      <div>
                        <Icon name="IndianRupee" size={14} className="inline mr-1" />
                        Funding: {project?.funding}
                      </div>
                      <div>
                        <Icon name="Calendar" size={14} className="inline mr-1" />
                        Duration: {project?.duration}
                      </div>
                      <div>
                        <Icon name="Users" size={14} className="inline mr-1" />
                        Collaborators: {project?.collaborators}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Trophy" size={20} className="mr-2 text-accent" />
                Recent Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {coordinator?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Award" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/90">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Handshake" size={20} className="mr-2 text-accent" />
                Collaboration Opportunities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {coordinator?.collaborationOpportunities?.map((opportunity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} className="text-accent" />
                    <span className="text-sm text-white/90">{opportunity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-primary"
                  iconName="MessageSquare"
                  iconPosition="left"
                  iconSize={14}
                >
                  Discuss Collaboration
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-primary"
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={14}
                >
                  View Research Proposals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCoordinatorSpotlight;