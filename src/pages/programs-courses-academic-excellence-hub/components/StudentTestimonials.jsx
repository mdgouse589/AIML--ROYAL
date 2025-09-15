import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const StudentTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      program: "M.Tech in Machine Learning",
      year: "2024 Graduate",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      testimonial: `The AIML program at GM University transformed my understanding of artificial intelligence. The hands-on projects with industry partners and access to cutting-edge research facilities prepared me exceptionally well for my current role as an ML Engineer at Google. The faculty's expertise and mentorship were invaluable throughout my journey.`,
      achievement: "Placed at Google as ML Engineer",
      currentRole: "Machine Learning Engineer, Google India"
    },
    {
      id: 2,
      name: "Arjun Patel",
      program: "B.Tech in Artificial Intelligence",
      year: "2023 Graduate",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      testimonial: `The curriculum perfectly balances theoretical foundations with practical applications. Working on real-world projects in the AI lab and collaborating with Microsoft through their academic alliance gave me the confidence to start my own AI startup. The entrepreneurship support from the department was phenomenal.`,
      achievement: "Founded AI Startup - TechVision AI",
      currentRole: "Founder & CEO, TechVision AI"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      program: "M.Tech in Deep Learning",
      year: "2024 Graduate",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      testimonial: `The research opportunities in computer vision and deep learning were extraordinary. Publishing papers with faculty members and presenting at international conferences boosted my academic profile significantly. The department's emphasis on research excellence helped me secure a PhD position at Stanford University.`,
      achievement: "PhD Admission at Stanford University",
      currentRole: "PhD Candidate, Stanford University"
    },
    {
      id: 4,
      name: "Rohit Kumar",
      program: "B.Tech in Data Science",
      year: "2023 Graduate",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      rating: 5,
      testimonial: `The industry exposure through internships and guest lectures from tech leaders was incredible. The placement support team worked tirelessly to connect us with top companies. The comprehensive training in both technical skills and soft skills made me industry-ready from day one.`,
      achievement: "Placed at Amazon as Data Scientist",
      currentRole: "Senior Data Scientist, Amazon"
    },
    {
      id: 5,
      name: "Kavya Nair",
      program: "M.Tech in AI & Robotics",
      year: "2024 Graduate",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      rating: 5,
      testimonial: `The interdisciplinary approach combining AI with robotics opened up unique career opportunities. The state-of-the-art robotics lab and collaboration with NVIDIA for GPU computing gave me hands-on experience with the latest technologies. I'm now working on autonomous vehicle systems at Tesla.`,
      achievement: "Placed at Tesla as Robotics Engineer",
      currentRole: "Robotics Engineer, Tesla"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates who are now making their mark in the world of artificial intelligence and machine learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-card rounded-2xl royal-shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Student Image and Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <img
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground">{currentTestimonial?.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{currentTestimonial?.program}</p>
                <p className="text-sm text-accent font-medium">{currentTestimonial?.year}</p>
                
                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mt-3">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <Icon name="Quote" size={32} className="text-accent/30 mb-4" />
                  <p className="text-muted-foreground text-lg leading-relaxed italic">
                    "{currentTestimonial?.testimonial}"
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="bg-accent/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Trophy" size={20} className="text-accent" />
                    <div>
                      <p className="font-medium text-foreground">{currentTestimonial?.achievement}</p>
                      <p className="text-sm text-muted-foreground">{currentTestimonial?.currentRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg royal-shadow hover:royal-shadow-lg transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
              <span className="text-muted-foreground">Previous</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-accent' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg royal-shadow hover:royal-shadow-lg transition-all duration-300"
            >
              <span className="text-muted-foreground">Next</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-lg royal-shadow">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Placement Rate</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg royal-shadow">
              <div className="text-3xl font-bold text-secondary mb-2">₹12.5L</div>
              <div className="text-sm text-muted-foreground">Average Package</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg royal-shadow">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg royal-shadow">
              <div className="text-3xl font-bold text-success mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;