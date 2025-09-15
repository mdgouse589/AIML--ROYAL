import React from 'react';
import Icon from '../../../components/AppIcon';

const IndustryPartnerships = () => {
  const partnerships = [
    {
      id: 1,
      company: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100",
      type: "Research Collaboration",
      description: "Joint research projects in machine learning and cloud computing with access to Google Cloud Platform credits.",
      benefits: ["GCP Credits", "Mentorship Program", "Internship Opportunities", "Guest Lectures"],
      duration: "3 Years",
      status: "Active"
    },
    {
      id: 2,
      company: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100",
      type: "Academic Alliance",
      description: "Microsoft Azure for Students program providing cloud services and AI tools for academic projects.",
      benefits: ["Azure Credits", "AI/ML Tools", "Certification Programs", "Career Support"],
      duration: "5 Years",
      status: "Active"
    },
    {
      id: 3,
      company: "NVIDIA",
      logo: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=100",
      type: "Technology Partnership",
      description: "Access to NVIDIA GPUs, CUDA programming resources, and deep learning frameworks.",
      benefits: ["GPU Access", "CUDA Training", "DLI Courses", "Research Support"],
      duration: "2 Years",
      status: "Active"
    },
    {
      id: 4,
      company: "IBM",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100",
      type: "Skills Development",
      description: "IBM SkillsBuild platform access and Watson AI services for educational purposes.",
      benefits: ["Watson AI", "Skills Platform", "Industry Badges", "Project Collaboration"],
      duration: "4 Years",
      status: "Active"
    },
    {
      id: 5,
      company: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100",
      type: "Cloud Education",
      description: "AWS Educate program providing cloud computing resources and training materials.",
      benefits: ["AWS Credits", "Training Resources", "Certification Prep", "Career Pathways"],
      duration: "3 Years",
      status: "Active"
    },
    {
      id: 6,
      company: "Intel",
      logo: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=100",
      type: "Hardware Partnership",
      description: "Intel AI DevCloud access and optimization tools for machine learning workloads.",
      benefits: ["DevCloud Access", "Optimization Tools", "Hardware Training", "Research Grants"],
      duration: "2 Years",
      status: "Renewed"
    }
  ];

  const certifications = [
    {
      name: "Google Cloud Professional ML Engineer",
      provider: "Google Cloud",
      level: "Professional",
      duration: "3 Months",
      passRate: "85%"
    },
    {
      name: "AWS Certified Machine Learning",
      provider: "Amazon Web Services",
      level: "Specialty",
      duration: "4 Months",
      passRate: "78%"
    },
    {
      name: "Microsoft Azure AI Engineer",
      provider: "Microsoft",
      level: "Associate",
      duration: "2 Months",
      passRate: "92%"
    },
    {
      name: "NVIDIA Deep Learning Institute",
      provider: "NVIDIA",
      level: "Fundamentals",
      duration: "6 Weeks",
      passRate: "95%"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Industry Partnerships & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic collaborations with leading technology companies to provide students with real-world experience and industry-recognized certifications.
          </p>
        </div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partnerships?.map((partnership) => (
            <div key={partnership?.id} className="bg-card rounded-xl royal-shadow p-6 hover:royal-shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={partnership?.logo}
                    alt={partnership?.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{partnership?.company}</h3>
                    <p className="text-sm text-muted-foreground">{partnership?.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  partnership?.status === 'Active' ?'bg-success/10 text-success' :'bg-accent/10 text-accent'
                }`}>
                  {partnership?.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 text-sm">{partnership?.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium text-foreground">{partnership?.duration}</span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {partnership?.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <Icon name="CheckCircle" size={12} className="text-success" />
                        <span className="text-xs text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-card rounded-xl royal-shadow p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Industry Certifications Available
            </h3>
            <p className="text-muted-foreground">
              Prepare for and earn industry-recognized certifications through our comprehensive training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="p-4 bg-background rounded-lg border border-border">
                <div className="text-center mb-4">
                  <h4 className="font-medium text-foreground mb-2">{cert?.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert?.provider}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium text-foreground">{cert?.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{cert?.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pass Rate:</span>
                    <span className="font-medium text-success">{cert?.passRate}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: cert?.passRate }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartnerships;