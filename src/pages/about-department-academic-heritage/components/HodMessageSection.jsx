import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HodMessageSection = () => {
  const hodDetails = {
    name: "Dr. Rajesh Kumar Sharma",
    designation: "Head of Department",
    qualification: "Ph.D. in Artificial Intelligence, IIT Delhi",
    experience: "18 Years",
    specialization: "Machine Learning, Deep Learning, Computer Vision",
    email: "hod.aiml@gmuniversity.edu.in",
    phone: "+91 98765 43210",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    message: `Welcome to the Department of Artificial Intelligence and Machine Learning at GM University. As we stand at the forefront of technological revolution, our department represents the perfect synthesis of academic rigor and innovative research.\n\nOur journey from a traditional Computer Science department to a specialized AIML center reflects our commitment to staying ahead of industry demands. We have carefully crafted our curriculum to bridge the gap between theoretical foundations and practical applications, ensuring our graduates are not just job-ready but industry-leading professionals.\n\nWith state-of-the-art laboratories, distinguished faculty, and strong industry partnerships, we provide an environment where students can explore the limitless possibilities of artificial intelligence and machine learning. Our research initiatives span across computer vision, natural language processing, robotics, and data science, contributing to both academic knowledge and real-world solutions.\n\nI invite you to join our community of innovators, researchers, and future leaders who are shaping the digital landscape of tomorrow. Together, we will continue to push the boundaries of what's possible in the realm of intelligent systems.`,
    achievements: [
      "Published 45+ research papers in top-tier journals",
      "Principal Investigator for 8 funded research projects",
      "Recipient of Excellence in Teaching Award 2022",
      "Industry consultant for 15+ technology companies"
    ]
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={20} className="text-primary" />
            <span className="text-primary font-medium">Leadership Message</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Message from HOD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inspiring words from our department head about our vision, mission, and commitment to excellence in AIML education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* HOD Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 royal-shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20">
                  <Image
                    src={hodDetails?.image}
                    alt={hodDetails?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                {hodDetails?.name}
              </h3>
              <p className="text-primary font-medium mb-1">{hodDetails?.designation}</p>
              <p className="text-muted-foreground text-sm mb-4">{hodDetails?.qualification}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-muted/50 rounded-lg p-3">
                  <Icon name="Clock" size={16} className="text-primary mb-1" />
                  <div className="font-medium text-foreground">{hodDetails?.experience}</div>
                  <div className="text-muted-foreground">Experience</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <Icon name="BookOpen" size={16} className="text-primary mb-1" />
                  <div className="font-medium text-foreground">Research</div>
                  <div className="text-muted-foreground">Specialization</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-playfair font-bold text-foreground mb-3">Key Achievements</h4>
              {hodDetails?.achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span className="text-muted-foreground">{hodDetails?.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span className="text-muted-foreground">{hodDetails?.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 royal-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-foreground">Vision & Message</h4>
                  <p className="text-muted-foreground text-sm">From our department head</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {hodDetails?.message?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Target" size={24} className="text-white" />
                <h4 className="font-playfair font-bold text-xl">Our Commitment</h4>
              </div>
              <p className="text-white/90 leading-relaxed">
                We are committed to nurturing the next generation of AI/ML professionals who will drive innovation, solve complex problems, and contribute to society's technological advancement through ethical and responsible AI practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HodMessageSection;