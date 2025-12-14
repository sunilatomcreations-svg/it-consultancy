export const referData = [
  {
    id: 'company',
    title: 'Our Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Core Team', href: '/about#gallery' },
      { label: 'How We Work', href: '/about#hero-text' }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    items: [
      { label: 'AI Development Services', href: '/services#ai-development' },
      { label: 'App Development', href: '/services#app-development' },
      { label: 'Software Development', href: '/services#software-development' },
      { label: 'Digital Transformation', href: '/services#digital-transformation' },
      { label: 'IT Consultancy', href: '/services#it-consultancy' },
      { label: 'Cloud Managed Services', href: '/services#cloud-services' },
      { label: 'Cybersecurity Solutions', href: '/services#cybersecurity' }
    ],
    viewMore: { label: 'All Services', href: '/services' }
  },
  {
    id: 'technologies',
    title: 'Technologies',
    items: [
      { label: 'Artificial Intelligence', href: '/ai' },
      { label: 'Autonomous Agents', href: '/ai#autonomous-agents' },
      { label: 'Operational AI & MLOps', href: '/ai#mlops' },
      { label: 'Visual Intelligence', href: '/ai#visual-intelligence' },
      { label: 'Ethical AI Governance', href: '/ai#ethical-ai' }
    ],
    viewMore: { label: 'AI Services', href: '/ai' }
  },
  {
    id: 'industries',
    title: 'Industries',
    source: { file: 'components/Industries.tsx' },
    items: [
      {
        label: 'Healthcare & Wellness',
        href: '/industries#healthcare-wellness',
        description: 'We build intelligent digital platforms for healthcare providers and wellness brands enabling remote diagnostics, appointment automation, wellness tracking, and secure patient data management while staying compliant with global health regulations.'
      },
      {
        label: 'Retail & eCommerce',
        href: '/industries#retail-ecommerce',
        description: 'From D2C brands to online marketplaces, we craft tailored eCommerce ecosystems with real-time inventory sync, personalized shopping flows, seamless payment integrations, and conversion-optimized storefronts that scale.'
      },
      {
        label: 'Education & EdTech',
        href: '/industries#education-edtech',
        description: 'We create adaptive learning platforms, smart assessment tools, and administrative automation systems that empower educational institutions and edtech startups to deliver personalized and data-driven learning experiences.'
      },
      {
        label: 'Media & Entertainment',
        href: '/industries#media-entertainment',
        description: 'Our solutions streamline content distribution, automate audience targeting, and enhance viewer engagement across OTT, streaming, and interactive platforms—backed by AI-powered recommendations and analytics.'
      },
      {
        label: 'Travel & Hospitality',
        href: '/industries#travel-hospitality',
        description: 'We digitize the traveler journey from booking to check-out, with dynamic pricing engines, itinerary builders, real-time booking systems, and feedback automation to elevate guest experience and loyalty.'
      },
      {
        label: 'Logistics & Supply Chain',
        href: '/industries#logistics-supply-chain',
        description: 'We engineer software that optimizes freight operations, tracks shipments in real time, forecasts demand, and unifies vendors and warehouses through intelligent, API-ready logistics platforms.'
      }
    ],
    viewMore: { label: 'All Industries', href: '/industries' }
  },
  {
    id: 'resources',
    title: 'Resources & Portfolio',
    items: [
     
      { label: 'Blogs', href: '/resources#blogs' },
        { label: 'Our Projects', href: '/portfolio' }
    ],
    viewMore: { label: 'View More', href: '/resources' }
  },
 
  
];
