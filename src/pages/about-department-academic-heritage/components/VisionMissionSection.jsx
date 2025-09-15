import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const VisionMissionSection = () => {
  const visionMissionData = {
    vision: {
      title: "Our Vision",
      content: "To be a globally recognized center of excellence in Artificial Intelligence and Machine Learning education, research, and innovation, producing ethical leaders who will shape the future of intelligent systems and contribute to societal advancement through cutting-edge technology solutions.",
      icon: "Eye",
      highlights: [
        "Global Recognition",
        "Ethical Leadership",
        "Cutting-edge Innovation",
        "Societal Impact"
      ]
    },
    mission: {
      title: "Our Mission",
      content: "To provide world-class education in AI/ML through innovative pedagogy, foster groundbreaking research, maintain strong industry partnerships, and develop responsible technologists who can address complex global challenges while upholding the highest standards of academic integrity and professional ethics.",
      icon: "Target",
      highlights: [
        "World-class Education",
        "Innovative Research",
        "Industry Partnerships",
        "Responsible Technology"
      ]
    },
    values: [
      {
        title: "Excellence",
        description: "Pursuing the highest standards in education, research, and professional development",
        icon: "Award"
      },
      {
        title: "Innovation",
        description: "Embracing creativity and pioneering solutions to complex technological challenges",
        icon: "Lightbulb"
      },
      {
        title: "Integrity",
        description: "Maintaining ethical practices and transparency in all academic and research endeavors",
        icon: "Shield"
      },
      {
        title: "Collaboration",
        description: "Fostering partnerships with industry, academia, and global research communities",
        icon: "Users"
      },
      {
        title: "Impact",
        description: "Creating meaningful contributions to society through responsible AI/ML applications",
        icon: "Globe"
      },
      {
        title: "Inclusivity",
        description: "Promoting diversity and equal opportunities in technology education and research",
        icon: "Heart"
      }
    ]
  };

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
            <Icon name="Compass" size={20} className="text-primary" />
            <span className="text-primary font-medium">Our Foundation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Vision, Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The guiding principles that shape our department's identity and drive our commitment to excellence in AIML education and research.
          </p>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {[visionMissionData?.vision, visionMissionData?.mission]?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 royal-shadow hover:royal-shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item?.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">
                    {item?.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item?.content}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {item?.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Our Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The fundamental principles that guide our actions, decisions, and relationships within our academic community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionMissionData?.values?.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 royal-shadow hover:royal-shadow-lg transition-all duration-300 h-full hover:bg-primary/5">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name={value?.icon} size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-playfair font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {value?.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary via-accent to-primary rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <Icon name="Rocket" size={48} className="text-white mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Join Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Be part of a community that's shaping the future of artificial intelligence and machine learning. Together, we're building tomorrow's intelligent systems today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Users" size={20} />
                  <span>Collaborative Community</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Zap" size={20} />
                  <span>Cutting-edge Research</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Trophy" size={20} />
                  <span>Excellence Driven</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;