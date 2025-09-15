import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const achievements = {
    '2024': [
      {
        id: 1,
        title: "National AI Hackathon - First Place",
        description: "Team \'Neural Pioneers\' won the prestigious National AI Hackathon with their healthcare diagnosis system.",
        date: "March 15, 2024",
        category: "Competition",
        icon: "Trophy",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
        participants: ["Rahul Sharma", "Priya Patel", "Arjun Kumar"],
        prize: "₹5,00,000 + Incubation Support",
        organizer: "Ministry of Electronics & IT"
      },
      {
        id: 2,
        title: "IEEE Research Paper Publication",
        description: "Student research on \'Deep Learning for Medical Image Analysis\' published in IEEE Transactions.",
        date: "February 28, 2024",
        category: "Research",
        icon: "BookOpen",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        participants: ["Sneha Reddy", "Dr. Rajesh Kumar"],
        prize: "Impact Factor: 4.2",
        organizer: "IEEE Computer Society"
      },
      {
        id: 3,
        title: "Google Summer of Code Selection",
        description: "Three students selected for Google Summer of Code program working on open-source ML projects.",
        date: "May 20, 2024",
        category: "Internship",
        icon: "Code",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
        participants: ["Vikram Singh", "Anita Joshi", "Amit Gupta"],
        prize: "$3,000 Stipend Each",
        organizer: "Google Open Source"
      },
      {
        id: 4,
        title: "Smart India Hackathon Winners",
        description: "Multiple teams qualified for national finals with innovative solutions for government challenges.",
        date: "August 10, 2024",
        category: "Competition",
        icon: "Award",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        participants: ["Multiple Teams", "15 Students"],
        prize: "₹1,00,000 per team",
        organizer: "Government of India"
      }
    ],
    '2023': [
      {
        id: 5,
        title: "Microsoft Imagine Cup - Regional Winners",
        description: "Team developed AI-powered accessibility solution for visually impaired users.",
        date: "April 12, 2023",
        category: "Competition",
        icon: "Trophy",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
        participants: ["Kavya Nair", "Rohit Mehta", "Deepak Rao"],
        prize: "Azure Credits + Mentorship",
        organizer: "Microsoft"
      },
      {
        id: 6,
        title: "ACM ICPC World Finals Qualification",
        description: "Programming team qualified for ACM ICPC World Finals representing India.",
        date: "November 5, 2023",
        category: "Competition",
        icon: "Code2",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        participants: ["Meera Iyer", "Karthik Shetty", "Pooja Agarwal"],
        prize: "World Finals Participation",
        organizer: "ACM"
      },
      {
        id: 7,
        title: "Patent Filed for ML Algorithm",
        description: "Novel machine learning algorithm for fraud detection receives patent application approval.",
        date: "September 18, 2023",
        category: "Research",
        icon: "FileText",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
        participants: ["Ravi Kumar", "Dr. Priya Sharma"],
        prize: "Patent Application No. 202341065432",
        organizer: "Indian Patent Office"
      }
    ],
    '2022': [
      {
        id: 8,
        title: "TechCrunch Startup Battlefield",
        description: "Student startup \'AgriTech Solutions\' pitched at TechCrunch Disrupt and secured seed funding.",
        date: "October 20, 2022",
        category: "Entrepreneurship",
        icon: "Rocket",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
        participants: ["Sanjana Pillai", "Harish Patil", "Divya Sharma"],
        prize: "$50,000 Seed Funding",
        organizer: "TechCrunch"
      },
      {
        id: 9,
        title: "Best Student Paper Award",
        description: "Outstanding research paper on computer vision applications in agriculture wins best paper award.",
        date: "December 8, 2022",
        category: "Research",
        icon: "Award",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        participants: ["Manoj Reddy", "Dr. Geetha Rani"],
        prize: "₹25,000 + Certificate",
        organizer: "International Conference on AI"
      }
    ]
  };

  const years = Object.keys(achievements)?.sort((a, b) => b - a);

  const getCategoryColor = (category) => {
    const colors = {
      'Competition': 'bg-accent text-primary',
      'Research': 'bg-secondary text-white',
      'Internship': 'bg-primary text-white',
      'Entrepreneurship': 'bg-green-500 text-white'
    };
    return colors?.[category] || 'bg-muted text-muted-foreground';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Competition': 'Trophy',
      'Research': 'BookOpen',
      'Internship': 'Briefcase',
      'Entrepreneurship': 'Rocket'
    };
    return icons?.[category] || 'Award';
  };

  return (
    <div className="space-y-6">
      {/* Year Selector */}
      <div className="flex justify-center">
        <div className="flex bg-muted rounded-lg p-1">
          {years?.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-8">
          {achievements?.[selectedYear]?.map((achievement, index) => (
            <div key={achievement?.id} className="relative flex gap-6">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full border-4 border-primary flex items-center justify-center royal-shadow">
                  <Icon name={achievement?.icon} size={24} className="text-primary" />
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={achievement?.image}
                      alt={achievement?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement?.category)}`}>
                            {achievement?.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{achievement?.date}</span>
                        </div>
                        <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                          {achievement?.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {achievement?.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                          <Icon name="Users" size={14} className="text-primary" />
                          Participants
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          {Array.isArray(achievement?.participants) 
                            ? achievement?.participants?.join(', ')
                            : achievement?.participants
                          }
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                          <Icon name="Award" size={14} className="text-accent" />
                          Recognition
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          {achievement?.prize}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Organized by:</span> {achievement?.organizer}
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-primary cursor-pointer hover:text-primary/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Achievement Stats */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <h3 className="text-xl font-playfair font-bold mb-4 text-center">
          {selectedYear} Achievement Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">
              {achievements?.[selectedYear]?.filter(a => a?.category === 'Competition')?.length || 0}
            </div>
            <div className="text-sm opacity-90">Competitions Won</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">
              {achievements?.[selectedYear]?.filter(a => a?.category === 'Research')?.length || 0}
            </div>
            <div className="text-sm opacity-90">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">
              {achievements?.[selectedYear]?.filter(a => a?.category === 'Internship')?.length || 0}
            </div>
            <div className="text-sm opacity-90">Internships</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">
              {achievements?.[selectedYear]?.filter(a => a?.category === 'Entrepreneurship')?.length || 0}
            </div>
            <div className="text-sm opacity-90">Startups</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementTimeline;