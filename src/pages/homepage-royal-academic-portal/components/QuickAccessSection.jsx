import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessSection = () => {
  const quickAccessItems = [
    {
      title: "Admissions Portal",
      description: "Start your journey with us. Apply for undergraduate and graduate programs in AI/ML.",
      icon: "GraduationCap",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      link: "/admissions",
      features: ["Online Application", "Document Upload", "Application Status", "Fee Payment"],
      cta: "Apply Now"
    },
    {
      title: "Research Opportunities",
      description: "Explore cutting-edge research projects and collaboration opportunities with our faculty.",
      icon: "Microscope",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      link: "/research-innovation-center",
      features: ["Research Projects", "Faculty Collaboration", "Publication Support", "Funding Info"],
      cta: "Explore Research"
    },
    {
      title: "Student Resources",
      description: "Access academic materials, project guidelines, and support services for current students.",
      icon: "BookOpen",
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      link: "/student-resources",
      features: ["Course Materials", "Project Guidelines", "Academic Calendar", "Support Services"],
      cta: "Access Resources"
    },
    {
      title: "Industry Connect",
      description: "Discover internship opportunities, placement programs, and industry partnerships.",
      icon: "Building",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      link: "/industry-connect",
      features: ["Internships", "Placement Cell", "Industry Partners", "Career Guidance"],
      cta: "Connect Now"
    },
    {
      title: "Faculty Portal",
      description: "Meet our distinguished faculty members and explore their research interests.",
      icon: "Users",
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      link: "/faculty-constellation-distinguished-educators",
      features: ["Faculty Profiles", "Research Areas", "Publications", "Contact Info"],
      cta: "Meet Faculty"
    },
    {
      title: "Alumni Network",
      description: "Connect with our successful alumni and explore networking opportunities.",
      icon: "Network",
      color: "from-red-500 to-red-600",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      link: "/alumni-network",
      features: ["Alumni Directory", "Success Stories", "Networking Events", "Mentorship"],
      cta: "Join Network"
    }
  ];

  const emergencyContacts = [
    {
      title: "Academic Coordinator",
      name: "Dr. Priya Menon",
      role: "Academic Affairs",
      phone: "+91 98765 43211",
      email: "academic.aiml@gmuniversity.edu.in",
      icon: "GraduationCap"
    },
    {
      title: "Placement Coordinator",
      name: "Prof. Vikram Singh",
      role: "Career Services",
      phone: "+91 98765 43212",
      email: "placement.aiml@gmuniversity.edu.in",
      icon: "Briefcase"
    },
    {
      title: "Research Coordinator",
      name: "Dr. Meera Krishnan",
      role: "Research & Development",
      phone: "+91 98765 43213",
      email: "research.aiml@gmuniversity.edu.in",
      icon: "Beaker"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
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
            Quick Access Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate to essential services and resources with ease. Your gateway to academic excellence and career success.
          </p>
        </motion.div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {quickAccessItems?.map((item, index) => (
            <motion.div
              key={item?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl royal-shadow-lg hover:royal-shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${item?.color} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon name={item?.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold">{item?.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item?.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {item?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Icon name="CheckCircle" size={16} className={item?.textColor} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={item?.link} className="block">
                    <Button
                      fullWidth
                      className={`bg-gradient-to-r ${item?.color} text-white hover:scale-105 transition-transform duration-300`}
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      {item?.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl royal-shadow-lg p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground">
              Connect directly with our coordinators for quick support and guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts?.map((contact, index) => (
              <motion.div
                key={contact?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={contact?.icon} size={28} className="text-accent" />
                </div>
                
                <h4 className="text-lg font-playfair font-bold text-foreground mb-2">
                  {contact?.title}
                </h4>
                
                <div className="text-primary font-semibold mb-1">{contact?.name}</div>
                <div className="text-sm text-muted-foreground mb-4">{contact?.role}</div>
                
                <div className="space-y-2">
                  <a 
                    href={`tel:${contact?.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Icon name="Phone" size={16} />
                    {contact?.phone}
                  </a>
                  <a 
                    href={`mailto:${contact?.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Icon name="Mail" size={16} />
                    {contact?.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Support */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              24/7 Student Support Helpline
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919876543200"
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
              >
                <Icon name="Phone" size={20} />
                +91 98765 43200
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a 
                href="mailto:support.aiml@gmuniversity.edu.in"
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
              >
                <Icon name="Mail" size={20} />
                support.aiml@gmuniversity.edu.in
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccessSection;