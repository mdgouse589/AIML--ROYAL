import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FacultyFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  searchTerm, 
  onSearchChange 
}) => {
  const researchAreas = [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Data Science',
    'Artificial Intelligence',
    'Neural Networks',
    'Robotics',
    'Big Data Analytics',
    'Pattern Recognition'
  ];

  const experienceLevels = [
    { value: 'all', label: 'All Experience' },
    { value: '0-5', label: '0-5 Years' },
    { value: '6-10', label: '6-10 Years' },
    { value: '11-15', label: '11-15 Years' },
    { value: '16+', label: '16+ Years' }
  ];

  const designations = [
    'Professor',
    'Associate Professor',
    'Assistant Professor',
    'Research Coordinator',
    'Department Head'
  ];

  return (
    <div className="bg-card rounded-xl royal-shadow p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search faculty by name, expertise, or research area..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Research Areas */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Brain" size={16} className="mr-2 text-primary" />
            Research Areas
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {researchAreas?.map((area) => (
              <label key={area} className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters?.researchAreas?.includes(area)}
                  onChange={(e) => {
                    const newAreas = e?.target?.checked
                      ? [...filters?.researchAreas, area]
                      : filters?.researchAreas?.filter(a => a !== area);
                    onFilterChange({ ...filters, researchAreas: newAreas });
                  }}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {area}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Award" size={16} className="mr-2 text-primary" />
            Experience Level
          </h4>
          <div className="space-y-2">
            {experienceLevels?.map((level) => (
              <label key={level?.value} className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="radio"
                  name="experience"
                  value={level?.value}
                  checked={filters?.experience === level?.value}
                  onChange={(e) => onFilterChange({ ...filters, experience: e?.target?.value })}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {level?.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Designation */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Users" size={16} className="mr-2 text-primary" />
            Designation
          </h4>
          <div className="space-y-2">
            {designations?.map((designation) => (
              <label key={designation} className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters?.designations?.includes(designation)}
                  onChange={(e) => {
                    const newDesignations = e?.target?.checked
                      ? [...filters?.designations, designation]
                      : filters?.designations?.filter(d => d !== designation);
                    onFilterChange({ ...filters, designations: newDesignations });
                  }}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {designation}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Filter Actions */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground">
          Active filters: {
            filters?.researchAreas?.length + 
            filters?.designations?.length + 
            (filters?.experience !== 'all' ? 1 : 0)
          }
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
          iconSize={14}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default FacultyFilters;