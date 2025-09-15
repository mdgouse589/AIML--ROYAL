import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacultyDetailModal = ({ faculty, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !faculty) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'User' },
    { id: 'research', label: 'Research', icon: 'Brain' },
    { id: 'publications', label: 'Publications', icon: 'BookOpen' },
    { id: 'teaching', label: 'Teaching', icon: 'GraduationCap' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl royal-shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="flex items-start space-x-6">
            <div className="relative">
              <Image
                src={faculty?.image}
                alt={faculty?.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-accent"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Verified" size={16} className="text-primary" />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-playfair font-bold mb-1">{faculty?.name}</h2>
              <p className="text-accent font-medium mb-2">{faculty?.designation}</p>
              <p className="text-white/80 mb-3">{faculty?.qualification}</p>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  <span>{faculty?.experience} years experience</span>
                </div>
                <div className="flex items-center">
                  <Icon name="BookOpen" size={14} className="mr-1" />
                  <span>{faculty?.publications} publications</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={14} className="mr-1" />
                  <span>{faculty?.students} students supervised</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab?.id
                    ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Contact" size={16} className="mr-2 text-primary" />
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Icon name="Mail" size={14} className="mr-2 text-muted-foreground" />
                      <span>{faculty?.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" size={14} className="mr-2 text-muted-foreground" />
                      <span>{faculty?.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-2 text-muted-foreground" />
                      <span>{faculty?.office}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-2 text-muted-foreground" />
                      <span>{faculty?.officeHours}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Brain" size={16} className="mr-2 text-primary" />
                    Research Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {faculty?.researchAreas?.map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Interests */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Lightbulb" size={16} className="mr-2 text-primary" />
                  Research Interests
                </h4>
                <p className="text-muted-foreground leading-relaxed">{faculty?.researchInterests}</p>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Target" size={16} className="mr-2 text-primary" />
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {faculty?.specializations?.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'research' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Current Research Projects</h4>
                <div className="space-y-4">
                  {faculty?.currentProjects?.map((project, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4">
                      <h5 className="font-medium text-foreground mb-2">{project?.title}</h5>
                      <p className="text-sm text-muted-foreground mb-2">{project?.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Duration: {project?.duration}</span>
                        <span>Funding: {project?.funding}</span>
                      </div>
                    </div>
                  )) || (
                    <p className="text-muted-foreground">Research project details will be updated soon.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'publications' && (
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4">Recent Publications</h4>
              {faculty?.recentPublications?.map((pub, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-1">{pub?.title}</h5>
                  <p className="text-sm text-secondary mb-2">{pub?.journal} • {pub?.year}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Citations: {pub?.citations || 'N/A'}</span>
                    <span>Impact Factor: {pub?.impactFactor || 'N/A'}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'teaching' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Courses Taught</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faculty?.coursesTaught?.map((course, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4">
                      <h5 className="font-medium text-foreground">{course?.name}</h5>
                      <p className="text-sm text-muted-foreground">{course?.level} • {course?.semester}</p>
                    </div>
                  )) || (
                    <p className="text-muted-foreground col-span-2">Course information will be updated soon.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4">Awards & Recognition</h4>
              {faculty?.achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 bg-muted/50 rounded-lg p-4">
                  <Icon name="Award" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground">{achievement?.title}</h5>
                    <p className="text-sm text-muted-foreground">{achievement?.organization} • {achievement?.year}</p>
                  </div>
                </div>
              )) || (
                <p className="text-muted-foreground">Achievement details will be updated soon.</p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 bg-muted/30">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Last updated: September 2024
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                iconSize={14}
              >
                Send Email
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                iconSize={14}
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetailModal;