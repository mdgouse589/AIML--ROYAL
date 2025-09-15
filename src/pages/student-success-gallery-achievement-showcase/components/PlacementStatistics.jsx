import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';

const PlacementStatistics = () => {
  const [animatedStats, setAnimatedStats] = useState({
    placementRate: 0,
    averagePackage: 0,
    highestPackage: 0,
    companiesVisited: 0
  });

  const finalStats = {
    placementRate: 94,
    averagePackage: 12.5,
    highestPackage: 45,
    companiesVisited: 85
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        placementRate: Math.floor(finalStats?.placementRate * progress),
        averagePackage: Math.floor(finalStats?.averagePackage * progress * 10) / 10,
        highestPackage: Math.floor(finalStats?.highestPackage * progress),
        companiesVisited: Math.floor(finalStats?.companiesVisited * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const salaryRangeData = [
    { range: '3-6 LPA', students: 25, percentage: 28 },
    { range: '6-10 LPA', students: 35, percentage: 39 },
    { range: '10-15 LPA', students: 18, percentage: 20 },
    { range: '15-25 LPA', students: 8, percentage: 9 },
    { range: '25+ LPA', students: 4, percentage: 4 }
  ];

  const companyTypeData = [
    { name: 'Product Companies', value: 45, color: '#800000' },
    { name: 'Service Companies', value: 30, color: '#B8860B' },
    { name: 'Startups', value: 15, color: '#FFD700' },
    { name: 'Research Labs', value: 10, color: '#FFA500' }
  ];

  const yearWiseData = [
    { year: '2020', placed: 78, average: 8.5 },
    { year: '2021', placed: 82, average: 9.2 },
    { year: '2022', placed: 88, average: 10.8 },
    { year: '2023', placed: 91, average: 11.5 },
    { year: '2024', placed: 94, average: 12.5 }
  ];

  const topRecruiters = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop', offers: 8, package: '25-45 LPA' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop', offers: 12, package: '20-35 LPA' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop', offers: 15, package: '18-30 LPA' },
    { name: 'Flipkart', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop', offers: 10, package: '15-25 LPA' },
    { name: 'TCS', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop', offers: 20, package: '6-12 LPA' },
    { name: 'Infosys', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop', offers: 18, package: '5-10 LPA' }
  ];

  return (
    <div className="space-y-8">
      {/* Key Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl royal-shadow p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="TrendingUp" size={32} className="text-primary" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">
            {animatedStats?.placementRate}%
          </div>
          <div className="text-sm text-muted-foreground">Placement Rate</div>
        </div>

        <div className="bg-white rounded-xl royal-shadow p-6 text-center">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="DollarSign" size={32} className="text-secondary" />
          </div>
          <div className="text-3xl font-bold text-secondary mb-2">
            ₹{animatedStats?.averagePackage}L
          </div>
          <div className="text-sm text-muted-foreground">Average Package</div>
        </div>

        <div className="bg-white rounded-xl royal-shadow p-6 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Award" size={32} className="text-accent" />
          </div>
          <div className="text-3xl font-bold text-accent mb-2">
            ₹{animatedStats?.highestPackage}L
          </div>
          <div className="text-sm text-muted-foreground">Highest Package</div>
        </div>

        <div className="bg-white rounded-xl royal-shadow p-6 text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Building2" size={32} className="text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-500 mb-2">
            {animatedStats?.companiesVisited}+
          </div>
          <div className="text-sm text-muted-foreground">Companies Visited</div>
        </div>
      </div>
      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Salary Range Distribution */}
        <div className="bg-white rounded-xl royal-shadow p-6">
          <h3 className="text-xl font-playfair font-bold text-foreground mb-6 flex items-center gap-2">
            <Icon name="BarChart3" size={24} className="text-primary" />
            Salary Range Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryRangeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, name === 'students' ? 'Students' : 'Percentage']}
                  labelFormatter={(label) => `Range: ${label}`}
                />
                <Bar dataKey="students" fill="#800000" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Company Type Distribution */}
        <div className="bg-white rounded-xl royal-shadow p-6">
          <h3 className="text-xl font-playfair font-bold text-foreground mb-6 flex items-center gap-2">
            <Icon name="PieChart" size={24} className="text-primary" />
            Company Type Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={companyTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {companyTypeData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Year-wise Trend */}
      <div className="bg-white rounded-xl royal-shadow p-6">
        <h3 className="text-xl font-playfair font-bold text-foreground mb-6 flex items-center gap-2">
          <Icon name="TrendingUp" size={24} className="text-primary" />
          5-Year Placement Trend
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yearWiseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="placed" fill="#800000" />
              <Line yAxisId="right" type="monotone" dataKey="average" stroke="#FFD700" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Top Recruiters */}
      <div className="bg-white rounded-xl royal-shadow p-6">
        <h3 className="text-xl font-playfair font-bold text-foreground mb-6 flex items-center gap-2">
          <Icon name="Building" size={24} className="text-primary" />
          Top Recruiting Companies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topRecruiters?.map((company, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{company?.name?.charAt(0)}</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{company?.name}</h4>
                <div className="text-sm text-muted-foreground">
                  {company?.offers} offers • {company?.package}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Career Progression Paths */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <h3 className="text-xl font-playfair font-bold mb-6 text-center">
          Career Progression Paths
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Code" size={32} className="text-white" />
            </div>
            <h4 className="font-semibold mb-2">Software Development</h4>
            <p className="text-sm opacity-90">Full Stack, Backend, Frontend, Mobile App Development</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Brain" size={32} className="text-white" />
            </div>
            <h4 className="font-semibold mb-2">AI/ML Engineering</h4>
            <p className="text-sm opacity-90">Data Science, ML Engineer, AI Research, Computer Vision</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Briefcase" size={32} className="text-white" />
            </div>
            <h4 className="font-semibold mb-2">Product & Consulting</h4>
            <p className="text-sm opacity-90">Product Manager, Technical Consultant, Business Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;