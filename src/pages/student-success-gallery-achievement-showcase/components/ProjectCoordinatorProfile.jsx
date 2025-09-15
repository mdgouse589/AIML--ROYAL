import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCoordinatorProfile = () => {
  const coordinatorData = {
    name: "Dr. Priya Sharma",
    designation: "Project Coordinator & Associate Professor",
    email: "priya.sharma@gmuniversity.edu.in",
    phone: "+91 98765 43210",
    office: "AIML Block, Room 204",
    image: "https://images.unsplash.com/photo-1494790108755-2616c9c8e8e2?w=400&h=400&fit=crop&crop=face",
    experience: "12+ Years",
    specialization: ["Machine Learning", "Computer Vision", "Deep Learning", "Project Management"],
    achievements: [
      "Guided 150+ successful student projects",
      "Industry collaboration with 25+ companies",
      "Published 45+ research papers",
      "Mentor for 8 patent applications"
    ],
    guidanceApproach: `I believe in nurturing innovation through hands-on learning and industry exposure. My approach focuses on bridging the gap between theoretical knowledge and practical implementation, ensuring students develop both technical expertise and professional skills.`,
    officeHours: "Monday - Friday: 10:00 AM - 4:00 PM",
    successStats: {
      projectsGuided: 150,
      industryPlacements: 89,
      researchPublications: 23,
      patentApplications: 8
    }
  };

  return (
    <div className="bg-white rounded-xl royal-shadow-lg overflow-hidden">
      <div className="royal-gradient p-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent">
              <Image
                src={coordinatorData?.image}
                alt={coordinatorData?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Award" size={20} className="text-primary" />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl font-playfair font-bold text-white mb-2">
              {coordinatorData?.name}
            </h2>
            <p className="text-accent text-lg mb-3">{coordinatorData?.designation}</p>
            <p className="text-white/90 text-sm mb-4 max-w-2xl">
              {coordinatorData?.guidanceApproach}
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {coordinatorData?.specialization?.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {coordinatorData?.successStats?.projectsGuided}+
            </div>
            <div className="text-sm text-muted-foreground">Projects Guided</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-secondary mb-1">
              {coordinatorData?.successStats?.industryPlacements}%
            </div>
            <div className="text-sm text-muted-foreground">Industry Placement</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">
              {coordinatorData?.successStats?.researchPublications}
            </div>
            <div className="text-sm text-muted-foreground">Publications</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {coordinatorData?.successStats?.patentApplications}
            </div>
            <div className="text-sm text-muted-foreground">Patent Apps</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="Trophy" size={20} className="text-accent" />
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {coordinatorData?.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="Contact" size={20} className="text-accent" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-muted-foreground">{coordinatorData?.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-muted-foreground">{coordinatorData?.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-muted-foreground">{coordinatorData?.office}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-muted-foreground">{coordinatorData?.officeHours}</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button size="sm" className="flex-1">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCoordinatorProfile;