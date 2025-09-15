import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FeeStructure = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const feeStructure = {
    general: {
      title: "General Category",
      tuitionFee: 250000,
      developmentFee: 25000,
      labFee: 15000,
      libraryFee: 5000,
      examFee: 3000,
      total: 298000
    },
    management: {
      title: "Management Quota",
      tuitionFee: 350000,
      developmentFee: 50000,
      labFee: 15000,
      libraryFee: 5000,
      examFee: 3000,
      total: 423000
    },
    nri: {
      title: "NRI Category",
      tuitionFee: 500000,
      developmentFee: 75000,
      labFee: 20000,
      libraryFee: 8000,
      examFee: 5000,
      total: 608000
    }
  };

  const scholarships = [
    {
      name: "Merit Scholarship",
      criteria: "Top 10% in entrance exam",
      benefit: "50% tuition fee waiver",
      icon: "Trophy",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Need-Based Scholarship",
      criteria: "Family income < ₹3 LPA",
      benefit: "Up to 75% fee concession",
      icon: "Heart",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Sports Scholarship",
      criteria: "State/National level sports",
      benefit: "25% tuition fee waiver",
      icon: "Award",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Girl Child Scholarship",
      criteria: "Female candidates",
      benefit: "₹25,000 annual grant",
      icon: "Users",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const paymentOptions = [
    {
      title: "Annual Payment",
      description: "Pay full year fee at once",
      discount: "5% discount",
      icon: "Calendar"
    },
    {
      title: "Semester Payment",
      description: "Pay twice a year",
      discount: "2% discount",
      icon: "CalendarDays"
    },
    {
      title: "Monthly EMI",
      description: "Easy monthly installments",
      discount: "No processing fee",
      icon: "CreditCard"
    },
    {
      title: "Education Loan",
      description: "Partner bank loans available",
      discount: "Low interest rates",
      icon: "Building"
    }
  ];

  const additionalCosts = [
    { item: "Hostel Fee (AC)", amount: "₹1,20,000/year" },
    { item: "Hostel Fee (Non-AC)", amount: "₹80,000/year" },
    { item: "Mess Fee", amount: "₹45,000/year" },
    { item: "Transportation", amount: "₹25,000/year" },
    { item: "Books & Materials", amount: "₹15,000/year" },
    { item: "Laptop (Recommended)", amount: "₹60,000 (one-time)" }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const currentFee = feeStructure?.[selectedCategory];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-accent font-bold text-primary mb-6">
            Fee Structure & Financial Aid
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transparent fee structure with multiple payment options and scholarship opportunities. 
            We believe quality education should be accessible to deserving students.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(feeStructure)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-royal'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category?.title}
            </button>
          ))}
        </div>

        {/* Fee Breakdown */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Fee Structure */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-royal-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">{currentFee?.title} - Annual Fee</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Tuition Fee</span>
                  <span className="font-semibold">{formatCurrency(currentFee?.tuitionFee)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Development Fee</span>
                  <span className="font-semibold">{formatCurrency(currentFee?.developmentFee)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Lab Fee</span>
                  <span className="font-semibold">{formatCurrency(currentFee?.labFee)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Library Fee</span>
                  <span className="font-semibold">{formatCurrency(currentFee?.libraryFee)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Examination Fee</span>
                  <span className="font-semibold">{formatCurrency(currentFee?.examFee)}</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-4 text-white">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Annual Fee</span>
                  <span className="text-2xl font-bold">{formatCurrency(currentFee?.total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Costs */}
          <div>
            <div className="bg-white rounded-2xl shadow-royal-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-4">Additional Costs (Optional)</h4>
              <div className="space-y-3">
                {additionalCosts?.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{cost?.item}</span>
                    <span className="font-medium text-gray-900">{cost?.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Scholarship Opportunities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships?.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-xl shadow-royal p-6 card-hover">
                <div className={`w-16 h-16 bg-gradient-to-r ${scholarship?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={scholarship?.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">{scholarship?.name}</h4>
                <p className="text-sm text-gray-600 mb-3 text-center">{scholarship?.criteria}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <span className="text-green-700 font-semibold text-sm">{scholarship?.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Payment Options</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentOptions?.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-royal p-6 text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={option?.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{option?.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{option?.description}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                  <span className="text-blue-700 font-semibold text-sm">{option?.discount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Aid Information */}
        <div className="bg-white rounded-2xl shadow-royal-lg p-8">
          <div className="text-center mb-8">
            <Icon name="HandHeart" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Financial Aid & Support</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to making quality education accessible. Our financial aid team works with students 
              to find the best payment solutions and scholarship opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="PiggyBank" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Education Loans</h4>
              <p className="text-sm text-gray-600">Tie-ups with major banks for easy education loans at competitive interest rates.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calculator" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">EMI Calculator</h4>
              <p className="text-sm text-gray-600">Use our online EMI calculator to plan your fee payments according to your budget.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Financial Counseling</h4>
              <p className="text-sm text-gray-600">One-on-one counseling sessions to help you understand all available financial options.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-royal-lg transition-all duration-300">
              Contact Financial Aid Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;