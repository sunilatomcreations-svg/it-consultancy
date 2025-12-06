"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const AIServicesHero = () => {
  const [selectedService, setSelectedService] = useState("AI Development");

  const aiImages = [
    "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
    "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
    "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
  ];

  const aiServices = [
    "AI Development",
    "Strategy & Advisory", 
    "Autonomous Agents",
    "Custom AI Solutions",
    "Predictive Analysis",
    "Visual Intelligence",
    "Operational AI & MLOps",
    "Ethical AI Governance"
  ];

  const serviceContent = {
    "AI Development": {
      title: "AI Development",
      description: "We design and implement cutting-edge artificial intelligence solutions including machine learning models, natural language processing, computer vision, and intelligent automation systems that transform business operations.",
      tagline: "Building intelligent solutions for tomorrow",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision Solutions"]
    },
    "Strategy & Advisory": {
      title: "Strategy & Advisory",
      description: "Our AI strategy consultants help organizations develop comprehensive AI roadmaps, assess readiness, and create implementation strategies that align with business objectives and deliver measurable ROI.",
      tagline: "Strategic guidance for AI transformation",
      features: ["AI Readiness Assessment", "Strategic Roadmap Planning", "ROI Optimization"]
    },
    "Autonomous Agents": {
      title: "Autonomous Agents",
      description: "We develop intelligent autonomous agents that can perform complex tasks, make decisions, and interact with systems and users independently, reducing manual intervention and improving efficiency.",
      tagline: "Intelligent automation that works independently",
      features: ["Intelligent Automation", "Decision Making Systems", "Interactive AI Agents"]
    },
    "Custom AI Solutions": {
      title: "Custom AI Solutions",
      description: "Tailored AI applications designed specifically for your business needs, from predictive analytics platforms to intelligent recommendation systems and automated decision-making tools.",
      tagline: "Personalized AI built for your business",
      features: ["Custom AI Applications", "Predictive Analytics", "Recommendation Systems"]
    },
    "Predictive Analysis": {
      title: "Predictive Analysis",
      description: "Leverage advanced analytics and machine learning algorithms to forecast trends, predict outcomes, and make data-driven decisions that give your business a competitive advantage.",
      tagline: "Foresee the future with data intelligence",
      features: ["Trend Forecasting", "Risk Assessment", "Behavioral Predictions"]
    },
    "Visual Intelligence": {
      title: "Visual Intelligence",
      description: "Computer vision and image recognition solutions that enable machines to understand and interpret visual data, from quality control to facial recognition and object detection.",
      tagline: "Teaching machines to see and understand",
      features: ["Computer Vision", "Image Recognition", "Object Detection"]
    },
    "Operational AI & MLOps": {
      title: "Operational AI & MLOps",
      description: "End-to-end machine learning operations that ensure your AI models are deployed, monitored, and maintained efficiently in production environments with continuous learning capabilities.",
      tagline: "Seamless AI operations at scale",
      features: ["Model Deployment", "Performance Monitoring", "Continuous Learning"]
    },
    "Ethical AI Governance": {
      title: "Ethical AI Governance",
      description: "Implement responsible AI practices with bias detection, fairness assessment, and ethical guidelines to ensure your AI systems are transparent, accountable, and socially responsible.",
      tagline: "Responsible AI for a better future",
      features: ["Bias Detection", "Fairness Assessment", "Ethical Guidelines"]
    }
  };

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 overflow-hidden">
      {/* Static Panels Section */}
      <div className="bg-[#F6F1EB] w-full min-h-[380px] p-6 flex items-stretch justify-between gap-4">
         <div className="w-[180px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aiImages[1]}
            alt="AI Services"
            className="w-full h-full object-cover"
          />
        </div>
           {/* Right narrow */}
        <div className="w-[120px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aiImages[2]}
            alt="AI Services"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left big panel */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aiImages[0]}
            alt="AI Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle tall narrow */}
       

     
      </div>

      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-8xl mx-auto px-4 py-12">
        {/* Service Tags Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {aiServices.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`px-4 py-3 rounded-lg text-center font-medium text-sm md:text-base transition-colors cursor-pointer shadow-md ${
                selectedService === service 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '500'
              }}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Background Pattern */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
            {/* Geometric Pattern Background */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-100 to-gray-100"
              style={{
                backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%), 
                                 linear-gradient(-45deg, #000 25%, transparent 25%), 
                                 linear-gradient(45deg, transparent 75%, #000 75%), 
                                 linear-gradient(-45deg, transparent 75%, #000 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                opacity: '0.1'
              }}
            />
            
            {/* Wavy Pattern Overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg 
                className="w-full h-full object-cover" 
                viewBox="0 0 400 400" 
                fill="none"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path 
                      d="M0 20 Q10 10 20 20 T40 20" 
                      stroke="#F97316" 
                      strokeWidth="2" 
                      fill="none" 
                      opacity="0.3"
                    />
                    <path 
                      d="M0 30 Q10 20 20 30 T40 30" 
                      stroke="#6B2259" 
                      strokeWidth="1.5" 
                      fill="none" 
                      opacity="0.2"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#waves)" />
              </svg>
            </div>
          </div>

          {/* Right Side - Dynamic AI Content */}
          <div 
            className="bg-purple-700 text-white p-8 rounded-2xl shadow-xl"
            style={{ backgroundColor: '#6B2259' }}
          >
            <div className="space-y-6">
              {/* Title */}
              <h2 
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700'
                }}
              >
                {serviceContent[selectedService as keyof typeof serviceContent].title}
              </h2>

              {/* Description */}
              <p 
                className="text-white/90 text-lg leading-relaxed"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '18px',
                  lineHeight: '1.6'
                }}
              >
                {serviceContent[selectedService as keyof typeof serviceContent].description}
              </p>

              {/* Tagline */}
              <p 
                className="text-orange-300 text-lg font-medium italic"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px'
                }}
              >
                {serviceContent[selectedService as keyof typeof serviceContent].tagline}
              </p>

              {/* Contact Button */}
              <Link 
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg inline-block text-center"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500'
                }}
              >
                Contact Now
              </Link>

              {/* Service Features List */}
              <div className="pt-4">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Key Features
                </h3>
                
                <ul className="space-y-3">
                  {serviceContent[selectedService as keyof typeof serviceContent].features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span 
                        className="text-white/90"
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '16px'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Orange Divs Section */}
      <div className="relative w-full h-52 overflow-hidden bg-transparent mt-8">
        <style jsx>{`
          @keyframes slideLeftInfinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
        <div className="absolute inset-0 flex items-center">
          {/* Moving divs animation */}
          <div 
            className="flex space-x-6"
            style={{
              animation: 'slideLeftInfinite 30s linear infinite',
              width: 'max-content'
            }}
          >
            {/* First set of divs with fixed dimensions */}
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            
            {/* Duplicate set for seamless infinite loop */}
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
            <div 
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 shadow-lg"
              style={{ width: '365.22px', height: '200px' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Specialized AI Solutions Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 
            className="text-center mb-12 text-gray-900"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '1.2'
            }}
          >
            Specialized AI Solutions<br />
            Built for Your Domain's<br />
            Evolution
          </h2>

          {/* Grid of Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
            {/* FinTech Solutions */}
            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            {/* Third Row */}
            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div 
                className="w-20 h-20 rounded-lg bg-orange-500"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  Enables real-time demand forecasting, dynamic pricing, and personalized product recommendations.A
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Amplified Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-9xl mx-auto">
          {/* Title */}
          <h2 
            className="text-center mb-12 text-gray-900"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '1.2'
            }}
          >
            AI Amplified: Our Power.<br />
            Your Transformation.
          </h2>

          {/* Grid Layout */}
          <div className="flex justify-center items-center gap-4">
            {/* Left Column - Two stacked rectangles */}
            <div className="flex flex-col gap-2">
              <div 
                className="rounded-2xl"
                style={{ 
                  backgroundColor: '#F97316',
                  width: '300px',
                  height: '300px'
                }}
              ></div>
              <div 
                className="rounded-2xl"
                style={{ 
                  backgroundColor: '#F97316',
                  width: '300px',
                  height: '300px'
                }}
              ></div>
            </div>

            {/* Center Rectangle - Large */}
            <div 
              className="rounded-2xl"
              style={{ 
                backgroundColor: '#F97316',
                width: '600px',
                height: '600px'
              }}
            ></div>

            {/* Right Rectangle - Tall */}
            <div 
              className="rounded-2xl"
              style={{ 
                backgroundColor: '#F97316',
                width: '300px',
                height: '600px'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesHero;

