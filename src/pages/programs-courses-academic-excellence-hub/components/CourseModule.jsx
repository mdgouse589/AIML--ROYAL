import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CourseModule = ({ module, isOpen, onToggle }) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 royal-gradient rounded-lg flex items-center justify-center">
            <Icon name="BookOpen" size={20} className="text-accent" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-foreground">{module.title}</h3>
            <p className="text-sm text-muted-foreground">
              {module.credits} Credits • {module.duration}
            </p>
          </div>
        </div>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={20} 
          className={`text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border">
          <div className="space-y-4">
            <p className="text-muted-foreground">{module.description}</p>

            {/* Learning Outcomes */}
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <Icon name="Target" size={16} className="text-primary mr-2" />
                Learning Outcomes
              </h4>
              <ul className="space-y-1">
                {module.outcomes?.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-success mt-1" />
                    <span className="text-sm text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            {module.prerequisites && module.prerequisites?.length > 0 && (
              <div>
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <Icon name="AlertCircle" size={16} className="text-warning mr-2" />
                  Prerequisites
                </h4>
                <div className="flex flex-wrap gap-2">
                  {module.prerequisites?.map((prereq, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-warning/10 text-warning rounded text-xs"
                    >
                      {prereq}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Faculty */}
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <Icon name="User" size={16} className="text-secondary mr-2" />
                Faculty
              </h4>
              <div className="flex items-center space-x-3">
                <img
                  src={module.faculty?.avatar}
                  alt={module.faculty?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{module.faculty?.name}</p>
                  <p className="text-xs text-muted-foreground">{module.faculty?.designation}</p>
                </div>
              </div>
            </div>

            {/* Assessment Methods */}
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center">
                <Icon name="FileText" size={16} className="text-accent mr-2" />
                Assessment Methods
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {module.assessment?.map((method, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm text-muted-foreground">{method?.type}</span>
                    <span className="text-sm font-medium text-foreground">{method?.weightage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseModule;