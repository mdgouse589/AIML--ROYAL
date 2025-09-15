import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ResearchHero = () => {
  const stats = [
    { label: "Active Research Projects", value: "45+", icon: "FlaskConical" },
    { label: "Publications (2024)", value: "127", icon: "BookOpen" },
    { label: "Research Grants", value: "₹2.3Cr", icon: "TrendingUp" },
    { label: "Industry Collaborations", value: "18", icon: "Handshake" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-accent rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Icon name="Sparkles" size={16} className="text-accent" />
              <span className="text-accent text-sm font-medium">Innovation Hub</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6"
            >
              Research &
              <span className="block text-accent">Innovation Center</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/80 mb-8 max-w-2xl"
            >
              Pioneering the future of AI/ML through groundbreaking research, innovative solutions, 
              and collaborative partnerships that transform theoretical knowledge into real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="gold-gradient text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2">
                <Icon name="FileText" size={20} />
                <span>View Publications</span>
              </button>
              <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Users" size={20} />
                <span>Join Research Team</span>
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats?.map((stat, index) => (
                <motion.div
                  key={stat?.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <Icon name={stat?.icon} size={24} className="text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat?.value}</div>
                  <div className="text-xs text-white/70">{stat?.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                  alt="AI Research Laboratory"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">45 Active Research Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">127 Publications This Year</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">18 Industry Partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Explore Research</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={24} className="text-accent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResearchHero;