'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    image: 'https://img.icons8.com/fluency/400/case-files.png',
    title: 'Migrating to Cloud for RetailCorp',
    description: 'Improved scalability and reduced costs by 30%.',
  },
  {
    image: 'https://img.icons8.com/fluency/400/artificial-intelligence.png',
    title: 'AI Integration for FinBank',
    description: 'Enhanced fraud detection with AI algorithms.',
  },
  {
    image: 'https://img.icons8.com/fluency/400/cyber-security.png',
    title: 'Cybersecurity Revamp at HealthPlus',
    description: 'Secured patient data with advanced firewalls.',
  },
  {
    image: 'https://img.icons8.com/fluency/400/devops.png',
    title: 'DevOps Transformation at TechStart',
    description: 'Accelerated deployment cycles by 50%.',
  },
  {
    image: 'https://img.icons8.com/fluency/400/agile.png',
    title: 'Agile Adoption at CorpInc',
    description: 'Increased team productivity with agile methodologies.',
  },
  {
    image: 'https://img.icons8.com/fluency/400/analytics.png',
    title: 'Data Platform for Finance',
    description: 'Built a central data platform enabling real-time reporting and analytics.',
  },
];

export default function CaseStudySlider() {
  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Case Studies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 py-4">
        {caseStudies.map((caseStudy, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.06, duration: 0.45 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{caseStudy.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{caseStudy.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}