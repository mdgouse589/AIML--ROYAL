import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ projects }) => {
  // Group projects by year and sort
  const projectsByYear = projects?.reduce((acc, project) => {
    const year = project?.year;
    if (!acc?.[year]) {
      acc[year] = [];
    }
    acc?.[year]?.push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(projectsByYear)?.sort((a, b) => b - a);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Deployed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-royal p-8 mb-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Clock" size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Timeline</h2>
          <p className="text-gray-600">Innovation journey across academic years</p>
        </div>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {sortedYears?.map((year, yearIndex) => (
          <div key={year} className="relative mb-12 last:mb-0">
            {/* Year Marker */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-royal z-10">
                {year}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">Academic Year {year}-{parseInt(year) + 1}</h3>
                <p className="text-gray-600">{projectsByYear?.[year]?.length} projects completed</p>
              </div>
            </div>

            {/* Projects for this year */}
            <div className="ml-24 space-y-4">
              {projectsByYear?.[year]?.map((project, projectIndex) => (
                <div
                  key={project?.id}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200 border-l-4 border-primary"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {project?.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {project?.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`w-3 h-3 rounded-full ${getStatusColor(project?.status)}`}></span>
                      <span className="text-sm font-medium text-gray-700">{project?.status}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Category */}
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {project?.category}
                      </span>

                      {/* Team Size */}
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Icon name="Users" size={14} />
                        <span className="text-xs">{project?.team?.length} members</span>
                      </div>

                      {/* GitHub Stars */}
                      {project?.github && (
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Icon name="Star" size={14} />
                          <span className="text-xs">{project?.github?.stars} stars</span>
                        </div>
                      )}
                    </div>

                    {/* Technology Stack Preview */}
                    <div className="flex items-center space-x-2">
                      {project?.technologies?.slice(0, 3)?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white text-gray-700 text-xs rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project?.technologies?.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{project?.technologies?.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Awards/Recognition */}
                  {project?.awards && project?.awards?.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Icon name="Award" size={16} className="text-secondary" />
                        <span className="text-sm font-medium text-gray-700">Recognition:</span>
                        <span className="text-sm text-gray-600">{project?.awards?.[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Summary Statistics */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {sortedYears?.length}
            </div>
            <div className="text-gray-600 text-sm">Academic Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">
              {projects?.filter(p => p?.awards && p?.awards?.length > 0)?.length}
            </div>
            <div className="text-gray-600 text-sm">Award-Winning Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">
              {projects?.filter(p => p?.status === 'Deployed')?.length}
            </div>
            <div className="text-gray-600 text-sm">Live Deployments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;