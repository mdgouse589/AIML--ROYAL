import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgramCard = ({ program, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={program?.image}
          alt={program?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 royal-gradient opacity-60"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            program?.level === 'Undergraduate' ?'bg-accent text-primary' :'bg-secondary text-white'
          }`}>
            {program?.level}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-playfair font-bold text-white mb-2">
            {program?.title}
          </h3>
          <p className="text-accent text-sm">
            {program?.duration} • {program?.credits} Credits
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {program?.description}
        </p>

        <div className="space-y-4">
          {/* Key Features */}
          <div className="flex flex-wrap gap-2">
            {program?.features?.slice(0, 3)?.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
              >
                {feature}
              </span>
            ))}
            {program?.features?.length > 3 && (
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
                +{program?.features?.length - 3} more
              </span>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{program?.intake}</div>
              <div className="text-xs text-muted-foreground">Annual Intake</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{program?.placement}%</div>
              <div className="text-xs text-muted-foreground">Placement Rate</div>
            </div>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-border">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Core Subjects</h4>
                <div className="grid grid-cols-1 gap-2">
                  {program?.coreSubjects?.map((subject, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="BookOpen" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Career Pathways</h4>
                <div className="flex flex-wrap gap-2">
                  {program?.careers?.map((career, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Admission Requirements</h4>
                <ul className="space-y-1">
                  {program?.requirements?.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1"
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
            >
              {isExpanded ? 'Show Less' : 'View Details'}
            </Button>
            <Button
              onClick={() => onViewDetails(program)}
              className="flex-1 gold-gradient text-primary"
              iconName="ExternalLink"
              iconPosition="right"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;