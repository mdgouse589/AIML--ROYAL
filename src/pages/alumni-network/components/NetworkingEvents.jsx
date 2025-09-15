import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NetworkingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: 'Calendar' },
    { id: 'networking', name: 'Networking', icon: 'Users' },
    { id: 'webinar', name: 'Webinars', icon: 'Video' },
    { id: 'mentorship', name: 'Mentorship', icon: 'UserCheck' },
    { id: 'workshop', name: 'Workshops', icon: 'BookOpen' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI/ML Career Networking Mixer",
      type: "networking",
      date: "2024-10-15",
      time: "18:00 - 21:00",
      location: "Bangalore Tech Hub",
      mode: "In-Person",
      attendees: 85,
      maxAttendees: 100,
      description: "Connect with fellow AIML alumni working in top tech companies. Share experiences, explore opportunities, and build lasting professional relationships.",
      speakers: [
        { name: "Priya Sharma", role: "Senior ML Engineer, Google", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
        { name: "Arjun Patel", role: "AI Research Scientist, Microsoft", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" }
      ],
      tags: ["Networking", "Career Growth", "Tech Industry"],
      registrationFee: "Free",
      status: "open"
    },
    {
      id: 2,
      title: "Deep Learning in Production: Best Practices",
      type: "webinar",
      date: "2024-10-22",
      time: "19:00 - 20:30",
      location: "Online",
      mode: "Virtual",
      attendees: 245,
      maxAttendees: 500,
      description: "Learn from industry experts about deploying and scaling deep learning models in production environments. Includes Q&A session with alumni working at FAANG companies.",
      speakers: [
        { name: "Rahul Krishnan", role: "Principal Data Scientist, Amazon", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
        { name: "Sneha Reddy", role: "Founder & CEO, TechVision AI", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
      ],
      tags: ["Deep Learning", "MLOps", "Production Systems"],
      registrationFee: "Free",
      status: "open"
    },
    {
      id: 3,
      title: "Alumni Mentorship Program Launch",
      type: "mentorship",
      date: "2024-10-28",
      time: "16:00 - 18:00",
      location: "GM University Campus",
      mode: "Hybrid",
      attendees: 120,
      maxAttendees: 150,
      description: "Official launch of our structured mentorship program connecting current students with successful alumni. Learn about the program structure and sign up as a mentor or mentee.",
      speakers: [
        { name: "Dr. Ananya Gupta", role: "AI Research Director, OpenAI", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
        { name: "Prof. Rajesh Kumar", role: "Head of AIML Department", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" }
      ],
      tags: ["Mentorship", "Student Support", "Career Guidance"],
      registrationFee: "Free",
      status: "open"
    },
    {
      id: 4,
      title: "Entrepreneurship in AI: From Idea to IPO",
      type: "workshop",
      date: "2024-11-05",
      time: "09:00 - 17:00",
      location: "Innovation Hub, Hyderabad",
      mode: "In-Person",
      attendees: 45,
      maxAttendees: 60,
      description: "Full-day workshop covering the journey from AI startup idea to successful exit. Includes pitch sessions, investor panels, and networking with successful AI entrepreneurs.",
      speakers: [
        { name: "Vikram Singh", role: "Founder & CEO, NeuralTech Solutions", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
        { name: "Kavya Nair", role: "Partner, Sequoia Capital", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
      ],
      tags: ["Entrepreneurship", "Startups", "Funding", "AI Business"],
      registrationFee: "₹2,500",
      status: "filling-fast"
    },
    {
      id: 5,
      title: "Global Alumni Virtual Reunion 2024",
      type: "networking",
      date: "2024-11-12",
      time: "20:00 - 22:00",
      location: "Online",
      mode: "Virtual",
      attendees: 380,
      maxAttendees: 1000,
      description: "Annual virtual reunion bringing together AIML alumni from around the world. Features breakout rooms by graduation year, industry panels, and special recognition ceremony.",
      speakers: [
        { name: "Multiple Alumni Speakers", role: "Various Industries", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop" }
      ],
      tags: ["Reunion", "Global Network", "Recognition"],
      registrationFee: "Free",
      status: "open"
    },
    {
      id: 6,
      title: "Research Collaboration Symposium",
      type: "workshop",
      date: "2024-11-18",
      time: "10:00 - 16:00",
      location: "GM University Research Center",
      mode: "In-Person",
      attendees: 65,
      maxAttendees: 80,
      description: "Explore research collaboration opportunities between alumni in academia and industry. Includes poster sessions, research presentations, and partnership discussions.",
      speakers: [
        { name: "Dr. Ananya Gupta", role: "AI Research Director, OpenAI", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
        { name: "Dr. Suresh Patel", role: "Research Scientist, Google DeepMind", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" }
      ],
      tags: ["Research", "Academia", "Collaboration", "Innovation"],
      registrationFee: "₹1,500",
      status: "open"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents?.filter(event => event?.type === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'filling-fast': return 'bg-orange-100 text-orange-800';
      case 'full': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open Registration';
      case 'filling-fast': return 'Filling Fast';
      case 'full': return 'Registration Full';
      default: return 'Unknown Status';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Calendar" size={20} className="text-primary" />
            <span className="text-primary font-medium">Networking Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect, Learn & <span className="text-gradient-gold">Grow Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our vibrant community of AIML professionals through exclusive networking events, webinars, and mentorship programs.
          </p>
        </div>

        {/* Event Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {eventCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-white shadow-royal'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredEvents?.map((event) => (
            <div key={event?.id} className="bg-gray-50 rounded-xl p-8 card-hover">
              {/* Event Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event?.status)}`}>
                      {getStatusText(event?.status)}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {event?.mode}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event?.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event?.description}</p>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={18} className="text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">{formatDate(event?.date)}</p>
                    <p className="text-sm text-gray-600">{event?.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">{event?.location}</p>
                    <p className="text-sm text-gray-600">{event?.mode} Event</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={18} className="text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">{event?.attendees}/{event?.maxAttendees} Registered</p>
                    <p className="text-sm text-gray-600">Attendees</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CreditCard" size={18} className="text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">{event?.registrationFee}</p>
                    <p className="text-sm text-gray-600">Registration</p>
                  </div>
                </div>
              </div>

              {/* Speakers */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="Mic" size={16} className="text-primary mr-2" />
                  Featured Speakers
                </h4>
                <div className="flex flex-wrap gap-3">
                  {event?.speakers?.map((speaker, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white rounded-lg p-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {speaker?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{speaker?.name}</p>
                        <p className="text-xs text-gray-600">{speaker?.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {event?.tags?.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                  iconName="UserPlus"
                  iconPosition="left"
                  disabled={event?.status === 'full'}
                >
                  {event?.status === 'full' ? 'Registration Full' : 'Register Now'}
                </Button>
                <Button
                  variant="outline"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Host an Event?</h3>
            <p className="text-lg mb-6 opacity-90">
              Share your expertise with fellow alumni and current students by hosting a workshop, webinar, or networking event.
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="Plus"
              iconPosition="left"
            >
              Propose an Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkingEvents;