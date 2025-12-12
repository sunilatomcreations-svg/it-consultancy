'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <motion.h1 
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Resources Hub
      </motion.h1>
      <motion.p 
        className="mt-4 text-gray-600 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Find articles, guides, and case studies on Cloud, AI, Cybersecurity, DevOps, and more.
      </motion.p>
      {/* Search bar */}
      <div className="mt-8 flex justify-center">
        <div className="flex w-full max-w-md rounded-md overflow-hidden border border-gray-300">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6">
            Search
          </button>
        </div>
      </div>
      {/* Tag filters */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {['Cloud','AI','Cybersecurity','DevOps','Agile'].map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}