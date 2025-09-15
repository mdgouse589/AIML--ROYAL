import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchCoordinator = () => {
  const coordinator = {
    name: "Dr. Priya Sharma",
    designation: "Research Coordinator & Associate Professor",
    email: "priya.sharma@gmuniversity.edu.in",
    phone: "+91 98765 43210",
    office: "Research Block, Room 301",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    expertise: ["Machine Learning", "Deep Learning", "Computer Vision", "AI Ethics"],
    achievements: [
      "Principal Investigator for 12 funded research projects",
      "Published 85+ research papers in top-tier journals",
      "Secured ₹2.3 Crores in research funding (2023-24)",
      "Mentored 45+ PhD and M.Tech students"
    ],
    currentProjects: [
      {
        title: "AI-Driven Healthcare Diagnostics",
        funding: "₹45 Lakhs",
        duration: "2023-2025",
        collaborator: "AIIMS Delhi"
      },
      {
        title: "Sustainable AI for Smart Cities",
        funding: "₹38 Lakhs",
        duration: "2024-2026",
        collaborator: "Bangalore Smart City Ltd"
      },
      {
        title: "Ethical AI Framework Development",
        funding: "₹25 Lakhs",
        duration: "2024-2025",
        collaborator: "IEEE Standards Association"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Research <span className="text-primary">Coordinator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading our research initiatives with vision, expertise, and unwavering commitment to innovation
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl royal-shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Section */}
              <div className="lg:col-span-1 bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <Image
                      src={coordinator?.image}
                      alt={coordinator?.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-accent"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} className="text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold mb-2">{coordinator?.name}</h3>
                  <p className="text-accent text-sm mb-6">{coordinator?.designation}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-accent" />
                      <span className="break-all">{coordinator?.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-accent" />
                      <span>{coordinator?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={16} className="text-accent" />
                      <span>{coordinator?.office}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-primary w-full"
                    >
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-2 p-8">
                {/* Expertise */}
                <div className="mb-8">
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-4 flex items-center">
                    <Icon name="Brain" size={20} className="text-primary mr-2" />
                    Research Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coordinator?.expertise?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-4 flex items-center">
                    <Icon name="Trophy" size={20} className="text-primary mr-2" />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {coordinator?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Projects */}
                <div>
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-4 flex items-center">
                    <Icon name="Rocket" size={20} className="text-primary mr-2" />
                    Current Research Projects
                  </h4>
                  <div className="space-y-4">
                    {coordinator?.currentProjects?.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-foreground">{project?.title}</h5>
                          <span className="text-primary font-bold text-sm">{project?.funding}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Icon name="Calendar" size={14} className="mr-1" />
                            {project?.duration}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Users" size={14} className="mr-1" />
                            {project?.collaborator}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchCoordinator;