import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "International Conference on AI & Machine Learning",
      type: "Conference",
      date: "2024-12-15",
      time: "09:00 AM - 06:00 PM",
      venue: "GM University Auditorium",
      description: "Join leading researchers and industry experts for a comprehensive exploration of the latest advances in artificial intelligence and machine learning technologies.",
      speakers: [
        { name: "Dr. Andrew Ng", affiliation: "Stanford University", topic: "The Future of AI Education" },
        { name: "Dr. Fei-Fei Li", affiliation: "Stanford HAI", topic: "Human-Centered AI" },
        { name: "Dr. Yoshua Bengio", affiliation: "University of Montreal", topic: "Deep Learning Frontiers" }
      ],
      agenda: [
        { time: "09:00 - 09:30", activity: "Registration & Welcome Coffee" },
        { time: "09:30 - 10:30", activity: "Keynote: The Future of AI Education" },
        { time: "10:30 - 11:00", activity: "Coffee Break" },
        { time: "11:00 - 12:00", activity: "Panel: Industry Applications of AI" },
        { time: "12:00 - 01:00", activity: "Lunch Break" },
        { time: "01:00 - 02:00", activity: "Research Paper Presentations" },
        { time: "02:00 - 03:00", activity: "Workshop: Hands-on ML" },
        { time: "03:00 - 03:30", activity: "Tea Break" },
        { time: "03:30 - 04:30", activity: "Keynote: Human-Centered AI" },
        { time: "04:30 - 05:30", activity: "Networking Session" },
        { time: "05:30 - 06:00", activity: "Closing Ceremony" }
      ],
      registrationFee: "₹2,500",
      capacity: 300,
      registered: 187,
      tags: ["AI", "Machine Learning", "Research", "Industry"],
      contact: "conference@gmuniversity.edu.in",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "Workshop: Ethical AI Development",
      type: "Workshop",
      date: "2024-11-28",
      time: "02:00 PM - 05:00 PM",
      venue: "Research Block - Seminar Hall",
      description: "An intensive workshop focusing on ethical considerations in AI development, bias detection, and responsible AI practices for researchers and developers.",
      speakers: [
        { name: "Dr. Priya Sharma", affiliation: "GM University", topic: "Bias Detection in ML Models" },
        { name: "Dr. Timnit Gebru", affiliation: "DAIR Institute", topic: "Algorithmic Fairness" },
        { name: "Dr. Cathy O\'Neil", affiliation: "Author, Weapons of Math Destruction", topic: "AI Accountability" }
      ],
      agenda: [
        { time: "02:00 - 02:15", activity: "Welcome & Introduction" },
        { time: "02:15 - 03:00", activity: "Lecture: Ethical AI Principles" },
        { time: "03:00 - 03:15", activity: "Break" },
        { time: "03:15 - 04:00", activity: "Hands-on: Bias Detection Tools" },
        { time: "04:00 - 04:45", activity: "Case Studies & Discussion" },
        { time: "04:45 - 05:00", activity: "Q&A and Wrap-up" }
      ],
      registrationFee: "₹500",
      capacity: 50,
      registered: 38,
      tags: ["Ethics", "AI", "Bias", "Fairness"],
      contact: "ethics.workshop@gmuniversity.edu.in",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Research Symposium: Computer Vision Advances",
      type: "Symposium",
      date: "2024-12-05",
      time: "10:00 AM - 04:00 PM",
      venue: "Innovation Lab",
      description: "A research symposium showcasing the latest developments in computer vision, featuring presentations from faculty, students, and industry partners.",
      speakers: [
        { name: "Dr. Vikram Singh", affiliation: "GM University", topic: "Autonomous Vehicle Vision" },
        { name: "Dr. Kaiming He", affiliation: "Meta AI", topic: "Vision Transformers" },
        { name: "Dr. Ross Girshick", affiliation: "Meta AI", topic: "Object Detection Evolution" }
      ],
      agenda: [
        { time: "10:00 - 10:30", activity: "Registration & Coffee" },
        { time: "10:30 - 11:30", activity: "Keynote: Vision Transformers" },
        { time: "11:30 - 12:30", activity: "Student Research Presentations" },
        { time: "12:30 - 01:30", activity: "Lunch & Poster Session" },
        { time: "01:30 - 02:30", activity: "Industry Panel Discussion" },
        { time: "02:30 - 03:30", activity: "Demo Session: Latest Projects" },
        { time: "03:30 - 04:00", activity: "Closing & Awards" }
      ],
      registrationFee: "Free",
      capacity: 100,
      registered: 72,
      tags: ["Computer Vision", "Research", "Students", "Industry"],
      contact: "cv.symposium@gmuniversity.edu.in",
      registrationLink: "#"
    },
    {
      id: 4,
      title: "Industry Connect: AI in Healthcare",
      type: "Industry Meet",
      date: "2024-11-22",
      time: "11:00 AM - 03:00 PM",
      venue: "Conference Hall A",
      description: "Connect with healthcare industry leaders to explore AI applications in medical diagnosis, drug discovery, and patient care management.",
      speakers: [
        { name: "Dr. Regina Barzilay", affiliation: "MIT CSAIL", topic: "AI for Drug Discovery" },
        { name: "Dr. Daphne Koller", affiliation: "insitro", topic: "Machine Learning in Medicine" },
        { name: "Dr. Blackford Middleton", affiliation: "Apervita", topic: "Healthcare Data Analytics" }
      ],
      agenda: [
        { time: "11:00 - 11:30", activity: "Welcome & Networking" },
        { time: "11:30 - 12:30", activity: "Keynote: AI for Drug Discovery" },
        { time: "12:30 - 01:00", activity: "Industry Showcase" },
        { time: "01:00 - 02:00", activity: "Lunch & B2B Meetings" },
        { time: "02:00 - 02:45", activity: "Panel: Career Opportunities" },
        { time: "02:45 - 03:00", activity: "Closing Remarks" }
      ],
      registrationFee: "₹1,000",
      capacity: 80,
      registered: 65,
      tags: ["Healthcare", "Industry", "Career", "Networking"],
      contact: "industry.connect@gmuniversity.edu.in",
      registrationLink: "#"
    },
    {
      id: 5,
      title: "Hackathon: Smart City Solutions",
      type: "Hackathon",
      date: "2024-12-20",
      time: "09:00 AM - 09:00 PM",
      venue: "Innovation Lab & Computer Labs",
      description: "48-hour hackathon challenging teams to develop AI-powered solutions for smart city problems including traffic, energy, and waste management.",
      speakers: [
        { name: "Mr. Satya Nadella", affiliation: "Microsoft", topic: "Opening Keynote" },
        { name: "Ms. Ginni Rometty", affiliation: "IBM", topic: "AI for Good" },
        { name: "Dr. Rajeev Motwani", affiliation: "Google", topic: "Scalable Solutions" }
      ],
      agenda: [
        { time: "09:00 - 10:00", activity: "Registration & Team Formation" },
        { time: "10:00 - 11:00", activity: "Opening Ceremony & Problem Statements" },
        { time: "11:00 - 12:00", activity: "Mentorship Sessions" },
        { time: "12:00 - 01:00", activity: "Lunch Break" },
        { time: "01:00 - 06:00", activity: "Development Phase 1" },
        { time: "06:00 - 07:00", activity: "Dinner Break" },
        { time: "07:00 - 09:00", activity: "Presentations & Judging" }
      ],
      registrationFee: "₹200 per team",
      capacity: 120,
      registered: 89,
      tags: ["Hackathon", "Smart Cities", "Innovation", "Competition"],
      contact: "hackathon@gmuniversity.edu.in",
      registrationLink: "#"
    },
    {
      id: 6,
      title: "Guest Lecture: Quantum Machine Learning",
      type: "Guest Lecture",
      date: "2024-11-18",
      time: "03:00 PM - 04:30 PM",
      venue: "Auditorium",
      description: "Special guest lecture on the intersection of quantum computing and machine learning, exploring future possibilities and current research.",
      speakers: [
        { name: "Dr. John Preskill", affiliation: "Caltech", topic: "Quantum Machine Learning Frontiers" }
      ],
      agenda: [
        { time: "03:00 - 03:15", activity: "Welcome & Introduction" },
        { time: "03:15 - 04:00", activity: "Lecture: Quantum ML Frontiers" },
        { time: "04:00 - 04:30", activity: "Q&A Session" }
      ],
      registrationFee: "Free",
      capacity: 200,
      registered: 156,
      tags: ["Quantum Computing", "Machine Learning", "Research", "Guest Lecture"],
      contact: "quantum.lecture@gmuniversity.edu.in",
      registrationLink: "#"
    }
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      'Conference': 'bg-blue-100 text-blue-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Symposium': 'bg-purple-100 text-purple-800',
      'Industry Meet': 'bg-orange-100 text-orange-800',
      'Hackathon': 'bg-red-100 text-red-800',
      'Guest Lecture': 'bg-indigo-100 text-indigo-800'
    };
    return colors?.[type] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCapacityPercentage = (registered, capacity) => {
    return Math.round((registered / capacity) * 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our research community at conferences, workshops, and networking events
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {events?.map((event, index) => (
            <motion.div
              key={event?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event?.type)}`}>
                        {event?.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {getCapacityPercentage(event?.registered, event?.capacity)}% Full
                      </span>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-2 hover:text-primary transition-colors">
                      {event?.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {new Date(event.date)?.getDate()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(event.date)?.toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event?.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{formatDate(event?.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{event?.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{event?.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{event?.registrationFee}</span>
                  </div>
                </div>

                {/* Registration Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Registration</span>
                    <span className="text-sm text-muted-foreground">
                      {event?.registered}/{event?.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getCapacityPercentage(event?.registered, event?.capacity)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event?.tags?.slice(0, 3)?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {event?.tags?.length > 3 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      +{event?.tags?.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors">
                    <span className="text-sm font-medium">View Details</span>
                    <Icon name="ArrowRight" size={14} />
                  </button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(selectedEvent?.type)}`}>
                        {selectedEvent?.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {getCapacityPercentage(selectedEvent?.registered, selectedEvent?.capacity)}% Full
                      </span>
                    </div>
                    <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
                      {selectedEvent?.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedEvent?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                  >
                    <Icon name="X" size={20} className="text-foreground" />
                  </button>
                </div>

                {/* Event Info */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Event Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        <span className="text-sm">{formatDate(selectedEvent?.date)}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm">{selectedEvent?.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span className="text-sm">{selectedEvent?.venue}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="DollarSign" size={16} className="text-primary" />
                        <span className="text-sm">{selectedEvent?.registrationFee}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <span className="text-sm">{selectedEvent?.contact}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Registration Status</h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Capacity</span>
                        <span className="text-sm text-muted-foreground">
                          {selectedEvent?.registered}/{selectedEvent?.capacity}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-primary h-3 rounded-full transition-all duration-300"
                          style={{ width: `${getCapacityPercentage(selectedEvent?.registered, selectedEvent?.capacity)}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button 
                      className="w-full gold-gradient text-primary hover:scale-105 transition-transform duration-300"
                    >
                      Register Now
                    </Button>
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Featured Speakers</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedEvent?.speakers?.map((speaker, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4">
                        <h4 className="font-semibold text-foreground">{speaker?.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{speaker?.affiliation}</p>
                        <p className="text-sm text-primary font-medium">{speaker?.topic}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agenda */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Event Agenda</h3>
                  <div className="space-y-3">
                    {selectedEvent?.agenda?.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium text-primary min-w-[100px]">
                          {item?.time}
                        </div>
                        <div className="text-sm text-foreground">
                          {item?.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive notifications about upcoming research events, 
              conferences, and workshops in AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button className="gold-gradient text-primary hover:scale-105 transition-transform duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;