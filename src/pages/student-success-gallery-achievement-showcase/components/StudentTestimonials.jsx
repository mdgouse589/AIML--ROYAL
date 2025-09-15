import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudentTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      batch: "Final Year",
      course: "B.Tech AIML",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `The AIML program has been transformative for my career. The hands-on approach to learning, combined with industry-relevant projects, has given me the confidence to tackle real-world challenges. The faculty's mentorship and the collaborative environment have been instrumental in my growth as both a technologist and a problem-solver.`,
      highlights: [
        "Secured internship at Google",
        "Published research paper",
        "Led team of 5 in final project"
      ],
      placementStatus: "Placed at Microsoft - ₹28 LPA",
      projectTitle: "AI-Powered Healthcare Diagnosis System"
    },
    {
      id: 2,
      name: "Priya Patel",
      batch: "Third Year",
      course: "B.Tech AIML",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c8e8e2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `What sets this program apart is the perfect balance between theoretical knowledge and practical application. The faculty doesn't just teach concepts; they inspire us to think critically and innovate. The research opportunities and industry collaborations have opened doors I never imagined possible.`,
      highlights: [
        "Won National Hackathon",
        "Internship at Amazon",
        "Patent application filed"
      ],
      placementStatus: "Pre-placement offer from Amazon",
      projectTitle: "Computer Vision for Autonomous Vehicles"
    },
    {
      id: 3,
      name: "Arjun Kumar",
      batch: "Final Year",
      course: "M.Tech AIML",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `The M.Tech program has exceeded my expectations in every way. The advanced coursework, research opportunities, and access to cutting-edge labs have prepared me for a career in AI research. The faculty's expertise and the collaborative research environment have been invaluable in shaping my academic journey.`,
      highlights: [
        "Research assistant at IISc",
        "3 conference publications",
        "Teaching assistant for 2 courses"
      ],
      placementStatus: "PhD offer from Stanford University",
      projectTitle: "Deep Learning for Natural Language Processing"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      batch: "Final Year",
      course: "B.Tech AIML",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `The program's emphasis on practical learning through projects has been incredible. Every semester, we work on real industry problems, which has given me hands-on experience with the latest technologies. The career guidance and placement support have been exceptional, helping me secure my dream job.`,
      highlights: [
        "Internship at Flipkart",
        "Winner of Smart India Hackathon",
        "Student coordinator for tech fest"
      ],
      placementStatus: "Placed at Google - ₹32 LPA",
      projectTitle: "Machine Learning for E-commerce Recommendations"
    },
    {
      id: 5,
      name: "Vikram Singh",
      batch: "Third Year",
      course: "B.Tech AIML",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `The interdisciplinary approach of the AIML program has broadened my perspective significantly. Learning about AI applications across different domains - from healthcare to finance to robotics - has helped me understand the true potential of this technology. The faculty's industry experience brings real-world insights into the classroom.`,
      highlights: [
        "Robotics club president",
        "Internship at Tesla",
        "Winner of multiple coding competitions"
      ],
      placementStatus: "Internship converted to full-time offer",
      projectTitle: "Robotics and Computer Vision Integration"
    },
    {
      id: 6,
      name: "Anita Joshi",
      batch: "Final Year",
      course: "M.Tech AIML",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      testimonial: `The research-oriented curriculum and access to state-of-the-art facilities have been game-changers for my academic career. The opportunity to work alongside faculty on cutting-edge research projects has not only enhanced my technical skills but also prepared me for a career in academia and research.`,
      highlights: [
        "Research collaboration with MIT",
        "Best thesis award recipient",
        "Published in top-tier journal"
      ],
      placementStatus: "Research Scientist at Microsoft Research",
      projectTitle: "Explainable AI for Medical Diagnosis"
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
    <div className="space-y-8">
      {/* Featured Testimonial */}
      <div className="bg-white rounded-xl royal-shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 h-64 md:h-auto">
            <Image
              src={currentTestimonial?.image}
              alt={currentTestimonial?.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-2/3 p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-1">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-primary font-medium">{currentTestimonial?.batch} • {currentTestimonial?.course}</p>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(currentTestimonial?.rating)]?.map((_, index) => (
                  <Icon key={index} name="Star" size={20} className="text-accent fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
              "{currentTestimonial?.testimonial}"
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Icon name="Trophy" size={16} className="text-accent" />
                  Key Highlights
                </h4>
                <ul className="space-y-1">
                  {currentTestimonial?.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="CheckCircle" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                  Career Status
                </h4>
                <p className="text-sm text-secondary font-medium mb-2">
                  {currentTestimonial?.placementStatus}
                </p>
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <Icon name="Code" size={16} className="text-primary" />
                  Project Focus
                </h4>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial?.projectTitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={prevTestimonial}
                  className="w-10 h-10 p-0"
                >
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={nextTestimonial}
                  className="w-10 h-10 p-0"
                >
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-primary w-6' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial, index) => (
          <div
            key={testimonial?.id}
            className={`bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 p-6 cursor-pointer ${
              index === activeTestimonial ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setActiveTestimonial(index)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial?.batch}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial?.rating)]?.map((_, starIndex) => (
                <Icon key={starIndex} name="Star" size={16} className="text-accent fill-current" />
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              "{testimonial?.testimonial}"
            </p>

            <div className="text-xs text-secondary font-medium">
              {testimonial?.placementStatus}
            </div>
          </div>
        ))}
      </div>
      {/* Student Experience Stats */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <h3 className="text-xl font-playfair font-bold mb-4 text-center">
          Student Experience Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">4.8/5</div>
            <div className="text-sm opacity-90">Overall Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">95%</div>
            <div className="text-sm opacity-90">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">98%</div>
            <div className="text-sm opacity-90">Faculty Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">92%</div>
            <div className="text-sm opacity-90">Career Readiness</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;