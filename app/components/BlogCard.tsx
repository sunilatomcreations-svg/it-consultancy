'use client';

import { motion } from 'framer-motion';

export default function BlogCard({ image, tag, title, summary, author }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-blue-600 text-xs">{tag}</span>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{summary}</p>
        <p className="mt-3 text-gray-500 text-xs">By {author}</p>
      </div>
    </motion.div>
  );
}