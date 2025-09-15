import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ExcellenceSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    faculty: 0,
    publications: 0,
    placements: 0,
    projects: 0,
    partnerships: 0
  });

  const excellenceMetrics = [
    {
      key: 'students',
      value: 850,
      label: 'Active Students',
      description: 'Brilliant minds pursuing AI/ML excellence',
      icon: 'Users',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      key: 'faculty',
      value: 45,
      label: 'Expert Faculty',
      description: 'Distinguished educators and researchers',
      icon: 'GraduationCap',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      key: 'publications',
      value: 275,
      label: 'Research Publications',
      description: 'Peer-reviewed academic contributions',
      icon: 'BookOpen',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      key: 'placements',
      value: 96,
      label: 'Placement Rate (%)',
      description: 'Students placed in top companies',
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-yellow-50'
    },
    {
      key: 'projects',
      value: 520,
      label: 'Student Projects',
      description: 'Innovative solutions and prototypes',
      icon: 'Code',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      key: 'partnerships',
      value: 85,
      label: 'Industry Partners',
      description: 'Leading tech companies collaboration',
      icon: 'Building',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistently ranked among top AIML departments in the region",
      icon: "Award",
      stats: ["Top 5 ranking", "98% pass rate", "Excellence awards"]
    },
    {
      title: "Research Innovation",
      description: "Cutting-edge research in AI, ML, and emerging technologies",
      icon: "Lightbulb",
      stats: ["50+ patents", "International collaborations", "Research grants"]
    },
    {
      title: "Industry Connect",
      description: "Strong partnerships with leading technology companies",
      icon: "Network",
      stats: ["85+ partners", "Internship programs", "Guest lectures"]
    },
    {
      title: "Student Success",
      description: "Exceptional placement records and career advancement",
      icon: "Target",
      stats: ["96% placement", "Top companies", "Higher studies"]
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      excellenceMetrics?.forEach((metric) => {
        let current = 0;
        const increment = metric?.value / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric?.value) {
            current = metric?.value;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [metric?.key]: Math.floor(current)
          }));
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('excellence-section');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  return (
    <section id="excellence-section" className="py-20 bg-background">
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
            Excellence at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the numbers that define our commitment to academic excellence, research innovation, and student success in the field of AI/ML.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {excellenceMetrics?.map((metric, index) => (
            <motion.div
              key={metric?.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl royal-shadow-lg p-8 hover:royal-shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {counters?.[metric?.key]}
                {metric?.key === 'placements' ? '%' : '+'}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {metric?.label}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {metric?.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {achievements?.map((achievement, index) => (
            <motion.div
              key={achievement?.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-muted rounded-xl royal-shadow-lg p-8 hover:royal-shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={achievement?.icon} size={28} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                    {achievement?.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {achievement?.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {achievement?.stats?.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-4 py-2 bg-accent/10 text-primary rounded-full text-sm font-medium"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
              Ready to Join Our Excellence Journey?
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Become part of our distinguished community and experience world-class AIML education that prepares you for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 golden-glow">
                Start Your Application
              </button>
              <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExcellenceSection;