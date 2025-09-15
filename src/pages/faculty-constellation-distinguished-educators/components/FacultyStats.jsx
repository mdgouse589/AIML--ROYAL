import React from 'react';
import Icon from '../../../components/AppIcon';

const FacultyStats = ({ facultyData }) => {
  const stats = [
    {
      icon: 'Users',
      label: 'Total Faculty',
      value: facultyData?.length,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Award',
      label: 'Professors',
      value: facultyData?.filter(f => f?.designation?.includes('Professor'))?.length,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'BookOpen',
      label: 'Total Publications',
      value: facultyData?.reduce((sum, f) => sum + parseInt(f?.publications), 0),
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'GraduationCap',
      label: 'Students Supervised',
      value: facultyData?.reduce((sum, f) => sum + parseInt(f?.students), 0),
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Clock',
      label: 'Avg. Experience',
      value: Math.round(facultyData?.reduce((sum, f) => sum + parseInt(f?.experience), 0) / facultyData?.length) + ' Years',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Brain',
      label: 'Research Areas',
      value: [...new Set(facultyData.flatMap(f => f.researchAreas))]?.length,
      color: 'text-error',
      bgColor: 'bg-error/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl royal-shadow p-4 text-center hover:royal-shadow-lg transition-all duration-300 group"
        >
          <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <Icon name={stat?.icon} size={20} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-xs text-muted-foreground font-medium">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default FacultyStats;