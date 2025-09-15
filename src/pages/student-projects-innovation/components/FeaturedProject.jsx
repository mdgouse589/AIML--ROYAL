import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDemo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl overflow-hidden shadow-royal-lg mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Image Gallery */}
        <div className="relative overflow-hidden">
          <div className="absolute top-4 left-4 z-10">
            <span className="px-4 py-2 bg-secondary text-black text-sm font-bold rounded-full">
              Featured Project
            </span>
          </div>
          
          <div className="relative h-full">
            <Image
              src={project?.gallery?.[currentImageIndex]}
              alt={`${project?.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Gallery Navigation */}
            {project?.gallery?.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project?.gallery?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-secondary' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {project?.category}
              </span>
              <span className="px-3 py-1 bg-secondary text-black text-sm font-bold rounded-full">
                {project?.year}
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {project?.title}
            </h2>
            
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              {project?.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {project?.metrics && Object.entries(project?.metrics)?.map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">{value}</div>
                <div className="text-white/80 text-sm capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 text-white text-sm rounded-lg backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Project Team</h3>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {project?.team?.slice(0, 4)?.map((member, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={member?.avatar}
                      alt={member?.name}
                      className="w-10 h-10 rounded-full border-3 border-white object-cover"
                    />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {member?.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-white/80">
                <div className="font-medium">{project?.team?.length} Team Members</div>
                <div className="text-sm">Led by {project?.team?.[0]?.name}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project?.hasDemo && (
              <Button
                variant="default"
                className="bg-secondary hover:bg-accent text-black font-bold"
                iconName="Play"
                iconPosition="left"
                onClick={() => onViewDemo(project)}
              >
                Try Live Demo
              </Button>
            )}
            
            {project?.github && (
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Github"
                iconPosition="left"
                onClick={() => window.open(project?.github?.url, '_blank')}
              >
                View Code
              </Button>
            )}
          </div>

          {/* Awards/Recognition */}
          {project?.awards && project?.awards?.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/20">
              <h3 className="text-lg font-semibold mb-3">Recognition</h3>
              <div className="space-y-2">
                {project?.awards?.map((award, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-secondary" />
                    <span className="text-white/90">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;