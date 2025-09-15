import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDemo, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechIcon = (tech) => {
    const techIcons = {
      'Python': 'Code2',
      'TensorFlow': 'Brain',
      'PyTorch': 'Zap',
      'React': 'Globe',
      'Node.js': 'Server',
      'MongoDB': 'Database',
      'OpenCV': 'Eye',
      'Scikit-learn': 'BarChart3',
      'Flask': 'Layers',
      'Docker': 'Package'
    };
    return techIcons?.[tech] || 'Code';
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-royal hover:shadow-royal-lg transition-all duration-300 overflow-hidden group card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            {project?.category}
          </span>
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              project?.status === 'Deployed' ?'bg-green-100 text-green-800' 
                : project?.status === 'In Progress' ?'bg-yellow-100 text-yellow-800' :'bg-blue-100 text-blue-800'
            }`}>
              {project?.status}
            </span>
          </div>
        )}

        {/* Demo Button Overlay */}
        {project?.hasDemo && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              variant="default"
              className="bg-secondary hover:bg-accent text-black font-semibold"
              iconName="Play"
              iconPosition="left"
              onClick={() => onViewDemo(project)}
            >
              Live Demo
            </Button>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {project?.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {project?.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <div key={index} className="flex items-center space-x-1 px-2 py-1 bg-gray-100 rounded-lg">
                <Icon name={getTechIcon(tech)} size={14} className="text-primary" />
                <span className="text-xs font-medium text-gray-700">{tech}</span>
              </div>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Team</h4>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {project?.team?.slice(0, 3)?.map((member, index) => (
                <div key={index} className="relative">
                  <Image
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
              ))}
              {project?.team?.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">
                    +{project?.team?.length - 3}
                  </span>
                </div>
              )}
            </div>
            <div className="text-xs text-gray-500">
              {project?.team?.length} member{project?.team?.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Metrics */}
        {project?.metrics && (
          <div className="mb-4 grid grid-cols-2 gap-4">
            {project?.metrics?.accuracy && (
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{project?.metrics?.accuracy}</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
            )}
            {project?.metrics?.performance && (
              <div className="text-center">
                <div className="text-lg font-bold text-secondary">{project?.metrics?.performance}</div>
                <div className="text-xs text-gray-500">Performance</div>
              </div>
            )}
          </div>
        )}

        {/* GitHub Stats */}
        {project?.github && (
          <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} className="text-yellow-500" />
                <span>{project?.github?.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="GitFork" size={14} className="text-gray-500" />
                <span>{project?.github?.forks}</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Updated {project?.github?.lastUpdated}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
          {project?.github && (
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              onClick={() => window.open(project?.github?.url, '_blank')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;