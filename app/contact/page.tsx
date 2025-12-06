"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    budget: '',
    helpWith: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(value)
        ? prev.helpWith.filter(item => item !== value)
        : [...prev.helpWith, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const helpOptions = [
    'Internet of Things',
    'Augmented Reality',
    'Artificial Intelligence',
    'Data Intelligence',
    'Interactive Tech',
    'Virtual Reality'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Contact Form Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 text-gray-900 placeholder-gray-600 bg-transparent border-0 border-b-2 border-orange-500 focus:ring-0 focus:border-orange-600 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 text-gray-900 placeholder-gray-600 bg-transparent border-0 border-b-2 border-orange-500 focus:ring-0 focus:border-orange-600 outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Budget Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 text-gray-900 placeholder-gray-600 bg-transparent border-0 border-b-2 border-orange-500 focus:ring-0 focus:border-orange-600 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 focus:ring-0 focus:border-orange-600 outline-none"
                      required
                    >
                      <option value="">Select Budget</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                {/* Help With Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Where do you need help ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {helpOptions.map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.helpWith.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.helpWith.includes(option)
                              ? 'bg-orange-500 border-orange-500'
                              : 'border-orange-500'
                          }`}>
                            {formData.helpWith.includes(option) && (
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">How can we help ?</h3>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-600 bg-transparent border-0 border-b-2 border-orange-500 focus:ring-0 focus:border-orange-600 outline-none resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors"
                  >
                    Submit
                  </button>
                </div>

              </form>
            </div>

            {/* Right Side - Image/Visual */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 bg-gradient-to-r from-orange-200 to-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Get in Touch</p>
                  <p className="text-sm">We'd love to hear from you</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <FAQ />
      <Footer />
    </div>
  );
};

export default ContactPage;
