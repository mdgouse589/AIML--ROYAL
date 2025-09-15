import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacultyCard = ({ faculty, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl royal-shadow hover:royal-shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Faculty Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={faculty?.image}
          alt={faculty?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            faculty?.status === 'Available' ?'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
          }`}>
            {faculty?.status}
          </span>
        </div>

        {/* Research Areas Tags */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {faculty?.researchAreas?.slice(0, 2)?.map((area, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs rounded-full font-medium"
              >
                {area}
              </span>
            ))}
            {faculty?.researchAreas?.length > 2 && (
              <span className="px-2 py-1 bg-muted/90 text-muted-foreground text-xs rounded-full font-medium">
                +{faculty?.researchAreas?.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Faculty Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-playfair font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {faculty?.name}
          </h3>
          <p className="text-secondary font-medium mb-2">{faculty?.designation}</p>
          <p className="text-muted-foreground text-sm">{faculty?.qualification}</p>
        </div>

        {/* Experience & Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{faculty?.experience}</div>
            <div className="text-xs text-muted-foreground">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{faculty?.publications}</div>
            <div className="text-xs text-muted-foreground">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{faculty?.students}</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
            <Icon name="Brain" size={16} className="mr-2 text-primary" />
            Research Interests
          </h4>
          <p className={`text-sm text-muted-foreground leading-relaxed ${
            isExpanded ? '' : 'line-clamp-3'
          }`}>
            {faculty?.researchInterests}
          </p>
          {faculty?.researchInterests?.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-xs mt-1 hover:underline"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Recent Publications */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
            <Icon name="BookOpen" size={16} className="mr-2 text-primary" />
            Recent Publications
          </h4>
          <div className="space-y-2">
            {faculty?.recentPublications?.slice(0, 2)?.map((pub, index) => (
              <div key={index} className="text-xs text-muted-foreground">
                <p className="font-medium text-foreground">{pub?.title}</p>
                <p className="text-secondary">{pub?.journal} • {pub?.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Office Hours */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Icon name="Clock" size={14} className="mr-1" />
              <span>{faculty?.officeHours}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="MapPin" size={14} className="mr-1" />
              <span>{faculty?.office}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            iconName="Mail"
            iconPosition="left"
            iconSize={14}
          >
            Contact
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails(faculty)}
            iconName="User"
            iconPosition="left"
            iconSize={14}
          >
            View Profile
          </Button>
        </div>

        {/* Specialization Tags */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-1">
            {faculty?.specializations?.map((spec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;