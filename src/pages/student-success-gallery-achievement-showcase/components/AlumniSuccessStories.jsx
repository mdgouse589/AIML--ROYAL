import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AlumniSuccessStories = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const alumniStories = [
    {
      id: 1,
      name: "Rajesh Kumar",
      batch: "2020",
      currentRole: "Senior ML Engineer",
      company: "Google",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      packageRange: "₹35-40 LPA",
      careerPath: [
        { year: "2020", role: "Software Engineer", company: "TCS" },
        { year: "2021", role: "ML Engineer", company: "Flipkart" },
        { year: "2023", role: "Senior ML Engineer", company: "Google" }
      ],
      achievements: [
        "Led development of recommendation system serving 100M+ users",
        "Published 3 papers in top-tier ML conferences",
        "Mentor for Google Summer of Code",
        "Speaker at major tech conferences"
      ],
      testimonial: `The AIML program at GM University provided me with a strong foundation in both theoretical concepts and practical applications. The faculty's guidance and the hands-on project experience were instrumental in shaping my career. Today, I'm working on cutting-edge ML systems at Google, and I owe much of my success to the solid foundation I received here.`,
      linkedIn: "https://linkedin.com/in/rajesh-kumar-ml",
      email: "rajesh.kumar@google.com",
      specialization: ["Machine Learning", "Recommendation Systems", "Deep Learning"],
      mentorshipAreas: ["Career Guidance", "Technical Interviews", "Research Opportunities"]
    },
    {
      id: 2,
      name: "Priya Patel",
      batch: "2019",
      currentRole: "AI Research Scientist",
      company: "Microsoft Research",
      location: "Redmond, USA",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c8e8e2?w=400&h=400&fit=crop&crop=face",
      packageRange: "$120K-140K",
      careerPath: [
        { year: "2019", role: "Research Intern", company: "IISc Bangalore" },
        { year: "2020", role: "AI Engineer", company: "Microsoft India" },
        { year: "2022", role: "AI Research Scientist", company: "Microsoft Research" }
      ],
      achievements: [
        "PhD in Computer Vision from Stanford University",
        "15+ publications in CVPR, ICCV, NeurIPS",
        "Recipient of Microsoft Research Fellowship",
        "Patent holder for 5 computer vision innovations"
      ],
      testimonial: `The research-oriented approach at GM University's AIML department ignited my passion for computer vision research. The faculty encouraged independent thinking and provided opportunities to work on challenging problems. This foundation helped me secure a research position at Microsoft and pursue my PhD at Stanford.`,
      linkedIn: "https://linkedin.com/in/priya-patel-cv",
      email: "priya.patel@microsoft.com",
      specialization: ["Computer Vision", "Deep Learning", "Medical Imaging"],
      mentorshipAreas: ["Research Methodology", "PhD Applications", "Academic Career"]
    },
    {
      id: 3,
      name: "Arjun Mehta",
      batch: "2021",
      currentRole: "Co-Founder & CTO",
      company: "HealthTech AI (Startup)",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      packageRange: "Equity + ₹25L",
      careerPath: [
        { year: "2021", role: "ML Engineer", company: "Zomato" },
        { year: "2022", role: "Senior ML Engineer", company: "Swiggy" },
        { year: "2023", role: "Co-Founder & CTO", company: "HealthTech AI" }
      ],
      achievements: [
        "Raised $2M seed funding for HealthTech AI",
        "Built AI diagnostic platform used by 50+ hospitals",
        "Featured in Forbes 30 Under 30",
        "Winner of multiple startup competitions"
      ],
      testimonial: `The entrepreneurial mindset fostered at GM University's AIML department was crucial in my journey. The project-based learning and industry exposure gave me the confidence to start my own company. Today, our AI-powered healthcare solutions are making a real impact in improving patient outcomes.`,
      linkedIn: "https://linkedin.com/in/arjun-mehta-startup",
      email: "arjun@healthtechai.com",
      specialization: ["Healthcare AI", "Startup Strategy", "Product Development"],
      mentorshipAreas: ["Entrepreneurship", "Startup Funding", "Product Strategy"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      batch: "2018",
      currentRole: "Principal Data Scientist",
      company: "Amazon",
      location: "Seattle, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      packageRange: "$180K-200K",
      careerPath: [
        { year: "2018", role: "Data Analyst", company: "Flipkart" },
        { year: "2019", role: "Data Scientist", company: "Amazon India" },
        { year: "2021", role: "Senior Data Scientist", company: "Amazon USA" },
        { year: "2023", role: "Principal Data Scientist", company: "Amazon" }
      ],
      achievements: [
        "Led data science initiatives for Amazon Prime",
        "Developed ML models impacting $1B+ revenue",
        "Mentor for 20+ junior data scientists",
        "Speaker at major data science conferences"
      ],
      testimonial: `The comprehensive curriculum at GM University covering both AI and ML gave me a competitive edge in the industry. The emphasis on practical applications and real-world problem-solving prepared me well for the challenges at Amazon. I'm now leading data science initiatives that impact millions of customers globally.`,
      linkedIn: "https://linkedin.com/in/sneha-reddy-ds",
      email: "sneha.reddy@amazon.com",
      specialization: ["Data Science", "Machine Learning", "Business Analytics"],
      mentorshipAreas: ["Data Science Career", "Industry Transition", "Leadership"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      batch: "2020",
      currentRole: "Robotics Engineer",
      company: "Tesla",
      location: "Austin, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      packageRange: "$140K-160K",
      careerPath: [
        { year: "2020", role: "Software Engineer", company: "Mahindra" },
        { year: "2021", role: "Robotics Engineer", company: "Boston Dynamics" },
        { year: "2023", role: "Robotics Engineer", company: "Tesla" }
      ],
      achievements: [
        "Contributed to Tesla\'s Autopilot development",
        "Expert in computer vision for autonomous vehicles",
        "Published research on robotic perception",
        "Patent holder for autonomous navigation systems"
      ],
      testimonial: `The interdisciplinary approach at GM University, combining AI, ML, and robotics concepts, perfectly aligned with my career aspirations. The strong foundation in computer vision and machine learning has been invaluable in my work on autonomous vehicles at Tesla.`,
      linkedIn: "https://linkedin.com/in/vikram-singh-robotics",
      email: "vikram.singh@tesla.com",
      specialization: ["Robotics", "Computer Vision", "Autonomous Systems"],
      mentorshipAreas: ["Robotics Career", "Autonomous Vehicles", "International Opportunities"]
    },
    {
      id: 6,
      name: "Anita Joshi",
      batch: "2019",
      currentRole: "AI Product Manager",
      company: "Meta",
      location: "Menlo Park, USA",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      packageRange: "$160K-180K",
      careerPath: [
        { year: "2019", role: "Product Analyst", company: "Paytm" },
        { year: "2020", role: "Product Manager", company: "Uber" },
        { year: "2022", role: "AI Product Manager", company: "Meta" }
      ],
      achievements: [
        "Led AI product strategy for Instagram Reels",
        "Managed products used by 2B+ users",
        "MBA from Wharton School",
        "Recognized as Top Product Manager by ProductHunt"
      ],
      testimonial: `The AIML program's focus on both technical depth and practical applications gave me a unique perspective that's invaluable in product management. Understanding the technical nuances of AI/ML helps me make better product decisions and communicate effectively with engineering teams at Meta.`,
      linkedIn: "https://linkedin.com/in/anita-joshi-pm",
      email: "anita.joshi@meta.com",
      specialization: ["AI Product Strategy", "Product Management", "User Experience"],
      mentorshipAreas: ["Product Management", "Career Transition", "MBA Applications"]
    }
  ];

  const AlumniModal = ({ alumni, onClose }) => {
    if (!alumni) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div className="royal-gradient p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent">
                    <Image
                      src={alumni?.image}
                      alt={alumni?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Star" size={20} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-playfair font-bold text-white mb-2">
                    {alumni?.name}
                  </h2>
                  <p className="text-accent text-lg mb-2">{alumni?.currentRole}</p>
                  <p className="text-white/90 mb-2">{alumni?.company} • {alumni?.location}</p>
                  <p className="text-accent font-semibold">Batch of {alumni?.batch}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Career Journey
                  </h3>
                  <div className="space-y-3">
                    {alumni?.careerPath?.map((step, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step?.year?.slice(-2)}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{step?.role}</div>
                          <div className="text-sm text-muted-foreground">{step?.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Award" size={20} className="text-accent" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {alumni?.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="MessageSquare" size={20} className="text-primary" />
                  Alumni Testimonial
                </h3>
                <blockquote className="bg-muted p-4 rounded-lg italic text-muted-foreground border-l-4 border-primary">
                  "{alumni?.testimonial}"
                </blockquote>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Code" size={20} className="text-secondary" />
                    Specialization Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {alumni?.specialization?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-accent" />
                    Mentorship Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {alumni?.mentorshipAreas?.map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Package Range:</span> {alumni?.packageRange}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Icon name="Linkedin" size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                  <Button size="sm">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Alumni Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumniStories?.map((alumni) => (
          <div
            key={alumni?.id}
            className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedAlumni(alumni)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={alumni?.image}
                alt={alumni?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-xs rounded-md">
                Batch {alumni?.batch}
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 bg-accent text-primary text-xs rounded-md font-semibold">
                {alumni?.packageRange}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-playfair font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {alumni?.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">{alumni?.currentRole}</p>
              <p className="text-sm text-muted-foreground mb-3">{alumni?.company} • {alumni?.location}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {alumni?.specialization?.slice(0, 2)?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
                {alumni?.specialization?.length > 2 && (
                  <span className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                    +{alumni?.specialization?.length - 2}
                  </span>
                )}
              </div>

              <Button size="sm" variant="outline" className="w-full">
                <Icon name="Eye" size={14} className="mr-2" />
                View Success Story
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Alumni Network Stats */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <h3 className="text-xl font-playfair font-bold mb-4 text-center">
          Alumni Network Impact
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">500+</div>
            <div className="text-sm opacity-90">Alumni Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">50+</div>
            <div className="text-sm opacity-90">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">₹18L</div>
            <div className="text-sm opacity-90">Avg Package</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">25+</div>
            <div className="text-sm opacity-90">Startups Founded</div>
          </div>
        </div>
      </div>
      {/* Alumni Modal */}
      <AlumniModal
        alumni={selectedAlumni}
        onClose={() => setSelectedAlumni(null)}
      />
    </div>
  );
};

export default AlumniSuccessStories;