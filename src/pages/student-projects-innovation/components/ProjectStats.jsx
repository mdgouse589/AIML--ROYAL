import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const [animatedStats, setAnimatedStats] = useState({
    totalProjects: 0,
    deployedProjects: 0,
    githubStars: 0,
    teamMembers: 0
  });

  const finalStats = {
    totalProjects: projects?.length,
    deployedProjects: projects?.filter(p => p?.status === 'Deployed')?.length,
    githubStars: projects?.reduce((sum, p) => sum + (p?.github?.stars || 0), 0),
    teamMembers: [...new Set(projects.flatMap(p => p.team.map(t => t.name)))]?.length
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        totalProjects: Math.floor(finalStats?.totalProjects * progress),
        deployedProjects: Math.floor(finalStats?.deployedProjects * progress),
        githubStars: Math.floor(finalStats?.githubStars * progress),
        teamMembers: Math.floor(finalStats?.teamMembers * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [projects]);

  const stats = [
    {
      label: 'Total Projects',
      value: animatedStats?.totalProjects,
      icon: 'FolderOpen',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Deployed Solutions',
      value: animatedStats?.deployedProjects,
      icon: 'Rocket',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'GitHub Stars',
      value: animatedStats?.githubStars,
      icon: 'Star',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      label: 'Student Contributors',
      value: animatedStats?.teamMembers,
      icon: 'Users',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats?.map((stat, index) => (
        <div
          key={stat?.label}
          className="bg-white rounded-xl shadow-royal hover:shadow-royal-lg transition-all duration-300 p-6 text-center group card-hover"
        >
          <div className={`w-16 h-16 ${stat?.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon name={stat?.icon} size={28} className={stat?.color} />
          </div>
          
          <div className={`text-3xl font-bold ${stat?.color} mb-2 counter-animate`}>
            {stat?.value?.toLocaleString()}
          </div>
          
          <div className="text-gray-600 font-medium">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;