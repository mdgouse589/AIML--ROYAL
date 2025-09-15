import React from 'react';
import Icon from '../../../components/AppIcon';


const SearchBar = ({ searchTerm, onSearchChange, onSortChange, sortBy }) => {
  const sortOptions = [
    { value: 'date-desc', label: 'Latest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'title-asc', label: 'Title A-Z' },
    { value: 'title-desc', label: 'Title Z-A' },
    { value: 'downloads-desc', label: 'Most Downloaded' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-royal border border-gray-200 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="flex-1">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
            <input
              type="text"
              placeholder="Search documents, reports, and compliance materials..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e?.target?.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name="ArrowUpDown" size={16} className="text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-700 min-w-[160px]"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;