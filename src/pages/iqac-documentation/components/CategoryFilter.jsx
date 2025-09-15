import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'all':
        return 'Grid3X3';
      case 'naac':
        return 'Award';
      case 'aqar':
        return 'FileText';
      case 'audit':
        return 'Search';
      case 'infrastructure':
        return 'Building';
      case 'faculty':
        return 'Users';
      case 'feedback':
        return 'MessageSquare';
      case 'advisory':
        return 'Users2';
      case 'research':
        return 'BookOpen';
      case 'placement':
        return 'Briefcase';
      case 'compliance':
        return 'Shield';
      default:
        return 'File';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-royal border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <Icon name="Filter" size={20} className="text-primary" />
        <span>Filter by Category</span>
      </h3>
      <div className="space-y-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-royal'
                : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
            }`}
          >
            <Icon 
              name={getCategoryIcon(category?.id)} 
              size={18} 
              className={activeCategory === category?.id ? 'text-white' : 'text-gray-500'} 
            />
            <div className="flex-1">
              <span className="font-medium">{category?.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category?.id 
                  ? 'bg-white/20 text-white' :'bg-gray-100 text-gray-600'
              }`}>
                {category?.count}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;