import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CoordinatorSpotlight = () => {
  const [activeCoordinator, setActiveCoordinator] = useState(0);

  const coordinators = [
    {
      name: "Dr. Priya Menon",
      role: "Academic Coordinator",
      department: "Academic Affairs & Curriculum",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      experience: "12+ Years",
      specialization: "Curriculum Development, Academic Excellence",
      qualifications: "Ph.D. in Computer Science, M.Tech in AI",
      contact: {
        email: "academic.aiml@gmuniversity.edu.in",
        phone: "+91 98765 43211",
        office: "Block A, Room 205"
      },
      responsibilities: [
        "Academic curriculum planning and development",
        "Student academic performance monitoring",
        "Faculty coordination and support",
        "Academic policy implementation",
        "Student grievance resolution"
      ],
      achievements: [
        "Redesigned AIML curriculum for industry alignment",
        "Implemented outcome-based education framework",
        "Achieved 98% student satisfaction in academics",
        "Led accreditation process successfully"
      ],
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      icon: "GraduationCap",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Prof. Vikram Singh",
      role: "Placement Coordinator",
      department: "Career Services & Industry Relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      experience: "15+ Years",
      specialization: "Industry Relations, Career Development",
      qualifications: "M.Tech in CSE, MBA in HR",
      contact: {
        email: "placement.aiml@gmuniversity.edu.in",
        phone: "+91 98765 43212",
        office: "Block B, Room 101"
      },
      responsibilities: [
        "Industry partnership development",
        "Placement drive coordination",
        "Student career counseling",
        "Internship program management",
        "Alumni network engagement"
      ],
      achievements: [
        "Achieved 96% placement rate consistently",
        "Established partnerships with 85+ companies",
        "Organized 50+ industry interaction sessions",
        "Facilitated 500+ internship placements"
      ],
      availability: "Mon-Sat: 9:00 AM - 6:00 PM",
      icon: "Briefcase",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Dr. Meera Krishnan",
      role: "Research Coordinator",
      department: "Research & Development",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      experience: "14+ Years",
      specialization: "Research Management, Innovation",
      qualifications: "Ph.D. in AI, M.Tech in ML",
      contact: {
        email: "research.aiml@gmuniversity.edu.in",
        phone: "+91 98765 43213",
        office: "Research Block, Room 301"
      },
      responsibilities: [
        "Research project coordination",
        "Grant application support",
        "Publication guidance",
        "Industry collaboration facilitation",
        "Innovation ecosystem development"
      ],
      achievements: [
        "Secured ₹2.5 Cr in research funding",
        "Guided 150+ research publications",
        "Established 25+ industry collaborations",
        "Filed 15+ patent applications"
      ],
      availability: "Mon-Fri: 10:00 AM - 6:00 PM",
      icon: "Beaker",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Prof. Rajesh Sharma",
      role: "Project Coordinator",
      department: "Student Projects & Innovation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      experience: "11+ Years",
      specialization: "Project Management, Innovation",
      qualifications: "M.Tech in AI, PMP Certified",
      contact: {
        email: "projects.aiml@gmuniversity.edu.in",
        phone: "+91 98765 43214",
        office: "Innovation Lab, Room 201"
      },
      responsibilities: [
        "Student project guidance and mentoring",
        "Innovation lab management",
        "Competition participation coordination",
        "Industry project facilitation",
        "Startup incubation support"
      ],
      achievements: [
        "Mentored 500+ successful projects",
        "Led teams to 25+ competition wins",
        "Facilitated 10+ startup launches",
        "Established innovation ecosystem"
      ],
      availability: "Mon-Fri: 9:30 AM - 5:30 PM",
      icon: "Code",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Coordinator Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated coordinators who ensure seamless academic operations and student success across all departments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Coordinator Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-8">
              {coordinators?.map((coordinator, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCoordinator(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeCoordinator === index
                      ? 'bg-primary text-white royal-shadow-lg'
                      : 'bg-white hover:bg-muted text-foreground royal-shadow'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeCoordinator === index 
                        ? 'bg-white/20' :'bg-primary'
                    }`}>
                      <Icon 
                        name={coordinator?.icon} 
                        size={20} 
                        className={activeCoordinator === index ? 'text-white' : 'text-accent'} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{coordinator?.name}</div>
                      <div className={`text-sm truncate ${
                        activeCoordinator === index ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        {coordinator?.role}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Coordinator Details */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCoordinator}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl royal-shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${coordinators?.[activeCoordinator]?.color} p-8 text-white`}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden royal-shadow-lg">
                      <Image
                        src={coordinators?.[activeCoordinator]?.image}
                        alt={coordinators?.[activeCoordinator]?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon name={coordinators?.[activeCoordinator]?.icon} size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      {coordinators?.[activeCoordinator]?.name}
                    </h3>
                    <p className="text-white/90 font-semibold mb-1">
                      {coordinators?.[activeCoordinator]?.role}
                    </p>
                    <p className="text-white/80 text-sm mb-3">
                      {coordinators?.[activeCoordinator]?.department}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {coordinators?.[activeCoordinator]?.experience}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {coordinators?.[activeCoordinator]?.qualifications?.split(',')?.[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Icon name="Contact" size={20} className="text-primary" />
                        Contact Information
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Icon name="Mail" size={16} className="text-primary" />
                          <a 
                            href={`mailto:${coordinators?.[activeCoordinator]?.contact?.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {coordinators?.[activeCoordinator]?.contact?.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Phone" size={16} className="text-primary" />
                          <a 
                            href={`tel:${coordinators?.[activeCoordinator]?.contact?.phone}`}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {coordinators?.[activeCoordinator]?.contact?.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="MapPin" size={16} className="text-primary" />
                          <span className="text-muted-foreground">
                            {coordinators?.[activeCoordinator]?.contact?.office}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Clock" size={16} className="text-primary" />
                          <span className="text-muted-foreground">
                            {coordinators?.[activeCoordinator]?.availability}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Specialization */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Specialization
                      </h4>
                      <p className="text-muted-foreground">
                        {coordinators?.[activeCoordinator]?.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Icon name="CheckSquare" size={20} className="text-primary" />
                        Key Responsibilities
                      </h4>
                      <div className="space-y-2">
                        {coordinators?.[activeCoordinator]?.responsibilities?.map((responsibility, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Icon name="Award" size={20} className="text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {coordinators?.[activeCoordinator]?.achievements?.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Icon name="Star" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`flex-1 bg-gradient-to-r ${coordinators?.[activeCoordinator]?.color} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}>
                      <Icon name="Calendar" size={20} />
                      Schedule Meeting
                    </button>
                    <button className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <Icon name="Mail" size={20} />
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorSpotlight;