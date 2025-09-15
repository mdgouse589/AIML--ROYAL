import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineData = [
    {
      year: "2018",
      title: "Department Establishment",
      description: "AIML Department founded with a vision to create world-class AI/ML professionals",
      icon: "Rocket",
      achievements: ["First batch of 60 students", "5 founding faculty members", "State-of-the-art lab setup"]
    },
    {
      year: "2019",
      title: "Research Excellence",
      description: "Launched cutting-edge research programs in deep learning and neural networks",
      icon: "Brain",
      achievements: ["10+ research publications", "First industry collaboration", "Research lab expansion"]
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Pioneered online learning platforms and virtual AI/ML laboratories",
      icon: "Monitor",
      achievements: ["100% online transition", "Virtual lab development", "Digital curriculum design"]
    },
    {
      year: "2021",
      title: "Industry Partnerships",
      description: "Established strategic partnerships with leading tech companies",
      icon: "Handshake",
      achievements: ["25+ industry partners", "Internship programs", "Guest lecture series"]
    },
    {
      year: "2022",
      title: "Global Recognition",
      description: "Achieved international accreditation and recognition for academic excellence",
      icon: "Award",
      achievements: ["International accreditation", "Faculty exchange programs", "Global research collaborations"]
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched AI/ML Innovation Hub for startups and research projects",
      icon: "Lightbulb",
      achievements: ["Innovation hub launch", "Startup incubation", "Patent applications"]
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Expanding horizons with quantum computing and advanced AI research",
      icon: "Zap",
      achievements: ["Quantum computing lab", "Advanced AI research", "Next-gen curriculum"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer?.observe(item));

    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Journey of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the milestones and innovations that have shaped our AIML department into a center of academic excellence and technological advancement.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary h-full rounded-full hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {timelineData?.map((item, index) => (
              <motion.div
                key={item?.year}
                data-index={index}
                className={`timeline-item flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={visibleItems?.has(index?.toString()) ? 
                  { opacity: 1, x: 0 } : 
                  { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-xl royal-shadow-lg p-8 hover:royal-shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                      }`}>
                        <Icon name={item?.icon} size={24} className="text-accent" />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                        <div className="text-3xl font-bold text-primary mb-1">{item?.year}</div>
                        <h3 className="text-xl font-playfair font-bold text-foreground">{item?.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item?.description}
                    </p>

                    <div className="space-y-2">
                      {item?.achievements?.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center gap-2 text-sm text-foreground">
                          <Icon name="CheckCircle" size={16} className="text-accent flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative hidden lg:block">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg z-10 relative">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Be Part of Our Continuing Story
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our prestigious AIML department and contribute to the next chapter of innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Apply Now
              </button>
              <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;