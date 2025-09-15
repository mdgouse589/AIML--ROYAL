import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    placements: 0,
    publications: 0,
    projects: 0,
    partnerships: 0
  });

  const heroSlides = [
    {
      title: "Where Tradition Meets Innovation",
      subtitle: "Forging the Future of AI/ML Education",
      description: "Experience world-class artificial intelligence and machine learning education in a prestigious academic environment that combines royal heritage with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop"
    },
    {
      title: "Excellence in Every Algorithm",
      subtitle: "Shaping Tomorrow\'s Tech Leaders",
      description: "Join our distinguished community of scholars, researchers, and innovators who are pushing the boundaries of artificial intelligence and machine learning.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=1920&h=1080&fit=crop"
    },
    {
      title: "Royal Academic Legacy",
      subtitle: "Premium AIML Education",
      description: "Discover a learning environment where academic excellence meets technological innovation, preparing you for leadership in the digital age.",
      image: "https://images.pixabay.com/photo/2023/01/26/22/14/ai-generated-7747171_1280.jpg?w=1920&h=1080&fit=crop"
    }
  ];

  const stats = [
    { key: 'placements', label: 'Placement Rate', value: 96, suffix: '%', icon: 'TrendingUp' },
    { key: 'publications', label: 'Research Publications', value: 150, suffix: '+', icon: 'BookOpen' },
    { key: 'projects', label: 'Student Projects', value: 500, suffix: '+', icon: 'Code' },
    { key: 'partnerships', label: 'Industry Partners', value: 75, suffix: '+', icon: 'Building' }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      stats?.forEach((stat) => {
        let current = 0;
        const increment = stat?.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat?.value) {
            current = stat?.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat?.key]: Math.floor(current)
          }));
        }, 50);
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides?.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide?.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </motion.div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white"
          >
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                {heroSlides?.[currentSlide]?.title}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-accent font-semibold mb-6">
                {heroSlides?.[currentSlide]?.subtitle}
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {heroSlides?.[currentSlide]?.description}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://gmu.ac.in/public/admission-card/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="gold-gradient text-primary hover:scale-105 transition-transform duration-300"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Explore Programs
                </Button>
              </a>

              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
                iconName="Play"
                iconPosition="left"
              >
                Watch Department Tour
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {heroSlides?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-accent scale-125' : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats?.map((stat, index) => (
              <motion.div
                key={stat?.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {animatedStats?.[stat?.key]}{stat?.suffix}
                </div>
                <div className="text-accent font-medium text-sm lg:text-base">
                  {stat?.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <Icon name="ChevronDown" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;