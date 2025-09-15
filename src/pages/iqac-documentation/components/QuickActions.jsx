import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = ({ onAction }) => {
  const actions = [
    {
      id: 'latest-aqar',
      title: 'Latest AQAR Report',
      description: 'View the most recent Annual Quality Assurance Report',
      icon: 'FileText',
      color: 'from-blue-500 to-blue-600',
      action: () => onAction('latest-aqar')
    },
    {
      id: 'naac-documents',
      title: 'NAAC Accreditation',
      description: 'Access NAAC assessment reports and certificates',
      icon: 'Award',
      color: 'from-green-500 to-green-600',
      action: () => onAction('naac-documents')
    },
    {
      id: 'compliance-status',
      title: 'Compliance Dashboard',
      description: 'Check current compliance status and requirements',
      icon: 'Shield',
      color: 'from-primary to-secondary',
      action: () => onAction('compliance-status')
    },
    {
      id: 'feedback-reports',
      title: 'Student Feedback',
      description: 'Review student satisfaction and feedback analysis',
      icon: 'MessageSquare',
      color: 'from-purple-500 to-purple-600',
      action: () => onAction('feedback-reports')
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-royal border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <Icon name="Zap" size={20} className="text-primary" />
        <span>Quick Actions</span>
      </h3>
      <div className="space-y-3">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={action?.action}
            className="w-full flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-gray-50 transition-all duration-200 text-left group"
          >
            <div className={`w-10 h-10 bg-gradient-to-r ${action?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <Icon name={action?.icon} size={20} className="text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                {action?.title}
              </h4>
              <p className="text-sm text-gray-600 truncate">{action?.description}</p>
            </div>
            
            <Icon name="ChevronRight" size={16} className="text-gray-400 group-hover:text-primary transition-colors duration-200" />
          </button>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Button
          variant="outline"
          fullWidth
          iconName="Plus"
          iconPosition="left"
          onClick={() => onAction('request-document')}
        >
          Request New Document
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;