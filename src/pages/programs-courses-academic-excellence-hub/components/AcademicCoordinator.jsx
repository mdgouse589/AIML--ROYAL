import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AcademicCoordinator = () => {
  const coordinator = {
    name: "Dr. Rajesh Kumar Sharma",
    designation: "Academic Coordinator & Professor",
    department: "Department of AI & Machine Learning",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    email: "rajesh.sharma@gmuniversity.edu.in",
    phone: "+91 98765 43210",
    office: "Room 301, AIML Block",
    officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
    experience: "15+ Years",
    specialization: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
    education: [
      "Ph.D. in Computer Science, IIT Delhi",
      "M.Tech in AI, IISc Bangalore", 
      "B.Tech in CSE, NIT Warangal"
    ],
    achievements: [
      "Published 50+ research papers in top-tier journals",
      "Principal Investigator for 8 funded research projects",
      "IEEE Senior Member & ACM Distinguished Scientist",
      "Best Teacher Award 2023, GM University"
    ],
    responsibilities: [
      "Academic program oversight and curriculum development",
      "Student academic counseling and career guidance",
      "Industry collaboration and partnership management",
      "Research project coordination and supervision"
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Academic Coordinator
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated academic coordinator who guides students through their educational journey and ensures academic excellence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl royal-shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Profile Image Section */}
              <div className="lg:w-1/3 bg-gradient-to-br from-primary to-secondary p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={coordinator?.image}
                    alt={coordinator?.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-accent mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Award" size={16} className="text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-white mb-2">
                  {coordinator?.name}
                </h3>
                <p className="text-accent mb-4">{coordinator?.designation}</p>
                <p className="text-white/80 text-sm">{coordinator?.department}</p>

                {/* Quick Contact */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-white/90">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{coordinator?.experience}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white/90">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">{coordinator?.office}</span>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:w-2/3 p-8">
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Contact" size={20} className="text-primary mr-2" />
                      Contact Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <Icon name="Mail" size={18} className="text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium text-foreground">{coordinator?.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <Icon name="Phone" size={18} className="text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium text-foreground">{coordinator?.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={18} className="text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Office Hours</p>
                          <p className="font-medium text-foreground">{coordinator?.officeHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Brain" size={20} className="text-secondary mr-2" />
                      Areas of Specialization
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coordinator?.specialization?.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="GraduationCap" size={20} className="text-accent mr-2" />
                      Education
                    </h4>
                    <div className="space-y-2">
                      {coordinator?.education?.map((edu, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-muted-foreground">{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Target" size={20} className="text-primary mr-2" />
                      Key Responsibilities
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {coordinator?.responsibilities?.map((responsibility, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={16} className="text-accent mt-0.5" />
                          <span className="text-sm text-muted-foreground">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <Button 
                      className="flex-1 gold-gradient text-primary"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Schedule Meeting
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1"
                      iconName="Mail"
                      iconPosition="left"
                    >
                      Send Email
                    </Button>
                    <Button 
                      variant="secondary"
                      className="flex-1"
                      iconName="Phone"
                      iconPosition="left"
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-8 bg-card rounded-xl royal-shadow p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Trophy" size={20} className="text-accent mr-2" />
              Notable Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coordinator?.achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                  <Icon name="Award" size={16} className="text-accent mt-1" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCoordinator;