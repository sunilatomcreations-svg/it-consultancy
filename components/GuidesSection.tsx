'use client';
import { motion } from 'framer-motion';

export default function GuidesSection() {
  const guides = [
    {
      image: 'https://img.icons8.com/fluency/400/cloud.png',
      title: 'Complete Cloud Migration Guide',
      description: 'A comprehensive step-by-step guide to migrating your applications and data to the cloud securely.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/cyber-security.png',
      title: 'Cybersecurity Best Practices Whitepaper',
      description: 'Essential security frameworks and practices to protect your organization from cyber threats.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/devops.png',
      title: 'DevOps Implementation Handbook',
      description: 'Everything you need to know about implementing DevOps culture and practices in your organization.',
    },
  ];

  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Guides & Downloads</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { staggerChildren: 0.12 } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {guides.map((guide, idx) => (
          <motion.div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={guide.image} alt={guide.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{guide.description}</p>
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