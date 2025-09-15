import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2008",
      title: "Department Foundation",
      description: "Established as Computer Science & Engineering department with focus on core computing principles and programming fundamentals.",
      icon: "Building",
      milestone: "Foundation"
    },
    {
      year: "2012",
      title: "Research Expansion",
      description: "Introduced advanced research programs in data structures, algorithms, and early machine learning concepts with dedicated research labs.",
      icon: "BookOpen",
      milestone: "Growth"
    },
    {
      year: "2016",
      title: "AI Integration",
      description: "Pioneered artificial intelligence curriculum integration, becoming one of the first departments to offer specialized AI courses in the region.",
      icon: "Brain",
      milestone: "Innovation"
    },
    {
      year: "2019",
      title: "ML Specialization",
      description: "Launched comprehensive Machine Learning specialization track with industry partnerships and hands-on project-based learning approach.",
      icon: "Cpu",
      milestone: "Specialization"
    },
    {
      year: "2021",
      title: "AIML Transformation",
      description: "Complete transformation to Artificial Intelligence & Machine Learning department with state-of-the-art infrastructure and research facilities.",
      icon: "Zap",
      milestone: "Transformation"
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Achieved recognition as leading AIML department with 95% placement rate, multiple research publications, and industry collaborations.",
      icon: "Trophy",
      milestone: "Excellence"
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
            <Icon name="Clock" size={20} className="text-primary" />
            <span className="text-primary font-medium">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Evolution Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional computer science to cutting-edge AI/ML specialization - witness our transformation into a center of technological excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>

          <div className="space-y-16">
            {timelineData?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-card rounded-xl p-6 royal-shadow hover:royal-shadow-lg transition-all duration-300">
                    <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} w-12 h-12 bg-primary rounded-full flex items-center justify-center`}>
                        <Icon name={item?.icon} size={24} className="text-white" />
                      </div>
                      <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                        <div className="text-2xl font-bold text-accent">{item?.year}</div>
                        <div className="text-sm text-primary font-medium">{item?.milestone}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                      {item?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;