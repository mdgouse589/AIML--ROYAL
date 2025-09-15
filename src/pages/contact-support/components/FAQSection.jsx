import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: "Admissions",
      icon: "GraduationCap",
      faqs: [
        {
          question: "What are the eligibility criteria for AIML programs?",
          answer: "For undergraduate programs, candidates must have completed 12th grade with Mathematics and Physics. For postgraduate programs, a bachelor's degree in Computer Science, Engineering, or related field is required with minimum 60% marks."
        },
        {
          question: "When do admissions open for the next academic year?",
          answer: "Admissions typically open in March for the upcoming academic year. Early bird applications are accepted from January with special benefits and priority consideration."
        },
        {
          question: "What is the application process and required documents?",
          answer: "Applications can be submitted online through our portal. Required documents include academic transcripts, entrance exam scores, ID proof, photographs, and recommendation letters for postgraduate programs."
        }
      ]
    },
    {
      category: "Academics",
      icon: "BookOpen",
      faqs: [
        {
          question: "What programming languages are covered in the curriculum?",
          answer: "Our curriculum covers Python, R, Java, C++, and JavaScript. We also include specialized tools like TensorFlow, PyTorch, Scikit-learn, and cloud platforms like AWS and Azure."
        },
        {
          question: "Are there industry internship opportunities?",
          answer: "Yes, we have mandatory internship programs in the final year with partner companies including Google, Microsoft, Amazon, and leading Indian tech companies. Students gain 6-12 months of industry experience."
        },
        {
          question: "What research opportunities are available for students?",
          answer: "Students can participate in faculty-led research projects, publish papers, and attend conferences. We have active research in Computer Vision, NLP, Robotics, and Data Science with funding opportunities available."
        }
      ]
    },
    {
      category: "Campus Life",
      icon: "Users",
      faqs: [
        {
          question: "What facilities are available on campus?",
          answer: "Our campus features state-of-the-art AI labs, GPU clusters, library with digital resources, hostels, cafeteria, sports facilities, and 24/7 internet connectivity with high-speed bandwidth."
        },
        {
          question: "Are there student clubs and activities?",
          answer: "We have active AI/ML clubs, coding societies, robotics teams, and cultural clubs. Regular hackathons, tech talks, and industry visits are organized to enhance learning beyond classroom."
        },
        {
          question: "What support services are available for students?",
          answer: "We provide academic counseling, career guidance, mental health support, placement assistance, and 24/7 technical support. Dedicated mentors are assigned to each student for personalized guidance."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-royal">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon name="HelpCircle" size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find quick answers to common questions</p>
        </div>
      </div>
      <div className="space-y-8">
        {faqCategories?.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Icon name={category?.icon} size={20} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{category?.category}</h3>
            </div>
            
            <div className="space-y-3">
              {category?.faqs?.map((faq, faqIndex) => {
                const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                return (
                  <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-900 pr-4">{faq?.question}</span>
                      <Icon 
                        name="ChevronDown" 
                        size={20} 
                        className={`text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <div className={`transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                        {faq?.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="MessageCircle" size={20} className="text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Our support team is here to help you with any specific questions or concerns.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium">
                Contact Support
              </button>
              <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 text-sm font-medium">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;