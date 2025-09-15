import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statItems = [
    {
      id: 'total-documents',
      title: 'Total Documents',
      value: stats?.totalDocuments,
      icon: 'FileText',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'naac-grade',
      title: 'NAAC Grade',
      value: stats?.naacGrade,
      icon: 'Award',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'compliance-rate',
      title: 'Compliance Rate',
      value: `${stats?.complianceRate}%`,
      icon: 'Shield',
      color: 'from-primary to-secondary',
      bgColor: 'bg-red-50',
      textColor: 'text-primary'
    },
    {
      id: 'last-updated',
      title: 'Last Updated',
      value: stats?.lastUpdated,
      icon: 'Calendar',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems?.map((item) => (
        <div
          key={item?.id}
          className="bg-white rounded-lg shadow-royal border border-gray-200 p-6 hover:shadow-royal-lg transition-all duration-300 card-hover"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${item?.bgColor} rounded-lg flex items-center justify-center`}>
              <Icon name={item?.icon} size={24} className={item?.textColor} />
            </div>
            <div className={`w-3 h-3 bg-gradient-to-r ${item?.color} rounded-full animate-pulse`}></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{item?.value}</h3>
            <p className="text-sm text-gray-600">{item?.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;