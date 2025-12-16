"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
// clip-paths are handled globally via `clip-card` and ClipCardsClient


const AIServicesHero = () => {
  const [selectedService, setSelectedService] = useState("AI Development");

  const aiImages = [
    "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
    "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
    "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
  ];

  // Map each service to an image (place images under public/home_page_assets)
  const serviceImages: Record<string, string> = {
    // Using Pexels direct image URLs (high-quality, free for commercial use)
    "AI Development": "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Strategy & Advisory": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Autonomous Agents": "https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Custom AI Solutions": "https://images.pexels.com/photos/5467590/pexels-photo-5467590.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Predictive Analysis": "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Visual Intelligence": "https://images.pexels.com/photos/8090143/pexels-photo-8090143.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Operational AI & MLOps": "https://images.pexels.com/photos/8566579/pexels-photo-8566579.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "Ethical AI Governance": "https://images.pexels.com/photos/18475682/pexels-photo-18475682.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  };

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

  // Cards to display in the moving strip (12 cards total)
  const movingCards = [
    {
      title: 'Reactive Machines (Level 1 AI)',
      subtitle: 'Simple AI that reacts to inputs. No memory.',
      example: 'Example: IBM Deep Blue, basic game AIs.',
      logo: '/1.png',
      bullets: ['Reacts to current inputs only', 'No learning or stored memory', 'Fast, deterministic behavior']
    },
    {
      title: 'Limited Memory AI (Level 2 AI)',
      subtitle: 'Learns from past data and short-term memory.',
      example: 'Example: ChatGPT, self-driving car models.',
      logo: '/2.png',
      bullets: ['Uses historical data', 'Model updates over time', 'Common in modern systems']
    },
    {
      title: 'Theory of Mind AI (Level 3 AI)',
      subtitle: 'Understands emotions, beliefs, intentions (research).',
      example: 'Not yet fully achieved; active research area.',
      logo: '/3.png',
      bullets: ['Modeling human mental states', 'Requires complex reasoning', 'Mostly experimental']
    },
    {
      title: 'Self-Aware AI (Level 4 AI)',
      subtitle: 'Consciousness and self-awareness (hypothetical).',
      example: 'Does not exist yet.',
      logo: '/4.png',
      bullets: ['Hypothetical', 'Raises deep ethical questions', 'Subject of long-term research']
    },
    {
      title: 'Narrow AI (Weak AI)',
      subtitle: 'Specialized for one task.',
      example: 'Example: Face recognition, spam filters.',
      logo: '/5.png',
      bullets: ['Performs a single task well', 'Not generalizable', 'Widely used in industry']
    },
    {
      title: 'General AI (AGI)',
      subtitle: 'Understands and learns anything a human can.',
      example: 'Still under development.',
      logo: '/6.png',
      bullets: ['Human-like flexibility', 'Research milestone', 'Significant technical challenges']
    },
    {
      title: 'Superintelligent AI (ASI)',
      subtitle: 'Surpasses human intelligence (hypothetical).',
      example: 'Futuristic concept.',
      logo: '/7.png',
      bullets: ['Greater-than-human capabilities', 'Ethical/safety concerns', 'Long-term speculation']
    },
    {
      title: 'Machine Learning',
      subtitle: 'Systems that learn from data.',
      example: 'Includes supervised, unsupervised, reinforcement learning.',
      logo: '/8.png',
      bullets: ['Learns patterns from examples', 'Requires labeled or unlabeled data', 'Basis for many AI systems']
    },
    {
      title: 'Deep Learning',
      subtitle: 'Neural networks with many layers.',
      example: 'Used for vision, NLP, audio, etc.',
      logo: '/9.png',
      bullets: ['High-capacity models', 'Needs lots of data', 'Drives state-of-the-art results']
    },
    {
      title: 'Natural Language Processing (NLP)',
      subtitle: 'Understands and generates human language.',
      example: 'Chatbots, summarization, translation.',
      logo: '/10.png',
      bullets: ['Text understanding and generation', 'Semantic & syntactic modeling', 'Key to many AI apps']
    },
    {
      title: 'Computer Vision',
      subtitle: 'Interprets images and video.',
      example: 'Object detection, image segmentation.',
      logo: '/11.png',
      bullets: ['Image feature learning', 'Detection & recognition', 'Used in quality control, safety']
    },
    {
      title: 'Robotics / Autonomous Systems',
      subtitle: 'Robots, drones, and automation systems.',
      example: 'Factory automation, autonomous vehicles.',
      logo: '/12.png',
      bullets: ['Physical actuation & sensing', 'Planning and control', 'Integrates many AI subsystems']
    }
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
  
  // If the user navigates with a hash (e.g. #autonomous-agents) or ?service=...,
  // pick the corresponding service on mount and on hash/popstate changes.
  useEffect(() => {
    const mapHashToService = (hash: string | undefined) => {
      if (!hash) return null;
      const id = decodeURIComponent(hash.replace('#', ''));
      const mapping: Record<string, string> = {
        'ai': 'AI Development',
        'autonomous-agents': 'Autonomous Agents',
        'mlops': 'Operational AI & MLOps',
        'visual-intelligence': 'Visual Intelligence',
        'ethical-ai': 'Ethical AI Governance'
      };
      return mapping[id] ?? null;
    };

    const applyFromLocation = () => {
      if (typeof window === 'undefined') return;
      try {
        const params = new URLSearchParams(window.location.search);
        const serviceParam = params.get('service');
        if (serviceParam) {
          const candidate = decodeURIComponent(serviceParam);
          if (aiServices.includes(candidate)) {
            setSelectedService(candidate);
            return;
          }
        }

        const fromHash = mapHashToService(window.location.hash);
        if (fromHash && aiServices.includes(fromHash)) {
          setSelectedService(fromHash);
          const id = window.location.hash.replace('#', '');
          if (id) {
            const el = document.getElementById(id);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
          }
        }
      } catch (e) {
        // ignore malformed URLs
      }
    };

    applyFromLocation();
    const onChange = () => applyFromLocation();
    window.addEventListener('hashchange', onChange);
    window.addEventListener('popstate', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
      window.removeEventListener('popstate', onChange);
    };
  }, []);
  
  // Also respond to Next.js route/search changes to handle client-side navigation
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!pathname || !pathname.startsWith('/ai')) return;
    try {
      const params = new URLSearchParams(searchParams?.toString() ?? '');
      const serviceParam = params.get('service');
      if (serviceParam) {
        const candidate = decodeURIComponent(serviceParam);
        if (aiServices.includes(candidate)) {
          setSelectedService(candidate);
          return;
        }
      }

      const id = window.location.hash ? decodeURIComponent(window.location.hash.replace('#', '')) : '';
      if (id) {
        const mapping: Record<string, string> = {
          'ai': 'AI Development',
          'autonomous-agents': 'Autonomous Agents',
          'mlops': 'Operational AI & MLOps',
          'visual-intelligence': 'Visual Intelligence',
          'ethical-ai': 'Ethical AI Governance'
        };
        const mapped = mapping[id];
        if (mapped && aiServices.includes(mapped)) {
          setSelectedService(mapped);
          const el = document.getElementById(id);
          if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
        }
      }
    } catch (e) {
      // ignore
    }
  }, [pathname, searchParams]);

  // Handle same-page anchor clicks handled by Next's Link (pushState) which
  // doesn't always emit `hashchange`/`popstate`. Use delegated click listener
  // to catch anchors with hashes and apply the mapped service immediately.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !target.closest) return;
      const a = target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || a.href || '';
      if (!href.includes('#')) return;
      try {
        const url = new URL(href, window.location.href);
        const hash = url.hash.replace('#', '');
        if (!hash) return;
        const mapping: Record<string, string> = {
          'ai': 'AI Development',
          'autonomous-agents': 'Autonomous Agents',
          'mlops': 'Operational AI & MLOps',
          'visual-intelligence': 'Visual Intelligence',
          'ethical-ai': 'Ethical AI Governance'
        };
        const mapped = mapping[hash];
        if (mapped && aiServices.includes(mapped)) {
          // defer slightly so Next navigation can update URL first
          setTimeout(() => setSelectedService(mapped), 50);
        }
      } catch (err) {
        // ignore
      }
    };
    document.addEventListener('click', onDocClick, true);
    return () => document.removeEventListener('click', onDocClick, true);
  }, []);
  // clip-path helper is imported from lib/clipPath

  // clip-paths are applied globally by the ClipCardsClient; this component only
  // ensures elements include the `clip-card` class. No local clip logic here.

  return (
    <section className="relative min-h-screen bg-[#F6F1EB] overflow-hidden">
      {/* Anchor targets for footer/links */}
      <div id="ai" />
      <div id="autonomous-agents" />
      <div id="mlops" />
      <div id="visual-intelligence" />
      <div id="ethical-ai" />
      {/* Replaced Banner */}
 
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
              className={`clip-card px-4 py-3 md:py-4 rounded-lg text-center font-medium text-sm md:text-base transition-colors cursor-pointer shadow-md ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-stretch">
          {/* Left Side - Background Pattern */}
          <div className="clip-card relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden">
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

            {/* Image that changes with selected service */}
            <div className="absolute inset-0">
              <img
                src={serviceImages[selectedService] ?? aiImages[0]}
                alt={selectedService}
                className="clip-path w-full h-full object-cover transition-transform duration-700 ease-in-out transform"
                style={{ filter: 'contrast(1.02) saturate(0.95)' }}
              />
            </div>

            {/* Wavy Pattern Overlay (kept on top) */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg 
                className="w-full h-full object-cover" 
                viewBox="0 0 400 400" 
                fill="none"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id="waves-hero" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path 
                      d="M0 20 Q10 10 20 20 T40 20" 
                      stroke="#F97316" 
                      strokeWidth="2" 
                      fill="none" 
                      opacity="0.12"
                    />
                    <path 
                      d="M0 30 Q10 20 20 30 T40 30" 
                      stroke="#6B2259" 
                      strokeWidth="1.5" 
                      fill="none" 
                      opacity="0.08"
                    />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#waves-hero)" />
              </svg>
              {/* Tagline */}

            </div>
          </div>
          {/* Right Side - Service Details */}
          
          {/* Right Side - Dynamic AI Content */}
          <div 
            className="clip-card relative overflow-hidden bg-purple-700 text-white p-8 rounded-2xl shadow-xl"
            style={{ backgroundColor: '#6B2259' }}
          >
            <div className="space-y-6">
              {/* Title */}
              <h2 
                className="text-2xl md:text-5xl font-bold leading-tight"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700'
                }}
              >
                {serviceContent[selectedService as keyof typeof serviceContent].title}
              </h2>

              {/* Description */}
              <p 
                className="text-white/90 text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  lineHeight: '1.6'
                }}
              >
                {serviceContent[selectedService as keyof typeof serviceContent].description}
              </p>


              
              <p 
                className="text-orange-300 text-sm md:text-lg font-medium italic"
                style={{
                  fontFamily: 'DM Sans, sans-serif'
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
                        className="text-white/90 text-sm md:text-base"
                        style={{
                          fontFamily: 'DM Sans, sans-serif'
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
        <style jsx global>{`
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
            className="flex space-x-2"
            style={{
              animation: 'slideLeftInfinite 40s linear infinite',
              width: '9333px'
            }}
          >
            {[...movingCards, ...movingCards].map((card, idx) => (
              <div
                  key={idx}
                  className="clip-card rounded-2xl bg-white flex-shrink-0 shadow-lg overflow-hidden"
                  style={{ width: '365.22px', height: '200px' }}
                >
                <div className="p-4 h-full flex flex-col" style={{ boxSizing: 'border-box' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-1">
                      {card.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={card.logo}
                          alt={`${card.title} logo`}
                          className="object-contain"
                          style={{ display: 'block', maxWidth: '155%', maxHeight: '255%' }}
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">Logo</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm md:text-base font-semibold text-gray-900">{card.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{card.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-2 text-xs md:text-sm text-gray-700">{card.example}</p>

                  <ul className="mt-2 text-xs md:text-sm text-gray-700 space-y-1 list-inside" style={{ paddingLeft: 8 }}>
                    {card.bullets.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized AI Solutions Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 
            className="text-center mb-12 text-gray-900 text-2xl md:text-[48px]"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              lineHeight: '1.2'
            }}
          >
            Specialized AI Solutions<br />
            Built for Your Domain's<br />
            Evolution
          </h2>

          {/* Grid of Solutions */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
            {/* FinTech Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="FinTech AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="">
                <h3
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  FinTech
                </h3>
                <p
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI enables predictive analytics for fraud detection, personalized financial recommendations, and automated trading systems.
                </p>
              </div>
            </div>

            {/* HealthTech Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="HealthTech AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  HealthTech
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI-driven diagnostics, personalized treatment plans, and predictive health monitoring for improved patient outcomes.
                </p>
              </div>
            </div>

            {/* Retail Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Retail AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Retail
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI-powered inventory management, customer behavior analysis, and dynamic pricing for enhanced retail experiences.
                </p>
              </div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Manufacturing AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Manufacturing
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI optimizes supply chains, predictive maintenance, and quality control for efficient production processes.
                </p>
              </div>
            </div>

            {/* Education Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Education AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Education
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI enhances personalized learning, adaptive assessments, and intelligent tutoring systems for better education.
                </p>
              </div>
            </div>

            {/* Transportation Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Transportation AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Transportation
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI enables autonomous vehicles, route optimization, and predictive maintenance for smarter transportation.
                </p>
              </div>
            </div>

            {/* Energy Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Energy AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Energy
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI optimizes energy consumption, predictive analytics for grid management, and renewable energy forecasting.
                </p>
              </div>
            </div>

            {/* Real Estate Solutions */}
            <div className="clip-card space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Real Estate AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Real Estate
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI-driven property valuation, market analysis, and virtual tours for enhanced real estate experiences.
                </p>
              </div>
            </div>

            {/* Entertainment Solutions */}
            <div className="clip-card overflow-hidden space-y-2 mb-8">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Entertainment AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Entertainment
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI creates personalized content recommendations, generative art, and immersive experiences in entertainment.
                </p>
              </div>
            </div>

            {/* Insurance Solutions - Mobile Only */}
            <div className="clip-card overflow-hidden space-y-2 mb-8 block md:hidden">
              <img
                src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Insurance AI Solutions"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  Insurance
                </h3>
                <p 
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.2',
                    maxWidth: '200px'
                  }}
                >
                  AI enhances risk assessment, claims processing, and fraud detection in the insurance industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Amplified Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-screen-2xl mx-auto">
          {/* Title */}
          <h2 
            className="text-center mb-12 text-gray-900 text-2xl md:text-[48px]"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              lineHeight: '1.2'
            }}
          >
            AI Amplified: Our Power.<br />
            Your Transformation.
          </h2>

          <style jsx>{`
            @media (max-width: 1023px) {
              .ai-amplified-grid {
                display: grid;
                grid-template-areas: "left right" "center center";
                gap: 1rem;
                justify-items: center;
              }
              .left-col { grid-area: left; }
              .center-img { grid-area: center; }
              .right-img { grid-area: right; }
            }
          `}</style>

          {/* Grid Layout */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-1 ai-amplified-grid">
            {/* Left Column - Two stacked rectangles */}
            <div className=" flex flex-col gap-2 left-col">
              <img
                src="/Screenshot 2025-12-10 234726.png"
                alt="AI Amplified 1"
                className=" clip-card rounded-2xl object-cover w-64 h-64 lg:w-[300px] lg:h-[300px]"
              />
              <img
                src="/Screenshot 2025-12-10 234811.png"
                alt="AI Amplified 2"
                className=" clip-card rounded-2xl object-cover w-64 h-64 lg:w-[300px] lg:h-[300px]"
              />
            </div>

            {/* Center Rectangle - Large */}
            <img
              src="/Screenshot 2025-12-10 234832.png"
              alt="AI Amplified 3"
              className="clip-card rounded-2xl object-cover w-full md:w-[420px] lg:w-[700px] h-80 lg:h-[600px] center-img"
            />

            {/* Right Rectangle - Tall */}
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="AI Amplified 4"
              className="clip-card rounded-2xl object-cover w-64 h-128 lg:w-[300px] lg:h-[600px] right-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesHero;

