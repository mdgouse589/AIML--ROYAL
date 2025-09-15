import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';

const IndustryDistribution = () => {
  const industryData = [
    { name: 'Technology', value: 60, count: 1500, color: '#800000' },
    { name: 'Consulting', value: 20, count: 500, color: '#FFD700' },
    { name: 'Research', value: 10, count: 250, color: '#FFA500' },
    { name: 'Entrepreneurship', value: 10, count: 250, color: '#B8860B' }
  ];

  const salaryData = [
    { industry: 'Technology', avgSalary: 22, topSalary: 45 },
    { industry: 'Consulting', avgSalary: 18, topSalary: 35 },
    { industry: 'Research', avgSalary: 15, topSalary: 25 },
    { industry: 'Entrepreneurship', avgSalary: 25, topSalary: 100 }
  ];

  const topCompanies = [
    { name: 'Google', count: 180, logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop' },
    { name: 'Microsoft', count: 165, logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop' },
    { name: 'Amazon', count: 150, logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop' },
    { name: 'Meta', count: 120, logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop' },
    { name: 'Apple', count: 110, logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=100&h=100&fit=crop' },
    { name: 'Netflix', count: 95, logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=100&h=100&fit=crop' },
    { name: 'Tesla', count: 85, logo: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=100&h=100&fit=crop' },
    { name: 'Uber', count: 75, logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100&h=100&fit=crop' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-royal border border-gray-200">
          <p className="font-semibold text-gray-900">{`${label}: ${payload?.[0]?.value}%`}</p>
          <p className="text-gray-600">{`${payload?.[0]?.payload?.count} Alumni`}</p>
        </div>
      );
    }
    return null;
  };

  const SalaryTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-royal border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {`${entry?.dataKey === 'avgSalary' ? 'Average' : 'Top'}: ₹${entry?.value} LPA`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="BarChart3" size={20} className="text-primary" />
            <span className="text-primary font-medium">Career Analytics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alumni <span className="text-gradient-gold">Industry Distribution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insights into where our graduates are making their mark across various industries and organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Industry Distribution Pie Chart */}
          <div className="bg-white rounded-xl p-8 shadow-royal">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="PieChart" size={24} className="text-primary mr-3" />
              Industry Breakdown
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {industryData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {industryData?.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item?.color }}
                  ></div>
                  <div>
                    <p className="font-medium text-gray-900">{item?.name}</p>
                    <p className="text-sm text-gray-600">{item?.count} Alumni</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Distribution */}
          <div className="bg-white rounded-xl p-8 shadow-royal">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="TrendingUp" size={24} className="text-primary mr-3" />
              Salary Distribution by Industry
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="industry" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Salary (LPA)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip content={<SalaryTooltip />} />
                  <Legend />
                  <Bar dataKey="avgSalary" fill="#800000" name="Average Salary" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="topSalary" fill="#FFD700" name="Top Salary" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Top Companies */}
        <div className="bg-white rounded-xl p-8 shadow-royal">
          <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
            <Icon name="Building2" size={24} className="text-primary mr-3" />
            Top Recruiting Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topCompanies?.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-xl flex items-center justify-center group-hover:shadow-royal transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {company?.name?.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-secondary text-black text-xs font-bold px-2 py-1 rounded-full">
                    {company?.count}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{company?.name}</h4>
                <p className="text-sm text-gray-600">{company?.count} Alumni</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-royal">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-gray-600">Total Alumni</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-royal">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
              <Icon name="Globe" size={24} className="text-secondary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">25+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-royal">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
              <Icon name="Building" size={24} className="text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">150+</div>
            <div className="text-gray-600">Fortune 500</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-royal">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Icon name="TrendingUp" size={24} className="text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">₹18 LPA</div>
            <div className="text-gray-600">Avg. Salary</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDistribution;