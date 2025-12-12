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
];

export default function CaseStudySlider() {
  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Case Studies</h2>
      <div className="flex overflow-x-auto space-x-4 py-4">
        {caseStudies.map((caseStudy, idx) => (
          <motion.div 
            key={idx} 
            className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{caseStudy.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{caseStudy.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}