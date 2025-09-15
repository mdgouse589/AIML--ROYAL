import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudentActivities = () => {
  const [activeTab, setActiveTab] = useState('clubs');

  const tabs = [
    { id: 'clubs', name: 'Technical Clubs', icon: 'Users' },
    { id: 'societies', name: 'Academic Societies', icon: 'BookOpen' },
    { id: 'leadership', name: 'Leadership Roles', icon: 'Crown' },
    { id: 'events', name: 'Events & Workshops', icon: 'Calendar' }
  ];

  const activities = {
    clubs: [
      {
        id: 1,
        name: "AI/ML Research Club",
        description: "Dedicated to advancing research in artificial intelligence and machine learning through collaborative projects and paper publications.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
        members: 45,
        established: "2019",
        achievements: [
          "Published 12 research papers",
          "Won 3 national competitions",
          "Organized 15 technical workshops"
        ],
        activities: [
          "Weekly research seminars",
          "Collaborative research projects",
          "Industry expert sessions",
          "Conference paper submissions"
        ],
        coordinator: "Dr. Rajesh Kumar",
        president: "Rahul Sharma (Final Year)"
      },
      {
        id: 2,
        name: "Robotics and Automation Club",
        description: "Focuses on building autonomous systems and robotic solutions for real-world applications.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        members: 38,
        established: "2020",
        achievements: [
          "Built 8 functional robots",
          "Won robotics championship",
          "Collaborated with 5 industries"
        ],
        activities: [
          "Robot building workshops",
          "Automation projects",
          "Competition participation",
          "Industry collaboration"
        ],
        coordinator: "Dr. Priya Sharma",
        president: "Vikram Singh (Third Year)"
      },
      {
        id: 3,
        name: "Data Science Society",
        description: "Explores data analytics, visualization, and machine learning applications across various domains.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        members: 52,
        established: "2018",
        achievements: [
          "Completed 20+ data projects",
          "Kaggle competition winners",
          "Industry internship placements"
        ],
        activities: [
          "Data analysis workshops",
          "Kaggle competitions",
          "Industry case studies",
          "Visualization challenges"
        ],
        coordinator: "Dr. Suresh Babu",
        president: "Sneha Reddy (Final Year)"
      }
    ],
    societies: [
      {
        id: 4,
        name: "IEEE Computer Society Student Branch",
        description: "Professional society focused on advancing computing technology and providing networking opportunities.",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
        members: 75,
        established: "2017",
        achievements: [
          "IEEE conference participation",
          "Student paper awards",
          "Professional certifications"
        ],
        activities: [
          "Technical paper presentations",
          "Professional development",
          "Industry networking",
          "Certification programs"
        ],
        coordinator: "Dr. Lakshmi Devi",
        president: "Arjun Kumar (Final Year)"
      },
      {
        id: 5,
        name: "ACM Student Chapter",
        description: "Association for Computing Machinery chapter promoting computer science education and research.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        members: 68,
        established: "2016",
        achievements: [
          "ACM programming contests",
          "Research publication support",
          "International conference participation"
        ],
        activities: [
          "Programming competitions",
          "Research symposiums",
          "Guest lectures",
          "Skill development workshops"
        ],
        coordinator: "Dr. Anand Krishnan",
        president: "Priya Patel (Third Year)"
      }
    ],
    leadership: [
      {
        id: 6,
        name: "Student Council - Technical Secretary",
        description: "Leading technical initiatives and coordinating between students and faculty for academic excellence.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        members: 1,
        established: "Annual Position",
        achievements: [
          "Organized 25+ technical events",
          "Improved student-faculty communication",
          "Launched mentorship programs"
        ],
        activities: [
          "Event coordination",
          "Student representation",
          "Academic policy input",
          "Peer mentoring programs"
        ],
        coordinator: "Dean of Students",
        president: "Anita Joshi (Final Year)"
      },
      {
        id: 7,
        name: "Department Student Representative",
        description: "Representing student interests in departmental decisions and academic policy formulation.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
        members: 5,
        established: "Semester-wise",
        achievements: [
          "Curriculum feedback implementation",
          "Student grievance resolution",
          "Academic resource improvements"
        ],
        activities: [
          "Faculty meetings participation",
          "Student feedback collection",
          "Policy recommendation",
          "Academic support coordination"
        ],
        coordinator: "Head of Department",
        president: "Multiple Representatives"
      }
    ],
    events: [
      {
        id: 8,
        name: "TechFest 2024 - AI/ML Symposium",
        description: "Annual technical festival showcasing cutting-edge research and innovations in AI/ML.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
        members: 200,
        established: "Annual Event",
        achievements: [
          "500+ participants",
          "20+ industry speakers",
          "₹5L in prizes distributed"
        ],
        activities: [
          "Technical paper presentations",
          "Project exhibitions",
          "Industry expert talks",
          "Networking sessions"
        ],
        coordinator: "Event Management Team",
        president: "Organizing Committee"
      },
      {
        id: 9,
        name: "Weekly Tech Talks",
        description: "Regular sessions featuring industry experts, alumni, and faculty sharing insights on latest technologies.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
        members: 100,
        established: "Weekly",
        achievements: [
          "50+ expert sessions",
          "Industry collaboration",
          "Student skill enhancement"
        ],
        activities: [
          "Expert presentations",
          "Q&A sessions",
          "Networking opportunities",
          "Career guidance"
        ],
        coordinator: "Faculty Coordinators",
        president: "Student Volunteers"
      }
    ]
  };

  const ActivityCard = ({ activity }) => (
    <div className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <Image
          src={activity?.image}
          alt={activity?.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-playfair font-bold text-foreground">
            {activity?.name}
          </h3>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Users" size={14} />
              {activity?.members} members
            </div>
            <div>Est. {activity?.established}</div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 text-sm">
          {activity?.description}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Icon name="Trophy" size={16} className="text-accent" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {activity?.achievements?.slice(0, 2)?.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Icon name="CheckCircle" size={12} className="text-secondary mt-0.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Icon name="Activity" size={16} className="text-primary" />
              Activities
            </h4>
            <ul className="space-y-1">
              {activity?.activities?.slice(0, 2)?.map((activityItem, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Icon name="Dot" size={12} className="text-primary mt-0.5 flex-shrink-0" />
                  {activityItem}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="text-muted-foreground">Coordinator:</span>
              <span className="text-foreground font-medium ml-1">{activity?.coordinator}</span>
            </div>
            <Button size="sm" variant="outline">
              <Icon name="ExternalLink" size={14} className="mr-1" />
              Learn More
            </Button>
          </div>
          {activity?.president && (
            <div className="mt-2 text-sm">
              <span className="text-muted-foreground">President:</span>
              <span className="text-primary font-medium ml-1">{activity?.president}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab?.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            {tab?.name}
          </button>
        ))}
      </div>
      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities?.[activeTab]?.map((activity) => (
          <ActivityCard key={activity?.id} activity={activity} />
        ))}
      </div>
      {/* Activity Statistics */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <h3 className="text-xl font-playfair font-bold mb-4 text-center">
          Student Engagement Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">15+</div>
            <div className="text-sm opacity-90">Active Clubs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">300+</div>
            <div className="text-sm opacity-90">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">50+</div>
            <div className="text-sm opacity-90">Events/Year</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">85%</div>
            <div className="text-sm opacity-90">Participation Rate</div>
          </div>
        </div>
      </div>
      {/* Join Activities CTA */}
      <div className="bg-white rounded-xl royal-shadow p-8 text-center">
        <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
          Join Our Vibrant Community
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Become part of our dynamic student community and enhance your learning experience through 
          technical clubs, academic societies, and leadership opportunities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button>
            <Icon name="UserPlus" size={16} className="mr-2" />
            Join a Club
          </Button>
          <Button variant="outline">
            <Icon name="Calendar" size={16} className="mr-2" />
            View Events
          </Button>
          <Button variant="outline">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Contact Coordinators
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentActivities;