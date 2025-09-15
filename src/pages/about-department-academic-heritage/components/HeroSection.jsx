import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with royal gradient */}
      <div className="absolute inset-0 royal-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Icon name="GraduationCap" size={24} className="text-accent" />
            <span className="text-accent font-medium">Academic Heritage</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            About Our
            <span className="block text-accent">Department</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the legacy of excellence that defines our AIML department - where tradition meets innovation in the pursuit of academic greatness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">15+</div>
            <div className="text-white/80">Years of Excellence</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-white/80">Faculty Members</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">2000+</div>
            <div className="text-white/80">Alumni Network</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;