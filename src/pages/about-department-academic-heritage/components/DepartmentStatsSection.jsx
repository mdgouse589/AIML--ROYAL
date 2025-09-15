import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const DepartmentStatsSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    faculty: 0,
    research: 0,
    placement: 0,
    labs: 0,
    partnerships: 0
  });

  const finalStats = {
    students: 850,
    faculty: 52,
    research: 125,
    placement: 95,
    labs: 12,
    partnerships: 35
  };

  const statsData = [
    {
      key: 'students',
      label: 'Active Students',
      value: finalStats?.students,
      icon: 'Users',
      suffix: '+',
      description: 'Undergraduate & Graduate students pursuing AIML excellence'
    },
    {
      key: 'faculty',
      label: 'Expert Faculty',
      value: finalStats?.faculty,
      icon: 'GraduationCap',
      suffix: '',
      description: 'PhD qualified professors and industry experts'
    },
    {
      key: 'research',
      label: 'Research Papers',
      value: finalStats?.research,
      icon: 'FileText',
      suffix: '+',
      description: 'Published in top-tier journals and conferences'
    },
    {
      key: 'placement',
      label: 'Placement Rate',
      value: finalStats?.placement,
      icon: 'TrendingUp',
      suffix: '%',
      description: 'Students placed in leading technology companies'
    },
    {
      key: 'labs',
      label: 'Research Labs',
      value: finalStats?.labs,
      icon: 'Cpu',
      suffix: '',
      description: 'State-of-the-art AI/ML research facilities'
    },
    {
      key: 'partnerships',
      label: 'Industry Partners',
      value: finalStats?.partnerships,
      icon: 'Building',
      suffix: '+',
      description: 'Collaborations with leading tech companies'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          students: Math.floor(finalStats?.students * progress),
          faculty: Math.floor(finalStats?.faculty * progress),
          research: Math.floor(finalStats?.research * progress),
          placement: Math.floor(finalStats?.placement * progress),
          labs: Math.floor(finalStats?.labs * progress),
          partnerships: Math.floor(finalStats?.partnerships * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer?.observe(element);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="BarChart3" size={20} className="text-accent" />
            <span className="text-accent font-medium">Department Statistics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Excellence in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our achievements and growth metrics that demonstrate our commitment to academic excellence and industry leadership in AIML education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData?.map((stat, index) => (
            <motion.div
              key={stat?.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-accent/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={stat?.icon} 
                      size={28} 
                      className="text-accent group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {counters?.[stat?.key]}{stat?.suffix}
                    </div>
                    <div className="text-accent font-medium">
                      {stat?.label}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {stat?.description}
                </p>
                
                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent to-white rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-white mb-2">
              NAAC A+ Accredited
            </h3>
            <p className="text-white/80 text-sm">
              Recognized for academic excellence and quality education standards
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Globe" size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-white mb-2">
              Global Recognition
            </h3>
            <p className="text-white/80 text-sm">
              International collaborations and research partnerships worldwide
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-white mb-2">
              Innovation Hub
            </h3>
            <p className="text-white/80 text-sm">
              Leading research in AI/ML with cutting-edge technology solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentStatsSection;