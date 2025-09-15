import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    query: '',
    preferredContact: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const admissionCoordinators = [
    {
      name: "Dr. Priya Sharma",
      designation: "Chief Admission Officer",
      phone: "+91 9876543210",
      email: "priya.sharma@gmuniversity.edu.in",
      whatsapp: "+91 9876543210",
      specialization: "General Admissions & Counseling",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      availability: "Mon-Fri: 9 AM - 6 PM"
    },
    {
      name: "Prof. Rajesh Kumar",
      designation: "AIML Program Coordinator",
      phone: "+91 9876543211",
      email: "rajesh.kumar@gmuniversity.edu.in",
      whatsapp: "+91 9876543211",
      specialization: "AIML Program Queries",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      availability: "Mon-Sat: 10 AM - 5 PM"
    },
    {
      name: "Ms. Anita Reddy",
      designation: "International Admissions",
      phone: "+91 9876543212",
      email: "anita.reddy@gmuniversity.edu.in",
      whatsapp: "+91 9876543212",
      specialization: "NRI & International Students",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      availability: "Mon-Fri: 8 AM - 7 PM"
    }
  ];

  const courseOptions = [
    { value: 'btech-aiml', label: 'B.Tech in AI & ML' },
    { value: 'mtech-aiml', label: 'M.Tech in AI & ML' },
    { value: 'msc-ds', label: 'M.Sc in Data Science' },
    { value: 'phd-aiml', label: 'Ph.D in AI & ML' }
  ];

  const contactMethods = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'visit', label: 'Campus Visit' }
  ];

  const quickLinks = [
    {
      title: "Application Form",
      description: "Start your admission process",
      icon: "FileText",
      action: "Download Form"
    },
    {
      title: "Brochure",
      description: "Detailed program information",
      icon: "BookOpen",
      action: "Download PDF"
    },
    {
      title: "Fee Calculator",
      description: "Calculate your program fees",
      icon: "Calculator",
      action: "Open Calculator"
    },
    {
      title: "Scholarship Info",
      description: "Explore financial aid options",
      icon: "Award",
      action: "View Details"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! Our admission team will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        query: '',
        preferredContact: ''
      });
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-accent font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about admissions? Our dedicated team is here to help you every step of the way. 
            Reach out to us through any of the convenient channels below.
          </p>
        </div>

        {/* Admission Coordinators */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Admission Coordinators</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {admissionCoordinators?.map((coordinator, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-royal-lg p-6 card-hover">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={coordinator?.image} 
                      alt={coordinator?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{coordinator?.name}</h4>
                  <p className="text-primary font-medium">{coordinator?.designation}</p>
                  <p className="text-sm text-gray-600 mt-2">{coordinator?.specialization}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-sm text-gray-700">{coordinator?.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-sm text-gray-700">{coordinator?.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm text-gray-700">{coordinator?.availability}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="default"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-white"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Call
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Quick Links */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-royal-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                  <Select
                    label="Course of Interest"
                    options={courseOptions}
                    value={formData?.course}
                    onChange={(value) => handleSelectChange('course', value)}
                    placeholder="Select a course"
                    required
                  />
                </div>

                <Select
                  label="Preferred Contact Method"
                  options={contactMethods}
                  value={formData?.preferredContact}
                  onChange={(value) => handleSelectChange('preferredContact', value)}
                  placeholder="How would you like us to contact you?"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Query
                  </label>
                  <textarea
                    name="query"
                    value={formData?.query}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Please describe your query or questions..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  loading={isSubmitting}
                  fullWidth
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4"
                  iconName="Send"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-white rounded-2xl shadow-royal-lg p-6">
              <h4 className="text-xl font-bold text-primary mb-6">Quick Links</h4>
              <div className="space-y-4">
                {quickLinks?.map((link, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name={link?.icon} size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">{link?.title}</h5>
                      <p className="text-sm text-gray-600">{link?.description}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mt-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="AlertCircle" size={24} className="text-red-600" />
                <h4 className="text-lg font-bold text-red-800">Emergency Contact</h4>
              </div>
              <p className="text-red-700 text-sm mb-4">
                For urgent admission-related queries outside office hours:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-red-600" />
                  <span className="text-red-700 font-medium">+91 9876543200</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-red-600" />
                  <span className="text-red-700 font-medium">emergency@gmuniversity.edu.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-royal-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">What are the admission requirements?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Minimum 75% in 12th grade with PCM, valid entrance exam score (JEE Main/COMEDK), 
                and completion of application process.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-2">When do classes start?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Classes for the 2025-26 academic year begin on July 1, 2025. 
                Orientation week starts from June 25, 2025.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Are scholarships available?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Yes, we offer merit-based, need-based, and sports scholarships. 
                Up to 75% fee waiver is available for eligible students.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-2">Can I visit the campus?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Absolutely! We conduct campus tours every weekday. 
                Schedule your visit by calling our admission office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;