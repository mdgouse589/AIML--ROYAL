import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-15T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date()?.getTime();
      const distance = targetDate?.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const keyDates = [
    {
      title: "Application Deadline",
      date: "March 15, 2025",
      status: "upcoming",
      icon: "Calendar"
    },
    {
      title: "Entrance Exam",
      date: "April 10, 2025",
      status: "upcoming",
      icon: "BookOpen"
    },
    {
      title: "Counseling Begins",
      date: "May 5, 2025",
      status: "upcoming",
      icon: "Users"
    }
  ];

  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)]?.map((_, i) => (
          <div
            key={i}
            className="golden-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Icon name="Sparkles" size={20} className="text-secondary" />
            <span className="text-white font-medium">Admissions Open 2025-26</span>
          </div>
          
          <h1 className="text-hero font-accent font-bold text-white mb-6">
            Your Gateway to
            <span className="text-gradient-gold block">AI & ML Excellence</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join India's premier AIML program at GM University. Shape the future of technology with cutting-edge curriculum, world-class faculty, and guaranteed placement opportunities.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Application Deadline</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(timeLeft)?.map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-br from-secondary to-accent rounded-lg p-4 mb-2">
                    <span className="text-3xl font-bold text-black">{value?.toString()?.padStart(2, '0')}</span>
                  </div>
                  <span className="text-white capitalize font-medium">{unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-black font-cta text-lg px-8 py-4 shadow-royal-lg btn-pulse"
              iconName="FileText"
              iconPosition="left"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-cta text-lg px-8 py-4"
              iconName="Download"
              iconPosition="left"
            >
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Key Dates */}
        <div className="grid md:grid-cols-3 gap-6">
          {keyDates?.map((date, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={date?.icon} size={24} className="text-black" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{date?.title}</h4>
              <p className="text-secondary font-medium text-lg">{date?.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;