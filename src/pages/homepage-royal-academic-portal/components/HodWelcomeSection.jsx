import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HodWelcomeSection = () => {
  const hodDetails = {
    name: "Dr. Anitha Rajesh Kumar",
    title: "Head of Department - AI & Machine Learning",
    qualifications: "Ph.D. in Computer Science, M.Tech in AI, B.E. in CSE",
    experience: "18+ Years in Academia & Research",
    specialization: "Deep Learning, Neural Networks, Computer Vision",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    achievements: [
      "Published 85+ research papers in top-tier journals",
      "Principal Investigator for 12 funded research projects",
      "Recipient of Excellence in Teaching Award 2023",
      "Editorial board member of 3 international journals",
      "Mentor to 150+ successful AI/ML professionals"
    ],
    message: `Welcome to the Department of Artificial Intelligence and Machine Learning at GM University. As we stand at the forefront of technological revolution, our department is committed to nurturing the next generation of AI/ML innovators and researchers.

Our curriculum is meticulously designed to blend theoretical foundations with practical applications, ensuring our students are industry-ready from day one. With state-of-the-art laboratories, distinguished faculty, and strong industry partnerships, we provide an environment where creativity meets cutting-edge technology.

I invite you to join our royal academic family, where tradition meets innovation, and where your journey towards becoming an AI/ML expert begins. Together, we will shape the future of technology and create solutions that benefit humanity.`,
    contact: {
      email: "hod.aiml@gmuniversity.edu.in",
      phone: "+91 98765 43210",
      office: "Block A, Room 301, AIML Department"
    }
  };

  const departmentStats = [
    { label: "Years of Leadership", value: "6+", icon: "Crown" },
    { label: "Research Projects", value: "45+", icon: "Beaker" },
    { label: "Industry Collaborations", value: "25+", icon: "Handshake" },
    { label: "Student Mentored", value: "500+", icon: "Users" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Message from the Head
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A warm welcome from our distinguished department head, sharing the vision and commitment to excellence in AI/ML education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* HOD Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl royal-shadow-lg p-8 sticky top-8">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden royal-shadow-lg">
                  <Image
                    src={hodDetails?.image}
                    alt={hodDetails?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
              </div>

              {/* Basic Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {hodDetails?.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{hodDetails?.title}</p>
                <p className="text-sm text-muted-foreground mb-1">{hodDetails?.qualifications}</p>
                <p className="text-sm text-muted-foreground">{hodDetails?.experience}</p>
              </div>

              {/* Specialization */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                <p className="text-sm text-muted-foreground">{hodDetails?.specialization}</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{hodDetails?.contact?.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{hodDetails?.contact?.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{hodDetails?.contact?.office}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {departmentStats?.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-muted rounded-lg">
                    <Icon name={stat?.icon} size={20} className="text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold text-foreground">{stat?.value}</div>
                    <div className="text-xs text-muted-foreground">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white to-muted rounded-2xl royal-shadow-lg p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Quote" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">
                    Welcome Message
                  </h3>
                  <p className="text-muted-foreground">From the Head of Department</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {hodDetails?.message?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Achievements */}
              <div className="mt-8">
                <h4 className="text-xl font-playfair font-bold text-foreground mb-6">
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {hodDetails?.achievements?.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2">
                    <Icon name="Calendar" size={20} />
                    Schedule Meeting
                  </button>
                  <button className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <Icon name="Mail" size={20} />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HodWelcomeSection;