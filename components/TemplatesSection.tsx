 'use client';
import { motion } from 'framer-motion';

export default function TemplatesSection() {
  const templates = [
    {
      image: 'https://img.icons8.com/fluency/400/project-management.png',
      title: 'IT Project Management Template',
      description: 'Comprehensive Excel template for tracking IT projects, timelines, and resource allocation.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/security-checked.png',
      title: 'Security Audit Checklist',
      description: 'Detailed checklist for conducting thorough security audits and compliance assessments.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/roadmap.png',
      title: 'Digital Transformation Roadmap',
      description: 'Strategic template for planning and executing digital transformation initiatives.',
    },
  ];

  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Templates</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {templates.map((tpl, idx) => (
          <motion.div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.42 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={tpl.image} alt={tpl.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{tpl.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{tpl.description}</p>
              <button className="mt-4 bg-[#F97316] text-white px-3 py-1 rounded hover:bg-orange-600">
                Download
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}