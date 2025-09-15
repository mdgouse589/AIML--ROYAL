import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "AI/ML Research Lab",
      description: "State-of-the-art laboratory equipped with high-performance computing clusters, GPU workstations, and specialized software for machine learning research and development.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      features: ["NVIDIA RTX 4090 GPUs", "TensorFlow & PyTorch", "Jupyter Notebooks", "Cloud Computing Access"],
      capacity: "50 Students",
      availability: "24/7 Access"
    },
    {
      id: 2,
      title: "Deep Learning Studio",
      description: "Specialized environment for neural network development with advanced visualization tools and collaborative workspaces for team projects.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      features: ["Collaborative Workspaces", "Advanced Visualization", "Model Training Clusters", "Data Analytics Tools"],
      capacity: "30 Students",
      availability: "Mon-Fri 8AM-10PM"
    },
    {
      id: 3,
      title: "Computer Vision Lab",
      description: "Dedicated facility for image processing and computer vision projects with specialized cameras, sensors, and processing equipment.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      features: ["High-Resolution Cameras", "3D Scanners", "Image Processing Software", "Robotics Integration"],
      capacity: "25 Students",
      availability: "Scheduled Sessions"
    },
    {
      id: 4,
      title: "Digital Library",
      description: "Comprehensive collection of AI/ML resources including research papers, e-books, online courses, and industry publications.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500",
      features: ["IEEE Xplore Access", "ACM Digital Library", "Springer Nature", "Online Course Platforms"],
      capacity: "Unlimited Access",
      availability: "24/7 Online"
    }
  ];

  const softwareTools = [
    { name: "TensorFlow", category: "Deep Learning", license: "Enterprise" },
    { name: "PyTorch", category: "Neural Networks", license: "Open Source" },
    { name: "MATLAB", category: "Mathematical Computing", license: "Campus Wide" },
    { name: "R Studio", category: "Statistical Analysis", license: "Professional" },
    { name: "Jupyter Hub", category: "Interactive Computing", license: "Enterprise" },
    { name: "Apache Spark", category: "Big Data", license: "Cluster License" },
    { name: "Docker", category: "Containerization", license: "Enterprise" },
    { name: "Kubernetes", category: "Orchestration", license: "Professional" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Learning Resources & Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access world-class facilities and cutting-edge technology to enhance your learning experience in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resources?.map((resource) => (
            <div key={resource?.id} className="bg-card rounded-xl royal-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource?.image}
                  alt={resource?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{resource?.title}</h3>
                  <div className="flex items-center space-x-4 text-accent text-sm">
                    <span className="flex items-center">
                      <Icon name="Users" size={16} className="mr-1" />
                      {resource?.capacity}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {resource?.availability}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{resource?.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {resource?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Software Tools Section */}
        <div className="bg-card rounded-xl royal-shadow p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Software & Tools Access
            </h3>
            <p className="text-muted-foreground">
              Industry-standard software and development tools available to all students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareTools?.map((tool, index) => (
              <div key={index} className="p-4 bg-background rounded-lg border border-border hover:border-primary/20 transition-colors duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{tool?.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    tool?.license === 'Enterprise' ? 'bg-primary/10 text-primary' :
                    tool?.license === 'Professional'? 'bg-secondary/10 text-secondary' : 'bg-success/10 text-success'
                  }`}>
                    {tool?.license}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{tool?.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              className="gold-gradient text-primary"
              iconName="Download"
              iconPosition="left"
            >
              Download Software Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningResourcesSection;