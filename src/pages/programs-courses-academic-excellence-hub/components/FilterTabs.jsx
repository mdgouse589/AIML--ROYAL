import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterTabs = ({ activeFilter, onFilterChange, programCounts }) => {
  const filters = [
    { 
      id: 'all', 
      label: 'All Programs', 
      icon: 'Grid3X3',
      count: programCounts?.all 
    },
    { 
      id: 'undergraduate', 
      label: 'Undergraduate', 
      icon: 'GraduationCap',
      count: programCounts?.undergraduate 
    },
    { 
      id: 'postgraduate', 
      label: 'Postgraduate', 
      icon: 'Award',
      count: programCounts?.postgraduate 
    },
    { 
      id: 'research', 
      label: 'Research', 
      icon: 'Microscope',
      count: programCounts?.research 
    },
    { 
      id: 'certification', 
      label: 'Certifications', 
      icon: 'Certificate',
      count: programCounts?.certification 
    }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters?.map((filter) => (
        <button
          key={filter?.id}
          onClick={() => onFilterChange(filter?.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            activeFilter === filter?.id
              ? 'bg-primary text-white royal-shadow'
              : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          <Icon 
            name={filter?.icon} 
            size={18} 
            className={activeFilter === filter?.id ? 'text-accent' : 'text-current'} 
          />
          <span>{filter?.label}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeFilter === filter?.id
              ? 'bg-accent text-primary' :'bg-muted text-muted-foreground'
          }`}>
            {filter?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;