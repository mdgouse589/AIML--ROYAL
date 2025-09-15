import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      category: "Student Project",
      title: "AI-Powered Healthcare Diagnosis System",
      description: "Final year students developed an innovative machine learning model that can diagnose multiple diseases from medical imaging with 94% accuracy. The project has been recognized by leading healthcare institutions and is being considered for commercial implementation.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      author: "Priya Sharma & Team",
      date: "December 2024",
      tags: ["Machine Learning", "Healthcare", "Computer Vision"],
      stats: { accuracy: "94%", datasets: "50K+", recognition: "Industry Award" }
    },
    {
      category: "Faculty Research",
      title: "Quantum-Enhanced Machine Learning Algorithms",
      description: "Dr. Rajesh Kumar\'s groundbreaking research on quantum computing applications in machine learning has been published in Nature Machine Intelligence. The work opens new possibilities for exponentially faster AI computations.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800&h=600&fit=crop",
      author: "Dr. Rajesh Kumar",
      date: "November 2024",
      tags: ["Quantum Computing", "Research", "AI Algorithms"],
      stats: { citations: "150+", impact: "High", journal: "Nature MI" }
    },
    {
      category: "Industry Collaboration",
      title: "Microsoft Azure AI Partnership Program",
      description: "Our department has partnered with Microsoft to provide students with hands-on experience in cloud-based AI solutions. Students get access to Azure credits, certification programs, and direct mentorship from Microsoft engineers.",
      image: "https://images.pixabay.com/photo/2023/01/26/22/14/ai-generated-7747171_1280.jpg?w=800&h=600&fit=crop",
      author: "Industry Relations Team",
      date: "October 2024",
      tags: ["Cloud Computing", "Partnership", "Certification"],
      stats: { students: "200+", credits: "$50K", certifications: "Azure AI" }
    },
    {
      category: "Research Breakthrough",
      title: "Natural Language Processing for Indian Languages",
      description: "Our NLP research team has developed state-of-the-art language models for 12 Indian languages, achieving breakthrough performance in translation and sentiment analysis. The models are being integrated into government digital initiatives.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      author: "NLP Research Lab",
      date: "September 2024",
      tags: ["NLP", "Indian Languages", "Government Project"],
      stats: { languages: "12", accuracy: "92%", deployment: "Government" }
    },
    {
      category: "Student Achievement",
      title: "International AI Olympiad Gold Medal",
      description: "Our undergraduate team secured the gold medal at the International AI Olympiad, competing against 500+ teams from 50 countries. Their solution for sustainable agriculture using computer vision impressed judges worldwide.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800&h=600&fit=crop",
      author: "Team AIML Royal",
      date: "August 2024",
      tags: ["Competition", "Computer Vision", "Agriculture"],
      stats: { rank: "1st", teams: "500+", countries: "50" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredContent?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent?.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent?.length) % featuredContent?.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
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
            Featured Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest achievements in research, student projects, and industry collaborations that showcase the excellence of our AIML department.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl royal-shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-96 overflow-hidden">
                    <Image
                      src={featuredContent?.[currentSlide]?.image}
                      alt={featuredContent?.[currentSlide]?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        {featuredContent?.[currentSlide]?.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-4">
                      {featuredContent?.[currentSlide]?.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {featuredContent?.[currentSlide]?.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(featuredContent?.[currentSlide]?.stats)?.map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-primary">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredContent?.[currentSlide]?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="font-medium">{featuredContent?.[currentSlide]?.author}</span>
                      <span>{featuredContent?.[currentSlide]?.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center royal-shadow-lg hover:royal-shadow-xl transition-all duration-300 z-10"
          >
            <Icon name="ChevronLeft" size={24} className="text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center royal-shadow-lg hover:royal-shadow-xl transition-all duration-300 z-10"
          >
            <Icon name="ChevronRight" size={24} className="text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuredContent?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;