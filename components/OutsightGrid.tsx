"use client"
import React from "react";
import Link from "next/link";

type Variant = 'home' | 'about' | 'services' | 'industries';

interface OutsightGridProps {
  variant?: Variant;
}

const DATA: Record<Variant, { title: string; items: string[] }[]> = {
  home: [
    { title: 'Design Solutions', items: ['SAAS Product Design', 'Web Design', 'Mobile App Design', 'Brand Design'] },
    { title: 'Web Solutions', items: ['SAAS Website', 'CMS Website', 'Ecommerce Website', 'Custom Website', 'Custom CRM'] },
    { title: 'Mobile Solutions', items: ['Native Apps', 'Hybrid Apps', 'TV Apps', 'Wearables Apps', 'IOT Apps'] },
    { title: 'Metaverse', items: ['3D Product Design', 'Virtual Space Creation', 'Unity Solutions', 'Animations'] },
    { title: 'Startup Booster', items: ['Idea Consulting', 'Prototyping', 'MVP development', 'Product Development'] },
  ],

  about: [
    { title: 'Company', items: ['About Us', 'Leadership', 'Careers', 'Our Values'] },
    { title: 'Approach', items: ['Research', 'Design', 'Build', 'Operate'] },
    { title: 'Impact', items: ['Case Studies', 'Clients', 'Testimonials'] },
    { title: 'News', items: ['Blog', 'Press', 'Events'] },
    { title: 'Contact', items: ['Offices', 'Support', 'Partnerships'] },
  ],

  services: [
    {
      title: 'Strategy & Design',
      items: ['Ideation and Design Strategy', 'UI/UX Design', 'Digital Marketing'],
    },
    {
      title: 'AI & Data',
      items: ['AI Development Services', 'Data Analytics'],
    },
    {
      title: 'Engineering',
      items: ['App Development', 'Software Development', 'Web Development', 'E-commerce Solutions'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['DevOps', 'Cloud Managed Services', 'IT Consultancy'],
    },
    {
      title: 'Security & QA',
      items: ['Cybersecurity Solutions', 'Quality Assurance & Testing', 'Blockchain Development'],
    },
  ],

  industries: [
    { title: 'Healthcare & Wellness', items: ['Healthcare & Wellness'] },
    { title: 'Retail & eCommerce', items: ['Retail & eCommerce'] },
    { title: 'Education & EdTech', items: ['Education & EdTech'] },
    { title: 'Media & Entertainment', items: ['Media & Entertainment'] },
    { title: 'Travel & Hospitality', items: ['Travel & Hospitality'] },
    { title: 'Logistics & Supply Chain', items: ['Logistics & Supply Chain'] },
    { title: 'Sports & Gaming', items: ['Sports & Gaming'] },
    { title: 'Social Networking', items: ['Social Networking'] },
    { title: 'Fitness & Wellness', items: ['Fitness & Wellness'] },
    { title: 'Events & Entertainment', items: ['Events & Entertainment'] },
    { title: 'Agriculture & AgTech', items: ['Agriculture & AgTech'] },
    { title: 'Restaurant & Hospitality', items: ['Restaurant & Hospitality'] },
    { title: 'SaaS & Enterprise', items: ['SaaS & Enterprise'] },
  ]
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function OutsightGrid({ variant = 'home' }: OutsightGridProps) {
  const columns = DATA[variant];
  const parentMap: Record<Variant, string> = {
    home: '/home',
    about: '/about',
    services: '/services',
    industries: '/industries',
  };

  // Explicit id overrides to match ServiceContext.serviceDetails ids
  const idOverrides: Record<Variant, Record<string, string>> = {
    home: {},
    about: {},
    industries: {},
    services: {
      'AI Development Services': 'ai-development',
      'App Development': 'app-development',
      'Software Development': 'software-development',
      'Digital Transformation': 'digital-transformation',
      'Ideation and Design Strategy': 'design-strategy',
      'IT Consultancy': 'it-consultancy',
      'DevOps': 'devops',
      'Cloud Managed Services': 'cloud-services',
      'Web Development': 'web-development',
      'Cybersecurity Solutions': 'cybersecurity',
      'Data Analytics': 'data-analytics',
      'Digital Marketing': 'digital-marketing',
      'UI/UX Design': 'ui-ux-design',
      'Blockchain Development': 'blockchain',
      'Quality Assurance & Testing': 'qa-testing',
      'E-commerce Solutions': 'ecommerce',
    },
  };

  return (
    <div className="bg-[#F6F1EB] rounded-xl shadow-lg ring-1 ring-black/10 overflow-hidden border border-black/10">
      <div className="p-6">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="inline-block bg-[#F97316] text-white px-4 py-2 rounded-md text-sm font-semibold mb-4">
                  {col.title}
                </div>

                <ul className="space-y-3">
                  {col.items.map((it) => {
                    const override = idOverrides[variant] && idOverrides[variant][it];
                    const slug = override ?? slugify(it);
                    const href = `${parentMap[variant]}#${slug}`;
                    return (
                      <li key={it} className="flex items-start">
                        <span className="mt-1 w-2 h-2 bg-[#F97316] rounded-full mr-3 flex-shrink-0" />
                        <Link href={href} className="text-sm text-gray-800 hover:text-[#F97316]">
                          {it}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
