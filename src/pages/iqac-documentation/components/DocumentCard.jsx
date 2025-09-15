import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentCard = ({ document, onDownload, onView }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'under-review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
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
    <div className="bg-white rounded-lg shadow-royal border border-gray-200 p-6 hover:shadow-royal-lg transition-all duration-300 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name={getTypeIcon(document?.type)} size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{document?.title}</h3>
            <p className="text-sm text-gray-600">{document?.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(document?.status)}`}>
          {document?.status?.replace('-', ' ')?.toUpperCase()}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{document?.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{document?.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="FileText" size={14} />
            <span>{document?.size}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Download" size={14} />
          <span>{document?.downloads} downloads</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          iconName="Eye"
          iconPosition="left"
          onClick={() => onView(document)}
          className="flex-1"
        >
          View
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Download"
          iconPosition="left"
          onClick={() => onDownload(document)}
          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default DocumentCard;