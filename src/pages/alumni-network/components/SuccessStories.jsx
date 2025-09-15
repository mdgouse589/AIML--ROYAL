import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Rahul Krishnan",
      currentRole: "Principal Data Scientist",
      company: "Amazon",
      location: "Seattle, USA",
      graduationYear: "2017",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      careerTimeline: [
        { year: "2017", role: "ML Engineer", company: "Flipkart", location: "Bangalore" },
        { year: "2019", role: "Senior Data Scientist", company: "Uber", location: "Hyderabad" },
        { year: "2021", role: "Lead ML Engineer", company: "Amazon", location: "Seattle" },
        { year: "2023", role: "Principal Data Scientist", company: "Amazon", location: "Seattle" }
      ],
      testimonial: `The AIML program at GM University provided me with a solid foundation in both theoretical concepts and practical applications. The hands-on projects and industry exposure prepared me well for the challenges in the tech industry. Today, I lead a team of 15 engineers working on recommendation systems that serve millions of customers.`,
      achievements: [
        "Led development of Amazon\'s next-gen recommendation engine",
        "Published 8 research papers in top ML conferences",
        "Mentored 50+ junior engineers and data scientists",
        "Filed 12 patents in machine learning and AI"
      ],
      linkedinUrl: "https://linkedin.com/in/rahulkrishnan"
    },
    {
      id: 2,
      name: "Ananya Gupta",
      currentRole: "AI Research Director",
      company: "OpenAI",
      location: "San Francisco, USA",
      graduationYear: "2018",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      careerTimeline: [
        { year: "2018", role: "Research Intern", company: "Google Research", location: "Mountain View" },
        { year: "2019", role: "AI Researcher", company: "DeepMind", location: "London" },
        { year: "2021", role: "Senior Research Scientist", company: "OpenAI", location: "San Francisco" },
        { year: "2024", role: "AI Research Director", company: "OpenAI", location: "San Francisco" }
      ],
      testimonial: `GM University's AIML program shaped my research mindset and gave me the confidence to pursue cutting-edge AI research. The faculty's guidance and the collaborative environment helped me develop critical thinking skills that are essential in research. I'm now working on the next generation of AI systems that will transform how we interact with technology.`,
      achievements: [
        "Co-authored GPT-4 research paper with 10,000+ citations",
        "Led breakthrough research in multimodal AI systems",
        "Keynote speaker at 15+ international AI conferences",
        "Recipient of MIT Technology Review Innovator Under 35 award"
      ],
      linkedinUrl: "https://linkedin.com/in/ananyagupta"
    },
    {
      id: 3,
      name: "Vikram Singh",
      currentRole: "Founder & CEO",
      company: "NeuralTech Solutions",
      location: "Bangalore, India",
      graduationYear: "2019",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      careerTimeline: [
        { year: "2019", role: "ML Engineer", company: "Microsoft", location: "Hyderabad" },
        { year: "2020", role: "Senior AI Engineer", company: "Microsoft", location: "Hyderabad" },
        { year: "2021", role: "Co-founder", company: "NeuralTech Solutions", location: "Bangalore" },
        { year: "2024", role: "Founder & CEO", company: "NeuralTech Solutions", location: "Bangalore" }
      ],
      testimonial: `The entrepreneurial spirit fostered at GM University's AIML department gave me the confidence to start my own company. The technical foundation, combined with the business acumen developed through various projects, helped me identify market opportunities and build solutions that matter. Today, NeuralTech serves 200+ enterprise clients globally.`,
      achievements: [
        "Built AI platform serving 200+ enterprise clients",
        "Raised $25M in Series A funding from top VCs",
        "Created 150+ jobs in AI and machine learning",
        "Featured in Forbes 30 Under 30 Asia list"
      ],
      linkedinUrl: "https://linkedin.com/in/vikramsingh"
    }
  ];

  const currentStory = successStories?.[selectedStory];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Star" size={20} className="text-primary" />
            <span className="text-primary font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Journeys That <span className="text-gradient-gold">Inspire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our alumni transformed their passion for AI/ML into remarkable career achievements across the globe.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Alumni Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Featured Alumni</h3>
            <div className="space-y-4">
              {successStories?.map((story, index) => (
                <div
                  key={story?.id}
                  onClick={() => setSelectedStory(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedStory === index
                      ? 'bg-primary/10 border-2 border-primary shadow-royal'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={story?.image}
                      alt={story?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">{story?.name}</h4>
                      <p className="text-sm text-gray-600 truncate">{story?.currentRole}</p>
                      <p className="text-xs text-gray-500">{story?.company}</p>
                    </div>
                    {selectedStory === index && (
                      <Icon name="ChevronRight" size={20} className="text-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-8">
              {/* Header */}
              <div className="flex items-start space-x-6 mb-8">
                <Image
                  src={currentStory?.image}
                  alt={currentStory?.name}
                  className="w-24 h-24 rounded-xl object-cover shadow-royal"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentStory?.name}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{currentStory?.currentRole}</p>
                  <p className="text-gray-600 mb-2">{currentStory?.company} • {currentStory?.location}</p>
                  <p className="text-sm text-gray-500">Class of {currentStory?.graduationYear}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    LinkedIn Profile
                  </Button>
                </div>
              </div>

              {/* Career Timeline */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="text-primary mr-2" />
                  Career Progression
                </h4>
                <div className="space-y-4">
                  {currentStory?.careerTimeline?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-16 text-sm font-medium text-primary">
                        {step?.year}
                      </div>
                      <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{step?.role}</p>
                        <p className="text-sm text-gray-600">{step?.company} • {step?.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Quote" size={20} className="text-primary mr-2" />
                  Personal Message
                </h4>
                <blockquote className="text-gray-700 italic leading-relaxed bg-white p-6 rounded-lg border-l-4 border-primary">
                  "{currentStory?.testimonial}"
                </blockquote>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Award" size={20} className="text-primary mr-2" />
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentStory?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                      <Icon name="CheckCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;