import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: "Healthcare & Wellness",
      description: "We build intelligent digital platforms for healthcare providers and wellness brands enabling remote diagnostics, appointment automation, wellness tracking, and secure patient data management while staying compliant with global health regulations."
    },
    {
      title: "Retail & eCommerce",
      description: "From D2C brands to online marketplaces, we craft tailored eCommerce ecosystems with real-time inventory sync, personalized shopping flows, seamless payment integrations, and conversion-optimized storefronts that scale."
    },
    {
      title: "Education & EdTech",
      description: "We create adaptive learning platforms, smart assessment tools, and administrative automation systems that empower educational institutions and edtech startups to deliver personalized and data-driven learning experiences."
    },
    {
      title: "Media & Entertainment",
      description: "Our solutions streamline content distribution, automate audience targeting, and enhance viewer engagement across OTT, streaming, and interactive platforms—backed by AI-powered recommendations and analytics."
    },
    {
      title: "Travel & Hospitality",
      description: "We digitize the traveler journey from booking to check-out, with dynamic pricing engines, itinerary builders, real-time booking systems, and feedback automation to elevate guest experience and loyalty."
    },
    {
      title: "Logistics & Supply Chain",
      description: "We engineer software that optimizes freight operations, tracks shipments in real time, forecasts demand, and unifies vendors and warehouses through intelligent, API-ready logistics platforms."
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-left mb-16 text-gray-900"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            fontWeight: '500',
            lineHeight: '1.2'
          }}
        >
          Innovating for Leading Industries
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {industries.map((industry, index) => (
            <div key={index} className="space-y-4 max-w-full overflow-hidden">
              {/* Orange line */}
              <div 
                className="w-90 h-2.5 rounded"
                style={{ backgroundColor: '#F97316' }}
              ></div>
              
              {/* Title */}
              <h3 
                className="text-gray-900 break-words hyphens-auto pr-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '24px',
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
                className="text-gray-700 break-words hyphens-auto pr-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;