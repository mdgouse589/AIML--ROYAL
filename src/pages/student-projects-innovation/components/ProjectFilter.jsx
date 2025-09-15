import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters,
  projectCount 
}) => {
  const filterCategories = [
    {
      key: 'category',
      label: 'Domain',
      icon: 'Layers',
      options: filters?.categories
    },
    {
      key: 'year',
      label: 'Year',
      icon: 'Calendar',
      options: filters?.years
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code2',
      options: filters?.technologies
    },
    {
      key: 'status',
      label: 'Status',
      icon: 'Activity',
      options: filters?.statuses
    }
  ];

  const hasActiveFilters = Object.values(activeFilters)?.some(filter => 
    Array.isArray(filter) ? filter?.length > 0 : filter
  );

  return (
    <div className="bg-white rounded-xl shadow-royal p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Filter Projects</h3>
            <p className="text-sm text-gray-600">
              {projectCount} project{projectCount !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="text-gray-600 hover:text-primary"
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterCategories?.map((category) => (
          <div key={category?.key} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Icon name={category?.icon} size={16} className="text-primary" />
              <h4 className="font-semibold text-gray-700">{category?.label}</h4>
            </div>
            
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {category?.options?.map((option) => (
                <label
                  key={option?.value}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters?.[category?.key]?.includes(option?.value) || false}
                    onChange={(e) => {
                      const currentFilters = activeFilters?.[category?.key] || [];
                      const newFilters = e?.target?.checked
                        ? [...currentFilters, option?.value]
                        : currentFilters?.filter(f => f !== option?.value);
                      onFilterChange(category?.key, newFilters);
                    }}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-primary transition-colors duration-200">
                    {option?.label}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">
                    ({option?.count})
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([key, values]) => 
              Array.isArray(values) && values?.length > 0 ? values?.map((value) => (
                <span
                  key={`${key}-${value}`}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => {
                      const newFilters = activeFilters?.[key]?.filter(f => f !== value);
                      onFilterChange(key, newFilters);
                    }}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              )) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;