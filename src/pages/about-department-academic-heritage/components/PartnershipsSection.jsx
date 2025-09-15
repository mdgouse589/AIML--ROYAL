import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PartnershipsSection = () => {
  const industryPartners = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop",
      type: "Technology Partner",
      collaboration: "Azure Cloud Services, AI/ML Tools, Student Certification Programs",
      since: "2020"
    },
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop",
      type: "Research Partner",
      collaboration: "TensorFlow Training, Google Cloud Platform, Research Grants",
      since: "2019"
    },
    {
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop",
      type: "Cloud Partner",
      collaboration: "AWS Educate Program, Cloud Computing Resources, Internships",
      since: "2021"
    },
    {
      name: "NVIDIA",
      logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop",
      type: "Hardware Partner",
      collaboration: "GPU Computing, Deep Learning Institute, Research Hardware",
      since: "2020"
    },
    {
      name: "IBM",
      logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=200&h=100&fit=crop",
      type: "AI Partner",
      collaboration: "Watson AI Platform, Quantum Computing Access, Faculty Training",
      since: "2018"
    },
    {
      name: "Intel",
      logo: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=200&h=100&fit=crop",
      type: "Technology Partner",
      collaboration: "AI Hardware Optimization, Edge Computing, Student Projects",
      since: "2021"
    }
  ];

  const academicPartners = [
    {
      name: "Stanford University",
      country: "USA",
      collaboration: "Joint Research Programs, Faculty Exchange, Student Exchange",
      focus: "AI Ethics, Machine Learning"
    },
    {
      name: "MIT",
      country: "USA",
      collaboration: "Research Collaboration, Online Courses, Joint Publications",
      focus: "Deep Learning, Computer Vision"
    },
    {
      name: "University of Oxford",
      country: "UK",
      collaboration: "Research Partnership, Visiting Scholar Program",
      focus: "Natural Language Processing"
    },
    {
      name: "IIT Delhi",
      country: "India",
      collaboration: "Joint Research Projects, Faculty Collaboration",
      focus: "AI Applications, Robotics"
    },
    {
      name: "IISc Bangalore",
      country: "India",
      collaboration: "Research Collaboration, PhD Programs",
      focus: "Machine Learning, Data Science"
    }
  ];

  const collaborationTypes = [
    {
      title: "Research Collaboration",
      description: "Joint research projects, publications, and innovation initiatives with leading institutions worldwide",
      icon: "Microscope",
      count: "25+ Projects"
    },
    {
      title: "Industry Partnerships",
      description: "Strategic alliances with technology companies for internships, placements, and real-world projects",
      icon: "Building",
      count: "35+ Companies"
    },
    {
      title: "Academic Exchange",
      description: "Student and faculty exchange programs with prestigious universities globally",
      icon: "Globe",
      count: "15+ Universities"
    },
    {
      title: "Technology Access",
      description: "Access to cutting-edge tools, platforms, and resources from industry leaders",
      icon: "Cpu",
      count: "10+ Platforms"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Handshake" size={20} className="text-primary" />
            <span className="text-primary font-medium">Strategic Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Global Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges with industry leaders and academic institutions worldwide to provide our students with unparalleled opportunities and resources.
          </p>
        </motion.div>

        {/* Collaboration Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {collaborationTypes?.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 royal-shadow hover:royal-shadow-lg transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon name={type?.icon} size={28} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="font-playfair font-bold text-foreground mb-2">
                  {type?.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {type?.description}
                </p>
                <div className="text-accent font-bold">{type?.count}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-foreground text-center mb-12">
            Industry Partners
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPartners?.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-xl p-6 royal-shadow hover:royal-shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src={partner?.logo}
                        alt={partner?.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-foreground">
                        {partner?.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-primary font-medium">{partner?.type}</span>
                        <span className="text-muted-foreground">• Since {partner?.since}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner?.collaboration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-playfair font-bold text-foreground text-center mb-12">
            Academic Collaborations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {academicPartners?.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-xl p-6 royal-shadow hover:royal-shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-playfair font-bold text-foreground text-lg">
                        {partner?.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{partner?.country}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="GraduationCap" size={24} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-1">Collaboration</h5>
                      <p className="text-muted-foreground text-sm">{partner?.collaboration}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-1">Focus Areas</h5>
                      <p className="text-accent text-sm font-medium">{partner?.focus}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <Icon name="Star" size={48} className="text-white mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Partnership Benefits
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our strategic partnerships provide students with access to cutting-edge technology, industry expertise, and global opportunities that enhance their learning experience and career prospects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" size={28} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">Internship Opportunities</h4>
                <p className="text-white/80 text-sm">Direct access to internships at leading technology companies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={28} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">Learning Resources</h4>
                <p className="text-white/80 text-sm">Access to premium tools, platforms, and educational content</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={28} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">Industry Mentorship</h4>
                <p className="text-white/80 text-sm">Guidance from industry experts and thought leaders</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;