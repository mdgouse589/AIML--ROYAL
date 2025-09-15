import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ResearchAreas = () => {
  const [activeArea, setActiveArea] = useState(0);

  const researchAreas = [
    {
      id: 1,
      title: "Machine Learning Applications",
      description: "Advanced algorithms and models for real-world problem solving across diverse domains including healthcare, finance, and autonomous systems.",
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      projects: 12,
      publications: 34,
      funding: "₹85 Lakhs",
      keyProjects: [
        "Predictive Analytics for Healthcare",
        "Financial Risk Assessment Models",
        "Autonomous Vehicle Navigation",
        "Smart Agriculture Solutions"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
    },
    {
      id: 2,
      title: "AI Ethics & Responsible AI",
      description: "Developing frameworks and guidelines for ethical AI implementation, bias detection, and responsible machine learning practices.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      projects: 8,
      publications: 22,
      funding: "₹45 Lakhs",
      keyProjects: [
        "Bias Detection in ML Models",
        "Ethical AI Framework Development",
        "Fairness in Algorithmic Decision Making",
        "AI Transparency Tools"
      ],
      technologies: ["Fairlearn", "AI Fairness 360", "LIME", "SHAP", "What-If Tool"]
    },
    {
      id: 3,
      title: "Computer Vision",
      description: "Advanced image processing, object detection, and visual recognition systems for industrial and consumer applications.",
      icon: "Eye",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      projects: 15,
      publications: 41,
      funding: "₹92 Lakhs",
      keyProjects: [
        "Medical Image Analysis",
        "Industrial Quality Control",
        "Facial Recognition Systems",
        "Augmented Reality Applications"
      ],
      technologies: ["OpenCV", "YOLO", "ResNet", "CNN", "GANs"]
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description: "Text analysis, language understanding, and conversational AI systems for multilingual and domain-specific applications.",
      icon: "MessageSquare",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      projects: 10,
      publications: 28,
      funding: "₹67 Lakhs",
      keyProjects: [
        "Multilingual Chatbot Development",
        "Sentiment Analysis Tools",
        "Document Classification Systems",
        "Language Translation Models"
      ],
      technologies: ["BERT", "GPT", "spaCy", "NLTK", "Transformers"]
    },
    {
      id: 5,
      title: "Industry 4.0 Integration",
      description: "Smart manufacturing, IoT integration, and intelligent automation systems for next-generation industrial applications.",
      icon: "Cog",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      projects: 9,
      publications: 19,
      funding: "₹73 Lakhs",
      keyProjects: [
        "Smart Factory Automation",
        "Predictive Maintenance Systems",
        "Supply Chain Optimization",
        "Quality Control AI"
      ],
      technologies: ["Edge Computing", "IoT Sensors", "Digital Twins", "MQTT", "Time Series Analysis"]
    }
  ];

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
            Research <span className="text-primary">Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring cutting-edge domains where artificial intelligence meets real-world challenges
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Area Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {researchAreas?.map((area, index) => (
              <motion.button
                key={area?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveArea(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeArea === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={area?.icon} size={20} />
                <span className="font-medium">{area?.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Area Details */}
          <motion.div
            key={activeArea}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl royal-shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={researchAreas?.[activeArea]?.image}
                  alt={researchAreas?.[activeArea]?.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{researchAreas?.[activeArea]?.projects}</div>
                      <div className="text-sm opacity-80">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{researchAreas?.[activeArea]?.publications}</div>
                      <div className="text-sm opacity-80">Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{researchAreas?.[activeArea]?.funding}</div>
                      <div className="text-sm opacity-80">Funding</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={researchAreas?.[activeArea]?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">
                    {researchAreas?.[activeArea]?.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {researchAreas?.[activeArea]?.description}
                </p>

                {/* Key Projects */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Lightbulb" size={18} className="text-primary mr-2" />
                    Key Projects
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {researchAreas?.[activeArea]?.keyProjects?.map((project, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="ArrowRight" size={14} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Code" size={18} className="text-primary mr-2" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {researchAreas?.[activeArea]?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300">
                    <Icon name="FileText" size={18} />
                    <span>View Publications</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <Icon name="Users" size={18} />
                    <span>Join Research</span>
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

export default ResearchAreas;