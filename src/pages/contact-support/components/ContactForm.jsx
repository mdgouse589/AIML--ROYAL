import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'admissions', label: 'Admissions Inquiry' },
    { value: 'academics', label: 'Academic Support' },
    { value: 'placements', label: 'Placement Assistance' },
    { value: 'student-affairs', label: 'Student Affairs' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        priority: 'medium'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-royal">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon name="MessageSquare" size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
          <p className="text-gray-600">We'll get back to you within 24 hours</p>
        </div>
      </div>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} className="text-emerald-600" />
          <div>
            <p className="text-emerald-800 font-medium">Message sent successfully!</p>
            <p className="text-emerald-700 text-sm">We'll respond to your inquiry soon.</p>
          </div>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <Icon name="AlertCircle" size={20} className="text-red-600" />
          <div>
            <p className="text-red-800 font-medium">Failed to send message</p>
            <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
          />
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => handleInputChange('inquiryType', value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Subject"
            type="text"
            placeholder="Brief subject of your inquiry"
            value={formData?.subject}
            onChange={(e) => handleInputChange('subject', e?.target?.value)}
            required
          />
          <Select
            label="Priority Level"
            options={priorityOptions}
            value={formData?.priority}
            onChange={(value) => handleInputChange('priority', value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
            rows={6}
            placeholder="Please provide detailed information about your inquiry..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Your information is secure and confidential</span>
          </div>
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;