import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ApplicationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Online Application",
      description: "Fill the application form with personal and academic details",
      duration: "15 minutes",
      requirements: [
        "Personal Information",
        "Academic Records",
        "Contact Details",
        "Course Preference"
      ],
      icon: "FileText",
      status: "completed"
    },
    {
      id: 2,
      title: "Document Upload",
      description: "Upload all required documents in specified format",
      duration: "10 minutes",
      requirements: [
        "10th & 12th Marksheets",
        "Transfer Certificate",
        "Passport Size Photos",
        "Category Certificate (if applicable)"
      ],
      icon: "Upload",
      status: "current"
    },
    {
      id: 3,
      title: "Application Fee",
      description: "Pay the application fee through secure payment gateway",
      duration: "5 minutes",
      requirements: [
        "Application Fee: ₹1,500",
        "Online Payment",
        "Payment Receipt",
        "Transaction ID"
      ],
      icon: "CreditCard",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Entrance Test",
      description: "Appear for entrance examination (if applicable)",
      duration: "2 hours",
      requirements: [
        "Admit Card",
        "Photo ID Proof",
        "Test Center Reporting",
        "Written Examination"
      ],
      icon: "BookOpen",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Counseling",
      description: "Attend counseling session for seat allocation",
      duration: "1 day",
      requirements: [
        "Original Documents",
        "Counseling Fee",
        "Seat Selection",
        "Provisional Admission"
      ],
      icon: "Users",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Final Admission",
      description: "Complete admission formalities and fee payment",
      duration: "2-3 days",
      requirements: [
        "Admission Fee Payment",
        "Document Verification",
        "Medical Certificate",
        "Hostel Allocation (if required)"
      ],
      icon: "CheckCircle",
      status: "upcoming"
    }
  ];

  const importantDates = [
    {
      event: "Application Start Date",
      date: "January 15, 2025",
      icon: "Calendar"
    },
    {
      event: "Application End Date",
      date: "March 15, 2025",
      icon: "CalendarX"
    },
    {
      event: "Entrance Test Date",
      date: "April 10, 2025",
      icon: "Clock"
    },
    {
      event: "Result Declaration",
      date: "April 25, 2025",
      icon: "Award"
    },
    {
      event: "Counseling Dates",
      date: "May 5-15, 2025",
      icon: "Users"
    },
    {
      event: "Classes Commence",
      date: "July 1, 2025",
      icon: "GraduationCap"
    }
  ];

  const getStepStatus = (index) => {
    if (index < activeStep) return 'completed';
    if (index === activeStep) return 'current';
    return 'upcoming';
  };

  const getStepColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 border-green-500';
      case 'current':
        return 'bg-secondary border-secondary';
      case 'upcoming':
        return 'bg-gray-300 border-gray-300';
      default:
        return 'bg-gray-300 border-gray-300';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-accent font-bold text-primary mb-6">
            Application Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our streamlined 6-step admission process designed for your convenience. 
            Track your progress and complete each step within the specified timeline.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block"></div>
            
            <div className="space-y-8">
              {processSteps?.map((step, index) => (
                <div 
                  key={step?.id}
                  className={`relative flex items-start space-x-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    activeStep === index ? 'bg-white shadow-royal-lg' : 'bg-white/50 hover:bg-white hover:shadow-royal'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${getStepColor(getStepStatus(index))}`}>
                    <Icon 
                      name={getStepStatus(index) === 'completed' ? 'Check' : step?.icon} 
                      size={24} 
                      className="text-white" 
                    />
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{step?.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {step?.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{step?.description}</p>
                    
                    {activeStep === index && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                          <ul className="space-y-2">
                            {step?.requirements?.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-center space-x-2">
                                <Icon name="CheckCircle" size={16} className="text-green-500" />
                                <span className="text-sm text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-white rounded-2xl p-8 shadow-royal-lg">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Important Dates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates?.map((date, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name={date?.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{date?.event}</h4>
                  <p className="text-secondary font-medium">{date?.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <Icon name="HelpCircle" size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-900 mb-4">Need Help with Application?</h3>
            <p className="text-blue-700 mb-6">
              Our admission counselors are available to guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 text-blue-700">
                <Icon name="Phone" size={16} />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <Icon name="Mail" size={16} />
                <span>admissions@gmuniversity.edu.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;