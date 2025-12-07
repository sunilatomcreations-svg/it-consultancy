import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: "Healthcare & Wellness",
      description: "We build intelligent digital platforms for healthcare providers and wellness brands enabling remote diagnostics, appointment automation, wellness tracking, and secure patient data management while staying compliant with global health regulations.",
      mobileDescription: "We build intelligent digital platforms for healthcare providers and wellness brands enabling remote diagnostics and appointment automation."
    },
    {
      title: "Retail & eCommerce",
      description: "From D2C brands to online marketplaces, we craft tailored eCommerce ecosystems with real-time inventory sync, personalized shopping flows, seamless payment integrations, and conversion-optimized storefronts that scale.",
      mobileDescription: "From D2C brands to online marketplaces, we craft tailored eCommerce ecosystems with real-time inventory sync and personalized shopping flows."
    },
    {
      title: "Education & EdTech",
      description: "We create adaptive learning platforms, smart assessment tools, and administrative automation systems that empower educational institutions and edtech startups to deliver personalized and data-driven learning experiences.",
      mobileDescription: "We create adaptive learning platforms, smart assessment tools, and admin automation for personalized, data-driven learning."
    },
    {
      title: "Media & Entertainment",
      description: "Our solutions streamline content distribution, automate audience targeting, and enhance viewer engagement across OTT, streaming, and interactive platforms—backed by AI-powered recommendations and analytics.",
      mobileDescription: "We streamline content distribution, automate audience targeting, and boost engagement across OTT, streaming, and interactive platforms."
    },
    {
      title: "Travel & Hospitality",
      description: "We digitize the traveler journey from booking to check-out, with dynamic pricing engines, itinerary builders, real-time booking systems, and feedback automation to elevate guest experience and loyalty.",
      mobileDescription: "We digitize the traveler journey from booking to checkout with dynamic pricing, itinerary builders, and real-time booking systems."
    },
    {
      title: "Logistics & Supply Chain",
      description: "We engineer software that optimizes freight operations, tracks shipments in real time, forecasts demand, and unifies vendors and warehouses through intelligent, API-ready logistics platforms.",
      mobileDescription: "We optimize freight operations, track shipments in real time, and unify vendors and warehouses through API-ready logistics platforms."
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-center md:text-left text-gray-900 text-2xl md:text-4xl lg:text-4xl mb-8 md:mb-16"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '500',
            lineHeight: '1.2'
          }}
        >
          <span className="block md:hidden text-center">Industries We Innovate</span>
          <span className="hidden md:inline">Innovating for Leading Industries</span>
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-10 px-4">
          {industries.map((industry, index) => (
            <div key={index} className="space-y-4 max-w-full overflow-hidden">
              {/* Orange line */}
              <div 
                className="w-90 h-2.5 rounded"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              
              {/* Title */}
              <h3 
                className="text-gray-900 break-words hyphens-auto pr-4 text-lg md:text-2xl lg:text-2xl"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontStyle: 'italic',
                  lineHeight: '1.3',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                {industry.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-gray-700 break-words hyphens-auto pr-4 text-sm md:text-base lg:text-base"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                <span className="md:hidden">{industry.mobileDescription}</span>
                <span className="hidden md:inline">{industry.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;