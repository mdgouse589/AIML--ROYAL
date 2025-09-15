import React from 'react';
import Icon from '../../../components/AppIcon';

const EligibilitySection = () => {
  const eligibilityOptions = [
    {
      title: "JEE Main",
      description: "Joint Entrance Examination",
      requirements: [
        "Minimum 75% in 12th (PCM)",
        "JEE Main Rank: 1-50,000",
        "Age limit: 25 years"
      ],
      seats: "60 Seats",
      icon: "Trophy",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "COMEDK",
      description: "Consortium of Medical Engineering",
      requirements: [
        "Minimum 70% in 12th (PCM)",
        "COMEDK Rank: 1-25,000",
        "Karnataka Domicile preferred"
      ],
      seats: "40 Seats",
      icon: "Award",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Management Quota",
      description: "Direct Admission",
      requirements: [
        "Minimum 60% in 12th (PCM)",
        "Entrance Test + Interview",
        "Merit-based selection"
      ],
      seats: "20 Seats",
      icon: "Star",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const generalRequirements = [
    {
      title: "Academic Qualification",
      description: "12th Standard with Physics, Chemistry, Mathematics",
      icon: "GraduationCap"
    },
    {
      title: "Age Criteria",
      description: "Candidate should be between 17-25 years of age",
      icon: "Calendar"
    },
    {
      title: "Medical Fitness",
      description: "Medical certificate from registered practitioner",
      icon: "Heart"
    },
    {
      title: "Character Certificate",
      description: "Good conduct certificate from previous institution",
      icon: "Shield"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-accent font-bold text-primary mb-6">
            Eligibility Criteria
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Multiple pathways to join our prestigious AIML program. Choose the admission route that best suits your academic profile and career aspirations.
          </p>
        </div>

        {/* Admission Routes */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {eligibilityOptions?.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-royal-lg border border-gray-100 overflow-hidden card-hover">
              <div className={`bg-gradient-to-r ${option?.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <Icon name={option?.icon} size={32} />
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    {option?.seats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{option?.title}</h3>
                <p className="text-white/90">{option?.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">Requirements:</h4>
                <ul className="space-y-3">
                  {option?.requirements?.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* General Requirements */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">General Requirements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalRequirements?.map((req, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={req?.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{req?.title}</h4>
                <p className="text-sm text-gray-600">{req?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={20} className="text-amber-600 mt-1" />
            <div>
              <h4 className="font-bold text-amber-800 mb-2">Important Note</h4>
              <p className="text-amber-700">
                All documents must be original and attested. Candidates are advised to verify their eligibility before applying. 
                Admission is subject to document verification and seat availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;